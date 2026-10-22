import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import BlurText from '../components/react-bits/TextAnimations/BlurText/BlurText.jsx';
import LightRays from '../components/react-bits/Backgrounds/LightRays/LightRays.jsx';
import StarBorder from '../components/react-bits/Animations/StarBorder/StarBorder.jsx';
import './motion.css';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const performanceLite = document.documentElement.classList.contains('performance-lite');
const motionReduced = () => performanceLite || reduceMotion.matches;
const roots = new Map();
const preferenceRenderers = [];

const mount = (element, component) => {
  if (!element) return;
  const root = createRoot(element);
  roots.set(element, root);
  root.render(component);
  return root;
};

const title = document.querySelector('#home-title');
if (title && !performanceLite) {
  const titleText = title.textContent.trim();
  mount(title, <BlurText text={titleText} className="hero-blur-text" animateBy="words" direction="top" delay={95} stepDuration={0.38} blur={5} distance={14} trigger="load" />);
}

const raysHost = document.querySelector('#home-light-rays');
if (raysHost && !performanceLite) {
  const raysRoot = createRoot(raysHost);
  roots.set(raysHost, raysRoot);
  const renderRays = () => {
    const colors = getComputedStyle(document.documentElement);
    const gold = colors.getPropertyValue('--gold').trim() || '#eabf72';
    const teal = colors.getPropertyValue('--teal').trim() || '#74c6bd';
    raysRoot.render(<LightRays key={motionReduced() ? 'reduced-motion' : 'full-motion'} className="home-light-rays" raysOrigin="top-right" raysColor={gold} raysSpeed={motionReduced() ? 0 : 0.075} lightSpread={0.62} rayLength={1.5} rayDensity={0.7} raySharpness={0.48} glow={0.35} haze={0.16} atmosphere={0.45} intensity={0.18} followMouse={false} cursorShadow={false} clickPulse={false} intro={!motionReduced()} noiseAmount={0} distortion={0} opacity={0.62} maxDevicePixelRatio={1.25} style={{ '--ray-secondary': teal }} />);
  };
  renderRays();
  preferenceRenderers.push(renderRays);
  window.addEventListener('guidebook:themechange', renderRays);
}

const buttonHost = document.querySelector('#home-star-border-root');
if (buttonHost && !performanceLite) {
  const starRoot = createRoot(buttonHost);
  roots.set(buttonHost, starRoot);
  const renderStar = () => {
    const light = document.documentElement.dataset.theme === 'light';
    const colors = getComputedStyle(document.documentElement);
    const gold = colors.getPropertyValue('--gold').trim() || '#eabf72';
    const teal = colors.getPropertyValue('--teal').trim() || '#74c6bd';
    starRoot.render(<StarBorder key={motionReduced() ? 'reduced-motion' : 'full-motion'} as="button" type="button" className="button button-outline home-star-border" data-page="unit-builds" color={gold} trailColor={teal} duration={6} thickness={1.2} radius={8} trailLength={0.24} glow={0.32} hover="lap" clickPulse={false} backgroundColor={light ? 'rgba(199,148,65,.13)' : 'rgba(215,157,67,.08)'} textColor={light ? '#754c13' : '#ffdf9c'} borderColor={light ? 'rgba(167,109,23,.42)' : 'rgba(245,209,133,.38)'}>Browse Unit Builds <span aria-hidden="true">→</span></StarBorder>);
  };
  renderStar();
  preferenceRenderers.push(renderStar);
  window.addEventListener('guidebook:themechange', renderStar);
}

let lenis;
const lenisTicker = time => lenis?.raf(time * 1000);
const enableLenis = () => {
  if (lenis || motionReduced()) return;
  lenis = new Lenis({ autoRaf: false, smoothWheel: true, duration: 1.05, wheelMultiplier: 0.85 });
  window.pirateGuideLenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(lenisTicker);
  gsap.ticker.lagSmoothing(0);
};
const disableLenis = () => {
  if (!lenis) return;
  gsap.ticker.remove(lenisTicker);
  lenis.destroy();
  lenis = undefined;
  delete window.pirateGuideLenis;
};
enableLenis();

const revealAnimations = [];
const revealTriggers = [];
const revealElements = new Set();
const revealTargets = () => {
  const visiblePage = document.querySelector('.page-view:not([hidden])');
  if (!visiblePage || motionReduced()) return;
  const selector = ':scope > section, :scope > .section-heading, :scope > .filter-panel, :scope > .category-list, :scope > .guide-grid, :scope > .empty-state, :scope > .wish-calendar-card, :scope > .tier-list-board';
  visiblePage.querySelectorAll(selector).forEach((element, index) => {
    if (element.classList.contains('hero')) return;
    revealElements.add(element);
    const animation = gsap.fromTo(element, { autoAlpha: 0, y: 14, filter: 'blur(3px)' }, {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.62,
      delay: Math.min(index * 0.045, 0.18),
      ease: 'power2.out',
      clearProps: 'filter,transform,opacity,visibility',
      scrollTrigger: { trigger: element, start: 'top 90%', once: true }
    });
    revealAnimations.push(animation);
    if (animation.scrollTrigger) revealTriggers.push(animation.scrollTrigger);
  });
  ScrollTrigger.refresh();
};

let revealFrame = 0;
const queueReveals = () => {
  cancelAnimationFrame(revealFrame);
  revealAnimations.splice(0).forEach(animation => animation.kill());
  revealTriggers.splice(0).forEach(trigger => trigger.kill());
  revealElements.forEach(element => gsap.set(element, { clearProps: 'all' }));
  revealElements.clear();
  revealFrame = requestAnimationFrame(revealTargets);
};
window.addEventListener('guidebook:pagechange', queueReveals);
window.addEventListener('guidebook:themechange', () => requestAnimationFrame(() => ScrollTrigger.refresh()));
window.addEventListener('load', queueReveals, { once: true });
queueReveals();

const counterElements = [...document.querySelectorAll('#home-guide-stat, #home-saved-stat, #home-channel-stat')];
const counterStates = new Map();
const writeCounter = (element, value) => {
  const text = String(Math.round(value));
  const state = counterStates.get(element);
  if (state) state.rendered = text;
  if (element.textContent !== text) element.textContent = text;
};
const animateCounter = (element, target, first = false) => {
  if (motionReduced()) {
    counterStates.set(element, { target, current: target, rendered: String(target), started: true });
    writeCounter(element, target);
    return;
  }
  let state = counterStates.get(element);
  if (!state) {
    state = { target, current: 0, rendered: '0', started: false };
    counterStates.set(element, state);
    writeCounter(element, 0);
    ScrollTrigger.create({ trigger: element, start: 'top 92%', once: true, onEnter: () => {
      state.started = true;
      gsap.to(state, { current: state.target, duration: 0.85, ease: 'power2.out', onUpdate: () => writeCounter(element, state.current) });
    } });
    return;
  }
  state.target = target;
  if (!state.started) return;
  gsap.killTweensOf(state);
  if (first && state.current === 0) state.started = false;
  if (state.started) gsap.to(state, { current: target, duration: 0.65, ease: 'power2.out', onUpdate: () => writeCounter(element, state.current) });
};
counterElements.forEach(element => animateCounter(element, Number(element.textContent) || 0, true));
const counterObserver = new MutationObserver(records => {
  for (const { target: element } of records) {
    const state = counterStates.get(element);
    const raw = element.textContent.trim();
    if (!raw || raw === state?.rendered) continue;
    const value = Number(raw.replaceAll(',', ''));
    if (Number.isFinite(value)) animateCounter(element, value);
  }
});
counterElements.forEach(element => counterObserver.observe(element, { childList: true, characterData: true, subtree: true }));

reduceMotion.addEventListener?.('change', event => {
  preferenceRenderers.forEach(render => render());
  if (!event.matches && !performanceLite) {
    enableLenis();
    queueReveals();
    return;
  }
  disableLenis();
  revealAnimations.splice(0).forEach(animation => animation.kill());
  revealTriggers.splice(0).forEach(trigger => trigger.kill());
  revealElements.forEach(element => gsap.set(element, { clearProps: 'all' }));
  revealElements.clear();
  counterElements.forEach(element => {
    const state = counterStates.get(element);
    if (state) {
      gsap.killTweensOf(state);
      state.current = state.target;
      state.started = true;
      writeCounter(element, state.target);
    }
  });
});

