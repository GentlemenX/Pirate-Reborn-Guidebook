'use strict';

const STORAGE_KEY = 'pirate-reborn-guidebook-v1';
const DELETED_GUIDES_KEY = 'pirate-reborn-deleted-guides-v1';
const THEME_KEY = 'pirate-reborn-theme-v1';
const TOP_TIERS_KEY = 'pirate-reborn-top-tiers-v1';
const WISH_BANNER_KEY = 'pirate-reborn-wish-banners-v1';
const PERSONAL_EVENTS_KEY = 'pirate-reborn-personal-events-v1';
const ACTIVITY_REMINDERS_KEY = 'pirate-reborn-activity-reminders-v1';
const SITE_SETTINGS_KEY = 'pirate-reborn-site-settings-v1';
const COLLECTIONS_KEY = 'pirate-reborn-custom-collections-v1';
const DOWNLOAD_GUIDES_KEY = 'pirate-reborn-download-guides-v1';
const PLATFORM_DOWNLOADS_KEY = 'pirate-reborn-platform-downloads-v1';
const LANGUAGE_KEY = 'pirate-reborn-language-v1';
const BUNDLED_PROFILE_IMPORT_KEY = 'pirate-reborn-bundled-profile-import-v1';
const BACKUP_KEYS = [STORAGE_KEY, DELETED_GUIDES_KEY, THEME_KEY, LANGUAGE_KEY, TOP_TIERS_KEY, WISH_BANNER_KEY, PERSONAL_EVENTS_KEY, ACTIVITY_REMINDERS_KEY, SITE_SETTINGS_KEY, COLLECTIONS_KEY, DOWNLOAD_GUIDES_KEY, PLATFORM_DOWNLOADS_KEY, 'pirate-reborn-custom-guides-v1', 'pirate-reborn-sea-soul-entries-v1', 'pirate-reborn-placeholder-collections-seeded-v1', 'pirate-reborn-theme-default-v2'];
const WISH_BANNERS = [
  { id: 'uta-2026-10-20', name: 'Uta', date: 'October 20, 2026', day: '2026-10-20', endDay: '2026-10-23', endAt: '2026-10-23T00:00:00' },
  { id: 'sabo-2026-11-03', name: 'Sabo', date: 'November 3, 2026', day: '2026-11-03' }
];
// Bounty Pirates Calendar shows all-day activity blocks in a repeating Friday-to-Monday cycle.
// The observed cycle begins Adventure Oct 9, Sanctuary Oct 16, and Voyages Oct 23, 2026.
const ACTIVITY_CALENDAR_CYCLE = [
  { type: 'Adventures', anchor: '2026-10-09' },
  { type: 'Sanctuary', anchor: '2026-10-16' },
  { type: 'Voyage', anchor: '2026-10-23' }
];
const CHANNEL_CATEGORIES = ['regular-units', 'ur-list', 'ur-skills'];
const READY_GUIDES = [{
  id: 'burgess-build-card-1504916004952870964',
  title: 'BURGESS (1ST CAPTAIN) — BUILD CARD',
  category: 'ur-list',
  summary: 'Hakis, relics, SP recommendations, artifacts, sea souls, and a full build image for Burgess.',
  content: '',
  fields: [
    { name: '🌀 HAKIS', value: '▸ Primary: Combo, Speed, Double Crit\n▸ Secondary: Adv Crit Res, DMG Reflect, penteration\nDMG Multi, Dodge, Accuracy, Adv Attack' },
    { name: '🔮 RELICS', value: '▸ Team Sun Hero [Crit Rate]\n▸ Mystic Leader [Crit DMG]\n▸ Whitebeard Will [ATK%]\n▸ Sub Stats: Speed, Crit, Crit DMG, ATK%' },
    { name: '🧩 SP RECOMMENDATIONS', value: '▸ Core Paths:\n2224 | 2324 | 2344 | 2434 | 3444 | 4444' },
    { name: '⚔️ ARTIFACTS', value: '▸ Coin | Flintlock | Compass | Pirate Blade' },
    { name: '🌊 SEA SOULS', value: '▸ Gemini | Taurus | Capricorn | Aquarius' },
    { name: '✨ TIP', value: 'Adjust the build to match your crew’s synergy & playstyle!' }
  ],
  tags: ['Build Card'],
  source: 'Discord · ur-list',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1410796185530273906/ui_icon_pet_286.png?ex=6ad37615&is=6ad22495&hm=4d43b08760c7b0c0f11a847ba86f0b6b619fcd9879cfd2d8c1106fa538cf9b67&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1410796595837931701/lh_yifanduizhangbajiesi.png?ex=6ad37677&is=6ad224f7&hm=861b1fed56ce9b489b7c454b7a8633227d36799bdedaba4269ab051d7362a397&',
  accentColor: '#f8e71c',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}, {
  id: 'kuma-the-cleric-1413481199158169610',
  title: 'Kuma the Cleric',
  category: 'ur-list',
  summary: 'Haki and rune setup, relics, refine stats, SP path, artifacts, and sea soul recommendations.',
  content: '**Haki / Runes:**\nCombo, Cleanse, Speed, Adv Crit, Adv Atk, Dodge, Dmg Reflect, Turtle, Spd Down\n\n**Relics:**\nBlue Flame Phoenix\nCrazy Supernova\nBeauty Boa\n\n**Refine Stats:**\nSpd, HP% / Crit Res / Debuff Acc\n\n**SP Recommend / Order:**\n2224, 2424, 2444, 3444, 4444\n\n**Artifacts:**\nSeachart, Golden Eye, Holy Grail, [Tuned] Law Code\n\n**Sea Soul:**\nPisces, Cancer',
  fields: [],
  tags: ['Build Card'],
  source: 'Discord · G.X',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1290068436961071114/eZy_Watermark_12-07-2024_12-37-44-7330AM.jpg?ex=6ad3451b&is=6ad1f39b&hm=390c7564b4682a28178c373a57ef71b04cefe2ce160444f501c081f5710233dd&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481199158169610/lh_mushidaxiong_shizhuang.png?ex=6ad35773&is=6ad205f3&hm=85299ff2a2952fbd9e8ff398687251d53f3c693e24f12a6899385767a2765e30&',
  accentColor: '#D0021B',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}, {
  id: '3ss-nami-build-card-1555658965000527902',
  title: '3SS NAMI — BUILD CARD',
  category: 'ur-list',
  summary: 'Haki priorities, relics, SP paths, artifacts, sea souls, and build tip for 3SS Nami.',
  content: '',
  fields: [
    { name: '🌀 HAKIS', value: '▸ Combo, Speed, Penetration, Cleanse, Double Crit, DMG Multi, Adv Crit Res, Accuracy, Adv Atk, Dodge' },
    { name: '🔮 RELICS', value: '▸ Team Sun Hero\n▸ Mystic Leader\n▸ Whitebeard Will\n\nSub Stats: Crit Rate, Crit DMG, ATK, Speed' },
    { name: '🧩 SP RECOMMENDATIONS', value: '▸ Core Paths: 2234 | 2244 | 3244 | 3444 | 4444' },
    { name: '⚔️ ARTIFACTS', value: '▸ Compass | Coin | Flintlock' },
    { name: '🌊 SEA SOULS', value: '▸ Leo | Gemini | Aries | Capricorn' },
    { name: '✨ TIP', value: 'Adjust the build to match your crew’s synergy & playstyle!' }
  ],
  tags: ['Build Card'],
  source: 'Discord · G.x',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1430637119709122581/ui_icon_pet_290.png?ex=6ad3caa5&is=6ad27925&hm=330dc7cc9bcc15dc44b58f0d6a5f4fa36b1761ee36b6c8be518bac47aa2000fd&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1430637118899617882/lh_sandaoliunamei.png?ex=6ad3caa5&is=6ad27925&hm=220150cbcda099e8b2ba6d4865290350639e6f71fb9b24a044757921b7fe8235&',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}, {
  id: 'ace-x-marco-build-card-1555658965000527902',
  title: 'ACE X MARCO — BUILD CARD',
  category: 'ur-list',
  summary: 'Haki priorities, relics, SP core paths, artifacts, sea souls, and build tip for Ace x Marco.',
  content: '',
  fields: [
    { name: '🌀 HAKIS', value: '▸ Combo, Speed, Turtle, Adv Crit Res, Adv Atk, Shield, Extra Heal, Cleanse, Suppression A' },
    { name: '🔮 RELICS', value: '▸ Blue Flame Phoenix\n▸ Desert Soul\n\nSub Stats: HP, Heal Amount, Speed' },
    { name: '🧩 SP RECOMMENDATIONS', value: '▸ Core Paths: 2234 | 2244 | 2444 | 4444' },
    { name: '⚔️ ARTIFACTS', value: '▸ Tuned Sea Chart | Golden Eye | Grail | Crown' },
    { name: '🌊 SEA SOULS', value: '▸ Pisces | Cancer | Libra | Scorpio' },
    { name: '✨ TIP', value: 'Adjust the build to match your crew’s synergy & playstyle!' }
  ],
  tags: ['Build Card'],
  source: 'Discord · G.X',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1486800620626383099/ui_icon_pet_295.png?ex=6ad3c47b&is=6ad272fb&hm=7d413345dc4f8c85e72d0aec3fccf218023c09e0c709a65bb500833426ad6261&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1486800546667958583/lh_aismaergao.png?ex=6ad3c469&is=6ad272e9&hm=722dcd06cad54b9134e1376d9a0d4051d5a383955cd639beb6aa1582b942793f&',
  accentColor: '#D0021B',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}, {
  id: 'egghead-luffy-build-card-1504910398808133652',
  title: 'EGGHEAD LUFFY — BUILD CARD',
  category: 'ur-list',
  summary: 'Haki priorities, relics, SP core paths, artifacts, and sea souls for Egghead Luffy.',
  content: '',
  fields: [
    { name: '🌀 HAKIS', value: '▸ Combo, Speed, Penetration, Double Crit, DMG Multi, Cleanse, Accuracy, Adv Atk, Adv Crit Res, ATK' },
    { name: '🔮 RELICS', value: '▸ Whitebeard Will\n▸ Mystic Leader\n▸ Team Sun Hero\n\nSub Stats: ATK | Crit DMG | Crit Rate' },
    { name: '🧩 SP RECOMMENDATIONS', value: '▸ Core Paths: 2234 | 2424 | 2444 | 4444' },
    { name: '⚔️ ARTIFACTS', value: '▸ Compass | Telescope | Gun | Coin' },
    { name: '🌊 SEA SOULS', value: '▸ Gemini | Capricorn | Aries' },
    { name: '✨ TIP', value: 'Adjust the build to match your crew’s synergy & playstyle!' }
  ],
  tags: ['Build Card'],
  source: 'Discord · G.X',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1504913567739154572/ui_icon_pet_296.png?ex=6ad3be7a&is=6ad26cfa&hm=777d8db456745b2548cc36d032e1d9e4db32c978493bd5fd495105a2043d66b3&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1504910398808133652/lh_danjiandaolufei.png?ex=6ad3bb86&is=6ad26a06&hm=981a341d036c0e2a7c4d8cbcd422535115d980244e682fd43293c03e5b75ff51&',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}, {
  id: 'robin-future-build-card-1486800753908515016',
  title: 'ROBIN (FUTURE) — BUILD CARD',
  category: 'ur-list',
  summary: 'Haki priorities, relics, SP core paths, artifacts, and sea souls for Robin (Future).',
  content: '',
  fields: [
    { name: '🌀 HAKIS', value: '▸ Combo, Speed, Adv Crit Res, Adv Atk, Penetration, ATK, DMG Multi, Accuracy' },
    { name: '🔮 RELICS', value: '▸ Team Sun Hero\n▸ Mystic Leader\n▸ Whitebeard Will\n\nSub Stats: Crit Rate | Crit DMG | ATK' },
    { name: '🧩 SP RECOMMENDATIONS', value: '▸ Core Paths: 2234 | 2244 | 4244 | 4444' },
    { name: '⚔️ ARTIFACTS', value: '▸ Compass | Coin | Gun' },
    { name: '🌊 SEA SOULS', value: '▸ Leo | Gemini | Capricorn | Aries' },
    { name: '✨ TIP', value: 'Adjust the build to match your crew’s synergy & playstyle!' }
  ],
  tags: ['Build Card'],
  source: 'Discord · G.X',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1486800780798328842/ui_icon_pet_294.png?ex=6ad3c4a1&is=6ad27321&hm=d00e48d4c77ff615ed7c3181c30e0f037b4971ed71ce614560597cbf66312d3a&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1486800753908515016/lh_weilaidaoluobin.png?ex=6ad3c49b&is=6ad2731b&hm=8435eb4e294a565fb8eb3db7d6b2ec727ac6b7bffeec02863e2f76a82a05ee4e&',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}, {
  id: 'ace-x-yamato-build-card-1413481194951020554',
  title: 'ACE × YAMATO',
  category: 'ur-list',
  summary: 'Haki and rune priorities, relics, refine stats, SP paths, artifacts, and sea souls for Ace × Yamato.',
  content: '',
  fields: [
    { name: '🌀 HAKIS / RUNES', value: '▸ Combo, Speed, Accuracy, DMG Multi, Adv Crit, Cleanse, Adv Atk, Dodge, Penetration, Double Crit' },
    { name: '🔮 RELICS', value: '▸ Team Sun Hero\n▸ Whitebeard Will\n▸ Mystic Leader' },
    { name: '⚒️ REFINE STATS', value: '▸ Crit Rate\n▸ ATK\n▸ Crit DMG\n▸ Speed' },
    { name: '🧩 SP RECOMMENDATIONS', value: '▸ Core Paths: 2224 | 2244 | 3244 | 3444 / 4344 | 4444' },
    { name: '⚔️ ARTIFACTS', value: '▸ Compass | Coin | Flintlock' },
    { name: '🌊 SEA SOULS', value: '▸ Gemini | Taurus | Aquarius | Capricorn | Leo' }
  ],
  tags: ['Build Card'],
  source: 'Discord · G.X',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1300152126781001929/Screenshot_20241027_183503_Discord.jpg?ex=6ad3b306&is=6ad26186&hm=34bf48a2a8d86ee195b0421079ac60e232fb0f104c2037e5510561b9f9fbc087&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481194951020554/lh_aisidahe.png?ex=6ad35772&is=6ad205f2&hm=3093676fde3a4a3386f731925780af7acbe5ffb4124424203ec3d1763ec3f2f7&',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}, {
  id: 'crocodile-build-card-1455986107463237904',
  title: 'CROCODILE — BUILD CARD',
  category: 'ur-list',
  summary: 'Haki priorities, relics, SP core paths, artifacts, and sea souls for Crocodile.',
  content: '',
  fields: [
    { name: '🌀 HAKIS', value: '▸ Combo, Speed, Penetration, DMG Multi, Cleanse, Accuracy, Adv Crit Res, Adv Atk' },
    { name: '🔮 RELICS', value: '▸ Team Sun Hero\n▸ Mystic Leader\n▸ Whitebeard Will\n\nSub Stats: Crit Rate | Crit DMG | ATK' },
    { name: '🧩 SP RECOMMENDATIONS', value: '▸ Core Paths: 2224 | 2234 | 2233 | 2244 | 2444 | 4444' },
    { name: '⚔️ ARTIFACTS', value: '▸ Compass | Coin | Flintlock | Sword' },
    { name: '🌊 SEA SOULS', value: '▸ Leo | Gemini | Capricorn | Aries' },
    { name: '✨ TIP', value: 'Adjust the build to match your crew’s synergy & playstyle!' }
  ],
  tags: ['Build Card'],
  source: 'Discord · G.X',
  date: '',
  favorite: false,
  imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1455986165927903374/ui_icon_pet_292.png?ex=6ad3b9c8&is=6ad26848&hm=13793bc6377c9ae5ae41e6f442626789fd7a5f369c43e05e554217449a19f8ab&',
  imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1455986107463237904/lh_shizigonghuikeluokedaer.png?ex=6ad3b9ba&is=6ad2683a&hm=204924d9c6bb830365886d9ffdcffc2bdaabbf438b94a881ed2dbdecb6a7f99c&',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
}];
const COMMUNITY_GUIDES = [
  {
    id: 'ben-beckman-build-1413481195580162078', title: 'Ben Beckman',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1283445537588252815/Picsart_24-09-11_16-14-00-559.jpg?ex=6ad4e24d&is=6ad390cd&hm=07c971796e822b54f20864704aa993b94fb3e3854583be776b4fb217acff0eb2&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481195580162078/lh_beikeman.png?ex=6ad4a8f2&is=6ad35772&hm=dc8981c7e17f59f4e2c89eacf628687deeeacc429ddd497861214cd328725a18&',
    content: `**Haki / Runes:**
Combo, Cleanse, Speed, Accuracy, Dmg Multi, Adv Crit, Adv Atk,
Dodge, Pen, Atk, Crit

**Relics:**
Team sun hero / Whitebeard will / mystic leader

**Refine Stats:**
C.rate-spd-atk / C.dmg

**SP Recommend / Order:**
2224, 2244, 3244, 3444 / 4344, 4444
2243: high focused dmg
2234: aoe dmg and more Survivability

**Artifacts:**
Coin, Flintlock, Telescope, LawsBook, Seachart

**Sea Soul**
Gemini, Taurus, Aquarius, Capricorn, Leo`
  },
  {
    id: 'black-beard-build-1413481198344470628', title: 'Black Beard',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1319723354827133120/teach.png?ex=6ad506a7&is=6ad3b527&hm=765f69e8a82aec4988093e6520560654e678bf5f3522755b2c1bc43da464c434&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481198344470628/lh_maxieerdiqi.png?ex=6ad551b2&is=6ad40032&hm=8eceb3cc719f13c2f3f2da80f7efbd9827a88618a3d50e892275e709452dd94f&',
    content: `**Haki / Rune**
Combo, speed, penetration, atk, dmg multi, accuracy, dmg reflect, adv atk, adv crit res, dodge, spd down

**Relics**
Whitebeard will
Team sun hero
Mystic leader

**Stats**
Cr rate / atk / spd / cr dmg

**SP**
2234 / 2244 / 4244 / 4444

**Artifacts**
Compass, coin, blade, telescope, sea crown

**Sea Soul**
Virgo, Leo, Taurus, Sagittarius`
  },
  {
    id: 'bonney-nika-build-1413526427646562505', title: 'Bonney (Nika)',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1308569679148879945/Screenshot_20241119_154615_Discord.jpg?ex=6ad5517b&is=6ad3fffb&hm=39eaca1d0ac07ef7a3b58e8f2f1835122fdedbefd8992e2c1325dc2418b59638&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413526427646562505/lh_nikaboni.png?ex=6ad4d312&is=6ad38192&hm=b68cc664eb83a4be2b1ee0e8df5806d186ea9954e4a07bed73864c759c3ddeb3&',
    content: `**Haki / Runes:**
Combo, Speed, Accuracy, Adv Crit, Cleanse, Dodge, Dmg Multi, Adv Atk

**Relics:**
Team sun hero
Mystic leader

**Refine Stats:**
Spd, cr rate, cr dmg, atk

**SP Recommend / Order:**
2224 - 2424 - 3424 / 2434 - 3444 / 4344 - 4444

**Artifacts:**
Compass / [tuned] law code / coin / flintlock

**Sea Soul:** Gemini / Taurus / Pisces / Leo`
  },
  {
    id: 'twin-emperors-legend-build-1413481197451088014', title: 'Twin Emperors [Legend]',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1375458351785447454/Screenshot_20250521_105650_Discord.jpg?ex=6ad4c2e9&is=6ad37169&hm=2cc7c9836739987b93e6f951ef6f773318c252a9c7afe48abd864c4680ac6a43&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481197451088014/lh_kaiduodama.png?ex=6ad551b2&is=6ad40032&hm=9aa5d1b326910e1b32a9c835b5bdcc8e58fb35c54645cc99b292070abc08a8c6&',
    content: `Haki:
Combo, speed, Dmg multi, dodge, Cleanse, Accuracy, Adv Crit res

Relics:
ATK%, Crit or Crit Dmg
Sub Stats - Atk%, Crit, Crit Dmg, Speed

SP:
2224, 2244, 3444, 4444

Artifacts:
Coin, Flintlock, Telescope, Compass, tuned law code

Sea Soul:
Gemini, Taurus, Leo, Aquarius, Capricorn`
  },
  {
    id: 'cross-guild-mihawk-build-1413528723352981595', title: 'Cross Guild Mihawk',
    imageTop: 'https://media.discordapp.net/attachments/1243700695195193445/1246034124276502558/mihawkcg.png?ex=6ad53b75&is=6ad3e9f5&hm=a9037dd35c967e5282b4d79e4c38a85faf04024d4d71a830721b2d7b3a1c6cf8&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413528723352981595/lh_shizigonghuiyingyan_shizhuang.png?ex=6ad4d535&is=6ad383b5&hm=ef3380579cc91a67f95a70a68e5a2c7629e9753b31f58c23342a1af8d2cb359e&',
    content: `**Haki / Runes:**
Combo / Speed / Penetration / Adv Atk / Accuracy / Adv Crit / Double Crit / Crit DMG / DMG Multi / ATK / Cleanse [if not 0400]

**Relics:**
Team Sun Hero / Mystic Leader / White Beard Will

**Refine Stats:**
SPD / ATK / Crit DMG

**SP Recommend / Order:**
- 2224 / 2244 / 4244 / 4444
- [3344] Balanced
- [4244] More DMG (needs Cleanse)
- [2444] Less DMG (no Cleanse)

**Artifacts:**
Compass / Coin / Flintlock / Sea Chart / Telescope`
  },
  {
    id: 'flame-emperor-sabo-build-1413528723734532137', title: 'Flame Emperor Sabo',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1246568153526571028/Screenshot_20240601_173043_Discord.jpg?ex=6ad5328f&is=6ad3e10f&hm=c34487bcabff9217d355022d0679c56705c3d005213b3cf3054450fe679fdadd&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413528723734532137/lh_yandisabo_shizhuang.png?ex=6ad4d535&is=6ad383b5&hm=b6b23b76b6d1464f1eb54559a8d4f4eaa0067ae1bc652ccff2f7198c7040682f&',
    content: `**Haki / Runes:**
- **Primary:** Combo
- **Secondary:** Speed, Cleanse, Adv Crit Res, Dodge, Accuracy, Penetration, DMG Multi, Berserk, Adv Atk, Extra DMG, Purge.

**Relics:**
- Team Sun Hero, Mystic Leader

**Refine Stats:**
- Crit Rate, ATK, Crit DMG, Speed

**SP Recommend:**
- 2224, 2244, 2444, 4444
- **Extras:**
  - 4244: +1 Extra proximity command passive buff
  - 2444: + Team Crit DMG Res

**Artifacts:**
- Compass, Flintlock, Coin, Sea Chart, Telescope`
  },
  {
    id: 'gaban-x-rayleigh-legend-build-1413481196993642516', title: 'Gaban X Rayleigh [Legend]',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1366126768322510848/Screenshot_20250425_115127_Discord.jpg?ex=6ad51732&is=6ad3c5b2&hm=66d3386a06d347499edc9148569b145bbd70c412632c6281df64962c146c61f9&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481196993642516/lh_jiabaleili.png?ex=6ad551b2&is=6ad40032&hm=479838adea9bc105ed66f3adad20e8021a530a96a2788fbbb0a3ef94d42190e2&',
    content: `⚔️ Gaban X Rayleigh [Legend] Build

🌀 Hakis:
✨ Combo (Main)
⚡ Speed | 🎯 Accuracy | 🛡️ Advanced Crit Res | 🔥 DMG Multi
➤ Secondary: Double Crit | 🌀 Dodge | ♻️ Cleanse | ⚔️ Penetration

🟥 Relics:
Main Stat: Crit DMG or Crit
Sub Stats: Speed | Crit | Crit DMG | ATK%

🛡️ SP Paths:
➤ 2224 | 2244 | 2444 | 3444 | 4444

🗺️ Artifacts:
🧭 Compass | 🪙 Coin | 🔫 Flintlock | 🔭 Telescope | 📜 Tuned Law Code

♒ Sea Souls:
♊ Gemini | ♉ Taurus | ♌ Leo`
  },
  {
    id: 'sengoku-x-garp-build-1410686223097266339', title: 'Sengoku X Garp',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1410796185161306144/ui_icon_pet_287.png?ex=6ad4c795&is=6ad37615&hm=2713628839ad98de4ccf97486d0d6bceaa0a3bc6e297a82fa0a281832b3484b6&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1410686223097266339/lh_kapuzhanguo.png?ex=6ad509ec&is=6ad3b86c&hm=fe56c292b5ffeacd0014324da16ad4440eafa75fd73a3e4f6324241d75baded1&',
    content: `🌀 HAKIS
▸ Primary: Combo, speed
▸ Secondary: Advanced Crit res, cleanse, dmg multi, pen, adv atk, Dmg reflect.

🔮 RELICS
▸ team sun hero
▸ mystic leader
▸ white beard will
Sub Stats - Crit, Crit Dmg, Speed, Atk%

🧩 SP RECOMMENDATIONS
▸ Core Paths: 2224 | 2234 | 2344 | 3444 or 4344 | 4444

⚔️ ARTIFACTS
▸ Coin | Flintlock | Compass | Pirate Blade

🌊 SEA SOULS
▸ Gemini | Taurus | Capricorn | Aquarius

✨ TIP
Adjust the build to match your crew’s synergy & playstyle!`
  },
  {
    id: 'jack-the-drought-build-1413528725588410408', title: 'Jack the Drought',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1313118377039892500/Picsart_24-12-02_13-23-25-812.jpg?ex=6ad4ba49&is=6ad368c9&hm=b3b03d0eb149659d0d40a77f0c2d3fb0ad9a555e1e145e73b87841533c635497&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413528725588410408/lh_jieke.png?ex=6ad4d536&is=6ad383b6&hm=dab0a2ce23a9b8d1f3a7f0f3f62738ba927cfcfef9da753a73f40dd61e00e2a0&',
    content: `**Haki / Rune**
Penetration, speed, atk, adv atk, double crit, stun, dodge, adv crit res, accuracy, cleanse

**Relics**
Whitebeard will
Team sun hero
Mystic leader

**Stats**
Cr rate / atk / spd / cr dmg

**SP**
3224 / 2324 / 4224 / 4424 / 4444

**Artifacts**
Compass, coin, blade, telescope, sea crown

**Sea Soul**
Virgo, Leo, Taurus, Sagittarius`
  },
  {
    id: 'katakuri-build-1413528725089419417', title: 'Katakuri',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1269063537830006884/Screenshot_20240802_233359_Discord.jpg?ex=6ad54c05&is=6ad3fa85&hm=3137fea99fb6d4701173da7c53b64a549749a728a4ba0ca20357803e708d3716&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413528725089419417/lh_katakuli.png?ex=6ad4d536&is=6ad383b6&hm=a3dbdc4e2cfd61a4a59d1fffb7d0e49862935b205c094217828b08a721b248fd&',
    content: `**Haki / Rune**
Primary - Combo
Secondary - Accuracy, Dcrit, Adv Crit Res, Dodge, Adv Atk, Speed, Pen, Dmg Multi

**Crit / CritDmg / Atk Relics**
Crit, Atk / Crit Dmg, Speed

**SP**
2224, 2424, 2444, 3444, 4444

**Artifacts**
Coin, Compass, Flintlock, Seachart

**Sea Soul**
Gemini, Taurus, Aquarius, Capricorn, Leo`
  },
  {
    id: 'kid-law-legend-build-1413481197857669202', title: 'Kid & Law [Legend]',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1366124249475186849/Screenshot_20250425_115054_Discord.jpg?ex=6ad514da&is=6ad3c35a&hm=4ab80b9eee3b09c3ebaca711de5e0cc63b0f9aa7446054a4770541cd0721e8ab&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481197857669202/lh_luojide.png?ex=6ad551b2&is=6ad40032&hm=b7986515ada5875c4a7ed2575b6baf62401bbeac3c7a62fe3649dd5d5cff0d47&',
    content: `⚡ Hakis:
Combo

💥 Secondary Hakis:
Speed
DMG Multi
Dodge
ATK
Cleanse
Accuracy
Advanced Crit Res

💎 Relics:
ATK%
Crit or Crit DMG

⚔️ Sub Stats:
ATK%
Crit
Crit DMG
Speed

🛠️ SP Builds:
2224
4224 or 2244
4244
4344
4444

🗺️ Artifacts:
Coin
Flintlock
Telescope
Compass
Tuned Law Code

🌟 Sea Soul Signs:
Gemini
Taurus
Leo
Aquarius
Capricorn`
  },
  {
    id: 'zoro-future-island-build-1413481196129620028', title: 'Zoro (Future Island)',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1366125785093640254/Screenshot_20250425_115100_Discord.jpg?ex=6ad51648&is=6ad3c4c8&hm=cad3c9288c4e2a54d2a2eff092150ef2ea6baf95064473f69572be26831ad377&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413481196129620028/lh_danjiandaosuolong.png?ex=6ad551b2&is=6ad40032&hm=534b785c653aea84ef7474a7b98851c3cab9843cfccb1a58874478ee2e5da6a3&',
    content: `🌀 Hakis:
✨ Combo (Main)
⚡ Speed | 🛡️ Advanced Crit Res | ♻️ Cleanse | ⚔️ Penetration
🔥 DMG Multi | ⚡ Advanced Attack | 🌀 Dodge | ⚔️ ATK | 🎯 Accuracy | ⛓️ Suppression

🟥 Relics:
Main Stat: ATK%
Sub Stats: ATK% | Crit | Crit DMG | Speed

🛡️ SP Paths:
➤ 2224 | 2334 | 2244 | 2444 | 3444 | 4444

🗺️ Artifacts:
🪙 Coin | 🔫 Flintlock | 📜 Tuned Law Code | 🔭 Telescope

♒ Sea Souls:
♊ Gemini | ♉ Taurus | ♌ Leo | ♑ Capricorn | ♒ Aquarius`
  },
  {
    id: 'kuzan-10th-captain-build-1413526429525872700', title: 'Kuzan (10th Captain) [Yonko]',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1417633801986641930/ui_icon_pet_280.png?ex=6ad543dc&is=6ad3f25c&hm=b41b9526c9c68f5df7a05407dca048908374ce3b70554173fc85b5c4a92872bc&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413526429525872700/lh_shifanduikuzan.png?ex=6ad4d312&is=6ad38192&hm=0aeb2bf801e04921198863ec0fc534f28fa508ddb0be9774482ce0783dc2b30d&',
    content: `❄ Kuzan (10th Captain) [Yonko]

🔥 Haki Priorities
- Primary: Combo, Speed, Accuracy, Adv Crit
- Secondary: Penetration, DMG Multi, Dodge, ATK, Cleanse
- Potential: Double Crit (Not Confirmed)

🧿 Relics & Sub Stats
- Relics Focus: ATK% / Crit / Crit DMG
- Sub Stats Priority: ATK% > Crit > Crit DMG > Speed
- At 99 Frozen Heart stacks, Kuzan gains 99% ATK & 99% Crit DMG—focus ATK% with a touch of Crit in substats.

⚔ SP Configurations
Recommended:
- 2334 (Frozen Heart stacks & T2 damage boost)
- 2324 (Balanced approach)

Other Viable Options:
- 2224
- 2244
- 4224 (Speed Down debuff setup)
- 4244, 4344, 4444

🏴‍☠️ Artifacts Selection
- Best Picks: Coin, Flintlock, Telescope, Compass, Tuned Law Code

🌊 Sea Soul Choices
- Virgo | Gemini | Taurus | Leo`
  },
  {
    id: 'kizaru-x-fuji-build-1428792501224996885', title: 'Kizaru X Fuji',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1428792503393325076/ui_icon_pet_289.png?ex=6ad4fdb6&is=6ad3ac36&hm=8183197e44b73c95623325336645c2982f1454bc231cedfd58308da17bf15c30&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1428792501224996885/lh_tenghuhuangyuan.png?ex=6ad4fdb5&is=6ad3ac35&hm=fc8f65ef5d0b0a1e63d331c4b8f76d12e125c0fdc09949dc4c612892483d4513&',
    content: `🌀 HAKIS
▸ combo, speed, penetration, cleanse, double crit, dmg multi, adv crit res, accuracy.

🔮 RELICS
▸ Team sun hero
▸ Mystic leader
▸ Whitebeard will
Sub Stats - Crit rate, Crit dmg, Spd, atk

🧩 SP RECOMMENDATIONS
▸ Core Paths: 2234 | 2244 | 3244 | 3444 | 4444

⚔️ ARTIFACTS
▸ compass | coin | flintlock | Tuned law code | Telescope | Pirate Blade

🌊 SEA SOULS
▸ leo | gemini | Taurus | capricorn | aquarius

✨ TIP
Adjust the build to match your crew’s synergy & playstyle!`
  },
  {
    id: 'linlin-build-1461422768045293668', title: 'Linlin',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1461422769035280598/ui_icon_pet_293.png?ex=6ad50c04&is=6ad3ba84&hm=e8c12c88ce409e901b192974c51b86f85114fd246250a2f78b07848ebe261083&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1461422768045293668/lh_shenzhigulingling.png?ex=6ad50c03&is=6ad3ba83&hm=25af744808f64a5d516deaf4bf7bf6bf1d3e029229472326789?&',
    content: `🌀 HAKIS
▸ combo.speed.cleanse.adv crit res.adv atk.crit res.dmg reduc.purge.spd down

🔮 RELICS
▸ blue flame phoenix
▸ crazy supernova
Sub Stats - HP | crit RES | SPD

🧩 SP RECOMMENDATIONS
▸ Core Paths: 2234 / 2244 / 4244 / 4444

⚔️ ARTIFACTS
▸ SEA Chart / Golden Eye / Holy Grail

🌊 SEA SOULS
▸ Pisces / Libra / Cancer

✨ TIP
Adjust the build to match your crew’s synergy & playstyle!`
  },
  {
    id: 'momonosuke-build-1413528726032879808', title: 'Momonosuke',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1334878949766856714/Screenshot_20250123_105159_Discord.jpg?ex=6ad4ca66&is=6ad378e6&hm=53fa407e66e1227bbde0163d9391286fcd8faa872cd0289aa2cfe75271f9bb9d&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413528726032879808/lh_guangyuetaozhizhu.png?ex=6ad4d536&is=6ad383b6&hm=06eb243e62284444d3e8088bf99cb412b4b541bb1fcfaf072c66ddc89b469deb&',
    content: `✦ Momonosuke ✦

🌟 Primary Focus:
🔹 Combo

⚔️ Secondary Priorities:
🎯 Accuracy | 🎇 Adv Crit | 💥 DMG Multi | 🌀 Dodge | ⚡ Speed | 🎯 Penetration | ✨ Cleanse (Not Essential)

🧿 Relics:
🛡️ Crit | ⚔️ Crit DMG | 🔥 ATK%

🔧 Sub Stats:
⚡ Speed | 💥 Crit | 🎯 Crit DMG | 🔥 ATK%

🛠️ SP Recommendations:
📌 2224 | 2244 | 2444 | 3444 | 4344 | 4444

📜 Artifacts:
💰 Coin | 🔫 Flintlock | 🔭 Telescope | 🧭 Compass

🌊 Sea Soul:
♊ Gemini | ♉ Taurus | ♌ Leo`
  },
  {
    id: 'nusjuro-build-1413528724145569955', title: 'Nusjuro',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1277315091070451742/2024082518100639.jpg?ex=6ad4fe61&is=6ad3ace1&hm=2e9c5e705bb13a13c2b8edf0c8a66f453dd10d9447343b808c72420368d01a9d&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413528724145569955/lh_nasishoulangsheng.png?ex=6ad4d535&is=6ad383b5&hm=c98ee5a9067ea2daabdcc1929b3866614276636b07738934df4926c42cfeeca8&',
    content: `**Haki:**
Combo, Dcrit, Adv Atk, Accuracy, Speed, Dmg Multi, Pen, Dodge, Adv Atk, Crit Res, Stun / Taunt

**Relics:**
Crit, Atk / CritDmg, Speed

**SP:**
2224, 2244, 4244, 4344, 4444

**Artifacts:**
Flintlock, Coin, Compass, SeaCrown, Seachart, LawsBook

**Sea Soul**
Virgo, Gemini, Taurus, Aquarius, Capricorn`
  },
  {
    id: 'whitebeard-oden-build-1440702011908690021', title: 'Whitebeard & Oden',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1440702014987178125/ui_icon_pet_291.png?ex=6ad5788f&is=6ad4270f&hm=23c56780078680a0cf7ee28145f4ec434c48ba7aa89a689e91984e5d7a4f13bc&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1440702011908690021/lh_yutianbaihuzi.png?ex=6ad5788e&is=6ad4270e&hm=9f062ffe26caac72321f4a593412789350b8d5270b9e071d1406a02491b50aaa&',
    content: `⚔️ Whitebeard & Oden — Build Card

🌀 HAKIS
▸ combo, speed, penetration, atk, double crit, adv atk, adv crit res, cleanse, accuracy

🔮 RELICS
▸ team sun hero
▸ whitebeard will
▸ mystic leader
Sub Stats - cr rate | atk | crit dmg

🧩 SP RECOMMENDATIONS
▸ Core Paths: 2324 / 2244 | 2344 | 2444 | 4444

⚔️ ARTIFACTS
▸ coin | compass | telescope | sword | flintlock

🌊 SEA SOULS
▸ virgo | leo | Sagittarius | taurus

✨ TIP
Adjust the build to match your crew’s synergy & playstyle!`
  },
  {
    id: 'saturn-build-1413526428359852097', title: 'Saturn',
    imageTop: 'https://media.discordapp.net/attachments/1243700695195193445/1261616757316124703/Screenshot_20240713_101142_Discord.jpg?ex=6ad5e42a&is=6ad492aa&hm=65f64474f037f02da7ac45492f286d314d5a0397ae6ebc47a95cfa2574b3f334&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413526428359852097/lh_shatansheng.png?ex=6ad57bd2&is=6ad42a52&hm=d3411d74b14d7b4512804cc0fa5dc79c346e3522dc3be64292086db437cb5628&',
    content: `Haki / runes
Primary - Combo
Secondary - Speed / Turtle, Adv Crit Res
Dodge, Accuracy, Pen, Dmg Multi

Relics:
Team sun hero / desert soul
Stats: crit - hp - speed

SP: 2224 - 2244 / 2424 - 4444

Artifact: compass - eye - chart - telescope - flintlock - coin - sea crown`
  },
  {
    id: 'twin-dragon-build-1413526429945172138', title: 'Twin Dragon',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1254875524862447626/Screenshot_20240624_194817_Discord.jpg?ex=6ad5c1a7&is=6ad47027&hm=27a68db88e3b317e39ede0bfe1fdb9bc60ca4a461b0cac52666a2437939fbdee&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1413526429945172138/lh_shuangyi_suolongshanzhi.png?ex=6ad57bd2&is=6ad42a52&hm=432d7eca9879a1ac9e02515edc87293a9d5b0f940ed2c8f3285a94d44e79507e&',
    content: `Haki / runes:
Combo / spd / pen / accuracy / dmg multi / adv crit / cleanse / dodge / double crit / adv atk / crit dmg / rate - atk

Relics: team sun hero / mystic leader
Stats: crit, atk, crit dmg, spd

SP: 2224 / 2244 / 4244 / 4444

Artifact:
Coin, flintlock, telescope, compass`
  },
  {
    id: 'van-augur-build-1411118270471344209', title: 'Van Augur',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1410796184683020442/ui_icon_pet_288.png?ex=6ad57055&is=6ad41ed5&hm=aa3a2b0b56ba4cde11bfd1448160adbb5842abfdb2c7211e82c5501c5cff918a&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1411118270471344209/lh_fanaoka.png?ex=6ad54acc&is=6ad3f94c&hm=8a34274773a5c328bcc0c400f05c45f1b463de1a6c7c825776a6ac1127c3dcaf&',
    content: `⚔️ Van Augur — Build Card

🌀 HAKIS
▸ Primary: combo, double crit, speed
▸ Secondary: cleanse, crit dmg, dmg multi, penetration, adv crit res

🔮 RELICS
▸ mystic leader
Sub Stats: Speed, Crit DMG, ATK%

🧩 SP RECOMMENDATIONS
▸ Core Paths: 2234 | 2244 | 2344 | 2444 | 3444 | 4444

⚔️ ARTIFACTS
▸ compass | flintlock | coin

🌊 SEA SOULS
▸ gemini | leo | capricon

✨ TIP
Adjust the build to match your crew’s synergy & playstyle!`
  },
  {
    id: 'yamato-big-mouth-build-1411118269858971771', title: 'Yamato (Big Mouth)',
    imageTop: 'https://cdn.discordapp.com/attachments/1243700695195193445/1411118273050841088/ui_icon_pet_285.png?ex=6ad54acd&is=6ad3f94d&hm=612bc384e8dbdb71cf22903d63cb826b4d7b18b0735a71d6b293b65add5fddd5&',
    imageBottom: 'https://cdn.discordapp.com/attachments/1243700695195193445/1411118269858971771/lh_dakouzhenshen.png?ex=6ad54acc&is=6ad3f94c&hm=8f76bd6acc8f6f839c3cc0ffc96cb7f7bf8218cf6c3b478745d228293554cc5a&',
    content: `⚔️ Yamato (Big Mouth) — Build Card

🌀 HAKIS
▸ Primary: Combo, speed, Cleanse
▸ Secondary: Adv Crit res, Dmg multi, adv atk, dodge, Accuracy, Suppression A

🔮 RELICS
▸ Beauty boa
▸ white beard will
▸ team sun hero
Sub Stats - Speed, Debuff Acc, Atk%, Crit, Crit Dmg

🧩 SP RECOMMENDATIONS
▸ Core Paths: 2224 | 2234 or 3224 | 4234 or 3434, 4434, 4444

⚔️ ARTIFACTS
▸ Pirate Blade | Tuned Law code | Compass | Coin | Flintlock

🌊 SEA SOULS
▸ Virgo | Pisces | Taurus | capricorn | aquarius

✨ TIP
Adjust the build to match your crew’s synergy & playstyle!`
  }
];
READY_GUIDES.push(...COMMUNITY_GUIDES.map(guide => ({
  ...guide,
  category: 'ur-list',
  summary: 'Community build with Haki, relic, SP path, artifact, and sea soul recommendations.',
  fields: [],
  tags: ['Build Card'],
  source: 'Discord · OPPR',
  date: '',
  favorite: false,
  accentColor: '#F8E71C',
  thumbnailPosition: 'right',
  mainImagePosition: 'bottom'
})));
const UNIT_PLACEHOLDER_IMAGES = Array.from({ length: 73 }, (_, index) => index + 1);
READY_GUIDES.push(...UNIT_PLACEHOLDER_IMAGES.map((_, index) => {
  const number = String(index + 1).padStart(3, '0');
  return {
    id: `unit-placeholder-${number}`,
    title: `Unit Placeholder ${String(index + 1).padStart(2, '0')}`,
    category: 'ur-list',
    summary: 'Build details coming soon.',
    content: '',
    fields: [],
    tags: ['Placeholder'],
    source: 'Unit photo placeholder',
    date: '',
    favorite: false,
    imageTop: `./unit-placeholder-images/${number}.png`,
    accentColor: '#F8E71C',
    thumbnailPosition: 'right'
  };
}));
READY_GUIDES.push(...[
  { id: 'unit-edit-later-074', title: 'Unit Placeholder 74', image: './unit-placeholder-images/074.png' },
  { id: 'unit-edit-later-075', title: 'Unit Placeholder 75', image: './unit-placeholder-images/075.png' },
  { id: 'unit-edit-later-076', title: 'Unit Placeholder 76', image: './unit-placeholder-images/076.png' },
  { id: 'unit-edit-later-077', title: 'Unit Placeholder 77', image: './unit-placeholder-images/077.png' },
  { id: 'unit-edit-later-078', title: 'Unit Placeholder 78', image: './unit-placeholder-images/078.png' },
  { id: 'unit-edit-later-079', title: 'Unit Placeholder 79', image: './unit-placeholder-images/079.png' },
  { id: 'unit-edit-later-080', title: 'Unit Placeholder 80', image: './unit-placeholder-images/080.png' }
].map(({ id, title, image }) => ({
  id, title, category: 'ur-list', summary: 'Placeholder — edit this guide when its build is ready.', content: '', fields: [],
  tags: ['Placeholder'], source: 'Editable unit placeholder', date: '', favorite: false,
  imageTop: image, accentColor: '#F8E71C', thumbnailPosition: 'right'
})));
READY_GUIDES.push({
  id: 'ur-unit-placeholder-081',
  title: 'UR Unit Placeholder 81',
  category: 'ur-list',
  summary: 'Build details coming soon.',
  content: '',
  fields: [],
  tags: ['Placeholder'],
  source: 'Editable UR unit placeholder',
  date: '',
  favorite: false,
  imageTop: './unit-placeholder-images/081.png',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right'
});
READY_GUIDES.push(...Array.from({ length: 85 }, (_, index) => {
  const number = String(index + 1).padStart(3, '0');
  return {
    id: `regular-unit-placeholder-${number}`,
    title: `Regular Unit Placeholder ${String(index + 1).padStart(2, '0')}`,
    category: 'regular-units',
    summary: 'Build details coming soon.',
    content: '',
    fields: [],
    tags: ['Placeholder', 'Regular Units'],
    source: 'Regular unit photo placeholder',
    date: '',
    favorite: false,
    imageTop: `./regular-unit-placeholder-images/${number}.png`,
    accentColor: '#F8E71C',
    thumbnailPosition: 'right'
  };
}));
READY_GUIDES.push({
  id: 'regular-unit-buggy',
  title: 'Buggy',
  category: 'regular-units',
  summary: '',
  content: '',
  fields: [],
  tags: ['Regular Units'],
  source: 'User-supplied regular unit portrait',
  date: '',
  favorite: false,
  imageTop: './regular-unit-placeholder-images/086.png',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right'
});
READY_GUIDES.push({
  id: 'regular-unit-wano-law',
  title: 'Wano Law',
  category: 'regular-units',
  summary: '',
  content: '',
  fields: [],
  tags: ['Regular Units'],
  source: 'User-supplied regular unit portrait',
  date: '',
  favorite: false,
  imageTop: './regular-unit-placeholder-images/087.png',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right'
});
READY_GUIDES.push({
  id: 'ur-unit-weevil',
  title: 'Weevil',
  category: 'ur-list',
  summary: '',
  content: '',
  fields: [],
  tags: ['UR Units'],
  source: 'User-supplied UR unit portrait',
  date: '',
  favorite: false,
  imageTop: './unit-placeholder-images/082.png',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right'
});
READY_GUIDES.push({
  id: 'ur-unit-shiryu',
  title: 'Shiryu',
  category: 'ur-list',
  summary: '',
  content: '',
  fields: [],
  tags: ['UR Units'],
  source: 'User-supplied UR unit portrait',
  date: '',
  favorite: false,
  imageTop: './unit-placeholder-images/083.png',
  accentColor: '#F8E71C',
  thumbnailPosition: 'right'
});
const REGULAR_UNIT_BUILDS = {
  '012': { title: 'Ivankov [Pirate]', haki: 'Combo, Extra Heal, Advanced Purge, DMG Reflect, HP Regen, Dodge, Advanced Crit Res, Cleanse, Speed', relics: 'Desert Soul' },
  '079': { title: 'Wano Nami [Pirate]', haki: 'Speed, Combo, Penetration, Crit Rate, Crit DMG, ATK, Advanced ATK, Cleanse', relics: 'Team Sun Hero\nWhitebeard Will' },
  '083': { title: 'General Franky [Pirate]', haki: 'Speed, Penetration, Combo, Crit DMG, Crit Rate, ATK, Advanced ATK', relics: 'Team Sun Hero' },
  '007': { title: 'Law [Pirate]', haki: 'Combo, Extra Heal, Advanced Purge, Dodge, Advanced Crit Res, Cleanse, Speed', relics: 'Desert Soul\nWhitebeard Will' },
  '009': { title: 'Enel [Pirate]', haki: 'Taunt, Speed Down, Heal Reduction, Stun, Cleanse, Purge, Speed, Crowd Control', relics: 'Beauty Boa\nTeam Sun Hero' },
  '004': { title: 'Wano Zoro [Pirate]', haki: 'Speed, Combo, Penetration, Crit Rate, Crit DMG, Stun, ATK, Advanced ATK', relics: 'Mystic Leader\nTeam Sun Hero\nWhitebeard Will' },
  '072': { title: 'Wano Luffy [Pirate]', haki: 'Taunt, Combo, Shield, HP Regen, Cleanse, Dodge, Advanced Crit Res', relics: 'Blue Flame Phoenix' },
  '002': { title: 'Eustass Kid [Pirate]', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, DMG Multiplier, ATK, Extra DMG', relics: 'Team Sun Hero\nWhitebeard Will' },
  '070': { title: 'Nefertari Vivi [Marine]', haki: 'Combo, Extra Heal, Advanced Purge, Dodge, Advanced Crit Res, Cleanse, Speed', relics: 'Desert Soul' },
  '021': { title: 'Borsalino [Marine]', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, DMG Multiplier, ATK, Extra DMG', relics: 'Team Sun Hero\nMystic Leader' },
  '022': { title: 'Kuzan [Marine]', haki: 'Speed, Combo, Penetration, Crit Rate, Crit DMG, ATK, Advanced Purge', relics: 'Mystic Leader\nTeam Sun Hero' },
  '024': { title: 'Sakazuki [Marine]', haki: 'Combo, Penetration, Crit DMG, Crit Rate, Speed, DMG Multiplier, ATK, Extra DMG', relics: 'Team Sun Hero\nWhitebeard Will' },
  '023': { title: 'Garp [Marine]', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, Stun, DMG Multiplier, ATK, Extra DMG', relics: 'Mystic Leader\nTeam Sun Hero' },
  '027': { title: 'Magellan [Marine]', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, DMG Multiplier, ATK, Extra DMG', relics: 'Team Sun Hero\nWhitebeard Will' },
  '084': { title: 'Drake [Marine]', haki: 'Speed, Combo, Penetration, Crit Rate, Crit DMG, ATK, Advanced ATK', relics: 'Team Sun Hero\nWhitebeard Will' },
  '080': { title: 'Fujitora [Marine]', haki: 'Speed, Combo, Penetration, Crit Rate, Crit DMG, ATK, Advanced ATK', relics: 'Team Sun Hero\nWhitebeard Will' },
  '020': { title: 'Sengoku [Marine]', haki: 'Taunt, Speed Down, Combo, Advanced Crit Res, DMG Reduction, Dodge, DMG Reflect', relics: 'Blue Flame Phoenix' },
  '048': { title: 'Bartholomew Kuma (Warlord)', haki: 'Taunt, Shield, Defense, Advanced Crit Resistance, DMG Reduction, Dodge, Cleanse, DMG Reflect', relics: 'Blue Flame Phoenix', source: 'OPPR' },
  '054': { title: 'Blackbeard (Warlord)', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, DMG Multiplier, Attack, Extra DMG', relics: 'Team Sun Hero\nWhitebeard Will', source: 'OPPR' },
  '051': { title: 'Hancock (Warlord)', haki: 'Priority: Speed, Combo, Advanced Purge, Dodge, Cleanse, Shield, Purge', relics: 'Blue Flame Phoenix (HP %)\nBeauty Boa (Debuff Accuracy %)', refine: 'Speed, ATK %, HP %, Debuff Accuracy', source: 'OPPR' },
  '053': { title: 'Dracule Mihawk (Warlord)', haki: 'Priority: Speed, Combo, Penetration, Crit Rate, Crit DMG, Stun, Attack, Advanced Attack', relics: 'Team Sun Hero (Crit Rate)', refine: 'Speed, Crit Rate, Crit DMG, ATK %', source: 'OPPR' },
  '055': { title: 'Doflamingo (Warlord)', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, DMG Multiplier, Attack, Extra DMG', relics: 'Team Sun Hero\nWhitebeard Will', source: 'OPPR' },
  '085': { title: 'Wano Hancock (Warlord)', haki: 'Speed, Combo, Penetration, Crit Rate, Crit DMG, Attack, Advanced Attack', relics: 'Team Sun Hero (Crit Rate)\nWhitebeard Will (ATK %)', refine: 'Speed, Crit Rate, Crit DMG, ATK %' },
  '047': { title: 'Jinbe (Warlord)', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, DMG Multiplier, Attack, Extra DMG', relics: 'Team Sun Hero\nWhitebeard Will' },
  '044': { title: 'Crocus (Yonko)', haki: 'Priority: Combo, Advanced Purge, Cleanse, DMG Reflect, Extra Healing, DMG Reduction', relics: 'Desert Soul (Healing Amount %)', refine: 'Healing Amount, HP %, ATK %, DEF' },
  '077': { title: 'Shanks (Yonko)', haki: 'Priority: Speed, Combo, Penetration, Crit Rate, Attack, Advanced Attack, Speed Down', relics: 'Team Sun Hero (Crit Rate)\nWhitebeard Will (ATK %)', refine: 'Speed, Crit Rate, Crit DMG, ATK %' },
  '041': { title: 'Ace (Yonko)', haki: 'Combo, Penetration, Crit Rate, Crit DMG, Speed, Stun, DMG Multiplier, Attack, Extra DMG', relics: 'Team Sun Hero\nWhitebeard Will' },
  '039': { title: 'Marco (Yonko)', haki: 'Priority: Combo, Dodge, Crit Res, Healing Amount, Honor, DMG Reflect, Speed', relics: 'Blue Flame Phoenix\nDesert Soul', relicStats: 'HP, Crit Res, Healing Amount' },
  '036': { title: 'Edward Newgate (Yonko)', haki: 'Priority: Speed, Combo, Penetration, Crit Rate, Crit DMG, Stun, Attack, Advanced Attack', relics: 'Team Sun Hero (Crit Rate)\nWhitebeard Will (ATK %)', refine: 'Speed, Crit Rate, Crit DMG, ATK %' },
  '037': { title: 'Jozu (Yonko)', haki: 'Priority: Taunt, Speed Down, Advanced Crit Resistance, Cleanse, Dodge\nOptional: Combo, Purge, Defense, Crowd Control, DMG Reflect, DMG Reduction', relics: 'Beauty Boa (Debuff Accuracy)', refine: 'Debuff Accuracy, HP %, DEF' },
  '082': { title: 'Katakuri (Yonko)', haki: 'Priority: Speed, Combo, Penetration, Crit Rate, Crit DMG, Stun, Attack, Advanced Attack', relics: 'Whitebeard Will (ATK %)\nTeam Sun Hero (Crit Rate %)', refine: 'Speed, Crit Rate, ATK %, Crit DMG' }
};
for (const [slot, build] of Object.entries(REGULAR_UNIT_BUILDS)) {
  const guide = READY_GUIDES.find(item => item.id === `regular-unit-placeholder-${slot}`);
  if (!guide) continue;
  guide.title = build.title;
  guide.summary = '';
  guide.content = '';
  guide.fields = [
    { name: '🌀 HAKI / RUNES', value: `▸ ${build.haki.split('\n').join('\n▸ ')}` },
    { name: '🔮 RELICS', value: `▸ ${build.relics.split('\n').join('\n▸ ')}` },
    ...(build.relicStats ? [{ name: '📊 RELIC STATS', value: `▸ ${build.relicStats.split(', ').join('\n▸ ')}` }] : []),
    ...(build.refine ? [{ name: '⚒️ REFINE STATS', value: `▸ ${build.refine.split(', ').join('\n▸ ')}` }] : [])
  ];
  guide.tags = [...new Set([...(guide.tags || []).filter(tag => !/placeholder|regular units|^slot\s+\d+$/i.test(tag)), 'Regular Units'])];
  guide.source = build.source || 'User supplied regular unit build';
}
const state = { guides: [], category: 'ur-list', tag: '', favoritesOnly: false, query: '', sortBy: 'name' };
let deletedGuideIds = new Set();
const PAGE_TITLES = { home: 'Home', 'unit-builds': 'Unit Builds', guides: 'Guides', 'sea-soul': 'Sea Soul', heroine: 'Heroine', artifacts: 'Artifacts', 'tier-list': 'Tier List', 'wish-calendar': 'Wish Calendar', events: 'Events', downloads: 'Downloads' };
const LANGUAGE_TEXT = {
  fr: {
    Language: 'Langue', Home: 'Accueil', 'Unit Builds': 'Constructions', Guides: 'Guides', Heroine: 'Héroïnes', Heroines: 'Héroïnes', Artifacts: 'Artefacts', 'Sea Soul': 'Âme marine', 'Sea Souls': 'Âmes marines', 'Tier List': 'Classement', 'Wish Calendar': 'Calendrier des invocations', Events: 'Événements', Downloads: 'Téléchargements', Builds: 'Constructions', More: 'Plus', Profile: 'Profil', Contact: 'Contact', Server: 'Serveur', Light: 'Clair', Dark: 'Sombre', Install: 'Installer', 'Set sail, captain': 'En avant, capitaine', 'Your guide deck, at a glance.': 'Votre guide de bord, en un coup d’œil.', 'YOUR PIRATE REBORN COMPANION': 'VOTRE COMPAGNON PIRATE REBORN', 'Welcome aboard, captain.': 'Bienvenue à bord, capitaine.', 'Your home for unit builds, crew ideas, and everything you collect along the voyage.': 'Vos builds, idées d’équipage et trouvailles au fil du voyage.', 'CHOOSE YOUR COURSE': 'CHOISISSEZ VOTRE CAP', 'Explore the guidebook': 'Explorer le guide', 'QUICK ACCESS': 'ACCÈS RAPIDE', 'YOUR LOGBOOK': 'VOTRE JOURNAL DE BORD', 'Recently added': 'Ajouts récents', 'All guides': 'Tous les guides', 'QUICK DESTINATIONS': 'DESTINATIONS RAPIDES', 'Browse character recommendations': 'Voir les recommandations de personnages', 'Browse heroine builds': 'Voir les builds d’héroïnes', 'Artifact picks from the guides': 'Artefacts recommandés dans les guides', 'Ascension and saved guides': 'Ascension et guides enregistrés', 'Your saved Sea Soul collection': 'Votre collection d’âmes marines', 'Rank DPS, tanks, and support': 'Classer les DPS, tanks et supports', 'Banner rotation schedule': 'Calendrier de rotation des bannières', 'Sanctuary, Adventures, Voyage timers': 'Minuteries du Sanctuaire, des Aventures et du Voyage', 'App links and guide files': 'Liens de l’application et fichiers des guides', 'CREW ARCHIVE': 'ARCHIVES DE L’ÉQUIPAGE', 'UR units': 'Unités UR', 'Regular units': 'Unités normales', 'UR and Regular Units have separate lists and page controls.': 'Les unités UR et normales ont des listes et une pagination séparées.', Favorites: 'Favoris', 'SORT BY': 'TRIER PAR', 'Name · A–Z': 'Nom · A–Z', 'Channel · A–Z': 'Canal · A–Z', 'Newest first': 'Plus récents', 'Recently updated': 'Modifiés récemment', 'Favorites first': 'Favoris en premier', TAG: 'ÉTIQUETTE', 'All tags': 'Toutes les étiquettes', Roles: 'Rôles', 'Guide tags': 'Étiquettes des guides', 'Unit groups': 'Groupes d’unités', 'Clear filters': 'Effacer les filtres', 'Search characters, builds, sections…': 'Rechercher des personnages, builds, sections…', 'Search all guides': 'Rechercher dans tous les guides', 'Your guide deck is ready': 'Votre guide est prêt', 'Your guide library is empty. Guides will appear here when they’re available.': 'Votre bibliothèque est vide. Les guides apparaîtront ici dès qu’ils seront disponibles.', 'Restore built-in builds': 'Restaurer les builds intégrés', 'Back to all guides': 'Retour à tous les guides', 'YOUR GUIDE DECK': 'VOTRE GUIDE DE BORD', 'Standalone guides saved separately from Unit Builds.': 'Guides indépendants, enregistrés séparément des builds.', '＋ Add guide': '＋ Ajouter un guide', 'UNIT PROGRESSION': 'PROGRESSION DES UNITÉS', Ascension: 'Ascension', 'Choose a unit type to view its ascension chart.': 'Choisissez un type d’unité pour afficher son tableau d’ascension.', 'Normal · Sengoku': 'Normale · Sengoku', 'PROGRESSION STRATEGY': 'STRATÉGIE DE PROGRESSION', 'F2P & P2W Guides': 'Guides gratuit et payant', 'Choose the play style you want recommendations for.': 'Choisissez le style de jeu pour vos recommandations.', 'Free-to-Play': 'Gratuit', P2W: 'Payant', 'No guides added yet. Add a guide to start your collection.': 'Aucun guide. Ajoutez-en un pour commencer votre collection.', 'STANDALONE COLLECTION': 'COLLECTION INDÉPENDANTE', 'Add a Sea Soul to start your collection.': 'Ajoutez une âme marine pour commencer votre collection.', 'Your guide logbook is empty for now.': 'Votre journal de guides est vide pour le moment.', 'No guides found': 'Aucun guide trouvé', 'Try a shorter search, another channel or tag, or clear the filters to see your full library.': 'Essayez une recherche plus courte, un autre canal ou une autre étiquette, ou effacez les filtres.', 'Your saved crew is empty': 'Votre équipage enregistré est vide', 'Tap the ☆ on any guide card to save it here. Saved guides stay on this device and can still be filtered by channel or tag.': 'Appuyez sur ☆ sur une fiche pour l’enregistrer ici. Les guides restent sur cet appareil et peuvent être filtrés.', 'No upcoming wish listed': 'Aucune invocation à venir', 'Waiting for the next rotation': 'En attente de la prochaine rotation', 'Cancel': 'Annuler', Save: 'Enregistrer', Delete: 'Supprimer', Edit: 'Modifier', Search: 'Rechercher', 'Back to all guides': 'Retour à tous les guides'
  },
  de: {
    Language: 'Sprache', Home: 'Startseite', 'Unit Builds': 'Einheiten-Builds', Guides: 'Guides', Heroine: 'Heldinnen', Heroines: 'Heldinnen', Artifacts: 'Artefakte', 'Sea Soul': 'Meeres-Seele', 'Sea Souls': 'Meeres-Seelen', 'Tier List': 'Rangliste', 'Wish Calendar': 'Wunschkalender', Events: 'Events', Downloads: 'Downloads', Builds: 'Builds', More: 'Mehr', Profile: 'Profil', Contact: 'Kontakt', Server: 'Server', Light: 'Hell', Dark: 'Dunkel', Install: 'Installieren', 'Set sail, captain': 'Leinen los, Kapitän', 'Your guide deck, at a glance.': 'Dein Guidebuch auf einen Blick.', 'YOUR PIRATE REBORN COMPANION': 'DEIN PIRATE-REBORN-BEGLEITER', 'Welcome aboard, captain.': 'Willkommen an Bord, Kapitän.', 'Your home for unit builds, crew ideas, and everything you collect along the voyage.': 'Dein Zuhause für Einheiten-Builds, Crew-Ideen und alles, was du auf deiner Reise sammelst.', 'CHOOSE YOUR COURSE': 'WÄHLE DEINEN KURS', 'Explore the guidebook': 'Guidebuch erkunden', 'QUICK ACCESS': 'SCHNELLZUGRIFF', 'YOUR LOGBOOK': 'DEIN LOGBUCH', 'Recently added': 'Kürzlich hinzugefügt', 'All guides': 'Alle Guides', 'QUICK DESTINATIONS': 'SCHNELLZIELE', 'Browse character recommendations': 'Charakterempfehlungen ansehen', 'Browse heroine builds': 'Heldinnen-Builds ansehen', 'Artifact picks from the guides': 'Artefakt-Empfehlungen aus den Guides', 'Ascension and saved guides': 'Aufstieg und gespeicherte Guides', 'Your saved Sea Soul collection': 'Deine Meeres-Seelen-Sammlung', 'Rank DPS, tanks, and support': 'DPS, Tanks und Support ordnen', 'Banner rotation schedule': 'Zeitplan der Bannerrotation', 'Sanctuary, Adventures, Voyage timers': 'Timer für Heiligtum, Abenteuer und Reise', 'App links and guide files': 'App-Links und Guide-Dateien', 'CREW ARCHIVE': 'CREW-ARCHIV', 'UR units': 'UR-Einheiten', 'Regular units': 'Normale Einheiten', 'UR and Regular Units have separate lists and page controls.': 'UR- und normale Einheiten haben getrennte Listen und Seitennavigation.', Favorites: 'Favoriten', 'SORT BY': 'SORTIEREN NACH', 'Name · A–Z': 'Name · A–Z', 'Channel · A–Z': 'Kanal · A–Z', 'Newest first': 'Neueste zuerst', 'Recently updated': 'Kürzlich aktualisiert', 'Favorites first': 'Favoriten zuerst', TAG: 'TAG', 'All tags': 'Alle Tags', Roles: 'Rollen', 'Guide tags': 'Guide-Tags', 'Unit groups': 'Einheitengruppen', 'Clear filters': 'Filter zurücksetzen', 'Search characters, builds, sections…': 'Charaktere, Builds, Abschnitte suchen…', 'Search all guides': 'Alle Guides durchsuchen', 'Your guide deck is ready': 'Dein Guidebuch ist bereit', 'Your guide library is empty. Guides will appear here when they’re available.': 'Deine Guide-Bibliothek ist leer. Verfügbare Guides erscheinen hier.', 'Restore built-in builds': 'Integrierte Builds wiederherstellen', 'Back to all guides': 'Zurück zu allen Guides', 'YOUR GUIDE DECK': 'DEIN GUIDE-DECK', 'Standalone guides saved separately from Unit Builds.': 'Eigenständige Guides, getrennt von Einheiten-Builds gespeichert.', '＋ Add guide': '＋ Guide hinzufügen', 'UNIT PROGRESSION': 'EINHEITEN-FORTSCHRITT', Ascension: 'Aufstieg', 'Choose a unit type to view its ascension chart.': 'Wähle einen Einheitentyp für die Aufstiegsübersicht.', 'Normal · Sengoku': 'Normal · Sengoku', 'PROGRESSION STRATEGY': 'FORTSCHRITTSSTRATEGIE', 'F2P & P2W Guides': 'F2P- und P2W-Guides', 'Choose the play style you want recommendations for.': 'Wähle den Spielstil für deine Empfehlungen.', 'Free-to-Play': 'Kostenlos spielbar', P2W: 'Pay-to-Win', 'No guides added yet. Add a guide to start your collection.': 'Noch keine Guides. Füge einen Guide hinzu, um deine Sammlung zu beginnen.', 'STANDALONE COLLECTION': 'EIGENSTÄNDIGE SAMMLUNG', 'Add a Sea Soul to start your collection.': 'Füge eine Meeres-Seele hinzu, um deine Sammlung zu beginnen.', 'Your guide logbook is empty for now.': 'Dein Guide-Logbuch ist noch leer.', 'No guides found': 'Keine Guides gefunden', 'Try a shorter search, another channel or tag, or clear the filters to see your full library.': 'Versuche eine kürzere Suche, einen anderen Kanal oder Tag oder setze die Filter zurück.', 'Your saved crew is empty': 'Deine gespeicherte Crew ist leer', 'Tap the ☆ on any guide card to save it here. Saved guides stay on this device and can still be filtered by channel or tag.': 'Tippe auf ☆ auf einer Guide-Karte, um sie hier zu speichern. Gespeicherte Guides bleiben auf diesem Gerät.', 'No upcoming wish listed': 'Keine kommenden Wünsche eingetragen', 'Waiting for the next rotation': 'Warten auf die nächste Rotation', Cancel: 'Abbrechen', Save: 'Speichern', Delete: 'Löschen', Edit: 'Bearbeiten', Search: 'Suchen'
  },
  ar: {
    Language: 'اللغة', Home: 'الرئيسية', 'Unit Builds': 'تجهيزات الوحدات', Guides: 'الأدلة', Heroine: 'البطلات', Heroines: 'البطلات', Artifacts: 'الآثار', 'Sea Soul': 'روح البحر', 'Sea Souls': 'أرواح البحر', 'Tier List': 'قائمة التصنيف', 'Wish Calendar': 'تقويم الأمنيات', Events: 'الفعاليات', Downloads: 'التنزيلات', Builds: 'التجهيزات', More: 'المزيد', Profile: 'الملف الشخصي', Contact: 'اتصل بنا', Server: 'الخادم', Light: 'فاتح', Dark: 'داكن', Install: 'تثبيت', 'Set sail, captain': 'أبحر يا قبطان', 'Your guide deck, at a glance.': 'دليلك بين يديك.', 'YOUR PIRATE REBORN COMPANION': 'رفيقك في بايرت ريبورن', 'Welcome aboard, captain.': 'أهلًا بك على متن السفينة يا قبطان.', 'Your home for unit builds, crew ideas, and everything you collect along the voyage.': 'مكانك لتجهيزات الوحدات وأفكار الطاقم وكل ما تجمعه خلال الرحلة.', 'CHOOSE YOUR COURSE': 'اختر مسارك', 'Explore the guidebook': 'استكشف الدليل', 'QUICK ACCESS': 'وصول سريع', 'YOUR LOGBOOK': 'سجل رحلتك', 'Recently added': 'أضيف مؤخرًا', 'All guides': 'كل الأدلة', 'QUICK DESTINATIONS': 'وجهات سريعة', 'Browse character recommendations': 'تصفح توصيات الشخصيات', 'Browse heroine builds': 'تصفح تجهيزات البطلات', 'Artifact picks from the guides': 'الآثار المقترحة في الأدلة', 'Ascension and saved guides': 'الارتقاء والأدلة المحفوظة', 'Your saved Sea Soul collection': 'مجموعة أرواح البحر المحفوظة', 'Rank DPS, tanks, and support': 'تصنيف الضرر والدفاع والدعم', 'Banner rotation schedule': 'جدول تدوير الرايات', 'Sanctuary, Adventures, Voyage timers': 'مواعيد الملاذ والمغامرات والرحلات', 'App links and guide files': 'روابط التطبيق وملفات الأدلة', 'CREW ARCHIVE': 'أرشيف الطاقم', 'UR units': 'وحدات UR', 'Regular units': 'الوحدات العادية', 'UR and Regular Units have separate lists and page controls.': 'لوحدات UR والوحدات العادية قوائم وعناصر تنقل منفصلة.', Favorites: 'المفضلة', 'SORT BY': 'ترتيب حسب', 'Name · A–Z': 'الاسم · أ–ي', 'Channel · A–Z': 'القناة · أ–ي', 'Newest first': 'الأحدث أولًا', 'Recently updated': 'حُدّث مؤخرًا', 'Favorites first': 'المفضلة أولًا', TAG: 'وسم', 'All tags': 'كل الوسوم', Roles: 'الأدوار', 'Guide tags': 'وسوم الدليل', 'Unit groups': 'مجموعات الوحدات', 'Clear filters': 'مسح عوامل التصفية', 'Search characters, builds, sections…': 'ابحث عن الشخصيات والتجهيزات والأقسام…', 'Search all guides': 'ابحث في كل الأدلة', 'Your guide deck is ready': 'دليلك جاهز', 'Your guide library is empty. Guides will appear here when they’re available.': 'مكتبة الأدلة فارغة. ستظهر الأدلة هنا عند توفرها.', 'Restore built-in builds': 'استعادة التجهيزات المضمنة', 'Back to all guides': 'العودة إلى كل الأدلة', 'YOUR GUIDE DECK': 'دليلك', 'Standalone guides saved separately from Unit Builds.': 'أدلة مستقلة محفوظة بشكل منفصل عن تجهيزات الوحدات.', '＋ Add guide': '＋ أضف دليلًا', 'UNIT PROGRESSION': 'تطور الوحدات', Ascension: 'الارتقاء', 'Choose a unit type to view its ascension chart.': 'اختر نوع الوحدة لعرض مخطط الارتقاء.', 'Normal · Sengoku': 'عادي · سينغوكو', 'PROGRESSION STRATEGY': 'استراتيجية التطور', 'F2P & P2W Guides': 'أدلة اللعب المجاني والمدفوع', 'Choose the play style you want recommendations for.': 'اختر أسلوب اللعب للتوصيات.', 'Free-to-Play': 'مجاني', P2W: 'مدفوع', 'No guides added yet. Add a guide to start your collection.': 'لا توجد أدلة بعد. أضف دليلًا لبدء مجموعتك.', 'STANDALONE COLLECTION': 'مجموعة مستقلة', 'Add a Sea Soul to start your collection.': 'أضف روح بحر لبدء مجموعتك.', 'Your guide logbook is empty for now.': 'سجل الأدلة فارغ حاليًا.', 'No guides found': 'لم يتم العثور على أدلة', 'Try a shorter search, another channel or tag, or clear the filters to see your full library.': 'جرّب بحثًا أقصر أو قناة أو وسمًا آخر، أو امسح عوامل التصفية.', 'Your saved crew is empty': 'الطاقم المحفوظ فارغ', 'Tap the ☆ on any guide card to save it here. Saved guides stay on this device and can still be filtered by channel or tag.': 'اضغط ☆ على أي بطاقة دليل لحفظها هنا. تبقى الأدلة المحفوظة على هذا الجهاز.', 'No upcoming wish listed': 'لا توجد أمنيات قادمة', 'Waiting for the next rotation': 'بانتظار التدوير التالي', Cancel: 'إلغاء', Save: 'حفظ', Delete: 'حذف', Edit: 'تعديل', Search: 'بحث'
  }
};
const LANGUAGE_EXTRA = {
  fr: {
    'Recently Added': 'Ajouts récents', 'Latest unit builds': 'Derniers builds d’unités', 'Event timers': 'Minuteries des événements', 'Game event tracker': 'Suivi des événements du jeu', 'Pick an activity, add its time from your in-game calendar, and keep a live countdown here.': 'Choisissez une activité, indiquez son horaire depuis le calendrier du jeu et suivez le compte à rebours ici.', 'ADD A TIMER': 'AJOUTER UN COMPTE À REBOURS', 'Other event': 'Autre événement', 'YOUR CALENDAR': 'VOTRE CALENDRIER', '＋ Add event': '＋ Ajouter un événement', 'No event timers yet. Pick Sanctuary, Adventures, or Voyage to add your first one.': 'Aucun événement. Choisissez Sanctuaire, Aventures ou Voyage pour en ajouter un.', 'BOUNTY PIRATES CALENDAR': 'CALENDRIER BOUNTY PIRATES', 'Sanctuary · Adventures · Voyage': 'Sanctuaire · Aventures · Voyage', 'Next three activities. New dates appear as each one ends. Countdown uses your device’s local time.': 'Les trois prochaines activités. De nouvelles dates apparaissent à la fin de chacune. Le compte à rebours suit l’heure locale de votre appareil.', 'From Bounty Pirates Calendar · all day': 'Calendrier Bounty Pirates · toute la journée', 'Reminder set': 'Rappel activé', 'Notify me · 10 min before': 'Me prévenir · 10 min avant', 'DEVICE LOCAL TIME': 'HEURE LOCALE DE L’APPAREIL', 'NEXT SCHEDULED ACTIVITY': 'PROCHAINE ACTIVITÉ PRÉVUE', 'ARTIFACT ARCHIVE': 'ARCHIVES DES ARTEFACTS', 'Artifact archive': 'Archives des artefacts', 'Artifact collection': 'Collection d’artefacts', 'Preview': 'Aperçu', From: 'Source', 'Source not added yet.': 'Source non renseignée.', Basic: 'Base', Tuning: 'Ajustement', Refining: 'Reforger', Skills: 'Compétences', 'Not added yet.': 'Pas encore renseigné.', 'Rumor says it will choose its owner to unleash full potential': 'La rumeur dit qu’elle choisit son propriétaire pour libérer tout son potentiel.', 'Amazing telescope, can identify distant target even at night': 'Une longue-vue remarquable, capable d’identifier une cible lointaine même la nuit.', 'Possess extreme power, rumor says it was used by the leader of Celestial Dragons': 'D’une puissance extrême, elle aurait été utilisée par le chef des Dragons Célestes.', 'Legendary compass. For those who know how to use it, the compass was the key to everything': 'Une boussole légendaire. Pour ceux qui savent s’en servir, elle ouvre toutes les portes.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 3 since server launch': 'Disponible à la vente aux enchères du boss de guilde (ouvre à 20 h 02) le 3e jour après le lancement du serveur.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 18 since server launch': 'Disponible à la vente aux enchères du boss de guilde (ouvre à 20 h 02) le 18e jour après le lancement du serveur.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 26 since server launch': 'Disponible à la vente aux enchères du boss de guilde (ouvre à 20 h 02) le 26e jour après le lancement du serveur.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 2 since server launch': 'Disponible à la vente aux enchères du boss de guilde (ouvre à 20 h 02) le 2e jour après le lancement du serveur.', 'ATTRIBUTES': 'ATTRIBUTS', 'Set bonus': 'Bonus de set', 'No set bonuses added.': 'Aucun bonus de set ajouté.', ATK: 'ATQ', HP: 'PV', 'Normal Unit Ascension': 'Ascension d’unité normale', 'Sengoku — Normal Unit Ascension': 'Sengoku — Ascension d’unité normale', 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide.': 'Étapes d’ascension de l’unité normale, ressources requises et coûts en pierres de rupture selon le guide fourni.', 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide': 'Étapes d’ascension de l’unité normale, ressources requises et coûts en pierres de rupture selon le guide fourni', 'Normal Unit Ascension Sengoku': 'Ascension d’unité normale : Sengoku', 'Normal Unit Ascension': 'Ascension d’unité normale', 'Sengoku — Normal Unit Ascension': 'Sengoku — Ascension d’unité normale', 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide.': 'Étapes d’ascension de l’unité normale, ressources requises et coûts en pierres de rupture selon le guide fourni.', 'Follow the six ascending rows from top to bottom. Each row shows the Sengoku copies and food units needed before the final portrait. Any gem amounts shown for these stages are Break Stone costs, not rewards.': 'Suivez les six lignes d’ascension de haut en bas. Chaque ligne indique les copies de Sengoku et les unités de sacrifice nécessaires avant le portrait final. Les gemmes affichées correspondent au coût en pierres de rupture, et non à des récompenses.', 'The supplied image shows the original food portraits and star requirements.': 'L’image fournie montre les portraits des unités de sacrifice et le nombre d’étoiles requis.', 'Normal Unit Ascension': 'Ascension d’unité normale', 'Heroine Tier List Reference': 'Référence du classement des héroïnes', Skill: 'Compétence', Passives: 'Compétences passives', 'No skill description added yet.': 'Aucune description de compétence pour le moment.', 'APP DOWNLOAD LINKS': 'LIENS DE TÉLÉCHARGEMENT', 'Edit platform links': 'Modifier les liens des plateformes', 'Save links': 'Enregistrer les liens', '＋ Add item': '＋ Ajouter un élément', 'Edit guide': 'Modifier le guide', 'Delete build': 'Supprimer le build'
  },
  de: {
    'Recently Added': 'Kürzlich hinzugefügt', 'Latest unit builds': 'Neueste Einheiten-Builds', 'Event timers': 'Event-Timer', 'Game event tracker': 'Spiel-Event-Übersicht', 'Pick an activity, add its time from your in-game calendar, and keep a live countdown here.': 'Wähle eine Aktivität, trage die Zeit aus deinem Spielkalender ein und verfolge hier den Countdown.', 'ADD A TIMER': 'TIMER HINZUFÜGEN', 'Other event': 'Anderes Event', 'YOUR CALENDAR': 'DEIN KALENDER', '＋ Add event': '＋ Event hinzufügen', 'No event timers yet. Pick Sanctuary, Adventures, or Voyage to add your first one.': 'Noch keine Event-Timer. Wähle Heiligtum, Abenteuer oder Reise, um den ersten hinzuzufügen.', 'BOUNTY PIRATES CALENDAR': 'BOUNTY-PIRATES-KALENDER', 'Sanctuary · Adventures · Voyage': 'Heiligtum · Abenteuer · Reise', 'Next three activities. New dates appear as each one ends. Countdown uses your device’s local time.': 'Die nächsten drei Aktivitäten. Neue Termine erscheinen, sobald eine Aktivität endet. Der Countdown verwendet die Ortszeit deines Geräts.', 'From Bounty Pirates Calendar · all day': 'Aus dem Bounty-Pirates-Kalender · ganztägig', 'Reminder set': 'Erinnerung aktiviert', 'Notify me · 10 min before': '10 Minuten vorher erinnern', 'DEVICE LOCAL TIME': 'LOKALE GERÄTEZEIT', 'NEXT SCHEDULED ACTIVITY': 'NÄCHSTE GEPLANTE AKTIVITÄT', 'ARTIFACT ARCHIVE': 'ARTEFAKT-ARCHIV', 'Artifact archive': 'Artefakt-Archiv', 'Artifact collection': 'Artefakt-Sammlung', 'Preview': 'Vorschau', From: 'Quelle', 'Source not added yet.': 'Quelle noch nicht eingetragen.', Basic: 'Basis', Tuning: 'Abstimmung', Refining: 'Verfeinerung', Skills: 'Fähigkeiten', 'Not added yet.': 'Noch nicht eingetragen.', 'Rumor says it will choose its owner to unleash full potential': 'Der Legende nach wählt es seinen Besitzer, um sein volles Potenzial zu entfesseln.', 'Amazing telescope, can identify distant target even at night': 'Ein beeindruckendes Teleskop, das entfernte Ziele sogar nachts erkennt.', 'Possess extreme power, rumor says it was used by the leader of Celestial Dragons': 'Von extremer Macht; angeblich wurde es vom Anführer der Weltaristokraten benutzt.', 'Legendary compass. For those who know how to use it, the compass was the key to everything': 'Ein legendärer Kompass. Für Kundige war er der Schlüssel zu allem.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 3 since server launch': 'Bei der Gildenboss-Auktion erhältlich (öffnet um 20:02 Uhr), am 3. Tag nach Serverstart.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 18 since server launch': 'Bei der Gildenboss-Auktion erhältlich (öffnet um 20:02 Uhr), am 18. Tag nach Serverstart.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 26 since server launch': 'Bei der Gildenboss-Auktion erhältlich (öffnet um 20:02 Uhr), am 26. Tag nach Serverstart.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 2 since server launch': 'Bei der Gildenboss-Auktion erhältlich (öffnet um 20:02 Uhr), am 2. Tag nach Serverstart.', 'ATTRIBUTES': 'ATTRIBUTE', 'Set bonus': 'Setbonus', 'No set bonuses added.': 'Keine Setboni hinzugefügt.', ATK: 'ANG', HP: 'LP', 'Normal Unit Ascension': 'Aufstieg normaler Einheiten', 'Sengoku — Normal Unit Ascension': 'Sengoku — Aufstieg normaler Einheiten', 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide.': 'Aufstiegsstufen normaler Einheiten, benötigte Futtereinheiten und Hinweise zu Break-Stone-Kosten aus dem bereitgestellten Guide.', 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide': 'Aufstiegsstufen normaler Einheiten, benötigte Futtereinheiten und Hinweise zu Break-Stone-Kosten aus dem bereitgestellten Guide.', 'Follow the six ascending rows from top to bottom. Each row shows the Sengoku copies and food units needed before the final portrait. Any gem amounts shown for these stages are Break Stone costs, not rewards.': 'Folge den sechs Aufstiegsreihen von oben nach unten. Jede Reihe zeigt die benötigten Sengoku-Kopien und Futtereinheiten vor dem finalen Porträt. Angezeigte Edelsteine sind Break-Stone-Kosten und keine Belohnungen.', 'The supplied image shows the original food portraits and star requirements.': 'Das bereitgestellte Bild zeigt die Futterporträts und erforderlichen Sterne.', 'Heroine Tier List Reference': 'Referenz zur Heldinnen-Rangliste', Skill: 'Fähigkeit', Passives: 'Passive Fähigkeiten', 'No skill description added yet.': 'Noch keine Fähigkeitsbeschreibung vorhanden.', 'APP DOWNLOAD LINKS': 'APP-DOWNLOAD-LINKS', 'Edit platform links': 'Plattform-Links bearbeiten', 'Save links': 'Links speichern', '＋ Add item': '＋ Element hinzufügen', 'Edit guide': 'Guide bearbeiten', 'Delete build': 'Build löschen'
  },
  ar: {
    'Recently Added': 'أضيف مؤخرًا', 'Latest unit builds': 'أحدث تجهيزات الوحدات', 'Event timers': 'مواعيد الفعاليات', 'Game event tracker': 'متتبع فعاليات اللعبة', 'Pick an activity, add its time from your in-game calendar, and keep a live countdown here.': 'اختر فعالية وأضف موعدها من تقويم اللعبة لمتابعة العد التنازلي هنا.', 'ADD A TIMER': 'أضف مؤقتًا', 'Other event': 'فعالية أخرى', 'YOUR CALENDAR': 'تقويمك', '＋ Add event': '＋ أضف فعالية', 'No event timers yet. Pick Sanctuary, Adventures, or Voyage to add your first one.': 'لا توجد مؤقتات بعد. اختر الملاذ أو المغامرات أو الرحلة لإضافة أول مؤقت.', 'BOUNTY PIRATES CALENDAR': 'تقويم باونتي بايرتس', 'Sanctuary · Adventures · Voyage': 'الملاذ · المغامرات · الرحلة', 'Next three activities. New dates appear as each one ends. Countdown uses your device’s local time.': 'الفعاليات الثلاث التالية. تظهر مواعيد جديدة عند انتهاء كل فعالية. يستخدم العد التنازلي التوقيت المحلي لجهازك.', 'From Bounty Pirates Calendar · all day': 'من تقويم باونتي بايرتس · طوال اليوم', 'Reminder set': 'تم ضبط التذكير', 'Notify me · 10 min before': 'ذكرني قبل 10 دقائق', 'DEVICE LOCAL TIME': 'التوقيت المحلي للجهاز', 'NEXT SCHEDULED ACTIVITY': 'الفعالية التالية المجدولة', 'ARTIFACT ARCHIVE': 'أرشيف الآثار', 'Artifact archive': 'أرشيف الآثار', 'Artifact collection': 'مجموعة الآثار', 'Preview': 'معاينة', From: 'المصدر', 'Source not added yet.': 'لم يُضف المصدر بعد.', Basic: 'أساسي', Tuning: 'ضبط', Refining: 'تحسين', Skills: 'المهارات', 'Not added yet.': 'لم تتم الإضافة بعد.', 'Rumor says it will choose its owner to unleash full potential': 'تقول الشائعات إنها تختار مالكها لتطلق كامل قوتها.', 'Amazing telescope, can identify distant target even at night': 'منظار مذهل يستطيع تحديد الأهداف البعيدة حتى ليلًا.', 'Possess extreme power, rumor says it was used by the leader of Celestial Dragons': 'يمتلك قوة هائلة، وتقول الشائعات إن زعيم التنانين السماوية استخدمه.', 'Legendary compass. For those who know how to use it, the compass was the key to everything': 'بوصلة أسطورية؛ لمن يعرف استخدامها، هي مفتاح كل شيء.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 3 since server launch': 'يمكن الحصول عليه من مزاد زعيم النقابة (يفتح 20:02) في اليوم الثالث من بدء الخادم.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 18 since server launch': 'يمكن الحصول عليه من مزاد زعيم النقابة (يفتح 20:02) في اليوم الثامن عشر من بدء الخادم.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 26 since server launch': 'يمكن الحصول عليه من مزاد زعيم النقابة (يفتح 20:02) في اليوم السادس والعشرين من بدء الخادم.', 'May obtain in Guild Boss Auction (opens at 20:02) on Day 2 since server launch': 'يمكن الحصول عليه من مزاد زعيم النقابة (يفتح 20:02) في اليوم الثاني من بدء الخادم.', 'ATTRIBUTES': 'الخصائص', 'Set bonus': 'مكافأة المجموعة', 'No set bonuses added.': 'لم تتم إضافة مكافآت مجموعة.', ATK: 'هجوم', HP: 'صحة', 'Normal Unit Ascension': 'ارتقاء الوحدات العادية', 'Sengoku — Normal Unit Ascension': 'سينغوكو — ارتقاء الوحدات العادية', 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide.': 'مراحل ارتقاء الوحدة العادية ومتطلبات وحدات التضحية وملاحظات تكلفة أحجار الكسر وفق الدليل المرفق.', 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide': 'مراحل ارتقاء الوحدة العادية ومتطلبات وحدات التضحية وملاحظات تكلفة أحجار الكسر وفق الدليل المرفق.', 'Follow the six ascending rows from top to bottom. Each row shows the Sengoku copies and food units needed before the final portrait. Any gem amounts shown for these stages are Break Stone costs, not rewards.': 'اتبع صفوف الارتقاء الستة من الأعلى إلى الأسفل. يوضح كل صف نسخ سينغوكو ووحدات التضحية المطلوبة قبل الصورة النهائية. أي جواهر ظاهرة هي تكلفة أحجار الكسر وليست مكافآت.', 'The supplied image shows the original food portraits and star requirements.': 'تعرض الصورة المرفقة صور وحدات التضحية الأصلية ومتطلبات النجوم.', 'Heroine Tier List Reference': 'مرجع تصنيف البطلات', Skill: 'المهارة', Passives: 'المهارات السلبية', 'No skill description added yet.': 'لم تتم إضافة وصف للمهارة بعد.', 'APP DOWNLOAD LINKS': 'روابط تنزيل التطبيق', 'Edit platform links': 'تعديل روابط المنصات', 'Save links': 'حفظ الروابط', '＋ Add item': '＋ أضف عنصرًا', 'Edit guide': 'تعديل الدليل', 'Delete build': 'حذف التجهيز'
  }
};
const LANGUAGE_EXTRA_2 = {
  fr: {
    'LIVE NOW · ENDS IN': 'EN COURS · SE TERMINE DANS', 'STARTS IN': 'COMMENCE DANS', 'ENDS IN': 'SE TERMINE DANS', 'CURRENT WISH ROTATION': 'ROTATION ACTUELLE DES INVOCATIONS', 'FROM THE COMMUNITY CALENDAR': 'DU CALENDRIER COMMUNAUTAIRE', 'WISH DAY IS HERE': 'C’EST LE JOUR DES INVOCATIONS', 'COOLDOWN UNTIL NEXT WISH': 'ATTENTE AVANT LA PROCHAINE INVOCATION', 'NEXT WISH': 'PROCHAINE INVOCATION', 'Banner unit list is open below.': 'La liste des unités de la bannière est affichée ci-dessous.', 'No upcoming wish listed': 'Aucune invocation à venir', 'Send the next calendar update and I’ll add its wish date.': 'Envoyez la prochaine mise à jour du calendrier pour ajouter sa date.', 'BASIC': 'BASE', 'TUNING': 'AJUSTEMENT', 'REFINING': 'REFORGE', 'ATTRIBUTES': 'ATTRIBUTS', 'Set bonus': 'Bonus de set', 'crit rate 5%': 'taux de critique 5 %', 'crit rate 7%': 'taux de critique 7 %', 'CRIT rate+5%': 'Taux critique +5 %', 'CRIT rate+7%': 'Taux critique +7 %', 'ATK Percentage+5%': 'Pourcentage ATQ +5 %', 'ATK Percentage+7%': 'Pourcentage ATQ +7 %', '5000 ATK': '5000 ATQ', '100000 HP': '100000 PV', 'Edit': 'Modifier', 'Remove': 'Retirer', 'Open guide:': 'Ouvrir le guide :', 'Edit guide tags': 'Modifier les étiquettes du guide', 'Previous page': 'Page précédente', 'Next page': 'Page suivante', 'Unit build pages': 'Pages des builds d’unités', 'SP skill photos': 'Images des compétences SP', 'SEA SOULS': 'ÂMES MARINES', 'ARTIFACTS': 'ARTEFACTS', 'SP SKILL PHOTOS': 'IMAGES DES COMPÉTENCES SP'
  },
  de: {
    'LIVE NOW · ENDS IN': 'JETZT LIVE · ENDET IN', 'STARTS IN': 'BEGINNT IN', 'ENDS IN': 'ENDET IN', 'CURRENT WISH ROTATION': 'AKTUELLE WUNSCHROTATION', 'FROM THE COMMUNITY CALENDAR': 'AUS DEM COMMUNITY-KALENDER', 'WISH DAY IS HERE': 'WUNSCHTAG IST DA', 'COOLDOWN UNTIL NEXT WISH': 'WARTEZEIT BIS ZUM NÄCHSTEN WUNSCH', 'NEXT WISH': 'NÄCHSTER WUNSCH', 'Banner unit list is open below.': 'Die Bannereinheiten werden unten angezeigt.', 'No upcoming wish listed': 'Keine kommenden Wünsche eingetragen', 'Send the next calendar update and I’ll add its wish date.': 'Sende das nächste Kalender-Update, damit ich den Wunschtermin eintragen kann.', 'BASIC': 'BASIS', 'TUNING': 'ABSTIMMUNG', 'REFINING': 'VERFEINERUNG', 'ATTRIBUTES': 'ATTRIBUTE', 'Set bonus': 'Setbonus', 'crit rate 5%': 'Krit-Rate 5 %', 'crit rate 7%': 'Krit-Rate 7 %', 'CRIT rate+5%': 'Krit-Rate +5 %', 'CRIT rate+7%': 'Krit-Rate +7 %', 'ATK Percentage+5%': 'ANG-Prozentsatz +5 %', 'ATK Percentage+7%': 'ANG-Prozentsatz +7 %', '5000 ATK': '5000 ANG', '100000 HP': '100000 LP', 'Edit': 'Bearbeiten', 'Remove': 'Entfernen', 'Open guide:': 'Guide öffnen:', 'Edit guide tags': 'Guide-Tags bearbeiten', 'Previous page': 'Vorherige Seite', 'Next page': 'Nächste Seite', 'Unit build pages': 'Einheiten-Build-Seiten', 'SP skill photos': 'SP-Fähigkeitsbilder', 'SEA SOULS': 'MEERES-SEELEN', 'ARTIFACTS': 'ARTEFAKTE', 'SP SKILL PHOTOS': 'SP-FÄHIGKEITSBILDER'
  },
  ar: {
    'LIVE NOW · ENDS IN': 'مباشر الآن · ينتهي خلال', 'STARTS IN': 'يبدأ خلال', 'ENDS IN': 'ينتهي خلال', 'CURRENT WISH ROTATION': 'دورة الأمنيات الحالية', 'FROM THE COMMUNITY CALENDAR': 'من تقويم المجتمع', 'WISH DAY IS HERE': 'بدأ يوم الأمنيات', 'COOLDOWN UNTIL NEXT WISH': 'الوقت المتبقي حتى الأمنية التالية', 'NEXT WISH': 'الأمنية التالية', 'Banner unit list is open below.': 'قائمة وحدات الراية ظاهرة أدناه.', 'No upcoming wish listed': 'لا توجد أمنيات قادمة', 'Send the next calendar update and I’ll add its wish date.': 'أرسل تحديث التقويم التالي لأضيف موعد الأمنية.', 'BASIC': 'أساسي', 'TUNING': 'ضبط', 'REFINING': 'تحسين', 'ATTRIBUTES': 'الخصائص', 'Set bonus': 'مكافأة المجموعة', 'crit rate 5%': 'معدل الضربة الحرجة 5٪', 'crit rate 7%': 'معدل الضربة الحرجة 7٪', 'CRIT rate+5%': 'معدل الضربة الحرجة +5٪', 'CRIT rate+7%': 'معدل الضربة الحرجة +7٪', 'ATK Percentage+5%': 'نسبة الهجوم +5٪', 'ATK Percentage+7%': 'نسبة الهجوم +7٪', '5000 ATK': '5000 هجوم', '100000 HP': '100000 صحة', 'Edit': 'تعديل', 'Remove': 'إزالة', 'Open guide:': 'افتح الدليل:', 'Edit guide tags': 'تعديل وسوم الدليل', 'Previous page': 'الصفحة السابقة', 'Next page': 'الصفحة التالية', 'Unit build pages': 'صفحات تجهيزات الوحدات', 'SP skill photos': 'صور مهارات SP', 'SEA SOULS': 'أرواح البحر', 'ARTIFACTS': 'الآثار', 'SP SKILL PHOTOS': 'صور مهارات SP'
  }
};
const LANGUAGE_EXTRA_3 = {
  fr: {
    'Deal 211% DMG to all targets. The fewer targets hit, the higher the final DMG, 100% max. Deal an extra DMG equal to 40% ATK, 100% chance to add 2 levels [Imprison] to 2 targets with the highest ATK, last 2 turns. 50% chance to add [Phoenix] to 1 friendly unit with the lowest HP. If Heroine Room SPD is no lower than opponent’s, then 100% chance to add [Phoenix]': 'Inflige 211 % de dégâts à toutes les cibles. Moins il y a de cibles touchées, plus les dégâts finaux sont élevés, jusqu’à 100 %. Inflige des dégâts supplémentaires équivalents à 40 % de l’ATQ. 100 % de chances d’ajouter 2 niveaux [Emprisonnement] aux 2 cibles ayant l’ATQ la plus élevée pendant 2 tours. 50 % de chances d’ajouter [Phénix] à l’unité alliée ayant le moins de PV. Si la VIT de la Salle des héroïnes est au moins égale à celle de l’adversaire, les chances d’ajouter [Phénix] passent à 100 %.',
    'After the carrier being CRIT, spend 1 level of [Imprison] to purge all [Imprison] buffs on the carrier, last 2 turns, stack 2 levels max, can’t be purged Revive at 30% HP after dying, last 2 turns, can’t be purged [Phoenix]': 'Après un coup CRIT subi par le porteur, consomme 1 niveau [Emprisonnement] pour dissiper tous ses bonus [Emprisonnement] pendant 2 tours (2 niveaux max, dissipation impossible). Ressuscite avec 30 % de PV après sa mort pendant 2 tours ; ne peut pas être dissipé [Phénix].',
    'When battle start, all friendly units get [Fighting Will], ATK+15%, last 4 turns, [Sharp Blade VI] can’t be purged': 'Au début du combat, toutes les unités alliées obtiennent [Volonté de combat] : ATQ +15 % pendant 4 tours. [Lame acérée VI] ne peut pas être dissipée.',
    'For those who know how to use it, the compass was the key to everything': 'Pour ceux qui savent s’en servir, la boussole est la clé de tout.',
    'can provide 3% more Extra DMG [Fighting Will] :[Sharpness]': 'confère 3 % de dégâts supplémentaires [Volonté de combat] : [Acuité]',
    'can provide 5% more CRIT DMG Res [Fighting Will] :[Tip of Spear I]': 'confère 5 % de résistance aux dégâts CRIT [Volonté de combat] : [Pointe de lance I]',
    'can provide 10% more CRIT DMG Res [Fighting Will] :[Tip of Spear II]': 'confère 10 % de résistance aux dégâts CRIT [Volonté de combat] : [Pointe de lance II]',
    'Release [Sharp Blade] again at the beginning of 5th turn [!Fight\'s On]': 'Relance [Lame acérée] au début du 5e tour [!Combat engagé]'
  },
  de: {
    'Deal 211% DMG to all targets. The fewer targets hit, the higher the final DMG, 100% max. Deal an extra DMG equal to 40% ATK, 100% chance to add 2 levels [Imprison] to 2 targets with the highest ATK, last 2 turns. 50% chance to add [Phoenix] to 1 friendly unit with the lowest HP. If Heroine Room SPD is no lower than opponent’s, then 100% chance to add [Phoenix]': 'Fügt allen Zielen 211 % SCH zu. Je weniger Ziele getroffen werden, desto höher der endgültige Schaden, bis zu 100 %. Verursacht zusätzlichen Schaden in Höhe von 40 % ANG. 100 % Chance, den 2 Zielen mit der höchsten ANG 2 Stufen [Gefängnis] für 2 Runden zuzufügen. 50 % Chance, der verbündeten Einheit mit den wenigsten LP [Phönix] zu verleihen. Ist die VIT im Heldinnenraum mindestens so hoch wie beim Gegner, steigt die Chance auf [Phönix] auf 100 %.',
    'After the carrier being CRIT, spend 1 level of [Imprison] to purge all [Imprison] buffs on the carrier, last 2 turns, stack 2 levels max, can’t be purged Revive at 30% HP after dying, last 2 turns, can’t be purged [Phoenix]': 'Wird der Träger kritisch getroffen, wird 1 Stufe [Gefängnis] verbraucht, um alle [Gefängnis]-Buffs des Trägers zu entfernen. Hält 2 Runden, max. 2 Stapel, kann nicht entfernt werden. Wiederbelebung nach dem Tod mit 30 % LP für 2 Runden; kann nicht entfernt werden [Phönix].',
    'When battle start, all friendly units get [Fighting Will], ATK+15%, last 4 turns, [Sharp Blade VI] can’t be purged': 'Zu Kampfbeginn erhalten alle Verbündeten [Kampfeswille]: ANG +15 % für 4 Runden. [Scharfe Klinge VI] kann nicht entfernt werden.',
    'For those who know how to use it, the compass was the key to everything': 'Für alle, die ihn zu nutzen wissen, war der Kompass der Schlüssel zu allem.',
    'can provide 3% more Extra DMG [Fighting Will] :[Sharpness]': 'gewährt 3 % zusätzlichen SCH [Kampfeswille] : [Schärfe]',
    'can provide 5% more CRIT DMG Res [Fighting Will] :[Tip of Spear I]': 'gewährt 5 % KRIT-SCH-Resistenz [Kampfeswille] : [Speerspitze I]',
    'can provide 10% more CRIT DMG Res [Fighting Will] :[Tip of Spear II]': 'gewährt 10 % KRIT-SCH-Resistenz [Kampfeswille] : [Speerspitze II]',
    'Release [Sharp Blade] again at the beginning of 5th turn [!Fight\'s On]': 'Löst [Scharfe Klinge] zu Beginn der 5. Runde erneut aus [!Kampf läuft]'
  },
  ar: {
    'Deal 211% DMG to all targets. The fewer targets hit, the higher the final DMG, 100% max. Deal an extra DMG equal to 40% ATK, 100% chance to add 2 levels [Imprison] to 2 targets with the highest ATK, last 2 turns. 50% chance to add [Phoenix] to 1 friendly unit with the lowest HP. If Heroine Room SPD is no lower than opponent’s, then 100% chance to add [Phoenix]': 'تُلحق ضررًا بنسبة 211٪ بجميع الأهداف. كلما قل عدد الأهداف المصابة زاد الضرر النهائي، حتى 100٪. تُلحق ضررًا إضافيًا يعادل 40٪ من الهجوم. فرصة 100٪ لإضافة مستويين من [السجن] إلى الهدفين الأعلى هجومًا لمدة جولتين. فرصة 50٪ لإضافة [العنقاء] إلى الحليف الأقل صحة. إذا لم تقل سرعة غرفة البطلات عن سرعة الخصم، تصبح فرصة إضافة [العنقاء] 100٪.',
    'After the carrier being CRIT, spend 1 level of [Imprison] to purge all [Imprison] buffs on the carrier, last 2 turns, stack 2 levels max, can’t be purged Revive at 30% HP after dying, last 2 turns, can’t be purged [Phoenix]': 'بعد تلقي الحامل ضربة حرجة، يُستهلك مستوى واحد من [السجن] لإزالة تعزيزات [السجن] عنه لمدة جولتين (بحد أقصى مستويين، ولا يمكن إزالتها). ينهض بعد الموت بصحة 30٪ لمدة جولتين، ولا يمكن إزالة [العنقاء].',
    'When battle start, all friendly units get [Fighting Will], ATK+15%, last 4 turns, [Sharp Blade VI] can’t be purged': 'في بداية القتال، تحصل كل الوحدات الحليفة على [إرادة القتال]: هجوم +15٪ لمدة 4 جولات. لا يمكن إزالة [النصل الحاد VI].',
    'For those who know how to use it, the compass was the key to everything': 'لمن يعرف استخدامها، كانت البوصلة مفتاح كل شيء.',
    'can provide 3% more Extra DMG [Fighting Will] :[Sharpness]': 'تمنح ضررًا إضافيًا بنسبة 3٪ [إرادة القتال] : [حدة]',
    'can provide 5% more CRIT DMG Res [Fighting Will] :[Tip of Spear I]': 'تمنح مقاومة ضرر الضربة الحرجة +5٪ [إرادة القتال] : [رأس الرمح I]',
    'can provide 10% more CRIT DMG Res [Fighting Will] :[Tip of Spear II]': 'تمنح مقاومة ضرر الضربة الحرجة +10٪ [إرادة القتال] : [رأس الرمح II]',
    'Release [Sharp Blade] again at the beginning of 5th turn [!Fight\'s On]': 'أطلق [النصل الحاد] مجددًا في بداية الجولة الخامسة [!بدأ القتال]'
  }
};
const LANGUAGE_EXTRA_4 = {
  fr: { SANCTUARY: 'SANCTUAIRE', ADVENTURES: 'AVENTURES', VOYAGE: 'VOYAGE', 'NEXT THREE ACTIVITIES': 'TROIS PROCHAINES ACTIVITÉS', 'ALL DAY': 'TOUTE LA JOURNÉE', EVENT: 'ÉVÉNEMENT', 'Use your website profile in the app': 'Utiliser le profil du site dans l’application', 'Export this profile to a backup. New installs restore it automatically; existing installs can import it below.': 'Exportez ce profil dans une sauvegarde. Les nouvelles installations le restaurent automatiquement ; les installations existantes peuvent l’importer ci-dessous.', 'Export backup': 'Exporter la sauvegarde', 'Import backup': 'Importer la sauvegarde', 'Site backup downloaded.': 'Sauvegarde du site téléchargée.' },
  de: { SANCTUARY: 'HEILIGTUM', ADVENTURES: 'ABENTEUER', VOYAGE: 'REISE', 'NEXT THREE ACTIVITIES': 'NÄCHSTE DREI AKTIVITÄTEN', 'ALL DAY': 'GANZTÄGIG', EVENT: 'EVENT', 'Use your website profile in the app': 'Website-Profil in der App verwenden', 'Export this profile to a backup. New installs restore it automatically; existing installs can import it below.': 'Exportiere dieses Profil als Backup. Neue Installationen stellen es automatisch wieder her; bestehende Installationen können es unten importieren.', 'Export backup': 'Backup exportieren', 'Import backup': 'Backup importieren', 'Site backup downloaded.': 'Website-Backup heruntergeladen.' },
  ar: { SANCTUARY: 'الملاذ', ADVENTURES: 'المغامرات', VOYAGE: 'الرحلة', 'NEXT THREE ACTIVITIES': 'الفعاليات الثلاث التالية', 'ALL DAY': 'طوال اليوم', EVENT: 'فعالية', 'Use your website profile in the app': 'استخدم ملف موقعك في التطبيق', 'Export this profile to a backup. New installs restore it automatically; existing installs can import it below.': 'صدّر هذا الملف الشخصي كنسخة احتياطية. تستعيده التثبيتات الجديدة تلقائيًا، ويمكن للتثبيتات الحالية استيراده أدناه.', 'Export backup': 'تصدير نسخة احتياطية', 'Import backup': 'استيراد نسخة احتياطية', 'Site backup downloaded.': 'تم تنزيل نسخة الموقع الاحتياطية.' }
};
const LANGUAGE_EXTRA_5 = {
  fr: {
    'Set bonus': "Bonus d'ensemble", ATTRIBUTES: 'ATTRIBUTS', ATK: 'ATQ', HP: 'PV', 'Normal Unit Ascension': "Ascension d'unité normale", 'UR Ascension': 'Ascension UR', 'Sengoku — Normal Unit Ascension': "Sengoku — Ascension d'unité normale", 'Nico Robin — UR Ascension': 'Nico Robin — Ascension UR', 'Normal-unit ascending stages, food requirements, and Break Stone costs from the supplied guide.': "Étapes d'ascension des unités normales, nourriture requise et coûts en pierres de rupture selon le guide fourni.", 'UR character training stages, food requirements, and Break Stone costs from the supplied guide.': "Étapes d'entraînement des personnages UR, nourriture requise et coûts en pierres de rupture selon le guide fourni.", 'crit rate 5%': 'Taux crit. 5 %', 'crit rate 7%': 'Taux crit. 7 %', 'ATK Percentage+5%': 'ATQ +5 %', 'ATK Percentage+7%': 'ATQ +7 %', 'CRIT DMG+6%': 'DGT crit. +6 %', 'CRIT DMG+12%': 'DGT crit. +12 %',
    "Skill[ConfidentLv.6]: At the beginning of each battle, unit gets 30% more DMG Res. Once unit has finished their 1st move per turn, convert 6% DMG Res into 6% Extra DMG, capped at 30% in 5 turns. Effects last till the battle end, can't be purged": "Compétence [Assuré niv. 6] : au début de chaque combat, l'unité obtient 30 % de résistance aux dégâts supplémentaires. Après son premier déplacement à chaque tour, convertit 6 % de résistance aux dégâts en 6 % de dégâts supplémentaires, jusqu'à 30 % en 5 tours. Dure jusqu'à la fin du combat et ne peut pas être dissipé.",
    "Skill[SteadyLv.6]: While dealing DMG, if target's HP drops below 70%,plus an extra 8% DMG based on its lost HP, limit to unit's ATK*120%": "Compétence [Stable niv. 6] : lorsque l'unité inflige des dégâts et que les PV de la cible passent sous 70 %, inflige 8 % de dégâts supplémentaires selon les PV perdus, dans la limite de 120 % de l'ATQ de l'unité.",
    'Skill[PersistentLv.6]: Deal 10% more DMG against DPS targets': 'Compétence [Persistant niv. 6] : inflige 10 % de dégâts supplémentaires aux cibles DPS.',
    'Skill[Self-centeredLv.6]: Deal 10% more DMG against tank and support targets': 'Compétence [Égocentrique niv. 6] : inflige 10 % de dégâts supplémentaires aux cibles tank et support.',
    'Skill[KindLv.6]: While being attacked, 80% chance to heal 10% HP, trigger once per turn': 'Compétence [Bienveillant niv. 6] : lorsqu’elle est attaquée, 80 % de chances de récupérer 10 % des PV, une fois par tour.',
    'Skill[DelicateLv.6]: Once healed a friendly unit, grant a 25% HP shield to that unit based on healing amount': 'Compétence [Délicat niv. 6] : après avoir soigné un allié, lui accorde un bouclier équivalant à 25 % des soins reçus.'
  },
  de: {
    'Set bonus': 'Setbonus', ATTRIBUTES: 'ATTRIBUTE', ATK: 'ANG', HP: 'LP', 'Normal Unit Ascension': 'Aufstieg normaler Einheiten', 'UR Ascension': 'UR-Aufstieg', 'Sengoku — Normal Unit Ascension': 'Sengoku — Aufstieg normaler Einheiten', 'Nico Robin — UR Ascension': 'Nico Robin — UR-Aufstieg', 'Normal-unit ascending stages, food requirements, and Break Stone costs from the supplied guide.': 'Aufstiegsstufen normaler Einheiten, benötigtes Futter und Breakstone-Kosten laut bereitgestelltem Leitfaden.', 'UR character training stages, food requirements, and Break Stone costs from the supplied guide.': 'Trainingsstufen für UR-Charaktere, benötigtes Futter und Breakstone-Kosten laut bereitgestelltem Leitfaden.', 'crit rate 5%': 'KRIT-Rate 5 %', 'crit rate 7%': 'KRIT-Rate 7 %', 'ATK Percentage+5%': 'ANG +5 %', 'ATK Percentage+7%': 'ANG +7 %', 'CRIT DMG+6%': 'KRIT-SCH +6 %', 'CRIT DMG+12%': 'KRIT-SCH +12 %',
    "Skill[ConfidentLv.6]: At the beginning of each battle, unit gets 30% more DMG Res. Once unit has finished their 1st move per turn, convert 6% DMG Res into 6% Extra DMG, capped at 30% in 5 turns. Effects last till the battle end, can't be purged": 'Fähigkeit [Selbstsicher Lv. 6]: Zu Beginn jedes Kampfes erhält die Einheit 30 % mehr SCH-Resistenz. Nach ihrer ersten Aktion pro Runde werden 6 % SCH-Resistenz in 6 % Extraschaden umgewandelt, bis zu 30 % innerhalb von 5 Runden. Hält bis zum Kampfende an und kann nicht entfernt werden.',
    "Skill[SteadyLv.6]: While dealing DMG, if target's HP drops below 70%,plus an extra 8% DMG based on its lost HP, limit to unit's ATK*120%": 'Fähigkeit [Beständig Lv. 6]: Sinkt die LP des Ziels beim Verursachen von SCH unter 70 %, verursacht die Einheit zusätzlich 8 % SCH basierend auf den verlorenen LP, höchstens 120 % ihres ANG-Werts.',
    'Skill[PersistentLv.6]: Deal 10% more DMG against DPS targets': 'Fähigkeit [Beharrlich Lv. 6]: Verursacht 10 % mehr SCH gegen DPS-Ziele.',
    'Skill[Self-centeredLv.6]: Deal 10% more DMG against tank and support targets': 'Fähigkeit [Selbstbezogen Lv. 6]: Verursacht 10 % mehr SCH gegen Tank- und Support-Ziele.',
    'Skill[KindLv.6]: While being attacked, 80% chance to heal 10% HP, trigger once per turn': 'Fähigkeit [Gütig Lv. 6]: Wird die Einheit angegriffen, besteht eine Chance von 80 %, 10 % LP wiederherzustellen. Einmal pro Runde.',
    'Skill[DelicateLv.6]: Once healed a friendly unit, grant a 25% HP shield to that unit based on healing amount': 'Fähigkeit [Feinfühlig Lv. 6]: Heilt die Einheit einen Verbündeten, erhält dieser einen Schild in Höhe von 25 % der Heilungsmenge.'
  },
  ar: {
    'Set bonus': 'مكافأة المجموعة', ATTRIBUTES: 'الخصائص', ATK: 'الهجوم', HP: 'الصحة', 'Normal Unit Ascension': 'ترقية الوحدة العادية', 'UR Ascension': 'ترقية UR', 'Sengoku — Normal Unit Ascension': 'سينغوكو — ترقية الوحدة العادية', 'Nico Robin — UR Ascension': 'نيكو روبين — ترقية UR', 'Normal-unit ascending stages, food requirements, and Break Stone costs from the supplied guide.': 'مراحل ترقية الوحدات العادية ومتطلبات الطعام وتكلفة أحجار الكسر وفق الدليل المرفق.', 'UR character training stages, food requirements, and Break Stone costs from the supplied guide.': 'مراحل تدريب شخصيات UR ومتطلبات الطعام وتكلفة أحجار الكسر وفق الدليل المرفق.', 'crit rate 5%': 'معدل الضربة الحرجة 5٪', 'crit rate 7%': 'معدل الضربة الحرجة 7٪', 'ATK Percentage+5%': 'الهجوم +5٪', 'ATK Percentage+7%': 'الهجوم +7٪', 'CRIT DMG+6%': 'ضرر الضربة الحرجة +6٪', 'CRIT DMG+12%': 'ضرر الضربة الحرجة +12٪',
    "Skill[ConfidentLv.6]: At the beginning of each battle, unit gets 30% more DMG Res. Once unit has finished their 1st move per turn, convert 6% DMG Res into 6% Extra DMG, capped at 30% in 5 turns. Effects last till the battle end, can't be purged": 'المهارة [الواثق مستوى 6]: في بداية كل معركة، تحصل الوحدة على مقاومة ضرر إضافية 30٪. بعد أول حركة لها في كل جولة، تحوّل 6٪ من مقاومة الضرر إلى ضرر إضافي 6٪، بحد أقصى 30٪ خلال 5 جولات. يستمر التأثير حتى نهاية المعركة ولا يمكن إزالته.',
    "Skill[SteadyLv.6]: While dealing DMG, if target's HP drops below 70%,plus an extra 8% DMG based on its lost HP, limit to unit's ATK*120%": 'المهارة [الثابت مستوى 6]: عند إلحاق الضرر، إذا انخفضت صحة الهدف عن 70٪، يُلحق ضررًا إضافيًا بنسبة 8٪ وفق الصحة المفقودة، بحد أقصى 120٪ من هجوم الوحدة.',
    'Skill[PersistentLv.6]: Deal 10% more DMG against DPS targets': 'المهارة [المثابر مستوى 6]: ألحق ضررًا إضافيًا بنسبة 10٪ بأهداف الضرر في الثانية.',
    'Skill[Self-centeredLv.6]: Deal 10% more DMG against tank and support targets': 'المهارة [المتمحور حول الذات مستوى 6]: ألحق ضررًا إضافيًا بنسبة 10٪ بأهداف الدبابة والدعم.',
    'Skill[KindLv.6]: While being attacked, 80% chance to heal 10% HP, trigger once per turn': 'المهارة [اللطيف مستوى 6]: عند التعرّض للهجوم، توجد فرصة 80٪ لاستعادة 10٪ من الصحة، مرة واحدة في كل جولة.',
    'Skill[DelicateLv.6]: Once healed a friendly unit, grant a 25% HP shield to that unit based on healing amount': 'المهارة [الرقيق مستوى 6]: بعد علاج وحدة حليفة، يمنحها درعًا يعادل 25٪ من مقدار العلاج.'
  }
};
let currentLanguage = (() => { try { return localStorage.getItem(LANGUAGE_KEY) || 'en'; } catch { return 'en'; } })();
let appliedLanguage = 'en';
function normalizeLocaleText(text) { return String(text).replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim(); }
const languageMapCache = new Map();
const languagePrefixCache = new WeakMap();
function languageMap(language) {
  if (!languageMapCache.has(language)) languageMapCache.set(language, Object.fromEntries(Object.entries({ ...(LANGUAGE_TEXT[language] || {}), ...(LANGUAGE_EXTRA[language] || {}), ...(LANGUAGE_EXTRA_2[language] || {}), ...(LANGUAGE_EXTRA_3[language] || {}), ...(LANGUAGE_EXTRA_4[language] || {}), ...(LANGUAGE_EXTRA_5[language] || {}) }).map(([source, translated]) => [normalizeLocaleText(source), translated])));
  return languageMapCache.get(language);
}
function translateUsingMap(text, translations) {
  const normalized = normalizeLocaleText(text);
  if (translations[normalized]) return translations[normalized];
  if (!languagePrefixCache.has(translations)) languagePrefixCache.set(translations, Object.keys(translations).sort((a, b) => b.length - a.length));
  const prefix = languagePrefixCache.get(translations).find(key => normalized.startsWith(key) && (normalized.length === key.length || /[\s:：,.;!?()[\]{}·—–]/u.test(normalized[key.length])));
  return prefix ? `${translations[prefix]}${normalized.slice(prefix.length)}` : text;
}
function localize(text) { return translateUsingMap(text, languageMap(currentLanguage)); }
function applyLanguage(root = document.body) {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  const selector = document.getElementById('language-select');
  if (selector && selector.value !== currentLanguage) selector.value = currentLanguage;
  const previousTranslations = languageMap(appliedLanguage);
  const reverseTranslations = Object.fromEntries(Object.entries(previousTranslations).map(([english, translated]) => [normalizeLocaleText(translated), english]));
  const nextTranslations = languageMap(currentLanguage);
  // Text nodes may contain a translated label followed by dynamic English text.
  // Reverse the previous locale by exact match or prefix before applying the new one.
  const translateCurrent = text => translateUsingMap(translateUsingMap(text, reverseTranslations), nextTranslations);
  const translateTextNode = node => {
    const original = node.nodeValue.trim();
    if (!original) return;
    const translated = translateCurrent(original);
    if (translated !== original) node.nodeValue = node.nodeValue.replace(original, translated);
  };
  if (root.nodeType === Node.TEXT_NODE) translateTextNode(root);
  else {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
  }
  const elements = root.nodeType === Node.ELEMENT_NODE ? [root, ...root.querySelectorAll('[aria-label],[title],[placeholder]')] : [];
  elements.filter(element => element.matches?.('[aria-label],[title],[placeholder]')).forEach(element => {
    for (const attribute of ['aria-label', 'title', 'placeholder']) {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, translateCurrent(value));
    }
  });
  const setTextDirection = element => {
    const text = element.textContent || '';
    const isArabic = /[\u0600-\u06ff]/.test(text);
    element.dir = isArabic ? 'rtl' : 'ltr';
    element.style.textAlign = isArabic ? 'right' : 'left';
  };
  const directionSelectors = '.heroine-skill-description p, .heroine-passives-description p, .artifact-skill-copy p, .sea-soul-skill p, .heroine-skill-description h3, .heroine-passives-description h3';
  const directionElements = root.nodeType === Node.ELEMENT_NODE
    ? [...(root.matches(directionSelectors) ? [root] : []), ...root.querySelectorAll(directionSelectors)]
    : root.nodeType === Node.TEXT_NODE && root.parentElement?.matches(directionSelectors) ? [root.parentElement] : [];
  directionElements.forEach(setTextDirection);
  appliedLanguage = currentLanguage;
}
const LANGUAGE_PAGE_TITLES = Object.fromEntries(Object.entries(PAGE_TITLES).map(([key, title]) => [key, title]));
let activePage = 'home';
let selectedAscensionId = 'builtin-ascension-ur-robin';
let selectedSpendingGuideId = 'f2p-strategy-guide';
const TIER_LEVELS = [{ id: 'top-tiers', label: 'TOP TIERS' }, { id: 'sss', label: 'SSS' }, { id: 'ss', label: 'SS' }, { id: 's', label: 'S' }];
const TIER_ROLES = [
  { id: 'tank', label: 'TANKS' },
  { id: 'support', label: 'SUPPORT' },
  { id: 'dps', label: 'DAMAGE DPS' },
  { id: 'control', label: 'BUFF / CONTROL / DEBUFF' },
  { id: 'other', label: 'OTHER', levels: [{ id: 'unique', label: 'UNIQUE UNIT' }, { id: 'bug-perso', label: 'BUG UNIT' }] }
];
const TIER_GROUPS = TIER_ROLES.flatMap(role => (role.levels || TIER_LEVELS).map(level => ({ id: `${role.id}-${level.id}`, roleId: role.id, role: role.label, levelId: level.id, label: level.label })));
let topTierGroups = Object.fromEntries(TIER_GROUPS.map(group => [group.id, []]));
let savedTopTierGroups = Object.fromEntries(TIER_GROUPS.map(group => [group.id, []]));
let activeTierGroup = 'dps-top-tiers';
let featuredGuideIndex = -1;
let featuredGuideId = null;
let wishBannerUnits = Object.fromEntries(WISH_BANNERS.map(banner => [banner.id, []]));
let savedWishBannerUnits = Object.fromEntries(WISH_BANNERS.map(banner => [banner.id, []]));
let personalEvents = [];
let customCollections = { heroine: [], artifacts: [] };
let siteSettings = { profileName: 'Set sail, captain', profileTagline: 'Your guide deck, at a glance.', avatar: '', discordInvite: '', discordProfile: '' };
let activeWishBannerId = null;
let downloadGuides = [];
let platformDownloadLinks = { ios: '', android: '' };
const CUSTOM_GUIDES_KEY = 'pirate-reborn-custom-guides-v1';
const ASCENSION_GUIDES = [
  { id: 'builtin-ascension-ur-robin', group: 'UR Ascension', tier: 'UR LIST', title: 'Nico Robin — UR Ascension', summary: 'UR character training stages, food requirements, and Break Stone costs from the supplied guide.', image: './assets/ascension-guides/robin-ur.png', content: '## Robin — UR Ascension\n\nFollow the six training rows from top to bottom. The supplied chart shows the character copy and food requirements for each stage, followed by the final ascended Robin portrait. Gem amounts below are Break Stone costs, not rewards.\n\n- Stage 1: Robin 1/1 + food 1/1.\n- Stage 2: food 2/2; Break Stone cost: 1,000 gems.\n- Stage 3: food 4/4; Break Stone cost: 2,000 gems.\n- Stage 4: Robin 1/1 + food 1/1; Break Stone cost: 4,000 gems.\n- Stage 5: Robin 2/2 + food 1/1 + food 2/2; Break Stone cost: 10,000 gems.\n- Stage 6: Robin 1/1 + food 2/2; Break Stone cost: 15,000 gems.\n\nThe image preserves the original icon and star-rank requirements for each food unit.' },
  { id: 'builtin-ascension-normal-sengoku', group: 'Normal Unit Ascension', tier: 'REGULAR UNITS', title: 'Sengoku — Normal Unit Ascension', summary: 'Normal-unit ascending stages, food requirements, and Break Stone cost notes from the supplied guide.', image: './assets/ascension-guides/sengoku-normal.png', content: '## Sengoku — Normal Unit Ascension\n\nFollow the six ascending rows from top to bottom. Each row shows the Sengoku copies and food units needed before the final portrait. Any gem amounts shown for these stages are Break Stone costs, not rewards.\n\n- Stage 1: Sengoku 1/1 + food 1/1 + food 3/3.\n- Stage 2: Sengoku 1/1 + food 4/4.\n- Stage 3: Sengoku 1/1 + food 3/3 + food 1/1.\n- Stage 4: Sengoku 1/1 + food 2/2 + food 1/1.\n- Stage 5: Sengoku 2/2 + food 1/1 + food 1/1.\n- Stage 6: Sengoku 1/1 + food 1/1 + food 1/1.\n\nThe supplied image shows the original food portraits and star requirements.' }
];
const HAKI_RUNE_GUIDE = {
  id: 'haki-rune-upgrade-reference',
  group: 'HAKI & RUNES',
  title: 'Haki & Rune Upgrade Guide',
  summary: 'Haki priorities, level-up costs, rune materials, and WA Coin phase costs.',
  content: 'Use the Haki tier image to prioritize skills. The Rune and Haki charts are attached under their matching sections. Phase coin values below are transcribed from the supplied upgrade embed.',
  fields: [
    { name: '🌟 Haki Priority Tiers', value: '**SS — Core:** Speed, Combo, Penetration, Cleanse\n\n**S — Strong:** Double Crit, ATK, Crit Rate, Crit DMG, Advanced Crit Resistance\n\n**A — Situational:** Accuracy, DMG Reflect, DMG Multiplier, Double Crit, Advanced ATK, Crit Resistance, DEF, Stun, DMG Reduction, Berserker\n\n**B — Usually keep at Lv. 3 or below:** Speed Down, Extra DMG, Crowd Control, Taunt\n\n**C — Low priority:** Double ATK, Shield, Extra Healing, Advanced Purge, HP Regen\n\n**D — Avoid:** Heal Reduction, Turtle, Suppression A, Extra Revival', images: [{ name: 'Haki priority tier list', image: './assets/haki-rune/haki-ranking.webp' }] },
    { name: '📘 Haki Level-up Costs', value: '**Level 1:** 1 Haki book · gem cost shown as “book price” in the supplied chart\n\n**Level 2:** 3 Haki books · 10K gems\n\n**Level 3:** 5 Haki books · 30K gems\n\n**Level 4:** 5 Haki books · 30K gems', images: [{ name: 'Haki book and gem costs', image: './assets/haki-rune/haki-upgrade-costs.webp' }] },
    { name: '🔷 Rune Upgrade Costs', value: '**Rune I:** 5 copies + 100K gold · 30 rune shards + 20K coins\n\n**Rune II:** 5 copies + 500K gold · 150 rune shards + 100K coins\n\n**Rune III:** 5 copies + 1.5M gold · 500 rune shards + 250K coins\n\n**Rune IV:** 5 copies + 2.5M gold · 1,500 rune shards + 750K coins\n\n**Rune V:** red shards 300 + rainbow shards 100 · 3,750 rune shards + 1.5M coins\n\n**Legendary upgrade 1:** red shards 600 + rainbow shards 200 · 4,250 rune shards + 1.5M coins\n\n**Legendary upgrade 2:** the image appears to show red shards 30 + rainbow shards 300 · 5,000 rune shards + 1.5M coins\n\n**Legendary upgrade 3:** 6,250 rune shards + 2M coins · source image shows no material count', images: [{ name: 'Rune upgrade materials and costs', image: './assets/haki-rune/rune-upgrade-costs.webp' }] },
    { name: '🪙 WA Coin Costs by Phase', value: '**Phase 1**\n• Origin (Rainbow Gems): need 100 · 400 WA Coins each · listed total 4,000\n• Origin (Red Rune Shards): need 300 · 120 WA Coins each · listed total 2,400\n• Heart of Stone: need 0 · 240 WA Coins each · listed total 0\n**Listed phase total: 6,400 WA Coins**\n\n**Phase 2**\n• Origin (Rainbow Gems): need 200 · 400 WA Coins each · listed total 8,000\n• Origin (Red Rune Shards): need 600 · 120 WA Coins each · listed total 4,800\n• Heart of Stone: need 0 · 240 WA Coins each · listed total 0\n**Listed phase total: 12,800 WA Coins**\n\n**Phase 3**\n• Origin (Rainbow Gems): need 300 · 400 WA Coins each · listed total 12,000\n• Origin (Red Rune Shards): need 0 · 120 WA Coins each · listed total 0\n• Heart of Stone: need 30 · 240 WA Coins each · listed total 7,200\n**Listed phase total: 19,200 WA Coins**\n\n**Listed total across all phases: 38,400 WA Coins.** The supplied item counts × per-item prices do not match several listed subtotals, so check the in-game exchange before spending.' }
  ]
};
const SP_GUIDE = {
  id: 'sp-potential-and-transfer-guide',
  group: 'SP & POTENTIAL',
  title: 'SP Skills, Potential & Transfer Guide',
  summary: 'Understand potential equipment, Ascend and Enhance, SP swapping, and skill-transfer requirements.',
  content: 'SP swapping can move developed potential to another eligible hero, helping you build SP without collecting extra copies of every UR hero. Review the in-game confirmation and costs before transferring.',
  fields: [
    { name: '⚔️ Potential Equipment & SP Skills', value: 'Open the **Potential** screen from a hero’s equipment, then use the **SP** controls to view or manage its SP skills. SP skills replace the equipment’s original skills. The screenshots show the Potential screen, locked SP slots, and the Ascend and Enhance controls.', images: [{ name: 'Potential equipment and SP skills', image: './assets/sp-guide/potential-weapon-sp.webp' }, { name: 'Ascend and Enhance controls', image: './assets/sp-guide/ascend-and-enhance.webp' }] },
    { name: '⬆️ Ascend vs Enhance', value: '**Ascend** increases SP. For the first four ascensions, raise the skills in sequence: `1000 → 1100 → 1110 → 111`. Each of those levels a skill to 1. Later ascensions grant a blue SP crystal to allocate. A skill cannot reach level 4 until every other skill is at least level 2; `1131` and `1113` are valid examples, while `1141` and `2141` are not.\n\n**Enhance** uses 3-star and 4-star materials. It adds HP and ATK each level, SPD at every 50 levels, and DEF every 50 levels starting at level 25. The supplied guide recommends staying within the 50s for efficiency.', images: [{ name: 'Potential Ascend and Enhance screen', image: './assets/sp-guide/ascend-and-enhance.webp' }] },
    { name: '🔄 SP Swapping', value: 'SP swapping transfers developed potential so you can build a lower-cost “dummy” hero and pass eligible progress to the target hero. The example uses Young Rayleigh. Potential can be transferred between heroes of the **same faction**, and both heroes must be **level 11**. Check the transfer preview carefully: the screenshot notes that use amounts are kept after transfer, while the SP skill is replaced.', images: [{ name: 'Potential transfer button', image: './assets/sp-guide/transfer-button.webp' }, { name: 'SP transfer example', image: './assets/sp-guide/transfer-example.webp' }] },
    { name: '🔁 SP Skill Transfer & Costs', value: 'A common use is leveling an easier-to-build same-faction hero, such as Ace or Rayleigh, to 11 stars and developing its skills before transferring to a harder-to-copy hero such as Big Mom. Both heroes must meet the level-11 requirement.\n\nThe supplied Awakening Skills chart shows these paired red/blue crystal amounts by row: **20/20, 40/40, 60/60, 80/80, 120/120, 160/160, and 200/200**. Treat the chart as a reference and confirm the current cost in the game’s transfer preview.', images: [{ name: 'Awakening step-up and transfer cost chart', image: './assets/sp-guide/awakening-transfer-costs.webp' }, { name: 'Red SP crystal', image: './assets/sp-guide/red-sp-crystal.webp' }] },
    { name: '📈 Maximum SP Without Red SP Crystals', value: 'The supplied guide states that an 11-star potential equipment can provide up to **11 total SP** without red SP crystals. It estimates approximately **2,234** across Turn 1, Passive 1, Turn 2, and Passive 2. This is the stated maximum for that setup; red SP crystals can change the limit.', images: [{ name: 'Potential equipment with SP slots', image: './assets/sp-guide/potential-weapon-sp.webp' }] }
  ]
};
const CLAN_SKILLS_GUIDE = {
  id: 'clan-skills-guide',
  group: 'CLAN & UNIT PROGRESSION',
  title: 'Clan Skills Guide',
  summary: 'Choose the clan skill group that matches your unit and understand the bonuses shown at max level.',
  content: 'Clan Skills give group-wide bonuses to units in battle. Choose the group that fits the role of the units you want to strengthen, then invest in the matching nodes.',
  fields: [
    { name: '🔍 Clan Skill Groups', value: '**DPS:** boosts offensive units with Crit Rate, Crit DMG, and Extra DMG bonuses.\n\n**Defense:** focuses on defensive units with Crit Resistance, Debuff Accuracy, and DMG Reduction.\n\n**Support:** focuses on support units with Crit Resistance, Debuff Resistance, and DMG Reduction.\n\nThe supplied overview also notes fixed HP, ATK, and Speed bonuses for the groups. Exact totals can vary by selected group and level; use the in-game panel to compare before investing.' },
    { name: '⚔️ DPS Group — Lv. 240 Example', value: 'The supplied screenshot shows the DPS group at **Lv. 240**, with each of its six nodes at **40**. The displayed total bonuses are:\n\n- HP: **20%**\n- ATK: **20%**\n- Crit Rate: **20%**\n- Crit DMG: **40%**\n- Extra DMG: **20%**\n- SPD: **160**', images: [{ name: 'Clan Skills DPS group and Lv. 240 bonuses', image: './assets/clan-skills/clan-skills-dps.webp' }] },
    { name: '💡 Choosing Where to Invest', value: 'Prioritize the tab that benefits the units you use most: DPS for damage dealers, Defense for tanks and defensive builds, or Support for support-focused units. Check each tab’s displayed total bonuses and clan skill levels in game before spending resources.' }
  ]
};
const EQUIPMENT_REFINEMENT_GUIDE = {
  id: 'equipment-refinement-awakening-guide',
  group: 'EQUIPMENT & PROGRESSION',
  title: 'Equipment Refinement & Awakening Guide',
  summary: 'Compare refinement gains against Break Stone costs and review equipment awakening requirements.',
  content: 'Use the refinement breakpoints to compare ATK gained per Break Stone. The recommendations and totals below are transcribed from the supplied guide.',
  fields: [
    { name: '🔹 Refinement Stat Gains per Break Stone', value: '**0 → 20**\nCost: **0 Break Stones**, 11,900 Refined Points\nGain: **+4,987 HP**, **+166 ATK**\nReturn: **Infinite** (no Break Stones used)\n\n**20 → 40**\nCost: **1 Break Stone**, 15,910 Refined Points\nGain: **+7,990 HP**, **+266 ATK**\nATK per Break Stone: **266** (baseline)\n\n**40 → 60**\nCost: **3 Break Stones**, 22,222 Refined Points\nGain: **+8,654 HP**, **+288 ATK**\nATK per Break Stone: **96**\n\n**60 → 90**\nCost: **6 Break Stones**, 48,970 Refined Points\nGain: **+425 ATK** · **70.8 ATK per stone**\n\n**90 → 120**\nCost: **10 Break Stones**, 79,210 Refined Points\nGain: **+478 ATK** · **47.8 ATK per stone**\n\n**120 → 160**\nCost: **15 Break Stones**, 170,230 Refined Points\nGain: **+688 ATK** · **45.9 ATK per stone**\n\n**160 → 200**\nCost: **21 Break Stones**, 278,320 Refined Points\nGain: **+807 ATK** · **38.4 ATK per stone**\n\n**200 → 250**\nCost: **28 Break Stones**, 562,190 Refined Points\nGain: **+1,185 ATK** · **42.3 ATK per stone**\n\n**250 → 300**\nCost: **35 Break Stones**, 876,770 Refined Points\nGain: **+1,555 ATK** · **44.4 ATK per stone**' },
    { name: '🎯 Suggested Refinement Plan', value: '1. **Level 0 → 40:** best return on investment; the first 20 levels use no Break Stones, and the next breakpoint is the listed baseline.\n2. **Level 40 → 160:** balance gear evenly before pushing past 160.\n3. **Level 160 → 200:** prioritize one equipment piece.\n4. **Level 200 → 250:** the supplied note suggests resetting and pushing when you have spare Break Stones.\n5. **Level 250 → 300:** the note says to reset and push with 21+ Break Stones.\n\n**Cost check:** the breakpoint table lists **28 stones** for 200 → 250 and **35 stones** for 250 → 300, so the final “21+” recommendation does not cover the listed cost to reach 300. Confirm your in-game costs before resetting or spending.' },
    { name: '🛠️ Equipment Awakening Costs', value: '**T1:** 1 Stone · 100 Essence\n**T2:** 1 Stone · 200 Essence\n**T3:** 2 Stones · 400 Essence\n**T4:** 2 Stones · 600 Essence\n**T5:** 3 Stones · 800 Essence\n**T6:** 3 Stones · 1,000 Essence\n**T7:** 3 Stones · 1,200 Essence\n**T8:** 4 Stones · 1,400 Essence\n**T9:** 4 Stones · 1,700 Essence\n**T10:** 4 Stones · 2,000 Essence\n\nThe supplied source also states: **540 Stones / 188,000 Essence to max main-unit equipment**. Check the game’s displayed totals for the exact number of equipment pieces covered.' }
  ]
};
const ARTIFACTS_GUIDE = {
  id: 'artifacts-ascend-tune-refine-guide',
  group: 'ARTIFACTS',
  title: 'Artifacts Guide',
  summary: 'Artifact Ascend, Tune, and Refining material costs.',
  content: 'Maximize artifact power by learning the costs for each upgrade system. Costs below are transcribed from the supplied guide.',
  fields: [
    { name: '🌟 Ascend', value: '**Unlock the full potential of your Artifacts.**\n\n- **0★:** 1 Artifact to activate.\n- **1★:** 2 Artifacts.\n- **2★:** 2 Artifacts.\n- **3★:** 3 Artifacts.\n- **4★:** 3 Artifacts.\n- **5★:** 3 Artifacts.' },
    { name: '🎯 Tune', value: '**Fine-tune your Artifacts for maximum efficiency.**\n\n- **Rare Epic:** 1 Tuning Stone or Jade.\n- **Legend:** 1 Tuning Stone or Jade.\n- **Rare Legend:** 1 Tuning Stone or Jade.\n- **Ultimate:** 2 Tuning Stones or Jade.' },
    { name: '🔧 Refining', value: '**Refine your Artifacts to bring out their strength.**\n\n- **T1:** 3 Artifacts.\n- **T2:** 3 Artifacts + 1 Jade.\n- **T3:** 3 Artifacts + 2 Jade.\n- **T4:** 3 Artifacts + 2 Jade.\n- **T5:** 3 Artifacts + 4 Jade.' }
  ]
};
const F2P_STRATEGY_GUIDE = {
  id: 'f2p-strategy-guide', group: 'F2P & P2W STRATEGIES', title: 'Free-to-Play (F2P) Strategy Guide',
  summary: 'Saving, shop, and gameplay tips for steady progress without spending.',
  content: 'Focus on steady resource income, save premium currencies for goals, and complete recurring activities.',
  fields: [
    { name: '💰 Saving & Spending', value: '- Save gems for essential purchases.\n- Buy tickets weekly from the Encore shop.\n- Complete at least one Assemble event round; save Advanced Summon Tickets and 5-star Shards.\n- Aim for first place in each Adventure event.\n- Complete daily and weekly tasks.\n- Participate daily in Ranked Battle (5 battles), Summit War (deploy units), Raft War (take rafts), and World Arena (6 daily challenges).\n- Save Advanced Wheel Coins for desired units or 4-star Red Equipment on the wheel.\n- Buy Break Stones, Arena Tickets, and EXP from shops using Belly.' },
    { name: '🏆 Shops & Resources', value: '- **Adventure Shop:** Buy Woods for ship upgrades, or Rayleigh if planning to SP transfer to a UR Emperor character.\n- **Arena Shop:** Buy Faction Crystals and Jozu shards if needed.\n- **Clan Skills:** Essential for progression. Participate daily in Clan Treasure and Instance; Stronghold runs Monday, Wednesday, and Friday.\n- **Clan Shop:** Buy Wano Usopp, Lucci, 10 random 5-star Shards, Equipment, Common Rune, and Starter Rune when Clan Skills are at least 200+.\n- Use extra coins for 1K Rune Shards and Potential Tokens from Zenith Championship if planning a transfer.\n- Buy 200 Woods and Flame Crystals from Ranked Battle shop if aiming for UR units and transfers.\n- **Summit War Shop:** Buy UR Chests and 1,500 Refine Crystals; avoid other items.\n- **Raft Shop:** Buy weekly Break Stones; other items as needed.\n- **Entrance Shop:** Rune Shards and Starter Rune are recommended buys.' },
    { name: '⚔️ Gameplay Tips', value: '- **Elimination Shop:** Buy UR Chests, Sabo shards, or Origin Gems with Origin Rune Shards when upgrading runes.\n- **Album Skills:** Focus on Agility (3rd album) and Courage (1st album).\n- Complete Daily Instance, Infinite Trials, Impel Down, Glory Path, Fishman Island, and Oni Island challenges.\n- Buy Golden Ticket Shards whenever available in the Stamp Shop.\n- For Oni Island, watch the fight and restart if damage is low; the source says restarting does not use a challenge.\n- Focus Breakthrough and Spirit upgrades on your main team.' }
  ]
};
const P2W_STRATEGY_GUIDE = {
  id: 'p2w-recommendations-guide', group: 'F2P & P2W STRATEGIES', title: 'P2W Recommendations',
  summary: 'Purchase priorities and value notes from the supplied player guide.',
  content: 'The notes below are transcribed from the supplied guide. Prices, bundles, and gem values can change; check the current in-game offer before buying.',
  fields: [
    { name: '📜 Bounty Order Passes', value: '**A. Task Bounty**\n- Elite 3 faction shards ×100; Elite 4 faction shards ×50.\n- Bounty Hunter avatar / 2 Potential Crystals at S7.\n- Random 5-star Shards ×280; 5,800 gems; 24 Elite Summon Tickets; 5 Faction Crystals.\n- Source estimate: **about 50K gems**.\n\n**B. Adventure Bounty**\n- Elite 4 faction shards ×50; 3 Faction Hero Shard Selection Chests.\n- 6,000 gems; 2 Advanced (purple) Runes; 120 Woods; 3M Berries; 3,000 Forge Tools; 5 Blueprints; 5 Advanced Wheel Coins.\n- Source estimate: **about 22K gems**.\n\n**C. Impel Down Bounty**\n- 4,000 gems; 4,700 Break Stones; 24 Advanced Summons; 6 Faction Crystals; 7.5M Berries; 60 random 5-star Shards.\n- Source estimate: **about 22K gems**.\n\n**D. Summit War Bounty**\n- 6,480 gems; 21,800 Sea Spirits; 80 UR Shards.\n- Source estimate: **about 74K gems**.' },
    { name: '💎 Funds', value: '**Hot Fund**\n- 6,200 gems; 6 Faction Crystals; 3 Advanced Coins; 150 random 5-star Shards; Elite 3 Faction Optional Pack.\n- Source estimate: **about 24K gems**.\n\n**Advanced Fund**\n- 11,600 gems; 16 Faction Crystals; 300 random 5-star Shards; 4 Faction Elite Packs.\n- Source estimate: **about 65K gems**.' },
    { name: '🎁 Cards, Packs & Daily Recharge', value: '**Month Cards**\n- $4.99: 150 gems ×30 days.\n- $14.99: 450 gems ×30 days.\n\n**Gift Packs**\n- Daily $0.99 pack.\n- Weekly packs under $9.99 and monthly packs under $4.99 are described as above-average deals.\n\n**Daily Recharge**\n- Source estimate: at least $1 daily for two weeks can yield around 7K gems in value.' },
    { name: '⚓ Privileges & Progress Funds', value: '**Privileges**\n- Quick Battles: good value; scales with level.\n- Adventure: mid value; useful in late game when RNG matters.\n- Glory Path: source says not worth it unless all four paths have passed level 400.\n\n**Level Up Fund**\n- Recommended by the source: about 45K gems’ worth of rewards for $14.99.' },
    { name: '✨ Other Purchase Notes', value: '- **Skin Packs:** worthwhile if you value the skin itself above $8.\n- **Stamps:** packs below $9.99 are described as good deals.\n- **Refining Purchase:** source recommends the $14.99 option only for big spenders.\n- **Story Bounty:** recommended; rewards become more valuable at each tier.\n- **Ranking (Encore):** packs at $9.99 and below are described as above-average deals.' }
  ]
};
const UR_PULLING_GUIDE = {
  id: 'pulling-for-ur-shard-rewards-guide',
  group: 'SUMMONING & RESOURCE PLANNING',
  title: 'Pulling for UR — Shard Rewards Guide',
  summary: 'Ticket-pull shard milestones, shard-count notes, and a calculator for planning UR pulls.',
  content: 'Track ticket milestones and plan your resources before pulling. Reward totals and probabilities below are from the supplied community guide; use the calculator and current in-game rules when planning.',
  fields: [
    { name: '📊 Shard Rewards by Ticket Pulls', value: '- **100 pulls:** 91 / 121 Shards\n- **250 pulls:** 258 / 268 / 278 / 328 / 348 Shards\n- **400 pulls:** 414 / 468 / 488 / 518 Shards\n- **500 pulls:** 575 / 605 / 655 Shards\n- **600 pulls:** 646 / 666 / 696 / 746 / 796 Shards\n- **700 pulls:** 737 / 757 / 787 / 837 / 887 Shards' },
    { name: '🔍 Shard Count Insights', value: 'Shard totals can differ based on the UR’s popularity and competition. The supplied guide says its counts include Limit Break rewards, shards purchased with coins, milestone chests, and a **15.88% chance** of receiving a shard from each pull.' },
    { name: '💡 Estimated UR Pull Requirements', value: '[Watch the UR pulling guide on YouTube](https://youtu.be/TXdFYr7OlEw?si=AVTuQPQKLrkeL2PI)\n\nThe source estimates **360 tickets and 112K gems** to obtain a UR character.' }
  ]
};
const AUCTION_PRICES_GUIDE = {
  id: 'auction-item-prices-guide',
  group: 'AUCTION & RESOURCE PLANNING',
  title: 'Auction Prices Guide',
  summary: 'Normal and guaranteed auction prices in gems for commonly listed items.',
  content: 'Use these supplied prices as a quick reference when planning auction bids. Check the current in-game auction before spending, since prices or listings may change.',
  fields: [
    { name: '💎 Stones & UR Items', value: '**SP Stone** — Normal: 7,500 gems · Guaranteed: 15,000 gems\n**Artifact Yellow Stone** — Normal: 3,000 gems · Guaranteed: 9,000 gems\n**UR Box** — Normal: 1,000 gems · Guaranteed: 3,000 gems' },
    { name: '🚢 Ship Items', value: '**Deck** — Normal: 4,000 gems · Guaranteed: 8,000 gems\n**Hull** — Normal: 4,000 gems · Guaranteed: 8,000 gems\n**Compass** — Normal: 1,000 gems · Guaranteed: 3,000 gems\n**Gas** — Normal: 750 gems · Guaranteed: 1,500 gems' },
    { name: '🏺 Accessories & Relics', value: '**Roger Necklace** — Normal: 3,000 gems · Guaranteed: 6,000 gems\n**Telescope** — Normal: 3,000 gems · Guaranteed: 6,000 gems\n**Holy Grail** — Normal: 1,400 gems · Guaranteed: 4,200 gems\n**Flintlock** — Normal: 3,000 gems · Guaranteed: 6,000 gems\n**Golden Eye** — Normal: 3,000 gems · Guaranteed: 6,000 gems\n**Clank** — Normal: 300 gems · Guaranteed: 600 gems' },
    { name: '🛠️ Upgrade Materials', value: '**Equipment Awakening Stone** — Normal: 500 gems · Guaranteed: 1,000 gems\n**Engrave Core** — Normal: 2,500 gems · Guaranteed: 5,000 gems\n**Rune Reforge Stone** — Normal: 2,500 gems · Guaranteed: 5,000 gems' },
    { name: '🎁 Shards & Chests', value: '**5-Star Shards** — Normal: 600 gems · Guaranteed: 1,000 gems\n**2-Star Golden Weapon Chest** — Normal: 600 gems · Guaranteed: 1,200 gems' }
  ]
};
const SHIP_BREAK_GUIDE = {
  id: 'ship-break-and-stats-guide',
  group: 'SHIPS & BOAT EQUIPMENT',
  title: 'Ship Guide',
  summary: 'Ship break costs, ship stats, break ascension, and boat equipment progression.',
  content: 'The source lists three values for each ship break level. The first two columns are transcribed with a multiplication sign; the source does not name those columns, so check their meaning in game before spending. Boat equipment bonuses and progression are included below.',
  fields: [
    { name: '🔧 Ship Break Costs', value: '**Break values by level**\n\n- **Level 1:** 8 × 2 · Break: 1\n- **Level 2:** 14 × 4 · Break: 2\n- **Level 3:** 21 × 6 · Break: 3\n- **Level 4:** 29 × 8 · Break: 5\n- **Level 5:** 36 × 10 · Break: 7\n- **Level 6:** 43 × 13 · Break: 9\n- **Level 7:** 50 × 16 · Break: 12\n- **Level 8:** 58 × 19 · Break: 15\n- **Level 9:** 65 × 22 · Break: 19\n- **Level 10:** 72 × 26 · Break: 23\n- **Level 11:** 79 × 30 · Break: 27\n- **Level 12:** 87 × 34 · Break: 32\n- **Level 13:** 94 × 38 · Break: 37\n- **Level 14:** 101 × 42 · Break: 43\n- **Level 15:** 108 × 46 · Break: 49\n- **Level 16:** 116 × 50 · Break: 55\n- **Level 17:** 123 × 54 · Break: 62\n- **Level 18:** 130 × 58 · Break: 69\n- **Level 19:** 137 × 62 · Break: 77\n- **Level 20:** 145 × 66 · Break: 85\n- **Level 21:** 152 × 70 · Break: 93\n- **Level 22:** 159 × 74 · Break: 102\n- **Level 23:** 166 × 78 · Break: 111' },
    { name: '🚢 Ship Stats', value: '**Blackbeard**\n- Crit Rate +10%; Crit DMG +20%; Speed +40.\n- Ship Attack: chance to stun for 1 turn; +10% ATK for 2 friendly units for 2 turns.\n\n**Garps**\n- Dodge +10%; Crit Resistance +10%; Speed +40.\n- Ship Attack: chance to reduce enemy Accuracy for 2 turns; -10% DMG Resistance on up to 2 enemies for 2 turns.\n\n**Going Merry**\n- ATK +10%; Accuracy +10%; Speed +40.\n- Ship Attack: chance to inflict Bleed (lose 7,500 HP per turn) for 2 turns; +4% DMG for all friendly units for 2 turns.\n\n**Perfume Yuda**\n- Crit Resistance +10%; Healing Amount and (P) +10%; Speed +40.\n- Ship Attack: heals 2 friendly units for 9.5% HP and grants +10% DEF for 2 turns.\n\n**Swanda Express**\n- DEF +10%; DMG Reduction +10%; Speed +40.\n- Ship Attack: chance to reduce enemy ATK for 2 turns; grants a “+10 HP” shield to 2 friendly units for 2 turns, as written in the supplied source.' },
    { name: '🔧 Ship Break Ascend Costs', value: '**Ascend from 1 piece**\n- Lv. 1 → 2: 2 pieces\n- Lv. 2 → 3: 3 pieces\n- Lv. 3 → 4: 4 pieces\n- Lv. 4 → 5: 5 pieces\n\n**Ascend from 6 boat pieces**\n- Lv. 1 → 2: 12 pieces\n- Lv. 2 → 3: 18 pieces\n- Lv. 3 → 4: 24 pieces\n- Lv. 4 → 5: 30 pieces' },
    { name: '📈 Boat Equipment Progression & Stats', value: 'Each boat piece adds flat ATK and HP as well as percentage ATK and HP bonuses; bonuses stack as you equip more pieces.\n\n- **1 Star:** +1,800 ATK / +36,000 HP · +7% ATK and HP\n- **3 Stars:** +10,440 ATK / +200,800 HP · +15% ATK and HP\n- **5 Parts:** +30,600 ATK / +612,000 HP · +25% ATK and HP\n- **8 Parts:** +66,240 ATK / +1,324,800 HP · +35% ATK and HP\n- **10 Parts (Max):** **+90,000 ATK / +1,800,000 HP** · **+40% ATK and HP**' },
    { name: '💰 Boat Equipment Upgrade Notes', value: '**Total cost to max:** 960,000 (currency not specified in the supplied source).\n\n- Early parts are cheaper and give smaller gains.\n- Higher parts give much larger power increases, especially to percentage stats.' }
  ]
};
const SPIRIT_BREAKTHROUGH_GUIDE = {
  id: 'spirit-breakthrough-costs-guide',
  group: 'SPIRIT & FACTION PROGRESSION',
  title: 'Spirit Breakthrough Costs',
  summary: 'Spirit levels, breakthrough materials, star requirements, and full-completion total.',
  content: 'Spirit upgrades can be expensive. The supplied guide recommends focusing on one faction to manage costs effectively, with the Emperors faction suggested if you are unsure.',
  fields: [
    { name: '🔧 Breakthrough Costs', value: '- **Breakthrough I · Spirit Lv. 10:** 10 💠 + 1 (5★)\n- **Breakthrough II · Spirit Lv. 20:** 20 💠 + 2 × (5★)\n- **Breakthrough III · Spirit Lv. 30:** 45 💠 + 3 × (5★)\n- **Breakthrough IV · Spirit Lv. 40:** 80 💠 + 6 Star\n- **Breakthrough V · Spirit Lv. 50:** 125 💠 + 6 Star + 1 × (5★)\n- **Breakthrough VI · Spirit Lv. 60:** 180 💠 + 6 Star\n- **Breakthrough VII · Spirit Lv. 70:** 245 💠 + 9 Star\n- **Breakthrough VIII · Spirit Lv. 80:** 320 💠 + 9 Star + 6 Star\n- **Breakthrough IX · Spirit Lv. 90:** 450 💠 + 10 Star\n\n**Total for full completion: 1,475 💠**' }
  ]
};
const HEROINE_ROOM_GUIDE = {
  id: 'heroine-room-guide', group: 'HEROINES', title: 'Heroine Room & Heroines Guide',
  summary: 'Heroine room upgrades, shard and summon sources, advancement costs, bonds, and tier references.',
  content: 'A combined reference for the Heroine Room and Heroine progression. Costs and bonuses are transcribed from the supplied guide and screenshots; check in-game screens before spending.',
  fields: [
    { name: '🌟 Heroine System & Room', value: '**Heroine stats:** Archive and Heroine Room bonuses apply to all heroes. Heroes also contribute bonus stats to the Heroine using her base stats and the room’s conversion rate.\n\n**Heroine Room:** Level the room with Heroine Fans to raise its level and team stat benefits. Advancing the room increases the level cap and stat conversion rate.\n\n**Slots & skills:** Start with 1 slot; room advancement can unlock up to 4 more. Slot order sets deployment order. Only one heroine skill activates at the start of each turn; skills have a 4-turn cooldown and cooldowns continue for unused slots. Skill ATK = total ATK of deployed heroes ÷ maximum heroes deployable.\n\n**Heroines:** Each has a unique skill that improves through Ascension. Collect shards to summon or upgrade; only one heroine of each name can be deployed at once. Heroines start at Lv. 0 and can ascend to 5★.\n\n**Tips:** Prioritize room levels for team-wide benefits, plan slot order and skill timing, and ascend heroines whose skills fit your team.', images: [{ name: 'Heroine Room level and conversion rate screen', image: './assets/heroine-guides/heroine-room.webp' }] },
    { name: '🛠️ Heroine Room Upgrade Costs', value: '**Level range — Heroine Fans · Break Fans · Gems**\n\n- **1–20:** 191 · 50 · 500\n- **20–40:** 590 · 100 · 1,000\n- **40–60:** 1,035 · 150 · 1,500\n- **60–80:** 1,780 · 200 · 2,000\n- **80–100:** 2,580 · 250 · 2,500\n- **100–120:** 3,551 · 300 · 3,000\n- **120–140:** 4,750 · 350 · 3,500\n- **140–160:** 5,986 · 400 · 4,000\n- **160–180:** 7,220 · 450 · 4,500\n- **180–200:** 9,120 · 500 · 5,000\n- **200–220:** 10,720 · 550 · 5,500\n- **220–240:** 12,320 · 600 · 6,000\n- **240–260:** 14,190 · 650 · 6,500\n- **260–280:** 17,860 · 700 · 7,000\n- **280–300:** 21,860 · max level; no additional Break Fan or gem amount was provided.\n\n**Source totals:** 113,562 Heroine Fans · 5,200 Break Fans · 52,000 gems.' },
    { name: '🎟️ Shards & Summon Sources', value: '**Unlock shards**\n- Red: **100**\n- Gold: **50**\n- Purple: **30**\n\n**Star-up shards**\n- 1★: **50**\n- 2★: **100**\n- 3★: **160**\n- 4★: **230**\n- 5★: **360**\n\nThe supplied note says heroine shard requirements follow the same requirement pattern as Fruits. Screenshots show Kaya at **1/30** and Violet at **0/50**, consistent with displayed unlock amounts.\n\n**Heroine Orders:** Raft Shop is recommended (600 shop currency each in the screenshot). Elimination Shop is another source (500 coins each, monthly limit 10 shown). Duel Shop is optional (800 tokens each, monthly limit 10 shown); the Heroine Advancement Chest is also optional there.', images: [{ name: 'Kaya heroine shard requirement', image: './assets/heroine-guides/kaya-shards.webp' }, { name: 'Kaya shard source and Heroine Summon shortcut', image: './assets/heroine-guides/heroine-summon-source.webp' }, { name: 'Raft Shop Heroine Order', image: './assets/heroine-guides/raft-shop.webp' }, { name: 'Elimination Shop Heroine Order', image: './assets/heroine-guides/elimination-shop.webp' }, { name: 'Duel Shop Heroine Order and optional advancement chest', image: './assets/heroine-guides/duel-shop.webp' }] },
    { name: '⬆️ Heroine Advancement Costs', value: '**Red — Fans / Red Advancement Stones / bonuses**\n- **1★+:** 500 / 4 · +10% ATK & HP, +10 Speed\n- **2★+:** 1,000 / 4 · +20% ATK & HP, +20 Speed\n- **3★+:** 1,500 / 8 · +30% ATK & HP, +30 Speed\n- **4★+:** 2,000 / 8 · +40% ATK & HP, +40 Speed\n- **5★+:** 2,500 / 12 · +50% ATK & HP, +50 Speed\n\n**Gold — Fans / Gold Advancement Stones / bonuses**\n- **1★+:** 400 / 20 · +10% ATK & HP, +5 Speed\n- **2★+:** 800 / 20 · +20% ATK & HP, +10 Speed\n- **3★+:** 1,200 / 40 · +30% ATK & HP, +15 Speed\n- **4★+:** 1,600 / 40 · +40% ATK & HP, +20 Speed\n- **5★+:** 2,000 / 60 · +50% ATK & HP, +25 Speed\n\n**Purple — Fans / Purple Advancement Stones / bonuses**\n- **1★+:** 300 / 100 · +10% ATK & HP, +1 Speed\n- **2★+:** 600 / 100 · +20% ATK & HP, +3 Speed\n- **3★+:** 900 / 200 · +30% ATK & HP, +5 Speed\n- **4★+:** 1,200 / 200 · +40% ATK & HP, +7 Speed\n- **5★+:** 1,500 / 300 · +50% ATK & HP, +12 Speed\n\nThe supplied tip recommends Red for its higher Speed bonus and Purple as a lower-cost option.', images: [{ name: 'Nojiko heroine details', image: './assets/heroine-guides/nojiko.webp' }, { name: 'Violet heroine details', image: './assets/heroine-guides/violet.webp' }, { name: 'Tina heroine details', image: './assets/heroine-guides/tina.webp' }] },
    { name: '💞 Bond Stat Bonuses', value: '**Baby 5 & Vivi** — Unlock: ATK +5%, Crit DMG +4%; 1★: +10% / +7%; 2★: +15% / +10%; 3★: +20% / +13%; 4★: +25% / +16%; 5★: +30% / +20%.\n\n**Rebecca & Reiju** — Unlock: ATK +5%, Extra DMG +2.5%; each star adds ATK +5% and Extra DMG +2.5%, reaching +30% ATK and +15% Extra DMG at 5★.\n\n**Tina & Hiyori** — Unlock: HP +5%, DMG Reduction +2.5%; 1★: +10% / +5%; 2★: +15% / +7.5%; 3★: +20% / +10%; 4★: +25% / +12.5%; 5★: +30% / +15%.\n\n**Ain & Monet** — HP: 3% at unlock, then 3.5%, 4%, 4.5%, 5%, 5.5% at 1★–5★.\n\n**Zala & Violet** — ATK: 3% at unlock, then 3.5%, 4%, 4.5%, 5%, 5.5% at 1★–5★.\n\nArchive bond bonuses apply to all heroes, as shown in the supplied Archive screenshot.', images: [{ name: 'Archive bond examples for Baby 5 and Vivi, and Rebecca and Reiju', image: './assets/heroine-guides/archive-bonds.webp' }] },
    { name: '🏆 Heroine Tier List Reference', value: 'The supplied tier list image groups heroines into **Top Tiers, SSS, SS, S, and Food**. Use it as a community reference for prioritizing investments; no individual names were supplied with the image, so the original image is preserved for identification.', images: [{ name: 'Heroine tier list', image: './assets/heroine-guides/heroine-tier-list.webp' }] }
  ]
};
const BEGINNERS_GUIDE = {
  id: 'beginners-guide',
  group: 'GETTING STARTED',
  title: 'Beginner’s Guide',
  summary: 'Early progression priorities for stats, events, runes, transfers, draws, and daily tasks.',
  content: 'A practical checklist for building a strong account over time. Event schedules and rewards can change, so confirm the current in-game details before spending resources.',
  fields: [
    { name: '📈 Stats Growth: Clan Skills, Albums & Spirits', value: '**Why these matter:** They affect how fast, strong, and durable your units are in battle.\n\n**Clan Skills**\n- DPS benefits from Crit Rate, Crit DMG, and Extra ATK.\n- Defense benefits from Crit Resistance, Debuff Accuracy, and DMG Reduction.\n- Support benefits from Crit Resistance, Debuff Resistance, and DMG Reduction.\n\n**Albums:** Unlock all skills to Lv. 1 first, then upgrade the skills that fit your needs.\n\n**Spirits:** Unlock each faction’s skill; the supplied note says these activate through certain groups during fights.\n\n**Skills:** Some activate when specific battle conditions are met.' },
    { name: '🔄 Assemble Event', value: '- The supplied guide says Assemble resets every **21 days**.\n- It counts 5★ heroes obtained from shards or Tavern draws.\n- It lists the best reward milestones at **65** and **130** pulls.\n- If you cannot reach a milestone during the event, save resources for a later run.\n\nCheck the current event timer and rules in game before using saved summons or shards.' },
    { name: '🔮 Runes & Haki', value: '- Combine **5 Runes at a time** for the recommended efficiency.\n- Avoid spending Rune Shards chasing perfect Runes if you plan to upgrade Haki; the source notes that Haki Lv. 4 is coming.\n- Reroll “Overlord” level Runes with Stardust Runes to match characters that need that Haki.\n\nSee the [Haki & Rune Upgrade Guide](#guides) for priority and cost references.' },
    { name: '🔄 SP Skill Transfer', value: '- Transfer hero level and SP skill level only between heroes of the **same faction**, with both at **Level 11**.\n- The source recommends developing a “dummy” hero and transferring its skills to a harder-to-copy target, such as Big Mom, to save copies and resources.\n\nReview the [SP Skills, Potential & Transfer Guide](#guides) and confirm transfer costs in the in-game preview.' },
    { name: '🏆 Encore / Ranking Draws', value: '**Shard reward milestones from the supplied guide**\n- **100 draws:** 91 / 121 shards\n- **250 draws:** 258 / 268 / 278 / 328 / 348 shards\n- **400 draws:** 414 / 468 / 488 / 518 shards\n- **500 draws:** 575 / 605 / 655 shards\n\nThe notes describe competition as highest in SSS Round 1, medium in SSS Round 2, lower in SSS Round 3 and SS Round 1, and low for other URs described as “dead ones.” Treat these as community estimates; actual shard results depend on the current event and ranking.' },
    { name: '📅 Daily Training Path', value: '1. Log in daily.\n2. Save Arena Tickets so you can use the daily allowance.\n3. Save Advanced Summons for quests and event milestones.\n4. The source suggests spending 20 or 30 gems to finish tasks when unable to defeat the Clan Boss; check the task reward before using gems.\n5. Complete 3 Purple Voyages each day.\n6. Claim the 20-gem Belly option from “More Belly” each time it is available.\n7. Avoid spending gems on Quick Battle unless needed.\n8. Complete Treasure daily; the source estimates 2,000 gems with a 770-gem requirement. Confirm the current costs and rewards in game.' }
  ]
};
const SEA_SOUL_GUIDE = {
  id: 'sea-soul-progression-guide', group: 'SEA SOULS', title: 'Sea Soul Guide',
  summary: 'New bounty draws, Sea Soul rarity and upgrades, reforging, combining, and chapter battles.',
  content: 'Sea Souls are upgraded through draws, enhancement, reforging, and combining. The supplied notes and screenshots describe these mechanics; verify event limits and costs in game.',
  fields: [
    { name: '🎟️ New Bounty & Sea Soul Draws', value: `**New Bounty pack:** the supplied notes list a total of **11,580 diamonds** and **32 blue crystals**. The notes say it can be bought up to **7 times per week** and is required for the featured pulls; additional stones can also come from tasks.

**Draw details:** a 20-pull costs **4,000 diamonds**; there is **1 free pull per day**; each pull adds 1 point to the reward process. The reward process does not reset when it reaches the maximum.

The event screenshot shows a 20-pull draw option and reward track. Review the current event screen before purchasing.`, images: [{ name: 'New Bounty reward track', image: './assets/sea-soul-guide/new-bounty-pass-rewards.webp' }, { name: 'Sea Soul draw and reward milestones', image: './assets/sea-soul-guide/sea-soul-draw.webp' }, { name: 'Sea Soul stone purchase example', image: './assets/sea-soul-guide/sea-soul-stone-purchase.webp' }] },
    { name: '🌈 Rarity, Levels & Buff Unlocks', value: `Sea Souls come in different rarity colors, similar to Artifacts. Higher rarities can be enhanced to higher levels and provide stronger buffs.

- Green Sea Souls cap at **+5**, below the first buff unlock threshold described in the notes.
- Blue Sea Souls can reach **+12** and unlock buffs at **+6, +9, and +12**.
- Purple Sea Souls can reach **+15**.
- Higher rarities have higher enhancement caps; consult the supplied rarity table for its listed caps and refine bonuses.

The screenshots show an example at **+12** with Attack **81**, Debuff Resistance **0.29%**, and Control **0.16%**. These are example rolls, not guaranteed values.`, images: [{ name: 'Sea Soul rarity and refine bonus table', image: './assets/sea-soul-guide/sea-soul-rarity-table.webp' }, { name: 'Example Sea Soul at +12', image: './assets/sea-soul-guide/reforge-hp-control.webp' }] },
    { name: '🎲 Buffs & Reforging', value: `Enhancement unlocks random buffs. Examples include Dodge, Accuracy, DMG Resistance, Debuff Resistance, and Debuff Accuracy. Buffs have rarity colors from green through red and rainbow; rainbow is the rarest, and higher-color buffs can be stronger.

Reforge Stones reroll buff values. Each reforge gives random results. You can lock a buff to keep it while rerolling others; locking increases the material cost. Auto-reforge is available, with an option to stop when a red buff appears. The source describes Reforge Stones as reasonably obtainable.

The screenshots show locked buff rows, different reforge costs, and an auto-reforge control. Check the material cost before repeated reforges.`, images: [{ name: 'Reforge with Dodge, Accuracy, and Control buffs', image: './assets/sea-soul-guide/reforge-dodge-accuracy-control.webp' }, { name: 'Reforge with HP and Control buffs', image: './assets/sea-soul-guide/reforge-hp-control.webp' }] },
    { name: '🔗 Combining Sea Souls', value: `- Combining requires Sea Souls of at least **Gold** rarity and the **same type**.
- The three older Sea Souls’ enhancement experience carries into the upgraded Sea Soul.
- Their random buffs do **not** carry over.

The supplied screenshot shows the three-to-one combining preview.`, images: [{ name: 'Three Sea Souls combine into one', image: './assets/sea-soul-guide/combining-preview.webp' }] },
    { name: '⚔️ Sea Soul Chapter Battles', value: `The mode is described as a mix of Fish Island, Impel Down, and Infinite Trials.

- There are **30+ chapters**, with **20 stages per chapter** (for example, 1-1 through 1-20).
- Clear up to **5 stages per day**; skipping becomes available from **stage 1-10**, according to the notes.
- Most battles require **2 teams**, and both teams must win to pass. If one team loses, retry the stage.
- Some stages also require a specified faction or role; some ask for **3 teams**.

Build multiple capable teams and check each stage’s restrictions before entering.`, images: [{ name: 'Fish Island training entrance reference', image: './assets/sea-soul-guide/fish-island-training.webp' }, { name: 'Chapter 13 stage example', image: './assets/sea-soul-guide/chapter-stage.webp' }, { name: 'Selecting a battle team', image: './assets/sea-soul-guide/team-formation.webp' }, { name: 'First team battle result', image: './assets/sea-soul-guide/battle-result-team1.webp' }, { name: 'Second team battle result', image: './assets/sea-soul-guide/battle-result-team2.webp' }] },
    { name: '📊 Type & Role Reference', value: 'The supplied images rank Sea Soul types for DPS, Tank, and Support using strong / mid / weak or best / mid / bad tiers. The icons are preserved so you can match each type to its in-game symbol.', images: [{ name: 'Sea Soul DPS type rankings', image: './assets/sea-soul-guide/dps-type-rankings.webp' }, { name: 'Sea Soul Tank type rankings', image: './assets/sea-soul-guide/tank-type-rankings.webp' }, { name: 'Sea Soul Support type rankings', image: './assets/sea-soul-guide/support-type-rankings.webp' }] }
  ]
};
const VIP_LEVELS_GUIDE = {
  id: 'vip-cost-guide',
  group: 'VIP & SPENDING',
  title: 'VIP Cost Guide',
  summary: 'Cumulative spend costs for VIP levels 1 through 15.',
  content: 'The supplied guide lists the spend amount associated with each VIP level. Check the current in-game VIP screen for the applicable currency, region, and progress rules.',
  fields: [
    { name: '💎 VIP Level Costs', value: '- **VIP 1:** $1\n- **VIP 2:** $10\n- **VIP 3:** $20\n- **VIP 4:** $50\n- **VIP 5:** $100\n- **VIP 6:** $200\n- **VIP 7:** $300\n- **VIP 8:** $450\n- **VIP 9:** $600\n- **VIP 10:** $950\n- **VIP 11:** $2,000\n- **VIP 12:** $3,000\n- **VIP 13:** $4,000\n- **VIP 14:** $6,000\n- **VIP 15:** $8,500' }
  ]
};
const ALBUMS_SPIRITS_GUIDE = {
  id: 'albums-and-spirits-guide',
  group: 'ALBUMS & SPIRITS',
  title: 'Albums & Spirits Guide',
  summary: 'Album skill priorities, spirit skills, album progression order, and stat boosts.',
  content: 'Albums and Spirits affect combat through stat boosts and skills that activate when specific conditions are met. Use the progression notes below to plan upgrades.',
  fields: [
    { name: '📖 Album Skills', value: 'Unlock every album skill to **Level 1** before raising any individual skill further. Then choose upgrades to match your team’s needs.' },
    { name: '💫 Spirit Skills', value: 'Unlock every faction’s Spirit skill. Each activates through certain groups during fights.' },
    { name: '⚙️ Skill Activations', value: 'Skills can significantly affect battles. Some activate only when their specific criteria are met.' },
    { name: '🔢 Album Progression', value: '- **22/00/00**\n- **22/11/00**\n- **22/11/22**\n- **22/22/22** while pushing Volume 1\n- **34/22/22**\n\nFocus on **Volume 1** first. For HP boosts, prioritize **Volume 2**; for Speed, prioritize **Volume 3**.' },
    { name: '📈 Stat Boosts', value: 'While following this progression, aim to collect as many **4 Emperor percentage stat boosts** as possible.' }
  ]
};
const SEA_SOUL_CONTENT_KEY = 'pirate-reborn-sea-soul-entries-v1';
let customGuides = [];
let seaSoulEntries = [];
let editingSeaSoulId = '';
let editingSeaSoulImage = '';
let editingSeaSoulSkillImage = '';
const $ = selector => document.querySelector(selector);
const grid = $('#guide-grid');
const empty = $('#empty-state');
const dialog = $('#guide-dialog');
const pasteDialog = $('#paste-dialog');
const discordConnectDialog = $('#discord-connect-dialog');
const toast = $('#toast');
const searchSuggestions = $('#search-suggestions');
let toastTimer;
let installPrompt;
const GUIDE_GRID_PAGE_SIZE = 24;
let guideGridPageSignature = '';
let guideGridCurrentPage = 1;
let editingId = null;
let editingGuidePhotos = { seaSoul: [], artifacts: [] };
let editingSkillPhotos = [];
let urSparkleObserver = null;
let discordConnected = false;
let discordRequestToken = '';

function loadSaved() {
  try {
    const deleted = JSON.parse(localStorage.getItem(DELETED_GUIDES_KEY) || '[]');
    deletedGuideIds = new Set(Array.isArray(deleted) ? deleted : []);
  } catch { deletedGuideIds = new Set(); }
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    state.guides = Array.isArray(saved.guides) ? saved.guides.filter(guide => !deletedGuideIds.has(guide.id)) : [];
  } catch { state.guides = []; }
  let added = false;
  const beforeHakiGuideCleanup = state.guides.length;
  state.guides = state.guides.filter(guide => guide.id !== HAKI_RUNE_GUIDE.id);
  if (state.guides.length !== beforeHakiGuideCleanup) added = true;
  const beforePlaceholderCleanup = state.guides.length;
  state.guides = state.guides.filter(guide => !/^unit-edit-later-08[1-5]$/.test(guide.id || ''));
  if (state.guides.length !== beforePlaceholderCleanup) added = true;
  for (const guide of state.guides) {
    if (guide.id === 'ace-x-yamato-build-card-1413481194951020554' || guide.title?.trim().toLowerCase() === 'ace × yamato') {
      const cleanedContent = String(guide.content || '').replace(/(^|\n)[ \t]*\.[ \t]*(?=\n|$)/g, '$1').replace(/\n{3,}/g, '\n\n').trim();
      if (cleanedContent !== (guide.content || '')) {
        guide.content = cleanedContent;
        added = true;
      }
    }
    const oldPlaceholder = /^(?:unit-placeholder|unit-edit-later)-(\d{3})$/.exec(guide.id || '');
    if (oldPlaceholder && Number(oldPlaceholder[1]) <= 80) {
      if (guide.category !== 'ur-list') {
        guide.category = 'ur-list';
        added = true;
      }
      const originalTags = Array.isArray(guide.tags) ? guide.tags : [];
      const restoredTags = originalTags.filter(tag => String(tag).toLowerCase() !== 'regular units');
      if (restoredTags.length !== originalTags.length) {
        guide.tags = restoredTags;
        added = true;
      }
    }
    if (Array.isArray(guide.imageVariants)) {
      delete guide.imageVariants;
      added = true;
    }
    if (guide.id === 'burgess-build-card-1504916004952870964' || guide.title?.toLowerCase() === 'burgess (1st captain) — build card'.toLowerCase()) {
      const filteredTags = (guide.tags || []).filter(tag => tag.toLowerCase() !== 'burgess');
      if (filteredTags.length !== (guide.tags || []).length) {
        guide.tags = filteredTags;
        added = true;
      }
    }
    if (guide.id === '3ss-nami-build-card-1555658965000527902' || guide.title?.toLowerCase() === '3ss nami — build card'.toLowerCase()) {
      if (guide.category !== 'ur-list') {
        guide.category = 'ur-list';
        added = true;
      }
    }
  }
  for (const [slot, build] of Object.entries(REGULAR_UNIT_BUILDS)) {
    const guide = state.guides.find(item => item.id === `regular-unit-placeholder-${slot}`);
    if (!guide) continue;
    const fields = [
      { name: '🌀 HAKI / RUNES', value: `▸ ${build.haki.split('\n').join('\n▸ ')}` },
      { name: '🔮 RELICS', value: `▸ ${build.relics.split('\n').join('\n▸ ')}` },
      ...(build.relicStats ? [{ name: '📊 RELIC STATS', value: `▸ ${build.relicStats.split(', ').join('\n▸ ')}` }] : []),
      ...(build.refine ? [{ name: '⚒️ REFINE STATS', value: `▸ ${build.refine.split(', ').join('\n▸ ')}` }] : [])
    ];
    const tags = [...new Set([...(guide.tags || []).filter(tag => !/placeholder|regular units|^slot\s+\d+$/i.test(tag)), 'Regular Units'])];
    const summary = '';
    if (guide.title !== build.title || guide.summary !== summary || guide.category !== 'regular-units' || JSON.stringify(guide.fields) !== JSON.stringify(fields) || JSON.stringify(guide.tags) !== JSON.stringify(tags) || guide.content) {
      guide.title = build.title;
      guide.summary = summary;
      guide.category = 'regular-units';
      guide.content = '';
      guide.fields = fields;
      guide.tags = tags;
      guide.source = build.source || 'User supplied regular unit build';
      guide.updatedAt = new Date().toISOString();
      added = true;
    }
  }
  const rayleighGuide = state.guides.find(guide => guide.title?.trim().toLowerCase() === 'ray' && guide.category === 'regular-units');
  if (rayleighGuide) {
    const hakiField = { name: '🌀 HAKI / RUNES', value: '▸ Priority: Speed, Combo, Penetration, Crit DMG, Attack, Advanced Attack, Stun' };
    const relicField = { name: '🔮 RELICS', value: '▸ Mystic Leader (Crit DMG)' };
    const refineField = { name: '⚒️ REFINE STATS', value: '▸ Speed\n▸ Crit DMG\n▸ ATK %\n▸ Crit Rate' };
    const fieldGroups = [
      { field: hakiField, matches: /haki|rune/i },
      { field: relicField, matches: /relic/i },
      { field: refineField, matches: /refine/i }
    ];
    let fields = Array.isArray(rayleighGuide.fields) ? [...rayleighGuide.fields] : [];
    for (const group of fieldGroups) {
      const index = fields.findIndex(field => group.matches.test(field.name || ''));
      if (index < 0) fields.push(group.field);
      else fields[index] = group.field;
    }
    const nextTitle = 'Rayleigh (Yonko)';
    const nextSummary = 'Haki and rune priorities, Mystic Leader relic, and refine stats for Rayleigh (Yonko).';
    if (rayleighGuide.title !== nextTitle || rayleighGuide.summary !== nextSummary || JSON.stringify(rayleighGuide.fields) !== JSON.stringify(fields)) {
      rayleighGuide.title = nextTitle;
      rayleighGuide.summary = nextSummary;
      rayleighGuide.fields = fields;
      rayleighGuide.updatedAt = new Date().toISOString();
      added = true;
    }
  }
  for (const guide of READY_GUIDES) {
    if (deletedGuideIds.has(guide.id)) continue;
    if (!state.guides.some(item => item.id === guide.id || item.title?.toLowerCase() === guide.title.toLowerCase())) {
      state.guides.push({ ...guide });
      added = true;
    }
  }
  // Run after regular-unit migrations so stale saved entries cannot move
  // UR placeholders back into the regular list during startup.
  for (const guide of state.guides) {
    if (!['ur-unit-weevil', 'ur-unit-shiryu'].includes(guide.id) && !['weevil', 'shiryu'].includes(guide.title?.trim().toLowerCase())) continue;
    if (guide.category !== 'ur-list') {
      guide.category = 'ur-list';
      added = true;
    }
    const tags = Array.isArray(guide.tags) ? guide.tags : [];
    const correctedTags = tags.filter(tag => !['regular units', 'regular-unit'].includes(String(tag).trim().toLowerCase()));
    if (correctedTags.length !== tags.length) {
      guide.tags = correctedTags;
      added = true;
    }
  }
  if (added) persist();
}

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ guides: state.guides })); return true; }
  catch { showToast('This device is out of storage space. Choose smaller images or remove some guides, then retry.'); return false; }
}

function slug(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) || 'guide';
}

function canonicalCategory(value) {
  const category = String(value || 'Discord import').trim() || 'Discord import';
  return CHANNEL_CATEGORIES.find(item => item.toLowerCase() === category.toLowerCase()) || category;
}

function makeGuide(input, source = 'Imported') {
  let content = String(input.content ?? input.Contents ?? input.body ?? input.text ?? '').trim();
  content += formatEmbeds(input.embeds ?? input.Embeds);
  const firstHeading = content.match(/^\s{0,3}#{1,3}\s+(.+)$/m);
  const firstLine = content.split(/\r?\n/).map(line => line.trim()).find(Boolean) || '';
  const title = String(input.title ?? input.Title ?? input.name ?? '').trim() || (firstHeading?.[1] || firstLine).replace(/^#{1,6}\s*/, '').slice(0, 80) || 'Untitled guide';
  const cleanContent = firstHeading && !(input.title || input.Title || input.name) ? content.replace(firstHeading[0], '').trim() : content;
  let attachments = input.attachments ?? input.Attachments ?? [];
  if (typeof attachments === 'string') { try { attachments = JSON.parse(attachments); } catch { attachments = []; } }
  if (!Array.isArray(attachments)) attachments = [];
  const links = attachments.map(item => typeof item === 'string' ? { url: item } : item)
    .filter(item => typeof (item.url ?? item.URL ?? item.link) === 'string')
    .map(item => {
      const url = item.url ?? item.URL ?? item.link;
      const name = item.filename ?? item.name ?? 'Discord attachment';
      return isDiscordImage(url) ? `![${name}](${url})` : `- [${name}](${url})`;
    });
  const fullContent = cleanContent + (links.length ? `\n\nAttachments:\n${links.join('\n')}` : '');
  const tags = Array.isArray(input.tags) ? input.tags.map(String).filter(Boolean) : [];
  const category = canonicalCategory(input.category ?? input.Category ?? input.channel ?? input.channelName ?? 'Discord import');
  const summary = String(input.summary ?? input.Summary ?? '').trim() || fullContent.replace(/[#>*_`~\[\]()]/g, ' ').replace(/\s+/g, ' ').slice(0, 180);
  return {
    id: `${slug(title)}-${cryptoRandom()}`,
    title, category, summary, content: fullContent || summary,
    tags, source,
    date: String(input.date ?? input.Timestamp ?? input.timestamp ?? '').slice(0, 25),
    favorite: false
  };
}

function safeUrl(value) {
  if (/^\.\/(?:regular-unit|unit|heroine|artifact)-placeholder-images\/\d{3}\.png$/.test(String(value || '')) || /^\.\/assets\/[a-z\d/_-]+\.(?:png|jpe?g|webp)$/i.test(String(value || ''))) return new URL(value, window.location.href).href;
  try {
    const url = new URL(String(value));
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
}

function safeImageUrl(value) {
  const image = String(value || '').trim();
  if (/^data:image\/(?:png|jpe?g|gif|webp|avif);base64,[a-z\d+/]+=*$/i.test(image)) return image;
  return safeUrl(image);
}

function isDiscordImage(value) {
  if (/^data:image\/(png|jpe?g|gif|webp|avif);base64,/i.test(String(value || ''))) return true;
  if (/^\.\/(?:regular-unit|unit|heroine|artifact)-placeholder-images\/\d{3}\.png$/.test(String(value || ''))) return true;
  const safe = safeUrl(value);
  if (!safe) return false;
  try {
    const url = new URL(safe);
    return ['http:', 'https:'].includes(url.protocol);
  } catch { return false; }
}

function formatEmbeds(value) {
  if (!value) return '';
  let embeds = value;
  if (typeof embeds === 'string') { try { embeds = JSON.parse(embeds); } catch { return ''; } }
  if (!Array.isArray(embeds)) embeds = [embeds];
  return embeds.map(embed => {
    if (!embed || typeof embed !== 'object') return '';
    const blocks = [];
    const author = embed.author?.name;
    if (author) blocks.push(`**${author}**`);
    if (embed.title) {
      const title = String(embed.title).replace(/\r?\n/g, ' ');
      blocks.push(`### ${embed.url ? `[${title}](${embed.url})` : title}`);
    }
    if (embed.description) blocks.push(String(embed.description));
    for (const field of embed.fields || []) {
      if (field?.name || field?.value) blocks.push(`**${field.name || 'Details'}**\n${field.value || ''}`);
    }
    const image = embed.image?.url ?? embed.thumbnail?.url;
    if (image && isDiscordImage(image)) blocks.push(`![${embed.title || 'Discord embed image'}](${image})`);
    if (embed.footer?.text) blocks.push(`_${embed.footer.text}_`);
    return blocks.join('\n\n');
  }).filter(Boolean).map(block => `\n\n${block}`).join('');
}

function cryptoRandom() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID().slice(0, 8);
  return Math.random().toString(36).slice(2, 10);
}

async function readImageFile(file) {
  if (!file) return '';
  if (!file.type.startsWith('image/')) throw new Error('Choose an image or GIF file.');
  if (file.size > 8 * 1024 * 1024) throw new Error('Choose an image smaller than 8 MB.');
  if (file.type === 'image/gif') {
    if (file.size > 1200 * 1024) throw new Error('Choose a GIF smaller than 1.2 MB so it fits in the guide library.');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error('Could not read that GIF file.'));
      reader.readAsDataURL(file);
    });
  }
  if (globalThis.createImageBitmap) {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, 1400 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    return canvas.toDataURL('image/webp', 0.78);
  }
  if (file.size > 1200 * 1024) throw new Error('This browser cannot compress the image. Choose one smaller than 1.2 MB.');
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Could not read that image file.'));
    reader.readAsDataURL(file);
  });
}

function selectedImage(urlInput, fileInput) {
  const file = fileInput.files?.[0];
  if (file) return readImageFile(file);
  const url = urlInput.value.trim();
  return Promise.resolve(isDiscordImage(url) ? safeImageUrl(url) : '');
}

function parseDiscordJson(data, filename) {
  const rows = Array.isArray(data) ? data : Array.isArray(data?.messages) ? data.messages : Array.isArray(data?.Messages) ? data.Messages : Array.isArray(data?.guides) ? data.guides : null;
  if (!rows) throw new Error('JSON should be a Discord message list or a {"guides": [...]} file.');
  const channelName = data?.channel?.name ?? data?.Channel?.name ?? data?.channelName ?? data?.channel_name ?? filename.replace(/\.[^.]+$/, '');
  const source = `Discord · ${channelName}`;
  const guides = rows.map(row => {
    const item = { ...row, category: row.category ?? row.Category ?? channelName };
    if (!item.content && row.Content) item.content = row.Content;
    return makeGuide(item, source);
  }).filter(guide => guide.content.trim().length >= 35);
  return guides;
}

function parseCsv(text, filename) {
  const rows = [];
  let row = [], cell = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted && char === '"' && text[i + 1] === '"') { cell += '"'; i++; }
    else if (char === '"') quoted = !quoted;
    else if (!quoted && char === ',') { row.push(cell); cell = ''; }
    else if (!quoted && (char === '\n' || char === '\r')) {
      if (char === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += char;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  if (rows.length < 2) throw new Error('CSV export has no message rows.');
  const headers = rows.shift().map(value => value.trim().toLowerCase());
  const get = (obj, ...names) => names.map(name => obj[headers.indexOf(name)]).find(value => value !== undefined) || '';
  return rows.map(values => {
    const obj = Object.fromEntries(headers.map((header, i) => [header, values[i] ?? '']));
    return makeGuide({
      title: get(values, 'title'), content: get(obj, 'contents', 'content', 'message'),
      timestamp: get(obj, 'timestamp'), attachments: get(obj, 'attachments'), channel: filename.replace(/\.[^.]+$/, '')
    }, `Discord CSV · ${filename}`);
  }).filter(guide => guide.content.trim().length >= 35);
}

function parseMarkdown(text, filename) {
  const normalized = text.replace(/\r/g, '').trim();
  if (!normalized) return [];
  const sections = normalized.split(/\n(?=---\s*\n)/).map(part => part.replace(/^---\s*\n/, '').trim()).filter(Boolean);
  return sections.map(section => makeGuide({ content: section, category: 'Discord import' }, `Markdown · ${filename}`));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function inlineMarkdown(value) {
  let html = escapeHtml(value);
  const embeddedMarkup = [];
  const keepMarkup = markup => `\u0000${embeddedMarkup.push(markup) - 1}\u0000`;
  html = html.replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g, (match, alt, url) => {
    const originalUrl = url.replace(/&amp;/g, '&');
    return keepMarkup(isDiscordImage(originalUrl) ? `<img src="${url}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer">` : `<a href="${url}" target="_blank" rel="noopener noreferrer">${alt || 'View image'}</a>`);
  }).replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, (match, label, url) => keepMarkup(`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`));
  html = html.replace(/https?:\/\/[^\s<]+/g, url => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
  return html.replace(/\u0000(\d+)\u0000/g, (match, index) => embeddedMarkup[Number(index)] || '');
}

function markdownToHtml(markdown) {
  const lines = String(markdown).replace(/\r/g, '').split('\n');
  const output = [];
  let paragraph = [], list = null, code = false, codeLines = [];
  const flushParagraph = () => { if (paragraph.length) output.push(`<p>${paragraph.map(inlineMarkdown).join('<br>')}</p>`); paragraph = []; };
  const flushList = () => { if (list) output.push(`</${list}>`); list = null; };
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      flushParagraph(); flushList();
      if (code) { output.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`); codeLines = []; code = false; }
      else code = true;
      continue;
    }
    if (code) { codeLines.push(line); continue; }
    const heading = line.match(/^\s{0,3}(#{1,3})\s+(.+)$/);
    const bullet = line.match(/^\s*[-*+]\s+(.+)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    const quote = line.match(/^\s*>\s?(.*)$/);
    if (!line.trim()) { flushParagraph(); flushList(); continue; }
    if (heading) { flushParagraph(); flushList(); const level = heading[1].length; output.push(`<h${level + 1}>${inlineMarkdown(heading[2])}</h${level + 1}>`); continue; }
    if (bullet || numbered) {
      flushParagraph(); const type = bullet ? 'ul' : 'ol';
      if (list !== type) { flushList(); output.push(`<${type}>`); list = type; }
      output.push(`<li>${inlineMarkdown((bullet || numbered)[1])}</li>`); continue;
    }
    if (quote) { flushParagraph(); flushList(); output.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`); continue; }
    flushList(); paragraph.push(line);
  }
  flushParagraph(); flushList();
  if (code) output.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  return output.join('\n');
}

function showToast(message) {
  toast.replaceChildren(document.createTextNode(message)); toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function showUndoToast(message, onUndo) {
  const undo = document.createElement('button');
  undo.type = 'button'; undo.className = 'toast-undo'; undo.textContent = 'Undo';
  undo.addEventListener('click', () => { clearTimeout(toastTimer); toast.classList.remove('show'); onUndo(); }, { once: true });
  toast.replaceChildren(document.createTextNode(`${message} `), undo); toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 6000);
}

function categoryList() {
  const extras = [...new Set(state.guides.map(guide => guide.category).filter(Boolean))]
    .filter(category => !CHANNEL_CATEGORIES.includes(category)).sort((a, b) => a.localeCompare(b));
  const categories = CHANNEL_CATEGORIES.filter(category => category !== 'ur-skills' && state.guides.some(guide => (guide.category || 'Guide') === category)).concat(extras);
  if (!categories.includes(state.category)) state.category = categories.includes('ur-list') ? 'ur-list' : categories[0] || 'ur-list';
  const countFor = category => state.guides.filter(guide => (guide.category || 'Guide') === category).length;
  const categoryLabel = category => ({ 'regular-units': 'Regular units', 'ur-list': 'UR units' }[category] || category);
  $('#category-list').innerHTML = categories.map(category => `<button class="chip" data-category="${escapeHtml(category)}" aria-pressed="${state.category === category}"><span>${escapeHtml(categoryLabel(category))}</span><b>${countFor(category)}</b></button>`).join('');
  const activeRosterLabel = categoryLabel(state.category);
  const rosterTitle = $('#unit-builds-title');
  if (rosterTitle) rosterTitle.textContent = activeRosterLabel === 'UR units' || activeRosterLabel === 'Regular units' ? activeRosterLabel : 'Unit Builds';
  const tags = [...new Set(state.guides.flatMap(guide => guide.tags || []).filter(Boolean))];
  if (state.tag && !tags.includes(state.tag)) state.tag = '';
  const normalized = tag => tag.trim().toLowerCase().replace(/[ _-]+/g, ' ');
  const findTag = value => tags.find(tag => normalized(tag) === value);
  const roles = ['dps', 'tank', 'support'].map(findTag).filter(Boolean);
  const unitTags = ['ur list', 'regular units', 'placeholder'].map(findTag).filter(Boolean);
  const assigned = new Set([...roles, ...unitTags]);
  const otherTags = tags.filter(tag => !assigned.has(tag)).sort((a, b) => a.localeCompare(b));
  const options = list => list.map(tag => `<option value="${escapeHtml(tag)}">${escapeHtml(tag)}</option>`).join('');
  $('#tag-select').innerHTML = `<option value="">All tags</option>${roles.length ? `<optgroup label="Roles">${options(roles)}</optgroup>` : ''}${otherTags.length ? `<optgroup label="Guide tags">${options(otherTags)}</optgroup>` : ''}${unitTags.length ? `<optgroup label="Unit groups">${options(unitTags)}</optgroup>` : ''}`;
  $('#tag-select').value = state.tag;
  const tagMenu = $('#tag-select-menu');
  if (tagMenu) {
    const optionButton = tag => `<button type="button" role="option" data-tag-option="${escapeHtml(tag)}" aria-selected="${state.tag === tag}">${escapeHtml(tag || 'All tags')}</button>`;
    const groupMenu = (label, items) => items.length ? `<section class="ios-select-group"><span>${label}</span>${items.map(optionButton).join('')}</section>` : '';
    tagMenu.innerHTML = `${optionButton('')}${groupMenu('ROLES', roles)}${groupMenu('GUIDE TAGS', otherTags)}${groupMenu('UNIT GROUPS', unitTags)}`;
    $('#tag-select-label').textContent = state.tag || 'All tags';
    $('#tag-select-button').setAttribute('aria-expanded', String(!tagMenu.hidden));
  }
}

function updateSearchSuggestions() {
  const input = $('#search-input');
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const query = normalize(input.value).trim();
  const terms = query.split(/\s+/).filter(Boolean);
  if (!terms.length || query.length < 2) {
    searchSuggestions.hidden = true;
    searchSuggestions.innerHTML = '';
    input.setAttribute('aria-expanded', 'false');
    return;
  }
  const matches = state.guides.map(guide => {
    const title = normalize(guide.title);
    const text = normalize([guide.title, guide.category, guide.summary, guide.content, ...(guide.fields || []).flatMap(field => [field.name, field.value]), ...(guide.tags || [])].join(' '));
    if (!terms.every(term => text.includes(term))) return null;
    const rank = terms.reduce((score, term) => score + (title === term ? 100 : title.startsWith(term) ? 40 : title.includes(term) ? 20 : 0), 0);
    return { guide, rank };
  }).filter(Boolean).sort((a, b) => b.rank - a.rank || a.guide.title.localeCompare(b.guide.title)).slice(0, 5);
  searchSuggestions.innerHTML = matches.map(({ guide }) => `<button type="button" class="search-suggestion" role="option" data-suggestion-id="${escapeHtml(guide.id)}"><span class="suggestion-title">${escapeHtml(guide.title)}</span><span class="suggestion-meta">${escapeHtml(guide.category || 'Guide')} · ${escapeHtml(guide.summary || '')}</span></button>`).join('');
  searchSuggestions.hidden = matches.length === 0;
  input.setAttribute('aria-expanded', String(matches.length > 0));
}

function saveTopTierIds() {
  try { localStorage.setItem(TOP_TIERS_KEY, JSON.stringify(topTierGroups)); savedTopTierGroups = structuredClone(topTierGroups); return true; }
  catch { showToast('Could not save Top Tiers on this device.'); return false; }
}
function updateTopTierGroups(nextGroups) {
  const previous = topTierGroups;
  topTierGroups = nextGroups;
  if (saveTopTierIds()) return true;
  topTierGroups = previous;
  return false;
}
function tierGroupDirty(groupId) { return JSON.stringify(topTierGroups[groupId]) !== JSON.stringify(savedTopTierGroups[groupId]); }

function loadTopTierIds() {
  try {
    const stored = JSON.parse(localStorage.getItem(TOP_TIERS_KEY) || '[]');
    const source = Array.isArray(stored)
      ? { 'dps-meta': stored }
      : (stored && typeof stored === 'object' ? stored : {});
    const knownIds = new Set(state.guides.map(guide => guide.id));
    const usedGuideIds = new Set();
    const normalized = Object.fromEntries(TIER_GROUPS.map(group => [group.id, []]));
    const oldLevelIds = { 'top-tiers': 'meta', sss: 'tier1', ss: 'tier2', s: 'tier3' };
    const priority = { dps: 0, tank: 1, support: 2, control: 3, other: 4 };
    for (const group of [...TIER_GROUPS].sort((a, b) => priority[a.roleId] - priority[b.roleId])) {
      const legacyLevel = oldLevelIds[group.levelId];
      const legacyGroupId = legacyLevel ? `${group.roleId}-${legacyLevel}` : '';
      const ids = Array.isArray(source[group.id]) ? source[group.id]
        : legacyGroupId && Array.isArray(source[legacyGroupId]) ? source[legacyGroupId]
        : group.roleId === 'dps' && legacyLevel && Array.isArray(source[legacyLevel]) ? source[legacyLevel] : [];
      normalized[group.id] = ids.filter(id => knownIds.has(id) && !usedGuideIds.has(id) && usedGuideIds.add(id));
    }
    topTierGroups = normalized;
  } catch { topTierGroups = Object.fromEntries(TIER_GROUPS.map(group => [group.id, []])); }
  try { localStorage.setItem(TOP_TIERS_KEY, JSON.stringify(topTierGroups)); } catch {}
  savedTopTierGroups = structuredClone(topTierGroups);
}

function renderTopTiers() {
  const container = $('#tier-rankings');
  container.innerHTML = TIER_ROLES.map(role => `<section class="tier-role" aria-labelledby="tier-role-${role.id}"><div class="tier-role-heading"><h3 id="tier-role-${role.id}">${role.label}</h3><span>UNIT RANKINGS</span></div><div class="tier-role-ranks">${TIER_GROUPS.filter(group => group.roleId === role.id).map(group => {
    const guides = topTierGroups[group.id].map(id => state.guides.find(guide => guide.id === id)).filter(Boolean);
    const tiles = guides.map(guide => {
      const imageUrl = safeImageUrl(guide.imageTop) || safeImageUrl(guide.imageBottom);
      const art = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(guide.title)}" loading="lazy" referrerpolicy="no-referrer">` : '<span aria-hidden="true">✦</span>';
      return `<article class="tier-unit-card" draggable="true" data-tier-card="${escapeHtml(guide.id)}" data-tier-rank="${group.id}"><button class="tier-unit-open" type="button" data-open-tier="${escapeHtml(guide.id)}" aria-label="Open ${escapeHtml(guide.title)} build" title="${escapeHtml(guide.title)}"><span class="tier-unit-art">${art}</span></button><button class="tier-unit-remove" type="button" data-remove-tier="${escapeHtml(guide.id)}" data-tier-rank="${group.id}" aria-label="Remove ${escapeHtml(guide.title)} from ${group.label}" title="Remove from ${group.label}">×</button></article>`;
    }).join('');
    return `<section class="tier-rank" data-tier-level="${group.levelId}" aria-labelledby="tier-rank-${group.id}-title"><div class="tier-rank-header"><h4 id="tier-rank-${group.id}-title">${group.label}</h4><div class="tier-heading-actions"><span class="tier-empty-badge" data-tier-count="${group.id}">${guides.length}</span><button class="button button-outline tier-save-button" type="button" data-tier-save="${group.id}"${tierGroupDirty(group.id) ? '' : ' hidden'}>Save</button><button class="tier-add-button" type="button" data-tier-add="${group.id}" aria-label="Add a unit to ${group.label} ${role.label}" title="Add a unit to ${group.label} ${role.label}">＋</button></div></div><p class="tier-rank-empty"${guides.length ? ' hidden' : ''}>Use ＋ to add units</p><div class="top-tiers-grid" data-tier-grid="${group.id}"${guides.length ? '' : ' hidden'}>${tiles}</div></section>`;
  }).join('')}</div></section>`).join('');
}

function renderTierPicker() {
  const assigned = new Set(TIER_GROUPS.flatMap(group => topTierGroups[group.id]));
  const query = $('#tier-picker-search').value.trim().toLowerCase();
  const available = state.guides.filter(guide => !assigned.has(guide.id) && (!query || [guide.title, guide.category, guide.summary, ...(guide.tags || [])].join(' ').toLowerCase().includes(query)));
  $('#tier-picker-list').innerHTML = available.length ? available.map(guide => {
    const imageUrl = safeImageUrl(guide.imageTop) || safeImageUrl(guide.imageBottom);
    const art = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<span aria-hidden="true">✦</span>';
    return `<button class="tier-picker-option" type="button" data-add-tier="${escapeHtml(guide.id)}"><span class="tier-picker-art">${art}</span><span><small>${escapeHtml(guide.category || 'Unit Build')}</small><strong>${escapeHtml(guide.title)}</strong><span>${escapeHtml(guide.summary || '')}</span></span><b aria-hidden="true">＋</b></button>`;
  }).join('') : `<p class="tier-picker-empty">${query ? 'No unit builds match that search.' : 'All available builds are already assigned to the tier list.'}</p>`;
}

function loadWishBannerUnits() {
  try {
    const stored = JSON.parse(localStorage.getItem(WISH_BANNER_KEY) || '{}');
    const knownIds = new Set(state.guides.map(guide => guide.id));
    const claimedIds = new Set();
    wishBannerUnits = Object.fromEntries(WISH_BANNERS.map(banner => {
      const ids = Array.isArray(stored[banner.id]) ? stored[banner.id] : [];
      const uniqueIds = [...new Set(ids.filter(id => knownIds.has(id) && !claimedIds.has(id)))];
      uniqueIds.forEach(id => claimedIds.add(id));
      return [banner.id, uniqueIds];
    }));
    localStorage.setItem(WISH_BANNER_KEY, JSON.stringify(wishBannerUnits));
  } catch { wishBannerUnits = Object.fromEntries(WISH_BANNERS.map(banner => [banner.id, []])); }
  savedWishBannerUnits = structuredClone(wishBannerUnits);
}

function saveWishBannerUnits() {
  try { localStorage.setItem(WISH_BANNER_KEY, JSON.stringify(wishBannerUnits)); savedWishBannerUnits = structuredClone(wishBannerUnits); return true; }
  catch { showToast('Could not save this wish banner on this device.'); return false; }
}
function wishBannerDirty(bannerId) { return JSON.stringify(wishBannerUnits[bannerId]) !== JSON.stringify(savedWishBannerUnits[bannerId]); }

function daysUntilWish(day) {
  const [year, month, date] = day.split('-').map(Number);
  const target = Date.UTC(year, month - 1, date);
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((target - today) / 86400000);
}

function countdownUntilWish(day) {
  const target = day.includes('T') ? new Date(day).getTime() : (() => {
    const [year, month, date] = day.split('-').map(Number);
    return new Date(year, month - 1, date).getTime();
  })();
  const remainingMinutes = Math.max(0, Math.floor((target - Date.now()) / 60000));
  const days = Math.floor(remainingMinutes / 1440);
  const hours = Math.floor((remainingMinutes % 1440) / 60);
  const minutes = remainingMinutes % 60;
  return `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m`;
}

function daysBetweenWishDates(fromDay, toDay) {
  const [fromYear, fromMonth, fromDate] = fromDay.split('-').map(Number);
  const [toYear, toMonth, toDate] = toDay.split('-').map(Number);
  return Math.max(0, Math.round((Date.UTC(toYear, toMonth - 1, toDate) - Date.UTC(fromYear, fromMonth - 1, fromDate)) / 86400000));
}

function updateWishStatuses() {
  const wasLive = $('#wish-banner-board')?.classList.contains('is-live');
  renderWishBanner();
  const isLive = $('#wish-banner-board')?.classList.contains('is-live');
  if (!wasLive && isLive && activePage === 'wish-calendar') requestAnimationFrame(() => $('#wish-banner-board').scrollIntoView({ behavior: 'smooth', block: 'start' }));
}

function renderWishBanner() {
  const board = $('#wish-banner-board');
  const schedule = WISH_BANNERS.map(item => ({ banner: item, days: daysUntilWish(item.day) })).filter(item => item.days >= 0).sort((a, b) => a.days - b.days);
  const liveBanner = WISH_BANNERS.find(item => daysUntilWish(item.day) <= 0 && daysUntilWish(item.endDay || item.day) > 0);
  const nextWish = schedule[0];
  const banner = liveBanner || nextWish?.banner;
  const isLive = !!liveBanner;
  const followingWish = isLive ? schedule.find(item => item.banner.id !== liveBanner.id && item.days > 0) : null;
  const cooldownDays = isLive && followingWish ? daysBetweenWishDates(liveBanner.endDay, followingWish.banner.day) : 0;
  const inCooldown = !isLive && !!banner && WISH_BANNERS.some(item => item.endDay && daysUntilWish(item.endDay) <= 0 && daysUntilWish(item.day) < 0);
  const selectedWish = WISH_BANNERS.find(item => item.id === activeWishBannerId);
  if (!selectedWish || (selectedWish.endDay && daysUntilWish(selectedWish.endDay) <= 0)) activeWishBannerId = banner?.id || WISH_BANNERS[0]?.id || null;
  const currentEvent = $('#wish-current-event');
  const status = isLive ? `<span class="wish-current-live-pill">● LIVE</span><span>ENDS IN ${countdownUntilWish(liveBanner.endAt || liveBanner.endDay)}</span>` : `<span>${inCooldown ? 'COOLDOWN' : 'STARTS IN'}</span><span>${escapeHtml(banner?.name || '')} ${countdownUntilWish(banner?.day || '')}</span>`;
  const eventType = isLive ? 'WISH DAY IS HERE' : inCooldown ? 'COOLDOWN UNTIL NEXT WISH' : 'NEXT WISH';
  const eventNote = isLive && followingWish ? `· Cooldown: ${cooldownDays} days before ${escapeHtml(followingWish.banner.name)}.` : '';
  currentEvent.innerHTML = banner ? `<button class="wish-current-card wish-current-select${isLive ? ' is-live' : ''}" type="button" data-open-current-wish="${escapeHtml(banner.id)}" aria-label="Show units for ${escapeHtml(banner.name)}"><span class="wish-current-symbol" aria-hidden="true">${isLive ? '✦' : '◷'}</span><span class="wish-current-copy"><span class="wish-event-type">${eventType}</span><strong>${escapeHtml(banner.name)}</strong><span class="wish-current-date">${escapeHtml(banner.date)}${isLive ? ` · Banner unit list is open below. ${eventNote}` : ''}</span></span><span class="wish-current-status">${status}</span></button>` : '<div class="wish-current-card wish-current-empty"><span class="wish-current-symbol" aria-hidden="true">◷</span><div class="wish-current-copy"><span class="wish-event-type">NO UPCOMING WISH LISTED</span><h2>Waiting for the next rotation</h2><p>Send the next calendar update and I’ll add its wish date.</p></div></div>';
  const selectedBanner = WISH_BANNERS.find(item => item.id === activeWishBannerId);
  const selectedIsLive = !!selectedBanner && daysUntilWish(selectedBanner.day) <= 0 && daysUntilWish(selectedBanner.endDay || selectedBanner.day) > 0;
  $('#wish-banner-live').hidden = !selectedIsLive;
  board.classList.toggle('is-live', selectedIsLive);
  // Keep both banner lineups editable so either can be prepared in advance.
  board.hidden = WISH_BANNERS.length === 0;
  if (!selectedBanner) return;
  $('#wish-banner-tabs').innerHTML = WISH_BANNERS.map(item => {
    const live = daysUntilWish(item.day) <= 0 && daysUntilWish(item.endDay || item.day) > 0;
    const count = (wishBannerUnits[item.id] || []).length;
    return `<button class="wish-banner-tab${item.id === selectedBanner.id ? ' is-selected' : ''}${live ? ' is-live' : ''}" type="button" role="tab" aria-selected="${item.id === selectedBanner.id}" data-select-wish-banner="${escapeHtml(item.id)}"><span>${escapeHtml(item.name)}</span><small>${live ? '● LIVE' : `${count} UNIT${count === 1 ? '' : 'S'}`}</small></button>`;
  }).join('');
  const guides = (wishBannerUnits[selectedBanner.id] || []).map(id => state.guides.find(guide => guide.id === id)).filter(Boolean);
  $('#wish-banner-title').textContent = `${selectedBanner.name} Banner Units`;
  $('#wish-banner-date').textContent = selectedBanner.date;
  $('#wish-banner-add').setAttribute('aria-label', `Add a unit to ${selectedBanner.name} banner`);
  $('#wish-banner-count').textContent = `${guides.length} UNIT${guides.length === 1 ? '' : 'S'}`;
  $('#wish-banner-save').hidden = !wishBannerDirty(selectedBanner.id);
  $('#wish-banner-empty').hidden = guides.length > 0;
  const grid = $('#wish-banner-grid');
  grid.hidden = guides.length === 0;
  grid.innerHTML = guides.map(guide => {
    const imageUrl = safeImageUrl(guide.imageTop) || safeImageUrl(guide.imageBottom);
    const art = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(guide.title)}" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer">` : '<span aria-hidden="true">✦</span>';
    const role = (guide.tags || []).map(tag => String(tag).toLowerCase()).find(tag => ['dps', 'tank', 'support'].includes(tag));
    const unitType = guide.category === 'ur-list' ? 'ur' : 'regular';
    const badge = unitType === 'ur' ? 'UR' : '✦';
    const badgeLabel = unitType === 'ur' ? 'UR unit' : 'Regular unit';
    const roleLabel = role === 'support' ? 'SUP' : role?.toUpperCase();
    const rarityEffects = unitType === 'ur' ? '<span class="wish-ur-effects" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>' : '';
    return `<article class="tier-unit-card wish-unit-card wish-unit-${unitType}${role ? ` wish-unit-role-${role}` : ''}" draggable="true" data-wish-card="${escapeHtml(guide.id)}" title="Drag to change position"><span class="wish-unit-badge" title="${escapeHtml(badgeLabel)}" aria-label="${escapeHtml(badgeLabel)}">${badge}</span><button class="tier-unit-open" type="button" data-open-wish-unit="${escapeHtml(guide.id)}" aria-label="Open ${escapeHtml(guide.title)} build"><span class="tier-unit-art">${art}${rarityEffects}</span></button><span class="wish-unit-stars" aria-hidden="true"><span>★★★★★</span>${roleLabel ? `<small class="wish-unit-role-label">${roleLabel}</small>` : ''}</span><button class="tier-unit-remove" type="button" data-remove-wish-unit="${escapeHtml(guide.id)}" aria-label="Remove ${escapeHtml(guide.title)} from ${selectedBanner.name} banner" title="Remove from banner">×</button></article>`;
  }).join('');
  observeVisibleUrSparkles();
}

function observeVisibleUrSparkles() {
  const cards = document.querySelectorAll('.roster-card.is-ur-list, .wish-banner-grid .wish-unit-ur');
  urSparkleObserver?.disconnect();
  if (!('IntersectionObserver' in window)) {
    cards.forEach(card => card.classList.add('is-sparkle-visible'));
    return;
  }
  urSparkleObserver = new IntersectionObserver(entries => {
    for (const entry of entries) entry.target.classList.toggle('is-sparkle-visible', entry.isIntersecting);
  }, { rootMargin: '0px', threshold: 0.01 });
  cards.forEach(card => urSparkleObserver.observe(card));
}

function renderWishPicker() {
  const assigned = new Set(Object.values(wishBannerUnits).flat());
  const available = state.guides.filter(guide => !assigned.has(guide.id));
  $('#wish-picker-list').innerHTML = available.length ? available.map(guide => {
    const imageUrl = safeImageUrl(guide.imageTop) || safeImageUrl(guide.imageBottom);
    const art = imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<span aria-hidden="true">✦</span>';
    return `<button class="tier-picker-option" type="button" data-add-wish-unit="${escapeHtml(guide.id)}"><span class="tier-picker-art">${art}</span><span><small>${escapeHtml(guide.category || 'Unit Build')}</small><strong>${escapeHtml(guide.title)}</strong><span>${escapeHtml(guide.summary || '')}</span></span><b aria-hidden="true">＋</b></button>`;
  }).join('') : '<p class="tier-picker-empty">All available unit builds are already assigned to a wish banner.</p>';
}

function renderPersonalEvents() {
  renderActivityCalendarSchedule();
  const container = $('#personal-events-list');
  if (!container) return;
  const ordered = [...personalEvents].sort((a, b) => eventTimerInfo(a).sortAt - eventTimerInfo(b).sortAt || a.name.localeCompare(b.name));
  container.innerHTML = ordered.map(item => {
    const dateObj = new Date(`${item.date}T00:00:00`);
    const timer = eventTimerInfo(item);
    const isPast = timer.status === 'ended';
    const date = dateObj.toLocaleDateString(currentLanguage, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    const shortDate = dateObj.toLocaleDateString(currentLanguage, { month: 'short', day: 'numeric' });
    const year = dateObj.toLocaleDateString(currentLanguage, { year: 'numeric' });
    return `<article class="personal-event-card${isPast ? ' is-past' : ''}${timer.status === 'live' ? ' is-live' : ''}"><div class="personal-event-date"><strong>${escapeHtml(shortDate)}</strong><small>${escapeHtml(year)}</small></div><div class="personal-event-copy"><span class="personal-event-category">${escapeHtml(item.type || 'EVENT')}${item.repeat && item.repeat !== 'none' ? ` · ${item.repeat.toUpperCase()}` : ''}</span><h3>${escapeHtml(item.name)}</h3><span class="personal-event-calendar-date">${escapeHtml(date.toUpperCase())} · ${escapeHtml(item.time || 'Set time')}</span><p class="personal-event-timer ${timer.status}" data-event-countdown="${escapeHtml(item.id)}">${timer.label}</p>${item.notes ? `<p>${escapeHtml(item.notes)}</p>` : ''}</div><button type="button" class="personal-event-remove" data-delete-event="${escapeHtml(item.id)}" aria-label="Remove ${escapeHtml(item.name)}" title="Remove event">×</button></article>`;
  }).join('');
  if (!ordered.length) {
    const nextActivity = activityCalendarOccurrences(Date.now(), 1)[0];
    const start = new Date(nextActivity.start), end = new Date(nextActivity.end);
    const day = date => date.toLocaleDateString(currentLanguage, { weekday: 'short', month: 'short', day: 'numeric' });
    const icon = nextActivity.type === 'Sanctuary' ? '🏝️' : nextActivity.type === 'Adventures' ? '🧭' : '⛵';
    const timer = Date.now() >= nextActivity.start
      ? `LIVE NOW · ENDS IN ${formatTimerDuration(nextActivity.end - Date.now())}`
      : `STARTS IN ${formatTimerDuration(nextActivity.start - Date.now())}`;
    container.innerHTML = `<article class="personal-event-card calendar-next-event" data-next-activity-id="${nextActivity.id}" data-activity-start="${nextActivity.start}" data-activity-end="${nextActivity.end}"><div class="personal-event-date"><strong>${icon}</strong><small>NEXT</small></div><div class="personal-event-copy"><span class="personal-event-category">NEXT SCHEDULED ACTIVITY</span><h3>${escapeHtml(nextActivity.type)}</h3><span class="personal-event-calendar-date">${escapeHtml(day(start))} – ${escapeHtml(day(new Date(nextActivity.end - 1)))} · DEVICE LOCAL TIME</span><p class="personal-event-timer ${Date.now() >= nextActivity.start ? 'live' : 'upcoming'}" data-next-activity-countdown>${timer}</p></div><span class="calendar-next-arrow" aria-hidden="true">→</span></article>`;
  }
  $('#personal-events-empty').hidden = true;
}

function activityCalendarOccurrences(now = Date.now(), count = 3) {
  const first = new Date(`${ACTIVITY_CALENDAR_CYCLE[0].anchor}T00:00:00`);
  const today = new Date(now); today.setHours(0, 0, 0, 0);
  const calendarDay = date => Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  let index = Math.max(0, Math.floor((calendarDay(today) - calendarDay(first)) / (7 * 86400000)));
  const rangeFor = weekIndex => {
    const startDate = new Date(first.getFullYear(), first.getMonth(), first.getDate() + weekIndex * 7);
    const endDate = new Date(startDate); endDate.setDate(endDate.getDate() + 3);
    return { start: startDate.getTime(), end: endDate.getTime() };
  };
  while (now >= rangeFor(index).end) index += 1;
  return Array.from({ length: count }, (_, offset) => {
    const weekIndex = index + offset, { start, end } = rangeFor(weekIndex);
    return { id: `calendar-activity-${weekIndex}`, type: ACTIVITY_CALENDAR_CYCLE[weekIndex % ACTIVITY_CALENDAR_CYCLE.length].type, start, end };
  });
}

function renderActivityCalendarSchedule() {
  const view = $('#events-view');
  if (!view) return;
  let section = $('#activity-calendar-schedule');
  if (!section) {
    section = document.createElement('section');
    section.id = 'activity-calendar-schedule';
    section.className = 'activity-calendar-schedule';
    section.setAttribute('aria-label', 'Scheduled activity countdowns');
    $('#events-view .event-type-panel')?.before(section);
    section.addEventListener('click', handleActivityReminderClick);
  }
  if (!section) return;
  const now = Date.now();
  const occurrences = activityCalendarOccurrences();
  section.innerHTML = `<div class="activity-calendar-heading"><div><p class="eyebrow">BOUNTY PIRATES CALENDAR</p><h2>Sanctuary · Adventures · Voyage</h2><p>Next three activities. New dates appear as each one ends. Countdown uses your device’s local time.</p></div><span aria-hidden="true">◷</span></div><div class="activity-calendar-list">${occurrences.map(item => {
    const start = new Date(item.start), end = new Date(item.end);
    const day = date => date.toLocaleDateString(currentLanguage, { weekday: 'short', month: 'short', day: 'numeric' });
    const reminder = item.type === 'Sanctuary' && now < item.start ? `<button type="button" class="activity-reminder-button" data-activity-reminder="${item.id}" aria-pressed="${hasActivityReminder(item.id)}">${hasActivityReminder(item.id) ? 'Reminder set' : 'Notify me · 10 min before'}</button>` : '';
    return `<article class="activity-calendar-card" data-activity-calendar-card="${item.id}" data-activity-start="${item.start}" data-activity-end="${item.end}"><span class="activity-calendar-icon" aria-hidden="true">${item.type === 'Sanctuary' ? '🏝️' : item.type === 'Adventures' ? '🧭' : '⛵'}</span><div class="activity-calendar-copy"><span>${escapeHtml(item.type.toUpperCase())}</span><strong>${escapeHtml(day(start))} – ${escapeHtml(day(new Date(item.end - 1)))}</strong><small>From Bounty Pirates Calendar · all day</small><p class="activity-calendar-timer" data-activity-calendar-countdown="${item.id}"></p>${reminder}</div></article>`;
  }).join('')}</div>`;
  updateActivityCalendarTimers();
}

function loadActivityReminders() {
  try {
    const value = JSON.parse(localStorage.getItem(ACTIVITY_REMINDERS_KEY) || '{}');
    return { enabled: Array.isArray(value.enabled) ? value.enabled : [], sent: Array.isArray(value.sent) ? value.sent : [] };
  } catch { return { enabled: [], sent: [] }; }
}

function saveActivityReminders(reminders) {
  try { localStorage.setItem(ACTIVITY_REMINDERS_KEY, JSON.stringify(reminders)); return true; }
  catch { showToast('Could not save the reminder on this device.'); return false; }
}

function hasActivityReminder(id) { return loadActivityReminders().enabled.includes(id); }

async function handleActivityReminderClick(event) {
  const button = event.target.closest('[data-activity-reminder]');
  if (!button) return;
  const id = button.dataset.activityReminder;
  const reminders = loadActivityReminders();
  if (reminders.enabled.includes(id)) {
    reminders.enabled = reminders.enabled.filter(item => item !== id);
    saveActivityReminders(reminders);
    button.textContent = 'Notify me · 10 min before';
    button.setAttribute('aria-pressed', 'false');
    showToast('Sanctuary reminder removed.');
    return;
  }
  if ('Notification' in window && Notification.permission === 'default') {
    try { await Notification.requestPermission(); } catch { /* In-page reminder still works while the guidebook is open. */ }
  }
  reminders.enabled.push(id);
  if (!saveActivityReminders(reminders)) return;
  button.textContent = 'Reminder set';
  button.setAttribute('aria-pressed', 'true');
  showToast('We’ll remind you 10 minutes before Sanctuary starts. Keep the guidebook open for the reminder.');
  updateActivityCalendarTimers();
}

function updateActivityCalendarTimers(now = Date.now()) {
  const cards = [...document.querySelectorAll('[data-activity-calendar-card]')];
  const next = cards.find(card => Number(card.dataset.activityEnd) <= now);
  if (next) { renderActivityCalendarSchedule(); return; }
  const reminders = loadActivityReminders();
  let remindersChanged = false;
  document.querySelectorAll('[data-activity-calendar-countdown]').forEach(node => {
    const card = node.closest('[data-activity-calendar-card]');
    if (!card) return;
    const start = Number(card.dataset.activityStart), end = Number(card.dataset.activityEnd);
    if (now < start) { node.textContent = `STARTS IN ${formatTimerDuration(start - now)}`; node.className = 'activity-calendar-timer upcoming'; card.classList.remove('is-live'); }
    else if (now < end) { node.textContent = `LIVE NOW · ENDS IN ${formatTimerDuration(end - now)}`; node.className = 'activity-calendar-timer live'; card.classList.add('is-live'); }
    else { node.textContent = 'ENDED'; node.className = 'activity-calendar-timer ended'; card.classList.remove('is-live'); }
    if (card.querySelector('[data-activity-reminder]') && reminders.enabled.includes(card.dataset.activityCalendarCard) && now >= start - 10 * 60 * 1000 && now < start && !reminders.sent.includes(card.dataset.activityCalendarCard)) {
      reminders.sent.push(card.dataset.activityCalendarCard);
      remindersChanged = true;
      const message = 'Sanctuary starts in 10 minutes.';
      try {
        if ('Notification' in window && Notification.permission === 'granted') new Notification('Pirate Reborn · Sanctuary', { body: message, tag: card.dataset.activityCalendarCard });
        else showToast(message);
      } catch { showToast(message); }
    }
  });
  if (remindersChanged) saveActivityReminders(reminders);
}

function eventTimerInfo(item, now = Date.now()) {
  const start = new Date(`${item.date}T${item.time || '00:00'}`).getTime();
  if (!Number.isFinite(start)) return { status: 'ended', label: 'Time not set', sortAt: Number.MAX_SAFE_INTEGER };
  const end = item.endDate && item.endTime ? new Date(`${item.endDate}T${item.endTime}`).getTime() : 0;
  const duration = end > start ? end - start : 0;
  const repeatDays = item.repeat === 'daily' ? 1 : item.repeat === 'weekly' ? 7 : 0;
  const period = repeatDays * 86400000;
  let target = start, liveUntil = end;
  if (period && now >= start) {
    const cycle = Math.floor((now - start) / period);
    const occurrence = start + cycle * period;
    const occurrenceEnd = duration ? occurrence + duration : occurrence;
    if (duration && now <= occurrenceEnd) { target = occurrence; liveUntil = occurrenceEnd; }
    else { target = occurrence + period; liveUntil = duration ? target + duration : 0; }
  }
  const remaining = target - now;
  if (remaining > 0) return { status: 'upcoming', label: `STARTS IN ${formatTimerDuration(remaining)}`, sortAt: target };
  if (!liveUntil || now <= liveUntil) return { status: 'live', label: liveUntil ? `LIVE NOW · ENDS IN ${formatTimerDuration(liveUntil - now)}` : 'LIVE NOW', sortAt: now };
  return { status: 'ended', label: 'EVENT ENDED', sortAt: Number.MAX_SAFE_INTEGER };
}

function formatTimerDuration(milliseconds) {
  const seconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(seconds / 86400), hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60), secs = seconds % 60;
  return `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
}

function updatePersonalEventTimers() {
  updateActivityCalendarTimers();
  const nextActivityCard = document.querySelector('[data-next-activity-id]');
  if (nextActivityCard) {
    const current = activityCalendarOccurrences(Date.now(), 1)[0];
    if (current.id !== nextActivityCard.dataset.nextActivityId) renderPersonalEvents();
    else {
      const now = Date.now();
      const live = now >= current.start;
      const timer = nextActivityCard.querySelector('[data-next-activity-countdown]');
      if (timer) {
        timer.textContent = live ? `LIVE NOW · ENDS IN ${formatTimerDuration(current.end - now)}` : `STARTS IN ${formatTimerDuration(current.start - now)}`;
        timer.className = `personal-event-timer ${live ? 'live' : 'upcoming'}`;
      }
      nextActivityCard.classList.toggle('is-live', live);
    }
  }
  document.querySelectorAll('[data-event-countdown]').forEach(node => {
    const item = personalEvents.find(event => event.id === node.dataset.eventCountdown);
    if (!item) return;
    const timer = eventTimerInfo(item);
    node.textContent = timer.label;
    const card = node.closest('.personal-event-card');
    card?.classList.toggle('is-live', timer.status === 'live');
    card?.classList.toggle('is-past', timer.status === 'ended');
    node.className = `personal-event-timer ${timer.status}`;
  });
}

function openEventForm(type = 'Custom') {
  $('#event-form').reset();
  $('#event-date').min = new Date().toISOString().slice(0, 10);
  $('#event-type').value = type;
  $('#event-name').value = type === 'Custom' ? '' : type;
  $('#event-dialog').showModal();
}

function renderHomeDestinations(favoriteCount) {
  const destinations = [
    { title: 'Tier List', meta: 'DPS · Tank · Support', page: 'tier-list', icon: '📊' },
    { title: 'Unit Builds', meta: `${state.guides.length} build${state.guides.length === 1 ? '' : 's'} in the library`, page: 'unit-builds', icon: '☠' },
    { title: 'Favorites', meta: `${favoriteCount} favorite unit build${favoriteCount === 1 ? '' : 's'}`, favorites: true, icon: '☆' },
    { title: 'Heroine', meta: 'Builds for heroine units', page: 'heroine', icon: '✿' },
    { title: 'Artifacts', meta: 'Artifact picks from the guides', page: 'artifacts', icon: '◈' },
    { title: 'Wish Calendar', meta: 'Upcoming banners & wish times', page: 'wish-calendar', icon: '◷' },
    { title: 'Downloads', meta: 'Community files and links', page: 'downloads', icon: '⇩' },
    { title: 'Recently Added', meta: 'Latest unit builds', recent: true, icon: '⌁' }
  ];
  const artwork = state.guides.filter(guide => isDiscordImage(guide.imageBottom) || isDiscordImage(guide.imageTop));
  $('#home-destination-grid').innerHTML = destinations.map((item, index) => {
    const guide = artwork.length ? artwork[index % artwork.length] : null;
    const photo = guide && (isDiscordImage(guide.imageBottom) ? guide.imageBottom : guide.imageTop);
    const photoUrl = photo && String(photo).startsWith('data:image/') ? photo : safeUrl(photo);
    const image = photoUrl ? `<img class="home-destination-image" src="${escapeHtml(photoUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '';
    const action = item.recent ? 'data-home-recent="true"' : item.favorites ? 'data-home-favorites="true"' : `data-page="${item.page}"`;
    return `<button class="home-destination-card home-destination-card-${index + 1}" type="button" ${action} aria-label="Open ${item.title}"><span class="home-destination-fallback" aria-hidden="true">${item.icon}</span>${image}<span class="home-destination-shade"></span><span class="home-destination-copy"><strong>${item.title}</strong><small>${item.meta}</small></span><span class="home-destination-arrow" aria-hidden="true">↗</span></button>`;
  }).join('');
  $('#home-destination-grid').querySelectorAll('.home-destination-image').forEach(image => image.addEventListener('error', () => { image.hidden = true; }, { once: true }));
}

function renderFeaturedGuide(advance = false) {
  const candidates = [...state.guides].reverse().filter(guide => isDiscordImage(guide.imageBottom || guide.imageTop));
  const featureButton = $('#home-feature-open');
  const featureImage = $('#home-feature-image');
  if (!candidates.length) {
    featureImage.hidden = true;
    $('#home-feature-title').textContent = 'Explore unit builds';
    $('#home-feature-category').textContent = 'COMMUNITY GUIDE';
    delete featureButton.dataset.featureGuide;
    featuredGuideIndex = -1;
    featuredGuideId = null;
    return;
  }
  if (advance) featuredGuideIndex = (featuredGuideIndex + 1) % candidates.length;
  else {
    const currentIndex = candidates.findIndex(guide => guide.id === featuredGuideId);
    featuredGuideIndex = currentIndex >= 0 ? currentIndex : (featuredGuideIndex < 0 ? 0 : featuredGuideIndex % candidates.length);
  }
  const guide = candidates[featuredGuideIndex];
  const photo = guide.imageBottom || guide.imageTop;
  const imageUrl = String(photo).startsWith('data:image/') ? photo : safeUrl(photo);
  featureButton.classList.add('is-refreshing');
  featureImage.hidden = !imageUrl;
  if (imageUrl) featureImage.src = imageUrl;
  $('#home-feature-title').textContent = guide.title;
  $('#home-feature-category').textContent = (guide.category || 'Community guide').toUpperCase();
  featureButton.dataset.featureGuide = guide.id;
  featuredGuideId = guide.id;
  window.setTimeout(() => featureButton.classList.remove('is-refreshing'), 240);
}

function renderSiteSettings() {
  $('#sidebar-profile-name').textContent = siteSettings.profileName || 'Set sail, captain';
  $('#sidebar-profile-tagline').textContent = siteSettings.profileTagline || 'Your guide deck, at a glance.';
  $('#mobile-profile-name').textContent = siteSettings.profileName || 'Set sail, captain';
  const avatar = $('#sidebar-crew-avatar');
  const avatarUrl = siteSettings.avatar?.startsWith('data:image/') ? siteSettings.avatar : safeUrl(siteSettings.avatar);
  avatar.hidden = !avatarUrl;
  if (avatarUrl) avatar.src = avatarUrl; else avatar.removeAttribute('src');
  $('#sidebar-crew-fallback').hidden = !!avatarUrl;
  $('#profile-dialog-name').textContent = siteSettings.profileName || 'Set sail, captain';
  $('#profile-dialog-tagline').textContent = siteSettings.profileTagline || 'Your guide deck, at a glance.';
  const profileAvatar = $('#profile-dialog-avatar');
  profileAvatar.hidden = !avatarUrl;
  if (avatarUrl) profileAvatar.src = avatarUrl; else profileAvatar.removeAttribute('src');
  $('#profile-dialog-avatar-fallback').hidden = !!avatarUrl;
  const mobileAvatar = $('#mobile-profile-avatar');
  mobileAvatar.hidden = !avatarUrl;
  if (avatarUrl) mobileAvatar.src = avatarUrl; else mobileAvatar.removeAttribute('src');
  $('#mobile-profile-avatar-fallback').hidden = !!avatarUrl;
  const inviteUrl = safeUrl(siteSettings.discordInvite);
  const profileUrl = safeUrl(siteSettings.discordProfile);
  const contact = $('#contact-button');
  if (contact) contact.dataset.contactUrl = profileUrl;
  const server = $('#discord-server-button');
  if (server) server.dataset.serverUrl = inviteUrl;
  renderDownloadGuides();
}

function renderDownloadGuides() {
  const platforms = [
    { title: 'iOS', store: 'Apple App Store', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.7 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.6 0-3.1.9-3.9 2.3-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 2.9 2.4 1.2-.1 1.6-.8 3-.8s1.8.8 3 .8c1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.2-2.7 1.2-2.8-.1 0-2.5-1-2.5-4.2ZM14.5 6.5c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.7 1.3-.6.7-1.1 1.7-.9 2.6 1 .1 2.1-.5 2.7-1.2Z"/></svg>', url: safeUrl(platformDownloadLinks.ios) },
    { title: 'Android', store: 'Google Play', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.3 8.1 3.8 5.5a.6.6 0 0 1 1-.6l1.6 2.7a10.2 10.2 0 0 1 11.2 0l1.6-2.7a.6.6 0 1 1 1 .6l-1.5 2.6a8.1 8.1 0 0 1 3.1 6.4H2.2a8.1 8.1 0 0 1 3.1-6.4ZM7.1 17.3v2.3a1.5 1.5 0 0 0 3 0v-2.3h3.8v2.3a1.5 1.5 0 0 0 3 0v-2.3h2V15H5.1v2.3h2Z"/><circle cx="8" cy="11" r=".8" fill="#172330"/><circle cx="16" cy="11" r=".8" fill="#172330"/></svg>', url: safeUrl(platformDownloadLinks.android) }
  ];
  $('#download-grid').innerHTML = platforms.map(platform => `<article class="download-platform-card"><span class="download-platform-icon ${platform.title === 'iOS' ? 'is-apple' : 'is-android'}">${platform.icon}</span><div><small>${platform.store}</small><h2>${platform.title}</h2>${platform.url ? `<a class="button button-outline" href="${escapeHtml(platform.url)}" target="_blank" rel="noopener noreferrer">Download for ${platform.title} ↗</a>` : '<span class="download-no-link">Link not added yet</span>'}</div></article>`).join('');
  $('#downloads-empty').hidden = true;
}

function renderCollections() {
  const heroines = customCollections.heroine || [];
  $('#heroine-grid').innerHTML = heroines.map((item, index) => ({ item, index })).sort((a, b) => (Number(b.item.stars) || 3) - (Number(a.item.stars) || 3) || a.index - b.index).map(({ item, index }) => collectionItemHtml(item, 'heroine', index)).join('');
  $('#heroine-empty').hidden = heroines.length > 0;
  const artifacts = customCollections.artifacts || [];
  $('#artifact-list').innerHTML = artifacts.map((item, index) => artifactItemHtml(item, index)).join('');
  $('#artifact-empty').hidden = artifacts.length > 0;
  const suggestions = new Set();
  for (const guide of state.guides) {
    for (const field of guide.fields || []) if (/artifact/i.test(field.name)) for (const name of String(field.value || '').split(/[|,\n/]+/)) {
      const clean = name.replace(/^[\s▸•-]+/, '').trim();
      if (clean && clean.length < 60 && !/sub stats|tuned/i.test(clean)) suggestions.add(clean);
    }
    const artifactSection = String(guide.content || '').match(/artifacts?:\s*([\s\S]*?)(?:\n\s*\n|$)/i)?.[1] || '';
    for (const name of artifactSection.split(/[|,\n/]+/)) {
      const clean = name.replace(/^[\s▸•*-]+/, '').trim();
      if (clean && clean.length < 60 && !/sub stats|tuned/i.test(clean)) suggestions.add(clean);
    }
  }
  $('#artifact-suggestions').innerHTML = [...suggestions].sort().map(name => `<option value="${escapeHtml(name)}"></option>`).join('');
}

function collectionItemHtml(item, kind, index) {
  const src = item.image?.startsWith('data:image/') ? item.image : safeUrl(item.image);
  const image = src ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(item.name)}" loading="lazy" referrerpolicy="no-referrer">` : '<span>✦</span>';
  if (kind === 'heroine') {
    const stars = Math.min(5, Math.max(1, Number(item.stars) || 3));
    return `<article class="heroine-style-card heroine-rarity-${stars}"><div class="heroine-style-portrait"><button type="button" class="heroine-style-open" data-preview-heroine="${index}" aria-label="Open ${escapeHtml(item.name)}">${image}</button><div class="heroine-style-actions"><button type="button" data-edit-collection="heroine" data-index="${index}" aria-label="Edit ${escapeHtml(item.name)}">✎</button><button type="button" data-remove-collection="heroine" data-index="${index}" aria-label="Remove ${escapeHtml(item.name)}">×</button></div></div><strong class="heroine-style-name">${escapeHtml(item.name)}</strong><div class="heroine-style-stars" aria-label="${stars} stars">${'★'.repeat(stars)}</div></article>`;
  }
  return `<article class="collection-item-card"><span class="collection-item-image">${image}</span><strong>${escapeHtml(item.name)}</strong><p>${escapeHtml(item.description || '')}</p><div class="collection-item-actions"><button class="collection-item-edit" type="button" data-edit-collection="${kind}" data-index="${index}">Edit</button><button class="collection-item-remove" type="button" data-remove-collection="${kind}" data-index="${index}">Remove</button></div></article>`;
}

function artifactItemHtml(item, index) {
  const src = item.image?.startsWith('data:image/') ? item.image : safeUrl(item.image);
  const image = src ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(item.name)}" loading="lazy">` : '<span aria-hidden="true">◈</span>';
  return `<article class="artifact-entry"><header><span class="artifact-entry-gem" aria-hidden="true">◈</span><h2>${escapeHtml(item.name)}</h2><button type="button" class="artifact-entry-edit" data-edit-collection="artifacts" data-index="${index}" aria-label="Edit ${escapeHtml(item.name)}">✎</button><button type="button" class="artifact-entry-remove" data-remove-collection="artifacts" data-index="${index}" aria-label="Remove ${escapeHtml(item.name)}">×</button></header><div class="artifact-entry-body"><div class="artifact-entry-image">${image}</div><button type="button" class="artifact-entry-preview" data-preview-artifact="${index}" aria-label="Preview ${escapeHtml(item.name)}">Preview</button><div class="artifact-entry-copy"><p>${escapeHtml(item.description || '')}</p><div class="artifact-entry-source"><strong>From</strong><span>${escapeHtml(item.source || 'Source not added yet.')}</span></div></div></div></article>`;
}

function artifactStatRows(value) {
  const rows = String(value || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
    const colon = line.indexOf(':');
    if (colon >= 0) return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()];
    const split = line.search(/\s/);
    return split < 0 ? [line, ''] : [line.slice(0, split).trim(), line.slice(split + 1).trim()];
  });
  return rows.length ? `<div class="artifact-stat-rows">${rows.map(([label, amount]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(amount)}</strong></div>`).join('')}</div>` : '<p class="artifact-detail-empty">Not added yet.</p>';
}

function openArtifactDetail(index) {
  const artifact = customCollections.artifacts?.[index];
  if (!artifact) return;
  const src = artifact.image?.startsWith('data:image/') ? artifact.image : safeUrl(artifact.image);
  const image = src ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(artifact.name)}">` : '<span aria-hidden="true">◈</span>';
  const panel = (title, value, skills = false) => `<section class="artifact-detail-panel"><h3><span aria-hidden="true">◈</span>${title}</h3>${skills ? (value ? `<div class="artifact-skill-copy">${markdownToHtml(value)}</div>` : '<p class="artifact-detail-empty">Not added yet.</p>') : artifactStatRows(value)}</section>`;
  $('#artifact-detail-content').innerHTML = `<header class="artifact-detail-banner"><div class="artifact-detail-icon">${image}</div><h2>${escapeHtml(artifact.name)}</h2></header><div class="artifact-detail-panels">${panel('Basic', artifact.basic)}${panel('Tuning', artifact.tuning)}${panel('Refining', artifact.refining)}${panel('Skills', artifact.skills, true)}</div>`;
  $('#artifact-detail-dialog').showModal();
}

function openHeroineDetail(index) {
  const heroine = customCollections.heroine?.[index];
  if (!heroine) return;
  const src = heroine.image?.startsWith('data:image/') ? heroine.image : safeUrl(heroine.image);
  const stars = Math.min(5, Math.max(1, Number(heroine.stars) || 3));
  const image = src ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(heroine.name)}">` : '<span aria-hidden="true">✦</span>';
  $('#dialog-content').innerHTML = `<article class="heroine-detail-preview heroine-rarity-${stars}"><div class="heroine-detail-art">${image}<span class="heroine-art-shine" aria-hidden="true"></span></div><div class="heroine-detail-info"><h2>${escapeHtml(heroine.name)}</h2><div class="heroine-style-stars" aria-label="${stars} stars">${'★'.repeat(stars)}</div>${heroine.description ? `<section class="heroine-skill-description"><h3>Skill</h3><p>${escapeHtml(heroine.description)}</p></section>` : '<section class="heroine-skill-description"><h3>Skill</h3><p class="heroine-detail-empty">No skill description added yet.</p></section>'}${heroine.passives ? `<section class="heroine-passives-description"><h3>Passives</h3><p>${escapeHtml(heroine.passives)}</p></section>` : ''}</div></article>`;
  document.documentElement.classList.add('heroine-description-open');
  dialog.showModal();
}
dialog.addEventListener('close', () => document.documentElement.classList.remove('heroine-description-open'));

function loadCustomData() {
  try { const storedEvents = JSON.parse(localStorage.getItem(PERSONAL_EVENTS_KEY) || '[]'); personalEvents = Array.isArray(storedEvents) ? storedEvents.filter(item => item && typeof item.name === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(item.date || '')) : []; } catch { personalEvents = []; }
  try { customGuides = JSON.parse(localStorage.getItem(CUSTOM_GUIDES_KEY) || '[]'); if (!Array.isArray(customGuides)) customGuides = []; } catch { customGuides = []; }
  const withoutMisspelledAscension = customGuides.filter(item => slug(item.title) !== 'acension');
  if (withoutMisspelledAscension.length !== customGuides.length) {
    customGuides = withoutMisspelledAscension;
    try { localStorage.setItem(CUSTOM_GUIDES_KEY, JSON.stringify(customGuides)); } catch {}
  }
  try { seaSoulEntries = JSON.parse(localStorage.getItem(SEA_SOUL_CONTENT_KEY) || '[]'); if (!Array.isArray(seaSoulEntries)) seaSoulEntries = []; } catch { seaSoulEntries = []; }
  seaSoulEntries = seaSoulEntries.map((item, index) => ({ ...item, id: item.id || `sea-soul-${slug(item.name)}-${index}-${cryptoRandom()}` }));
  try { localStorage.setItem(SEA_SOUL_CONTENT_KEY, JSON.stringify(seaSoulEntries)); } catch {}
  try { siteSettings = { ...siteSettings, ...JSON.parse(localStorage.getItem(SITE_SETTINGS_KEY) || '{}') }; } catch {}
  try { customCollections = { ...customCollections, ...JSON.parse(localStorage.getItem(COLLECTIONS_KEY) || '{}') }; } catch { customCollections = { heroine: [], artifacts: [] }; }
  if (localStorage.getItem('pirate-reborn-placeholder-collections-seeded-v1') !== '1') {
    const heroineSeeds = Array.from({ length: 16 }, (_, index) => ({ name: `Heroine Placeholder ${String(index + 1).padStart(2, '0')}`, image: `./heroine-placeholder-images/${String(index + 1).padStart(3, '0')}.png`, description: '' }));
    const existingHeroineImages = new Set((customCollections.heroine || []).map(item => item.image));
    customCollections.heroine = [...(customCollections.heroine || []), ...heroineSeeds.filter(item => !existingHeroineImages.has(item.image))];
    const artifactSeeds = Array.from({ length: 11 }, (_, index) => ({ name: `Artifact Placeholder ${String(index + 1).padStart(2, '0')}`, image: `./artifact-placeholder-images/${String(index + 1).padStart(3, '0')}.png`, description: '' }));
    const existingArtifactImages = new Set((customCollections.artifacts || []).map(item => item.image));
    customCollections.artifacts = [...(customCollections.artifacts || []), ...artifactSeeds.filter(item => !existingArtifactImages.has(item.image))];
    try { localStorage.setItem('pirate-reborn-placeholder-collections-seeded-v1', '1'); } catch {}
  }
  customCollections.artifacts = (customCollections.artifacts || []).map((item, index) => ({ ...item, id: item.id || `artifact-${slug(item.name)}-${index}-${cryptoRandom()}` }));
  try { localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(customCollections)); } catch {}
  const savedDownloadGuides = localStorage.getItem(DOWNLOAD_GUIDES_KEY);
  if (savedDownloadGuides !== null) {
    try { downloadGuides = JSON.parse(savedDownloadGuides); } catch { downloadGuides = []; }
  } else {
    downloadGuides = Array.isArray(siteSettings.downloads) ? siteSettings.downloads.filter(item => item.url).map((item, index) => ({ id: `legacy-${index}`, title: item.name || `Download ${index + 1}`, url: item.url, image: '', description: '' })) : [];
    if (downloadGuides.length) try { localStorage.setItem(DOWNLOAD_GUIDES_KEY, JSON.stringify(downloadGuides)); } catch {}
  }
  try { platformDownloadLinks = { ...platformDownloadLinks, ...JSON.parse(localStorage.getItem(PLATFORM_DOWNLOADS_KEY) || '{}') }; } catch {}
}

function renderCustomGuides() {
  const container = $('#custom-guides-list');
  if (!container) return;
  const guides = [...customGuides, HAKI_RUNE_GUIDE, SP_GUIDE, CLAN_SKILLS_GUIDE, EQUIPMENT_REFINEMENT_GUIDE, ARTIFACTS_GUIDE, UR_PULLING_GUIDE, AUCTION_PRICES_GUIDE, SHIP_BREAK_GUIDE, SPIRIT_BREAKTHROUGH_GUIDE, ALBUMS_SPIRITS_GUIDE, HEROINE_ROOM_GUIDE, VIP_LEVELS_GUIDE, BEGINNERS_GUIDE, SEA_SOUL_GUIDE];
  container.innerHTML = guides.map((guide, index) => `<button class="custom-guide-card" type="button" data-custom-guide="${escapeHtml(guide.id)}" style="--guide-order:${index}"><span class="custom-guide-mark" aria-hidden="true">▤</span><span class="custom-guide-card-copy"><strong>${escapeHtml(guide.title)}</strong><small>${escapeHtml(guide.summary || 'Open this guide')}</small></span><span class="custom-guide-arrow" aria-hidden="true">↗</span></button>`).join('');
  $('#custom-guides-empty').hidden = customGuides.length > 0;
}

function renderAscensionGuides() {
  const container = $('#ascension-guide-groups');
  if (!container) return;
  const guide = ASCENSION_GUIDES.find(item => item.id === selectedAscensionId) || ASCENSION_GUIDES[0];
  document.querySelectorAll('[data-ascension-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.ascensionChoice === guide.id)));
  container.innerHTML = `<button class="custom-guide-card ascension-guide-card" type="button" data-custom-guide="${escapeHtml(guide.id)}"><span class="custom-guide-mark" aria-hidden="true">⚓</span><span class="custom-guide-card-copy"><strong>${escapeHtml(guide.title)}</strong><small>${escapeHtml(guide.summary)}</small></span><span class="custom-guide-arrow" aria-hidden="true">↗</span></button>`;
}

function renderSpendingGuides() {
  const container = $('#spending-guide-card');
  if (!container) return;
  const guides = [F2P_STRATEGY_GUIDE, P2W_STRATEGY_GUIDE];
  const guide = guides.find(item => item.id === selectedSpendingGuideId) || guides[0];
  document.querySelectorAll('[data-spending-choice]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.spendingChoice === (guide.id === F2P_STRATEGY_GUIDE.id ? 'f2p' : 'p2w'))));
  container.innerHTML = `<button class="custom-guide-card ascension-guide-card" type="button" data-custom-guide="${escapeHtml(guide.id)}"><span class="custom-guide-mark" aria-hidden="true">${guide.id === F2P_STRATEGY_GUIDE.id ? '🪙' : '💎'}</span><span class="custom-guide-card-copy"><strong>${escapeHtml(guide.title)}</strong><small>${escapeHtml(guide.summary)}</small></span><span class="custom-guide-arrow" aria-hidden="true">↗</span></button>`;
}

function renderSeaSoulPage() {
  const target = $('#sea-soul-content');
  if (!target) return;
  target.innerHTML = seaSoulEntries.map(entry => {
    const imageUrl = /^data:image\/(?:png|jpe?g|webp|gif);base64,/i.test(String(entry.image || '')) ? entry.image : safeUrl(entry.image);
    const attributes = String(entry.attributes || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
      const split = line.indexOf(':');
      return split < 0 ? { name: line, value: '' } : { name: line.slice(0, split).trim(), value: line.slice(split + 1).trim() };
    });
    const bonuses = String(entry.bonuses || '').split(/\r?\n/).map(line => line.trim()).filter(Boolean).map(line => {
      const split = line.indexOf('|');
      return { name: split < 0 ? line : line.slice(0, split).trim(), requirement: split < 0 ? '' : line.slice(split + 1).trim() };
    });
    const skillImageUrl = /^data:image\/(?:png|jpe?g|webp|gif);base64,/i.test(String(entry.skillImage || '')) ? entry.skillImage : safeUrl(entry.skillImage);
    const skillMarkup = entry.skillDescription || skillImageUrl ? `<section class="sea-soul-skill">${skillImageUrl ? `<img src="${escapeHtml(skillImageUrl)}" alt="${escapeHtml(entry.name)} skill" loading="lazy">` : ''}${entry.skillDescription ? `<p>${escapeHtml(entry.skillDescription)}</p>` : ''}</section>` : '';
    return `<article class="sea-soul-card"><section class="sea-soul-profile"><div class="sea-soul-portrait">${imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(entry.name)}" loading="lazy" decoding="async">` : '<span aria-hidden="true">♆</span>'}</div><h2>${escapeHtml(entry.name)}</h2><p class="sea-soul-section-label">ATTRIBUTES</p><dl class="sea-soul-attributes">${attributes.map(item => `<div><dt>${escapeHtml(item.name)}</dt><dd>${escapeHtml(item.value)}</dd></div>`).join('') || '<div><dt>Attributes</dt><dd>—</dd></div>'}</dl></section><section class="sea-soul-bonuses"><div class="sea-soul-bonus-heading"><span>Set bonus</span></div><div class="sea-soul-bonus-list">${bonuses.map(bonus => `<div class="sea-soul-bonus-row"><strong>${escapeHtml(bonus.name)}</strong><small>${escapeHtml(bonus.requirement)}</small></div>`).join('') || '<div class="sea-soul-bonus-empty">No set bonuses added.</div>'}</div></section>${skillMarkup}<button class="sea-soul-card-edit" type="button" data-edit-sea-soul="${escapeHtml(entry.id)}">Edit</button></article>`;
  }).join('');
  $('#sea-soul-empty').hidden = seaSoulEntries.length > 0;
}

function openSeaSoulEditor(entry = null) {
  editingSeaSoulId = entry?.id || '';
  editingSeaSoulImage = entry?.image || '';
  editingSeaSoulSkillImage = entry?.skillImage || '';
  $('#sea-soul-edit-title').textContent = entry ? 'Edit Sea Soul' : 'Add Sea Soul';
  $('#sea-soul-edit-id').value = editingSeaSoulId;
  $('#sea-soul-edit-name').value = entry?.name || '';
  $('#sea-soul-edit-image').value = entry?.image && !entry.image.startsWith('data:image/') ? entry.image : '';
  $('#sea-soul-edit-image-file').value = '';
  $('#sea-soul-edit-skill-image').value = entry?.skillImage && !entry.skillImage.startsWith('data:image/') ? entry.skillImage : '';
  $('#sea-soul-edit-skill-image-file').value = '';
  $('#sea-soul-edit-skill-description').value = entry?.skillDescription || '';
  $('#sea-soul-edit-attributes').value = entry?.attributes || '';
  $('#sea-soul-edit-bonuses').value = entry?.bonuses || '';
  $('#sea-soul-edit-dialog').showModal();
}

function openCustomGuide(id) {
  const guide = [...ASCENSION_GUIDES, HAKI_RUNE_GUIDE, SP_GUIDE, CLAN_SKILLS_GUIDE, EQUIPMENT_REFINEMENT_GUIDE, ARTIFACTS_GUIDE, F2P_STRATEGY_GUIDE, P2W_STRATEGY_GUIDE, UR_PULLING_GUIDE, AUCTION_PRICES_GUIDE, SHIP_BREAK_GUIDE, SPIRIT_BREAKTHROUGH_GUIDE, ALBUMS_SPIRITS_GUIDE, HEROINE_ROOM_GUIDE, VIP_LEVELS_GUIDE, BEGINNERS_GUIDE, SEA_SOUL_GUIDE, ...customGuides].find(item => item.id === id);
  if (!guide) return;
  const image = guide.image ? `<img class="ascension-guide-image" src="${escapeHtml(guide.image)}" alt="${escapeHtml(guide.title)} source chart">` : '';
  const sections = Array.isArray(guide.fields) ? guide.fields.map(field => {
    const images = (field.images || []).map(item => { const url = guidePhotoUrl(item.image); return url ? `<img src="${escapeHtml(url)}" alt="${escapeHtml(item.name || field.name)}" loading="lazy" decoding="async">` : ''; }).join('');
    return `<section class="embed-field"><h3>${escapeHtml(field.name)}</h3><div>${markdownToHtml(field.value || '')}</div>${images ? `<div class="guide-inline-images">${images}</div>` : ''}</section>`;
  }).join('') : '';
  $('#dialog-content').innerHTML = `<article class="guide-detail custom-guide-detail"><p class="eyebrow">${escapeHtml(guide.group || 'YOUR GUIDE')}</p><h2>${escapeHtml(guide.title)}</h2>${guide.summary ? `<p class="guide-summary">${escapeHtml(guide.summary)}</p>` : ''}${image}<div class="guide-content">${markdownToHtml(guide.content || '')}</div>${sections}</article>`;
  dialog.showModal();
}

function renderHomeRecentGuides() {
  const container = $('#home-recent-guides');
  const recentPool = state.guides.map((guide, index) => ({ guide, index, updated: Date.parse(guide.updatedAt || guide.date || '') || 0 }))
    .sort((a, b) => b.updated - a.updated || a.index - b.index)
    .slice(0, 12)
    .map(item => item.guide);
  if (!recentPool.length) {
    container.innerHTML = '<p class="home-recent-empty">Your guide logbook is empty for now.</p>';
    return;
  }
  const itemMarkup = (guide, duplicate = false) => {
    const recentImage = guidePhotoUrl(guide.imageTop) || guidePhotoUrl(guide.imageBottom);
    const image = recentImage ? `<img src="${escapeHtml(recentImage)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : '<span aria-hidden="true">✦</span>';
    return `<button type="button" class="home-recent-item" data-home-guide="${escapeHtml(guide.id)}"${duplicate ? ' tabindex="-1"' : ''}><span class="home-recent-art">${image}</span><span class="home-recent-copy"><small>${escapeHtml(guide.category || 'Guide')}</small><strong>${escapeHtml(guide.title)}</strong><span>${escapeHtml(guide.summary || '')}</span></span><b aria-hidden="true">→</b></button>`;
  };
  const cloneCount = Math.min(4, recentPool.length);
  const scrollPercent = recentPool.length > 4 ? (recentPool.length / (recentPool.length + cloneCount)) * 100 : 0;
  const mainItems = recentPool.map(guide => itemMarkup(guide)).join('');
  const loopItems = recentPool.length > 4 ? `<div class="home-recent-loop" aria-hidden="true">${recentPool.slice(0, cloneCount).map(guide => itemMarkup(guide, true)).join('')}</div>` : '';
  container.innerHTML = `<div class="home-recent-track${recentPool.length > 4 ? ' is-auto-scrolling' : ''}" style="--recent-scroll-end:-${scrollPercent}%">${mainItems}${loopItems}</div>`;
}

function render() {
  categoryList();
  const normalizeSearch = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const query = normalizeSearch(state.query).trim();
  const terms = query.split(/\s+/).filter(Boolean);
  let guides = state.guides.filter(guide => {
    const haystack = normalizeSearch([guide.title, guide.category, guide.summary, guide.content, ...(guide.fields || []).flatMap(field => [field.name, field.value]), ...(guide.tags || [])].join(' '));
    return guide.category === state.category && (!state.tag || (guide.tags || []).includes(state.tag)) && (!state.favoritesOnly || guide.favorite) && terms.every(term => haystack.includes(term));
  });
  guides.sort((a, b) => {
    if (terms.length) {
      const score = guide => {
        const title = normalizeSearch(guide.title), summary = normalizeSearch(guide.summary), tags = normalizeSearch((guide.tags || []).join(' '));
        return terms.reduce((total, term) => total + (title === term ? 100 : title.startsWith(term) ? 40 : title.includes(term) ? 24 : tags.includes(term) ? 14 : summary.includes(term) ? 8 : 0), 0);
      };
      const relevance = score(b) - score(a);
      if (relevance) return relevance;
    }
    if (state.sortBy === 'channel') return (a.category || '').localeCompare(b.category || '') || a.title.localeCompare(b.title);
    if (state.sortBy === 'newest') return (Date.parse(b.date || b.updatedAt || '') || 0) - (Date.parse(a.date || a.updatedAt || '') || 0) || a.title.localeCompare(b.title);
    if (state.sortBy === 'recent') return String(b.updatedAt || b.date || '').localeCompare(String(a.updatedAt || a.date || '')) || a.title.localeCompare(b.title);
    if (state.sortBy === 'favorites') return Number(!!b.favorite) - Number(!!a.favorite) || a.title.localeCompare(b.title);
    return a.title.localeCompare(b.title);
  });
  $('#search-clear').hidden = !state.query;
  updateSearchSuggestions();
  const favoriteCount = state.guides.filter(guide => guide.favorite).length;
  $('#favorite-count').textContent = String(favoriteCount);
  $('#sidebar-guide-count').textContent = String(state.guides.length);
  renderTopTiers();
  renderWishBanner();
  renderSiteSettings();
  renderCollections();
  renderCustomGuides();
  renderHomeDestinations(favoriteCount);
  renderFeaturedGuide();
  renderHomeRecentGuides();
  $('#favorites-toggle').setAttribute('aria-label', `Show saved guides (${favoriteCount})`);
  const pageSignature = [state.category, state.tag, state.query, state.favoritesOnly, state.sortBy].join('|');
  if (pageSignature !== guideGridPageSignature) {
    guideGridPageSignature = pageSignature;
    guideGridCurrentPage = 1;
  }
  const cardHtml = guide => {
    const art = guide.imageTop || guide.imageBottom;
    const artSrc = safeImageUrl(art);
    const fallbackImage = safeImageUrl(guide.imageBottom);
    const portrait = artSrc && isDiscordImage(art) ? `<img src="${escapeHtml(artSrc)}"${fallbackImage && fallbackImage !== artSrc ? ` data-fallback-src="${escapeHtml(fallbackImage)}"` : ''} alt="" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer">` : '<span class="roster-art-missing" aria-hidden="true">✦</span>';
    const rarityEffects = guide.category === 'ur-list' ? '<span class="wish-ur-effects" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>' : '';
    const markerBadges = (guide.tags || []).filter(tag => ['dps', 'tank', 'support'].includes(tag.toLowerCase())).map(tag => `<span>✦ ${escapeHtml(tag)}</span>`).join('');
    return `<article class="guide-card roster-card${guide.category === 'ur-list' ? ' is-ur-list' : ''}" data-id="${escapeHtml(guide.id)}" tabindex="0" role="button" aria-label="Open guide: ${escapeHtml(guide.title)}">
      <div class="roster-art">${portrait}${rarityEffects}<div class="unit-marker-badges">${markerBadges}</div><button class="marker-edit-button" type="button" data-edit-markers="${escapeHtml(guide.id)}" aria-label="Edit tags for ${escapeHtml(guide.title)}" title="Edit guide tags">✎</button><button class="favorite-button ${guide.favorite ? 'active' : ''}" data-favorite="${escapeHtml(guide.id)}" aria-label="${guide.favorite ? 'Remove from' : 'Add to'} favorites" aria-pressed="${!!guide.favorite}">${guide.favorite ? '★' : '☆'}</button></div>
      <div class="roster-card-body"><h3>${escapeHtml(guide.title)}</h3></div>
    </article>`;
  };
  const pageCount = Math.max(1, Math.ceil(guides.length / GUIDE_GRID_PAGE_SIZE));
  guideGridCurrentPage = Math.min(guideGridCurrentPage, pageCount);
  const pageStart = (guideGridCurrentPage - 1) * GUIDE_GRID_PAGE_SIZE;
  const visibleGuides = guides.slice(pageStart, pageStart + GUIDE_GRID_PAGE_SIZE);
  const pageWindowStart = Math.max(1, Math.min(guideGridCurrentPage - 2, pageCount - 4));
  const pageNumbers = Array.from({ length: Math.max(0, Math.min(5, pageCount - pageWindowStart + 1)) }, (_, index) => pageWindowStart + index);
  const pageManager = pageCount > 1 ? `<nav class="guide-grid-pagination" aria-label="Unit build pages"><button type="button" data-guide-page="${Math.max(1, guideGridCurrentPage - 1)}" aria-label="Previous page"${guideGridCurrentPage === 1 ? ' disabled' : ''}>‹</button>${pageNumbers.map(page => `<button type="button" data-guide-page="${page}"${page === guideGridCurrentPage ? ' aria-current="page"' : ''} aria-label="Page ${page}">${page}</button>`).join('')}<button type="button" data-guide-page="${Math.min(pageCount, guideGridCurrentPage + 1)}" aria-label="Next page"${guideGridCurrentPage === pageCount ? ' disabled' : ''}>›</button><span>Page ${guideGridCurrentPage} of ${pageCount} · ${guides.length} units</span></nav>` : '';
  grid.innerHTML = visibleGuides.map(cardHtml).join('') + pageManager;
  observeVisibleUrSparkles();
  const noGuides = state.guides.length === 0;
  const noMatches = !noGuides && guides.length === 0;
  empty.classList.toggle('visible', noGuides || noMatches);
  grid.hidden = noGuides || noMatches;
  const noFavorites = state.favoritesOnly && favoriteCount === 0;
  $('#empty-title').textContent = noGuides ? 'Your guide deck is ready' : noFavorites ? 'Your saved crew is empty' : 'No guides found';
  $('#empty-copy').textContent = noGuides ? 'Your guide library is empty. Guides will appear here when they’re available.' : noFavorites ? 'Tap the ☆ on any guide card to save it here. Saved guides stay on this device and can still be filtered by channel or tag.' : 'Try a shorter search, another channel or tag, or clear the filters to see your full library.';
  $('#empty-import-button').hidden = !noGuides;
  $('#restore-built-in-guides').hidden = !noGuides;
  $('#empty-favorites-button').hidden = !noFavorites;
  applyLanguage();
}

grid.addEventListener('click', event => {
  const button = event.target.closest('[data-guide-page]');
  if (!button || button.disabled) return;
  guideGridCurrentPage = Number(button.dataset.guidePage) || 1;
  render();
  document.querySelector('#library .filter-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

grid.addEventListener('error', event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  const fallback = image.dataset.fallbackSrc;
  if (fallback && image.src !== fallback) {
    image.removeAttribute('data-fallback-src');
    image.src = fallback;
    return;
  }
  image.remove();
  const placeholder = document.createElement('span');
  placeholder.className = 'roster-art-missing';
  placeholder.setAttribute('aria-hidden', 'true');
  placeholder.textContent = '✦';
  image.parentElement?.prepend(placeholder);
}, true);

function restoreBuiltInGuides() {
  const previousGuides = state.guides;
  const previousDeleted = deletedGuideIds;
  let previousStoredGuides;
  let previousStoredDeleted;
  try {
    previousStoredGuides = localStorage.getItem(STORAGE_KEY);
    previousStoredDeleted = localStorage.getItem(DELETED_GUIDES_KEY);
  } catch {
    showToast('Could not access saved data on this device.');
    return;
  }
  const bundledIds = new Set(READY_GUIDES.map(guide => guide.id));
  const restoredDeleted = new Set([...deletedGuideIds].filter(id => !bundledIds.has(id)));
  const restoredGuides = [...state.guides];
  for (const guide of READY_GUIDES) {
    if (!restoredGuides.some(item => item.id === guide.id || item.title?.toLowerCase() === guide.title.toLowerCase())) {
      restoredGuides.push({ ...guide });
    }
  }
  state.guides = restoredGuides;
  deletedGuideIds = restoredDeleted;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ guides: state.guides }));
    localStorage.setItem(DELETED_GUIDES_KEY, JSON.stringify([...deletedGuideIds]));
  } catch {
    state.guides = previousGuides;
    deletedGuideIds = previousDeleted;
    try {
      if (previousStoredGuides === null) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, previousStoredGuides);
      if (previousStoredDeleted === null) localStorage.removeItem(DELETED_GUIDES_KEY);
      else localStorage.setItem(DELETED_GUIDES_KEY, previousStoredDeleted);
    } catch {}
    showToast('Could not restore builds on this device. Check available storage and try again.');
    render();
    return;
  }
  render();
  showToast('Built-in builds restored.');
}

function parseBuildContentSections(content) {
  const definitions = [
    [/^(?:haki(?:s)?(?:\s*\/\s*runes?)?|runes)(?:\s*:\s*(.*))?$/i, '🌀 HAKI / RUNES'],
    [/^relics?(?:\s*:\s*(.*))?$/i, '🔮 RELICS'],
    [/^refine\s*stats?(?:\s*:\s*(.*))?$/i, '⚒️ REFINE STATS'],
    [/^sp\s*recommend(?:ation)?s?(?:\s*\/\s*order)?(?:\s*:\s*(.*))?$/i, '🧩 SP RECOMMENDATIONS'],
    [/^artifacts?(?:\s*:\s*(.*))?$/i, '⚔️ ARTIFACTS'],
    [/^sea\s*souls?(?:\s*:\s*(.*))?$/i, '🌊 SEA SOULS'],
    [/^tips?(?:\s*:\s*(.*))?$/i, '✨ TIP']
  ];
  const intro = [], fields = [];
  let active = null;
  for (const line of String(content || '').replace(/\r/g, '').split('\n')) {
    const heading = line.trim().replace(/^#{1,6}\s*/, '').replace(/\*\*|__/g, '').replace(/^[^\p{L}\p{N}]*/u, '');
    let next = null;
    for (const [pattern, name] of definitions) {
      const match = heading.match(pattern);
      if (match) { next = { name, value: match[1] || '' }; break; }
    }
    if (next) { active = next; fields.push(active); }
    else if (active) active.value += `${active.value ? '\n' : ''}${line}`;
    else intro.push(line);
  }
  return { intro: intro.join('\n').trim(), fields: fields.map(field => ({ ...field, value: field.value.trim() })) };
}

function openGuide(id) {
  const guide = state.guides.find(item => item.id === id);
  if (!guide) return;
  const imageHtml = (url, alt, className) => isDiscordImage(url) ? `<img class="${className}" src="${escapeHtml(String(url).startsWith('data:image/') ? url : safeUrl(url))}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer">` : '';
  const accent = /^#[0-9a-f]{6}$/i.test(guide.accentColor || '') ? guide.accentColor : '#e8df2b';
  const photoMarkup = kind => guideReferencePhotos(guide, kind).map(photo => { const url = guidePhotoUrl(photo.image); return url ? `<img src="${escapeHtml(url)}" alt="${escapeHtml(photo.name)}" title="${escapeHtml(photo.name)}" loading="lazy" referrerpolicy="no-referrer">` : ''; }).join('');
  const savedFields = Array.isArray(guide.fields) ? guide.fields : [];
  const parsedSections = savedFields.length ? { intro: guide.content || '', fields: savedFields } : parseBuildContentSections(guide.content);
  const guideFields = parsedSections.fields.length ? parsedSections.fields : savedFields;
  const skillImages = normaliseSkillPhotoSlots(guide.skillPhotos).map((photo,index) => { const url = guidePhotoUrl(photo.image); return url ? `<img src="${escapeHtml(url)}" alt="SP skill ${index + 1}" title="SP skill ${index + 1}" loading="lazy" referrerpolicy="no-referrer">` : ''; }).join('');
  const fields = guideFields.map(field => {
    const label = String(field.name || '').toLowerCase();
    const photos = label.includes('sea soul') ? photoMarkup('seaSoul') : label.includes('artifact') ? photoMarkup('artifacts') : '';
    const skillPhotos = label.includes('sp recommendation') || label.includes('sp skill photos') ? skillImages : '';
    const fieldImages = (Array.isArray(field.images) ? field.images : []).map(image => {
      const url = guidePhotoUrl(image.image);
      return url ? `<img src="${escapeHtml(url)}" alt="${escapeHtml(image.name || field.name || 'Guide reference image')}" loading="lazy" decoding="async">` : '';
    }).join('');
    return `<section class="embed-field"><h3>${escapeHtml(field.name)}</h3><div>${markdownToHtml(field.value || '')}</div>${fieldImages ? `<div class="guide-inline-images">${fieldImages}</div>` : ''}${photos ? `<div class="guide-reference-photos">${photos}</div>` : ''}${skillPhotos ? `<div class="guide-skill-photos" aria-label="SP skill photos">${skillPhotos}</div>` : ''}</section>`;
  });
  const hasNamedField = pattern => guideFields.some(field => pattern.test(String(field.name || '')));
  if (!hasNamedField(/sea soul/i)) { const photos = photoMarkup('seaSoul'); if (photos) fields.push(`<section class="embed-field"><h3>🌊 SEA SOULS</h3><div class="guide-reference-photos">${photos}</div></section>`); }
  if (!hasNamedField(/artifact/i)) { const photos = photoMarkup('artifacts'); if (photos) fields.push(`<section class="embed-field"><h3>⚔️ ARTIFACTS</h3><div class="guide-reference-photos">${photos}</div></section>`); }
  if (skillImages && !hasNamedField(/sp recommendation|sp skill photos/i)) fields.push(`<section class="embed-field"><h3>🧩 SP SKILL PHOTOS</h3><div class="guide-skill-photos" aria-label="SP skill photos">${skillImages}</div></section>`);
  const fieldsMarkup = fields.join('');
  const thumb = imageHtml(guide.imageTop, 'Unit thumbnail', 'embed-thumbnail');
  const titleThumb = guide.thumbnailPosition === 'under-title' ? '' : thumb;
  const underTitleThumb = guide.thumbnailPosition === 'under-title' ? thumb : '';
  const mainImage = imageHtml(guide.imageBottom, 'Guide image', 'embed-main-image');
  const imagePosition = guide.mainImagePosition || 'bottom';
  const sourceUrl = safeUrl(guide.sourceUrl);
  const displaySummary = guide.category === 'regular-units' ? '' : guide.summary;
  $('#dialog-content').innerHTML = `<div class="card-category">${escapeHtml(guide.category || 'Guide')}</div><article class="discord-embed" style="--embed-accent:${accent}"><div class="embed-title-row"><h2>${escapeHtml(guide.title)}</h2>${titleThumb}</div>${underTitleThumb}${displaySummary ? `<p class="dialog-summary">${escapeHtml(displaySummary)}</p>` : ''}<div class="guide-body">${markdownToHtml(parsedSections.intro)}</div>${imagePosition === 'after-description' ? mainImage : ''}${imagePosition === 'before-sections' ? mainImage : ''}${fieldsMarkup ? `<div class="embed-fields">${fieldsMarkup}</div>` : ''}${imagePosition === 'bottom' ? mainImage : ''}</article>${(guide.tags || []).length ? `<div class="dialog-tags">${guide.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>` : ''}<div class="paste-actions">${sourceUrl ? `<a class="button button-outline" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">View original Discord message ↗</a>` : ''}<button class="button button-outline guide-delete-dialog-button" data-delete-guide="${escapeHtml(guide.id)}">Delete build</button><button class="button button-outline" data-edit-guide="${escapeHtml(guide.id)}">Edit guide</button></div>`;
  dialog.showModal();
}

function deleteGuide(id) {
  const index = state.guides.findIndex(guide => guide.id === id);
  if (index < 0) return;
  const guide = state.guides[index];
  if (!window.confirm(`Delete “${guide.title}” from Unit Builds? It will also be removed from any wish banner and tier list.`)) return;
  const previousGuides = state.guides;
  const previousTiers = topTierGroups;
  const previousWishes = wishBannerUnits;
  const wasDeleted = deletedGuideIds.has(id);
  state.guides = state.guides.filter(item => item.id !== id);
  topTierGroups = Object.fromEntries(TIER_GROUPS.map(group => [group.id, topTierGroups[group.id].filter(guideId => guideId !== id)]));
  wishBannerUnits = Object.fromEntries(WISH_BANNERS.map(banner => [banner.id, wishBannerUnits[banner.id].filter(guideId => guideId !== id)]));
  deletedGuideIds.add(id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ guides: state.guides }));
    localStorage.setItem(TOP_TIERS_KEY, JSON.stringify(topTierGroups));
    localStorage.setItem(WISH_BANNER_KEY, JSON.stringify(wishBannerUnits));
    localStorage.setItem(DELETED_GUIDES_KEY, JSON.stringify([...deletedGuideIds]));
    savedTopTierGroups = structuredClone(topTierGroups);
    savedWishBannerUnits = structuredClone(wishBannerUnits);
  } catch {
    state.guides = previousGuides;
    topTierGroups = previousTiers;
    wishBannerUnits = previousWishes;
    if (!wasDeleted) deletedGuideIds.delete(id);
    showToast('Could not delete this build on this device.');
    render();
    return;
  }
  dialog.close();
  render();
  showToast(`Deleted ${guide.title}.`);
}

function guidePhotoUrl(image) {
  return String(image || '').startsWith('data:image/') ? image : safeUrl(image);
}

function normalizeReferenceText(value) {
  return String(value || '').normalize('NFKC').toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function guidePhotoCollection(kind) {
  return kind === 'seaSoul' ? seaSoulEntries : (customCollections.artifacts || []).filter(item => !/^Artifact Placeholder \d+$/i.test(item.name || ''));
}

function resolveGuideCollectionPhoto(photo, kind) {
  const collection = guidePhotoCollection(kind);
  const match = collection.find(item => String(item.id || '') === String(photo.id || ''))
    || collection.find(item => normalizeReferenceText(item.name) === normalizeReferenceText(photo.name));
  return match ? { ...photo, id: String(match.id || photo.id), name: String(match.name || photo.name), image: String(match.image || photo.image || '') } : photo;
}

function guidePhotoReference(photo, kind) {
  const resolved = resolveGuideCollectionPhoto(photo, kind);
  const isCollectionPhoto = guidePhotoCollection(kind).some(item => String(item.id || '') === String(resolved.id || ''));
  return isCollectionPhoto ? { id: resolved.id, name: resolved.name } : resolved;
}

function guideReferencePhotos(guide, kind) {
  const savedPhotos = normaliseGuidePhotoList(kind === 'seaSoul' ? guide.seaSoulPhotos : guide.artifactPhotos, kind).map(photo => resolveGuideCollectionPhoto(photo, kind));
  if (guide.referencePhotosManaged || guide.category !== 'ur-list') return savedPhotos;
  const fields = Array.isArray(guide.fields) && guide.fields.length ? guide.fields : parseBuildContentSections(guide.content).fields;
  const fieldPattern = kind === 'seaSoul' ? /sea\s*souls?/i : /artifacts?/i;
  const referenceText = normalizeReferenceText(fields.filter(field => fieldPattern.test(field.name || '')).map(field => field.value || '').join(' '));
  if (!referenceText) return savedPhotos;
  const paddedReferenceText = ` ${referenceText} `;
  const collection = guidePhotoCollection(kind);
  const existing = new Set(savedPhotos.flatMap(photo => [String(photo.id || ''), normalizeReferenceText(photo.name)]));
  const inferredPhotos = collection.map((item, index) => {
    const name = String(item.name || '').trim();
    const normalizedName = normalizeReferenceText(name);
    const key = String(item.id || `legacy-${kind}-${index}`);
    const position = normalizedName ? paddedReferenceText.indexOf(` ${normalizedName} `) : -1;
    return { id: key, name, image: String(item.image || ''), position };
  }).filter(photo => photo.name && photo.image && photo.position >= 0 && !existing.has(photo.id) && !existing.has(normalizeReferenceText(photo.name)))
    .sort((a, b) => a.position - b.position);
  return [...savedPhotos, ...inferredPhotos];
}

function normaliseGuidePhotoList(items, kind) {
  return (Array.isArray(items) ? items : []).map((item, index) => typeof item === 'string'
    ? { id: `legacy-${kind}-${index}`, name: 'Saved photo', image: item }
    : { id: String(item.id || `legacy-${kind}-${index}`), name: String(item.name || 'Saved photo'), image: String(item.image || '') });
}

function renderGuidePhotoPicker(kind) {
  const isSeaSoul = kind === 'seaSoul';
  const choices = guidePhotoCollection(kind).map(item => ({ id: String(item.id || ''), name: item.name, image: item.image }));
  const selected = editingGuidePhotos[kind];
  const container = $(isSeaSoul ? '#guide-sea-soul-choices' : '#guide-artifact-choices');
  const order = $(isSeaSoul ? '#guide-sea-soul-order' : '#guide-artifact-order');
  if (!container || !order) return;
  container.innerHTML = choices.length ? choices.map(item => {
    const checked = selected.some(photo => photo.id === item.id);
    const image = guidePhotoUrl(item.image);
    return `<label class="guide-photo-choice"><input type="checkbox" data-guide-photo-choice="${kind}" value="${escapeHtml(item.id)}"${checked ? ' checked' : ''}><span class="guide-photo-choice-image">${image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy">` : '<i aria-hidden="true">✦</i>'}</span><span>${escapeHtml(item.name || (isSeaSoul ? 'Sea Soul' : 'Artifact'))}</span></label>`;
  }).join('') : `<p class="guide-photo-empty">No ${isSeaSoul ? 'Sea Souls' : 'artifacts'} yet. Add some in the ${isSeaSoul ? 'Sea Soul' : 'Artifacts'} collection first.</p>`;
  order.innerHTML = selected.length ? selected.map((photo, index) => {
    const resolved = resolveGuideCollectionPhoto(photo, kind);
    const image = guidePhotoUrl(resolved.image);
    return `<div class="guide-photo-order-item" draggable="true" data-guide-photo-order-item="${kind}" data-photo-id="${escapeHtml(photo.id)}"><span class="guide-photo-drag" aria-hidden="true">⠿</span><span class="guide-photo-choice-image">${image ? `<img src="${escapeHtml(image)}" alt="" loading="lazy">` : '<i aria-hidden="true">✦</i>'}</span><strong>${escapeHtml(resolved.name)}</strong><button type="button" data-guide-photo-move="up" data-photo-id="${escapeHtml(photo.id)}" data-photo-kind="${kind}" aria-label="Move ${escapeHtml(resolved.name)} earlier"${index === 0 ? ' disabled' : ''}>↑</button><button type="button" data-guide-photo-move="down" data-photo-id="${escapeHtml(photo.id)}" data-photo-kind="${kind}" aria-label="Move ${escapeHtml(resolved.name)} later"${index === selected.length - 1 ? ' disabled' : ''}>↓</button><button type="button" data-guide-photo-remove data-photo-id="${escapeHtml(photo.id)}" data-photo-kind="${kind}" aria-label="Remove ${escapeHtml(resolved.name)}">×</button></div>`;
  }).join('') : '<p class="guide-photo-empty">No photos selected.</p>';
}

function renderGuidePhotoPickers() {
  renderGuidePhotoPicker('seaSoul');
  renderGuidePhotoPicker('artifacts');
}

function normaliseSkillPhotoSlots(items) {
  const photos = normaliseGuidePhotoList(items, 'skill');
  return Array.from({ length: 4 }, (_, index) => photos[index] || { id: `skill-slot-${index}`, name: `Skill ${index + 1}`, image: '' });
}

function renderSkillPhotoSlots() {
  const container = $('#guide-skill-photo-slots');
  if (!container) return;
  container.innerHTML = editingSkillPhotos.map((photo, index) => {
    const image = guidePhotoUrl(photo.image);
    const url = !String(photo.image || '').startsWith('data:image/') && !String(photo.image || '').startsWith('./') ? photo.image : '';
    return `<div class="guide-skill-slot" draggable="true" data-skill-photo-slot="${index}"><span class="guide-skill-slot-number">${index + 1}</span><span class="guide-skill-photo-circle">${image ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(photo.name)}">` : '<i aria-hidden="true">＋</i>'}</span><label class="guide-skill-file-button">${image ? 'Change photo' : 'Add photo'}<input type="file" accept="image/*" data-skill-photo-file="${index}" aria-label="Choose SP skill photo ${index + 1}"></label><input type="url" data-skill-photo-url="${index}" value="${escapeHtml(url)}" placeholder="Image URL (optional)" aria-label="SP skill photo ${index + 1} URL"><div class="guide-skill-slot-actions"><button type="button" data-skill-photo-move="left" data-skill-photo-index="${index}" aria-label="Move skill photo ${index + 1} left"${index === 0 ? ' disabled' : ''}>←</button><button type="button" data-skill-photo-move="right" data-skill-photo-index="${index}" aria-label="Move skill photo ${index + 1} right"${index === 3 ? ' disabled' : ''}>→</button><button type="button" data-skill-photo-clear="${index}" aria-label="Clear skill photo ${index + 1}"${image ? '' : ' disabled'}>×</button></div></div>`;
  }).join('');
}

function moveSkillPhoto(from, to) {
  if (from < 0 || from > 3 || to < 0 || to > 3 || from === to) return;
  editingSkillPhotos.splice(to, 0, editingSkillPhotos.splice(from, 1)[0]);
  renderSkillPhotoSlots();
}

function resetEditor() {
  editingId = null;
  editingGuidePhotos = { seaSoul: [], artifacts: [] };
  editingSkillPhotos = normaliseSkillPhotoSlots([]);
  $('#editor-title').textContent = 'Paste a Discord guide';
  $('#paste-submit').textContent = 'Add guide';
  $('#paste-title').value = '';
  $('#paste-summary').value = '';
  $('#paste-tags').value = '';
  $('#paste-fields').value = '';
  renderGuidePhotoPickers();
  renderSkillPhotoSlots();
  $('#paste-accent-color').value = '#e8df2b';
  $('#paste-thumbnail-position').value = 'right';
  $('#paste-main-image-position').value = 'bottom';
  $('#paste-image-top').value = '';
  $('#paste-image-bottom').value = '';
  $('#paste-image-top-file').value = '';
  $('#paste-image-bottom-file').value = '';
}

function editGuide(id) {
  const guide = state.guides.find(item => item.id === id);
  if (!guide) return;
  editingId = id;
  $('#editor-title').textContent = 'Edit guide';
  $('#paste-submit').textContent = 'Save changes';
  $('#paste-title').value = guide.title || '';
  $('#paste-summary').value = guide.summary || '';
  $('#paste-tags').value = (guide.tags || []).join(', ');
  $('#paste-accent-color').value = /^#[0-9a-f]{6}$/i.test(guide.accentColor || '') ? guide.accentColor : '#e8df2b';
  $('#paste-thumbnail-position').value = guide.thumbnailPosition || 'right';
  $('#paste-main-image-position').value = guide.mainImagePosition || 'bottom';
  $('#paste-fields').value = (guide.fields || []).map(field => `${field.name} | ${field.value}`).join('\n');
  editingGuidePhotos = { seaSoul: guideReferencePhotos(guide, 'seaSoul').map(photo => guidePhotoReference(photo, 'seaSoul')), artifacts: guideReferencePhotos(guide, 'artifacts').map(photo => guidePhotoReference(photo, 'artifacts')) };
  editingSkillPhotos = normaliseSkillPhotoSlots(guide.skillPhotos);
  renderGuidePhotoPickers();
  renderSkillPhotoSlots();
  $('#paste-image-top').value = guide.imageTop || '';
  $('#paste-image-bottom').value = guide.imageBottom || '';
  $('#paste-image-top-file').value = '';
  $('#paste-image-bottom-file').value = '';
  const categorySelect = $('#paste-category');
  if (![...categorySelect.options].some(option => option.value === guide.category)) {
    categorySelect.add(new Option(guide.category, guide.category));
  }
  categorySelect.value = guide.category || CHANNEL_CATEGORIES[0];
  dialog.close();
  pasteDialog.showModal();
}

async function importFile(file) {
  const text = await file.text();
  const ext = file.name.split('.').pop().toLowerCase();
  let guides;
  if (ext === 'json') guides = parseDiscordJson(JSON.parse(text), file.name);
  else if (ext === 'csv') guides = parseCsv(text, file.name);
  else guides = parseMarkdown(text, file.name);
  if (!guides.length) throw new Error('No guide-length messages found in that file.');
  const chosenCategory = $('#import-channel-select').value;
  if (chosenCategory) guides.forEach(guide => { guide.category = chosenCategory; });
  const keys = new Set(state.guides.map(g => `${g.title}\n${g.content}`));
  const newGuides = guides.filter(g => !keys.has(`${g.title}\n${g.content}`));
  state.guides.unshift(...newGuides);
  if (!persist()) { state.guides.splice(0, newGuides.length); render(); return; }
  render();
  $('#import-status').textContent = `Added ${newGuides.length} guide${newGuides.length === 1 ? '' : 's'} from ${file.name}.`;
  showToast(newGuides.length ? `${newGuides.length} guide${newGuides.length === 1 ? '' : 's'} imported` : 'Those guides are already in your library.');
}

$('#import-button').addEventListener('click', () => $('#file-input').click());
$('#empty-import-button').addEventListener('click', () => $('#file-input').click());
$('#restore-built-in-guides').addEventListener('click', restoreBuiltInGuides);
$('#export-app-data').addEventListener('click', () => {
  let data;
  try { data = Object.fromEntries(BACKUP_KEYS.map(key => [key, localStorage.getItem(key)])); }
  catch { showToast('Could not read saved app data.'); return; }
  const backup = { format: 'pirate-reborn-guidebook-backup', version: 1, createdAt: new Date().toISOString(), data };
  const blobUrl = URL.createObjectURL(new Blob([JSON.stringify(backup)], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = `pirate-reborn-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
  $('.profile-data-transfer>p').textContent = localize('Site backup downloaded.');
  showToast(localize('Site backup downloaded.'));
});
$('#import-app-data').addEventListener('click', () => $('#app-data-file').click());
$('#app-data-file').addEventListener('change', async event => {
  const file = event.currentTarget.files?.[0];
  event.currentTarget.value = '';
  if (!file) return;
  try {
    const backup = JSON.parse(await file.text());
    if (backup?.format !== 'pirate-reborn-guidebook-backup' || backup.version !== 1 || !backup.data || typeof backup.data !== 'object' || Array.isArray(backup.data)) {
      throw new Error('Choose a Pirate Reborn Guidebook backup file.');
    }
    if (!Object.prototype.hasOwnProperty.call(backup.data, STORAGE_KEY)) throw new Error('This backup is missing the guide library. Export a fresh backup from the website.');
    const rawGuideData = backup.data[STORAGE_KEY];
    let incomingGuides = null;
    if (rawGuideData !== null) {
      if (typeof rawGuideData !== 'string') throw new Error('The build library in this backup is invalid. Export a fresh backup from the website.');
      try { incomingGuides = JSON.parse(rawGuideData).guides; } catch { throw new Error('The build library in this backup is damaged. Export a fresh backup from the website.'); }
      if (!Array.isArray(incomingGuides)) throw new Error('The build library in this backup is invalid. Export a fresh backup from the website.');
    }
    for (const [key, value] of Object.entries(backup.data)) {
      if (!BACKUP_KEYS.includes(key) || typeof value !== 'string' && value !== null) throw new Error('The backup contains unsupported or invalid saved data.');
    }
    if (!Object.values(backup.data).some(value => typeof value === 'string' && value.length > 0)) throw new Error('This backup does not contain any saved profile data.');
    if (!window.confirm('Replace this app’s saved data with the website backup? Export a backup of this app first if you want to keep its current data.')) return;
    const previous = Object.fromEntries(BACKUP_KEYS.map(key => [key, localStorage.getItem(key)]));
    try {
      for (const key of BACKUP_KEYS) localStorage.removeItem(key);
      for (const key of BACKUP_KEYS) {
        const value = backup.data[key];
        if (value !== null && value !== undefined) {
          if (typeof value !== 'string') throw new Error('The backup contains invalid saved data.');
          localStorage.setItem(key, value);
        }
      }
      if (incomingGuides) {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        if (!Array.isArray(saved.guides) || saved.guides.length !== incomingGuides.length) throw new Error('The build library did not save completely. Check available app storage and try again.');
      }
    } catch (error) {
      for (const key of BACKUP_KEYS) { try { localStorage.removeItem(key); } catch {} }
      for (const key of BACKUP_KEYS) {
        try {
          const value = previous[key];
          if (value === null) localStorage.removeItem(key);
          else localStorage.setItem(key, value);
        } catch {}
      }
      throw error;
    }
    window.location.reload();
  } catch (error) {
    showToast(error.message || 'Could not import this backup.');
  }
});
async function importBundledProfileOnFirstLaunch() {
  if (typeof window.Capacitor?.isNativePlatform !== 'function' || !window.Capacitor.isNativePlatform()) return;
  let importedMarker;
  let existingLibrary;
  try {
    importedMarker = localStorage.getItem(BUNDLED_PROFILE_IMPORT_KEY);
    existingLibrary = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Could not check for a packaged site profile. The app will start with its built-in guide data.', error);
    return;
  }
  if (importedMarker) return;
  // Preserve data on an existing install. Only a clean install receives the packaged site snapshot.
  if (existingLibrary !== null) {
    try { localStorage.setItem(BUNDLED_PROFILE_IMPORT_KEY, 'existing-data-preserved'); } catch {}
    return;
  }
  let response;
  try { response = await fetch('./app-profile-backup.json', { cache: 'no-store' }); }
  catch { return; }
  if (!response.ok) return;
  try {
    const backup = await response.json();
    if (backup?.format !== 'pirate-reborn-guidebook-backup' || backup.version !== 1 || !backup.data || typeof backup.data !== 'object' || Array.isArray(backup.data) || !Object.prototype.hasOwnProperty.call(backup.data, STORAGE_KEY)) return;
    for (const [key, value] of Object.entries(backup.data)) {
      if (!BACKUP_KEYS.includes(key) || typeof value !== 'string' && value !== null) return;
    }
    if (!Object.values(backup.data).some(value => typeof value === 'string' && value.length > 0)) return;
    const previous = Object.fromEntries(BACKUP_KEYS.map(key => [key, localStorage.getItem(key)]));
    try {
      for (const key of BACKUP_KEYS) localStorage.removeItem(key);
      for (const [key, value] of Object.entries(backup.data)) if (value !== null) localStorage.setItem(key, value);
      localStorage.setItem(BUNDLED_PROFILE_IMPORT_KEY, String(backup.createdAt || 'bundled-profile-imported'));
    } catch (error) {
      for (const key of BACKUP_KEYS) {
        try {
          const value = previous[key];
          if (value === null) localStorage.removeItem(key);
          else localStorage.setItem(key, value);
        } catch {}
      }
      throw error;
    }
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    currentLanguage = ['en', 'fr', 'de', 'ar'].includes(savedLanguage) ? savedLanguage : 'en';
    applyTheme(localStorage.getItem(THEME_KEY) || document.documentElement.dataset.theme || 'light');
  } catch (error) {
    console.warn('Could not load the packaged site profile. The app will start with its built-in guide data.', error);
  }
}
$('#paste-button').addEventListener('click', () => {
  resetEditor();
  $('#paste-category').value = $('#import-channel-select').value || CHANNEL_CATEGORIES[0];
  pasteDialog.showModal();
});
$('#paste-close').addEventListener('click', () => pasteDialog.close());
$('#paste-cancel').addEventListener('click', () => pasteDialog.close());
pasteDialog.addEventListener('close', resetEditor);
function moveGuidePhoto(kind, fromId, toId) {
  const list = editingGuidePhotos[kind];
  const from = list.findIndex(photo => photo.id === fromId), to = list.findIndex(photo => photo.id === toId);
  if (from < 0 || to < 0 || from === to) return;
  list.splice(to, 0, list.splice(from, 1)[0]);
  renderGuidePhotoPicker(kind);
}
$('#paste-form').addEventListener('change', event => {
  const skillFile = event.target.closest('[data-skill-photo-file]');
  if (skillFile) {
    const index = Number(skillFile.dataset.skillPhotoFile), file = skillFile.files?.[0];
    if (!file) return;
    if (file.size > 6 * 1024 * 1024) { skillFile.value = ''; showToast('Choose an image smaller than 6 MB.'); return; }
    imageFileToDataUrl(file).then(image => { editingSkillPhotos[index] = { id: editingSkillPhotos[index].id, name: `Skill ${index + 1}`, image }; renderSkillPhotoSlots(); }).catch(() => showToast('Could not read that image.'));
    return;
  }
  const input = event.target.closest('[data-guide-photo-choice]');
  if (!input) return;
  const kind = input.dataset.guidePhotoChoice;
  const collection = kind === 'seaSoul'
    ? seaSoulEntries.map(item => ({ id: item.id, name: item.name, image: item.image }))
    : (customCollections.artifacts || []).filter(item => !/^Artifact Placeholder \d+$/i.test(item.name || '')).map(item => ({ id: item.id, name: item.name, image: item.image }));
  if (input.checked) {
    const photo = collection.find(item => item.id === input.value);
    if (photo && !editingGuidePhotos[kind].some(item => item.id === photo.id)) editingGuidePhotos[kind].push(photo);
  } else editingGuidePhotos[kind] = editingGuidePhotos[kind].filter(item => item.id !== input.value);
  renderGuidePhotoPicker(kind);
});
$('#paste-form').addEventListener('input', event => {
  const urlInput = event.target.closest('[data-skill-photo-url]');
  if (!urlInput) return;
  const index = Number(urlInput.dataset.skillPhotoUrl), value = urlInput.value.trim();
  editingSkillPhotos[index] = { ...editingSkillPhotos[index], name: `Skill ${index + 1}`, image: value };
  const slot = urlInput.closest('.guide-skill-slot');
  const preview = slot?.querySelector('.guide-skill-photo-circle');
  const safeImage = guidePhotoUrl(value);
  if (preview) preview.innerHTML = safeImage ? `<img src="${escapeHtml(safeImage)}" alt="">` : '<i aria-hidden="true">＋</i>';
  const clearButton = slot?.querySelector('[data-skill-photo-clear]');
  if (clearButton) clearButton.disabled = !safeImage;
});
$('#paste-form').addEventListener('click', event => {
  const moveSkill = event.target.closest('[data-skill-photo-move]');
  if (moveSkill) { moveSkillPhoto(Number(moveSkill.dataset.skillPhotoIndex), Number(moveSkill.dataset.skillPhotoIndex) + (moveSkill.dataset.skillPhotoMove === 'left' ? -1 : 1)); return; }
  const clearSkill = event.target.closest('[data-skill-photo-clear]');
  if (clearSkill) { const index = Number(clearSkill.dataset.skillPhotoClear); editingSkillPhotos[index] = { id: `skill-slot-${index}`, name: `Skill ${index + 1}`, image: '' }; renderSkillPhotoSlots(); return; }
  const button = event.target.closest('[data-guide-photo-move], [data-guide-photo-remove]');
  if (!button) return;
  const kind = button.dataset.photoKind, list = editingGuidePhotos[kind], index = list?.findIndex(item => item.id === button.dataset.photoId);
  if (!list || index < 0) return;
  if (button.hasAttribute('data-guide-photo-remove')) list.splice(index, 1);
  else {
    const destination = index + (button.dataset.guidePhotoMove === 'up' ? -1 : 1);
    if (destination < 0 || destination >= list.length) return;
    list.splice(destination, 0, list.splice(index, 1)[0]);
  }
  renderGuidePhotoPicker(kind);
});
let guidePhotoDrag = null, skillPhotoDrag = null;
$('#paste-form').addEventListener('dragstart', event => {
  const skillSlot = event.target.closest('[data-skill-photo-slot]');
  if (skillSlot) { skillPhotoDrag = Number(skillSlot.dataset.skillPhotoSlot); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', String(skillPhotoDrag)); return; }
  const item = event.target.closest('[data-guide-photo-order-item]');
  if (!item) return;
  guidePhotoDrag = { kind: item.dataset.guidePhotoOrderItem, id: item.dataset.photoId };
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', guidePhotoDrag.id);
});
$('#paste-form').addEventListener('dragover', event => {
  if (event.target.closest('[data-skill-photo-slot]') && skillPhotoDrag !== null) { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; return; }
  if (event.target.closest('[data-guide-photo-order-item]') && guidePhotoDrag) { event.preventDefault(); event.dataTransfer.dropEffect = 'move'; }
});
$('#paste-form').addEventListener('drop', event => {
  const skillTarget = event.target.closest('[data-skill-photo-slot]');
  if (skillTarget && skillPhotoDrag !== null) { event.preventDefault(); moveSkillPhoto(skillPhotoDrag, Number(skillTarget.dataset.skillPhotoSlot)); skillPhotoDrag = null; return; }
  const target = event.target.closest('[data-guide-photo-order-item]');
  if (!target || !guidePhotoDrag || guidePhotoDrag.kind !== target.dataset.guidePhotoOrderItem) return;
  event.preventDefault();
  moveGuidePhoto(guidePhotoDrag.kind, guidePhotoDrag.id, target.dataset.photoId);
  guidePhotoDrag = null;
});
$('#paste-form').addEventListener('dragend', () => { guidePhotoDrag = null; skillPhotoDrag = null; });
$('#paste-form').addEventListener('submit', async event => {
  event.preventDefault();
  const title = $('#paste-title').value.trim();
  const summary = $('#paste-summary').value.trim();
  const tags = $('#paste-tags').value.split(',').map(tag => tag.trim()).filter(Boolean);
  const seaSoulPhotos = editingGuidePhotos.seaSoul;
  const artifactPhotos = editingGuidePhotos.artifacts;
  const skillPhotos = editingSkillPhotos;
  const fields = [];
  for (const line of $('#paste-fields').value.split(/\r?\n/)) {
    const splitAt = line.indexOf('|');
    if (splitAt >= 0) {
      const name = line.slice(0, splitAt).trim(), value = line.slice(splitAt + 1).trim();
      if (name && value) fields.push({ name, value });
    } else if (fields.length && line.trim()) fields[fields.length - 1].value += `\n${line.trim()}`;
  }
  let imageTop, imageBottom;
  try {
    [imageTop, imageBottom] = await Promise.all([
      selectedImage($('#paste-image-top'), $('#paste-image-top-file')),
      selectedImage($('#paste-image-bottom'), $('#paste-image-bottom-file'))
    ]);
  } catch (error) { showToast(error.message); return; }
  if (editingId) {
    const guide = state.guides.find(item => item.id === editingId);
    if (guide) {
      const previous = JSON.parse(JSON.stringify(guide));
      guide.title = title || guide.title || 'Untitled guide';
      guide.updatedAt = new Date().toISOString();
      guide.category = $('#paste-category').value;
      guide.summary = summary || fields.map(field => field.value).join(' · ').replace(/[#>*_`~\[\]()]/g, ' ').replace(/\s+/g, ' ').slice(0, 180);
      guide.tags = tags;
      guide.fields = fields;
      guide.seaSoulPhotos = seaSoulPhotos;
      guide.artifactPhotos = artifactPhotos;
      guide.referencePhotosManaged = true;
      guide.skillPhotos = skillPhotos;
      guide.accentColor = $('#paste-accent-color').value;
      guide.thumbnailPosition = $('#paste-thumbnail-position').value;
      guide.mainImagePosition = $('#paste-main-image-position').value;
      guide.imageTop = imageTop || guide.imageTop || '';
      guide.imageBottom = imageBottom || guide.imageBottom || '';
      guide.localEdited = true;
      if (!persist()) { Object.assign(guide, previous); render(); return; }
      render(); pasteDialog.close();
      showToast('Guide updated');
    }
    return;
  }
  const now = new Date().toISOString();
  const newGuide = { id: `${slug(title)}-${cryptoRandom()}`, title, category: $('#paste-category').value, summary: summary || fields.map(field => field.value).join(' · ').replace(/\s+/g, ' ').slice(0, 180), content: '', tags, source: 'Created in editor', date: now, favorite: false, fields, seaSoulPhotos, artifactPhotos, skillPhotos, accentColor: $('#paste-accent-color').value, thumbnailPosition: $('#paste-thumbnail-position').value, mainImagePosition: $('#paste-main-image-position').value, imageTop, imageBottom, updatedAt: now };
  const guides = [newGuide];
  state.guides.unshift(newGuide);
  if (!persist()) { state.guides.shift(); render(); return; }
  render(); pasteDialog.close();
  showToast(`${guides.length} guide${guides.length === 1 ? '' : 's'} added`);
});
$('#sync-discord').addEventListener('click', async event => {
  if (!discordConnected) { discordConnectDialog.showModal(); return; }
  const button = event.currentTarget;
  const label = button.querySelector('span');
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  if (label) label.textContent = 'Syncing…';
  $('#import-status').textContent = 'Reading guides from Discord…';
  try {
    const response = await fetch('/api/discord/sync', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-Guidebook-Request-Token': discordRequestToken }, body: '{}' });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `Sync failed (${response.status}).`);
    const previous = state.guides;
    const merged = [...previous];
    const positions = new Map(merged.map((guide, index) => [guide.id, index]));
    let added = 0, updated = 0;
    for (const incoming of result.guides || []) {
      const index = positions.get(incoming.id);
      if (index === undefined) {
        positions.set(incoming.id, merged.length);
        merged.push({ ...incoming, syncManaged: true });
        added++;
      } else {
        const current = merged[index];
        if (current.syncManaged && !current.localEdited && current.updatedAt !== incoming.updatedAt) {
          merged[index] = { ...incoming, syncManaged: true, favorite: current.favorite, tags: current.tags?.length ? current.tags : incoming.tags };
          updated++;
        }
      }
    }
    state.guides = merged;
    if (!persist()) { state.guides = previous; render(); throw new Error('Not enough browser storage to save the synced guides.'); }
    render();
    const channelSummary = Object.entries(result.counts || {}).map(([name, count]) => `${name}: ${count}`).join(' · ');
    const truncation = result.truncated ? ' Sync stopped at the per-channel history limit.' : '';
    $('#import-status').textContent = `Discord sync complete: ${added} added, ${updated} refreshed. ${channelSummary}.${truncation}`;
    showToast(`${added} new guide${added === 1 ? '' : 's'} synced${updated ? ` · ${updated} updated` : ''}`);
  } catch (error) {
    const message = location.protocol === 'file:' || /failed to fetch|load failed/i.test(error.message)
      ? 'Start the local sync service with npm run discord:sync, then open http://127.0.0.1:4178.'
      : error.message;
    $('#import-status').textContent = message;
    showToast(message);
  } finally {
    button.disabled = false;
    button.removeAttribute('aria-busy');
    if (label) label.textContent = 'Sync Discord';
  }
});
$('#discord-connect-close').addEventListener('click', () => discordConnectDialog.close());
$('#discord-connect-cancel').addEventListener('click', () => discordConnectDialog.close());
$('#discord-connect-form').addEventListener('submit', async event => {
  event.preventDefault();
  const tokenInput = $('#discord-bot-token');
  const serverInput = $('#discord-server-id');
  const submit = $('#discord-connect-submit');
  const status = $('#discord-connect-status');
  const payload = { token: tokenInput.value, serverId: serverInput.value.trim() };
  tokenInput.value = '';
  submit.disabled = true;
  status.textContent = 'Checking the bot and its channel access…';
  try {
    const response = await fetch('/api/discord/connect', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-Guidebook-Request-Token': discordRequestToken }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `Connection failed (${response.status}).`);
    discordConnected = true;
    status.textContent = `Connected as ${result.username}.`;
    serverInput.value = '';
    discordConnectDialog.close();
    $('#sync-discord').click();
  } catch (error) {
    const message = location.protocol === 'file:' || /failed to fetch|load failed/i.test(error.message)
      ? 'Open this app at http://127.0.0.1:4178 while npm run discord:sync is running.'
      : error.message;
    status.textContent = message;
  } finally {
    tokenInput.value = '';
    submit.disabled = false;
  }
});
if (['127.0.0.1', 'localhost'].includes(location.hostname) && location.port === '4178') {
  fetch('/api/status').then(response => response.json()).then(result => { discordConnected = !!result.connected; discordRequestToken = result.requestToken || ''; }).catch(() => {});
}
$('#file-input').addEventListener('change', async event => {
  for (const file of event.target.files || []) {
    try { await importFile(file); }
    catch (error) { showToast(`${file.name}: ${error.message}`); }
  }
  event.target.value = '';
});
function setPage(page, updateHash = true) {
  if (!PAGE_TITLES[page]) page = 'home';
  activePage = page;
  document.querySelectorAll('[data-view]').forEach(view => { view.hidden = view.dataset.view !== page; });
  document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const primaryMobilePages = ['home', 'unit-builds', 'heroine', 'artifacts'];
  document.querySelectorAll('.mobile-nav-link[data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  const moreButton = $('#mobile-more-button');
  if (primaryMobilePages.includes(page)) moreButton.removeAttribute('aria-current');
  else moreButton.setAttribute('aria-current', 'page');
  document.querySelectorAll('.mobile-more-link[data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  $('#page-title').textContent = localize(PAGE_TITLES[page]);
  if (page === 'guides') renderCustomGuides();
  if (page === 'guides') renderAscensionGuides();
  if (page === 'guides') renderSpendingGuides();
  if (page === 'events') renderPersonalEvents();
  if (page === 'sea-soul') renderSeaSoulPage();
  $('#favorites-toggle').hidden = page !== 'unit-builds';
  if (updateHash && location.hash !== `#${page}`) {
    try { history.pushState(null, '', `#${page}`); }
    catch { location.hash = page; }
  }
  $('#app-sidebar').classList.remove('open');
  if ($('#mobile-more-dialog').open) $('#mobile-more-dialog').close();
  moreButton.setAttribute('aria-expanded', 'false');
  $('#sidebar-backdrop').hidden = true;
  $('#sidebar-toggle').setAttribute('aria-expanded', 'false');
  document.body.classList.remove('sidebar-open');
  applyLanguage();
  if (window.pirateGuideLenis) window.pirateGuideLenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: 'smooth' });
  window.dispatchEvent(new CustomEvent('guidebook:pagechange', { detail: { page } }));
  if (page === 'wish-calendar' && $('#wish-banner-board').classList.contains('is-live')) {
    requestAnimationFrame(() => $('#wish-banner-board').scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }
}

document.addEventListener('click', event => {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) setPage(pageButton.dataset.page);
  const openProfile = event.target.closest('[data-open-profile], #profile-customize');
  if (openProfile) {
    if ($('#mobile-more-dialog').open) $('#mobile-more-dialog').close();
    renderSiteSettings();
    $('#profile-dialog').showModal();
  }
  const openSettings = event.target.closest('[data-open-settings]');
  if (openSettings) { if ($('#mobile-more-dialog').open) $('#mobile-more-dialog').close(); if ($('#profile-dialog').open) $('#profile-dialog').close(); populateSiteSettingsForm(); $('#site-settings-dialog').showModal(); }
  const openLinks = event.target.closest('[data-open-links-settings]');
  if (openLinks) { populateLinksSettingsForm(); $('#links-settings-dialog').showModal(); }
  if (event.target.closest('#contact-button')) {
    const url = event.target.closest('#contact-button').dataset.contactUrl;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
    else { populateLinksSettingsForm(); $('#links-settings-dialog').showModal(); }
  }
  if (event.target.closest('#discord-server-button')) {
    const url = event.target.closest('#discord-server-button').dataset.serverUrl;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
    else { populateLinksSettingsForm(); $('#links-settings-dialog').showModal(); }
  }
  const addHeroine = event.target.closest('#heroine-add'), addArtifact = event.target.closest('#artifact-add');
  if (addHeroine || addArtifact) openCollectionForm(addHeroine ? 'heroine' : 'artifacts');
  const previewHeroine = event.target.closest('[data-preview-heroine]');
  if (previewHeroine) openHeroineDetail(Number(previewHeroine.dataset.previewHeroine));
  const previewArtifact = event.target.closest('[data-preview-artifact]');
  if (previewArtifact) openArtifactDetail(Number(previewArtifact.dataset.previewArtifact));
  const editCollection = event.target.closest('[data-edit-collection]');
  if (editCollection) openCollectionForm(editCollection.dataset.editCollection, Number(editCollection.dataset.index));
  if (event.target.closest('#download-guide-add')) openDownloadGuideForm();
  const removeDownload = event.target.closest('[data-remove-download-guide]');
  if (removeDownload) {
    downloadGuides = downloadGuides.filter(item => item.id !== removeDownload.dataset.removeDownloadGuide);
    try { localStorage.setItem(DOWNLOAD_GUIDES_KEY, JSON.stringify(downloadGuides)); renderDownloadGuides(); }
    catch { showToast('Could not save Downloads on this device.'); }
  }
  const removeCollection = event.target.closest('[data-remove-collection]');
  if (removeCollection) {
    const { collection, index } = { collection: removeCollection.dataset.removeCollection, index: Number(removeCollection.dataset.index) };
    const [removed] = customCollections[collection].splice(index, 1);
    try { localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(customCollections)); renderCollections(); }
    catch { customCollections[collection].splice(index, 0, removed); showToast('Could not save this collection on this device.'); return; }
    showUndoToast('Item removed.', () => {
      customCollections[collection].splice(index, 0, removed);
      try { localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(customCollections)); renderCollections(); }
      catch { customCollections[collection].splice(index, 1); showToast('Could not restore this item on this device.'); }
    });
  }
  const removeEvent = event.target.closest('[data-delete-event]');
  if (removeEvent) {
    const prior = personalEvents;
    personalEvents = personalEvents.filter(item => item.id !== removeEvent.dataset.deleteEvent);
    try { localStorage.setItem(PERSONAL_EVENTS_KEY, JSON.stringify(personalEvents)); }
    catch { personalEvents = prior; showToast('Could not remove this event on this device.'); return; }
    renderPersonalEvents();
  }
  const closeDialog = event.target.closest('[data-close-dialog]');
  if (closeDialog) $(`#${closeDialog.dataset.closeDialog}`).close();
  const collectionGuide = event.target.closest('[data-open-collection-guide], [data-open-artifact-guide]');
  if (collectionGuide) { setPage('unit-builds'); openGuide(collectionGuide.dataset.openCollectionGuide || collectionGuide.dataset.openArtifactGuide); }
});

// Remote community image links can expire. Keep their cards usable and show a
// deliberate local fallback instead of a broken-image glyph in WebView.
document.addEventListener('error', event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === 'true') return;
  image.dataset.fallbackApplied = 'true';
  const fallback = document.createElement('span');
  fallback.className = 'image-load-fallback';
  fallback.setAttribute('aria-hidden', 'true');
  fallback.textContent = '✦';
  image.replaceWith(fallback);
}, true);
function populateSiteSettingsForm() {
  $('#setting-profile-name').value = siteSettings.profileName || '';
  $('#setting-profile-tagline').value = siteSettings.profileTagline || '';
  $('#setting-avatar').value = siteSettings.avatar?.startsWith('data:') ? '' : siteSettings.avatar || '';
}
function populateLinksSettingsForm() {
  $('#setting-discord-invite').value = siteSettings.discordInvite || '';
  $('#setting-discord-profile').value = siteSettings.discordProfile || '';
}
$('#site-settings-form').addEventListener('submit', event => {
  event.preventDefault();
  const avatarInput = $('#setting-avatar').value.trim();
  siteSettings = {
    ...siteSettings,
    profileName: $('#setting-profile-name').value.trim(),
    profileTagline: $('#setting-profile-tagline').value.trim(),
    avatar: safeUrl(avatarInput) || (siteSettings.avatar?.startsWith('data:image/') ? siteSettings.avatar : '')
  };
  try { localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(siteSettings)); }
  catch { showToast('Could not save settings on this device.'); return; }
  $('#site-settings-dialog').close(); renderSiteSettings(); showToast('Profile saved on this device.');
});
$('#links-settings-form').addEventListener('submit', event => {
  event.preventDefault();
  siteSettings.discordInvite = safeUrl($('#setting-discord-invite').value.trim()) || '';
  siteSettings.discordProfile = safeUrl($('#setting-discord-profile').value.trim()) || '';
  try { localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(siteSettings)); }
  catch { showToast('Could not save these links on this device.'); return; }
  $('#links-settings-dialog').close(); renderSiteSettings(); showToast('Discord links saved.');
});
function openDownloadGuideForm() {
  $('#download-link-ios').value = platformDownloadLinks.ios || '';
  $('#download-link-android').value = platformDownloadLinks.android || '';
  $('#download-guide-dialog').showModal();
}
$('#download-guide-form').addEventListener('submit', event => {
  event.preventDefault();
  const ios = safeUrl($('#download-link-ios').value.trim()) || '';
  const android = safeUrl($('#download-link-android').value.trim()) || '';
  if (!ios && !android) { showToast('Add at least one iOS or Android download link.'); return; }
  const previous = platformDownloadLinks;
  platformDownloadLinks = { ios, android };
  try { localStorage.setItem(PLATFORM_DOWNLOADS_KEY, JSON.stringify(platformDownloadLinks)); }
  catch { platformDownloadLinks = previous; showToast('Could not save these links on this device.'); return; }
  $('#download-guide-dialog').close(); renderDownloadGuides(); showToast('Download links saved.');
});
grid.addEventListener('click', event => {
  const edit = event.target.closest('[data-edit-markers]');
  if (!edit) return;
  event.stopImmediatePropagation();
  const id = edit.dataset.editMarkers, guide = state.guides.find(item => item.id === id);
  $('#unit-marker-id').value = id;
  $('#guide-tags-edit').value = (guide?.tags || []).filter(tag => !['dps', 'tank', 'support'].includes(tag.toLowerCase())).join(', ');
  document.querySelectorAll('#unit-marker-form input[type="checkbox"]').forEach(box => { box.checked = (guide?.tags || []).some(tag => tag.toLowerCase() === box.value.toLowerCase()); });
  $('#unit-marker-dialog').showModal();
});
$('#unit-marker-form').addEventListener('submit', event => {
  event.preventDefault();
  const id = $('#unit-marker-id').value;
  const guide = state.guides.find(item => item.id === id);
  if (!guide) return;
  const tags = $('#guide-tags-edit').value.split(',').map(tag => tag.trim()).filter(Boolean);
  const roles = [...document.querySelectorAll('#unit-marker-form input[type="checkbox"]:checked')].map(box => box.value);
  guide.tags = [...new Set([...tags, ...roles])];
  if (!persist()) return;
  $('#unit-marker-dialog').close(); render();
});
function openCollectionForm(kind, editIndex = -1) {
  const existing = editIndex >= 0 ? customCollections[kind]?.[editIndex] : null;
  $('#collection-item-kind').value = kind;
  $('#collection-item-kicker').textContent = kind === 'heroine' ? 'HEROINE UNIT' : 'ARTIFACT';
  $('#collection-item-title').textContent = existing ? (kind === 'heroine' ? 'Edit heroine' : 'Edit artifact') : (kind === 'heroine' ? 'Add heroine unit' : 'Add artifact');
  $('#collection-item-edit-index').value = existing ? String(editIndex) : '';
  $('#collection-item-submit').textContent = existing ? 'Save changes' : 'Add to collection';
  $('#collection-item-name').toggleAttribute('list', kind === 'artifacts');
  if (kind === 'artifacts') $('#collection-item-name').setAttribute('list', 'artifact-suggestions');
  $('#collection-item-name').placeholder = kind === 'artifacts' ? 'Choose a guide recommendation or type a name' : 'Unit name';
  $('#collection-item-name').value = existing?.name || '';
  $('#collection-item-image').value = existing?.image && !existing.image.startsWith('data:image/') && !existing.image.startsWith('./') ? existing.image : '';
  $('#collection-item-file').value = '';
  $('#collection-item-description').value = existing?.description || '';
  $('#collection-item-description').placeholder = kind === 'heroine' ? 'Abilities, role, or what this heroine can do' : 'What this artifact does or any notes';
  $('#collection-item-description-label').firstChild.textContent = kind === 'heroine' ? 'MAIN SKILL ' : 'EFFECT / NOTES ';
  $('#heroine-fields').hidden = kind !== 'heroine';
  $('#heroine-passives').value = existing?.passives || '';
  $('#heroine-stars').value = String(existing?.stars || 3);
  $('#artifact-fields').hidden = kind !== 'artifacts';
  $('#artifact-source').value = existing?.source || '';
  $('#artifact-basic').value = existing?.basic || '';
  $('#artifact-tuning').value = existing?.tuning || '';
  $('#artifact-refining').value = existing?.refining || '';
  $('#artifact-skills').value = existing?.skills || '';
  $('#collection-item-dialog').showModal();
}
async function imageFileToDataUrl(file) {
  if (window.createImageBitmap) {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, 720 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    return canvas.toDataURL('image/jpeg', 0.82);
  }
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = reject; reader.readAsDataURL(file); });
}
$('#collection-item-form').addEventListener('submit', async event => {
  event.preventDefault();
  const file = $('#collection-item-file').files?.[0];
  let image = safeUrl($('#collection-item-image').value.trim()) || '';
  if (file) {
    if (file.size > 6 * 1024 * 1024) { showToast('Choose an image smaller than 6 MB.'); return; }
    image = await imageFileToDataUrl(file).catch(() => '');
  }
  const kind = $('#collection-item-kind').value;
  const editIndex = Number($('#collection-item-edit-index').value);
  const editing = Number.isInteger(editIndex) && editIndex >= 0 && editIndex < customCollections[kind].length;
  const oldItem = editing ? { ...customCollections[kind][editIndex] } : null;
  const nextItem = { ...(oldItem || {}), ...(kind === 'artifacts' ? { id: oldItem?.id || `artifact-${cryptoRandom()}` } : {}), name: $('#collection-item-name').value.trim(), image: image || oldItem?.image || '', description: $('#collection-item-description').value.trim() };
  if (kind === 'heroine') Object.assign(nextItem, { stars: Number($('#heroine-stars').value) || 3, passives: $('#heroine-passives').value.trim() });
  if (kind === 'artifacts') Object.assign(nextItem, { source: $('#artifact-source').value.trim(), basic: $('#artifact-basic').value.trim(), tuning: $('#artifact-tuning').value.trim(), refining: $('#artifact-refining').value.trim(), skills: $('#artifact-skills').value.trim() });
  if (editing) customCollections[kind][editIndex] = nextItem;
  else customCollections[kind].push(nextItem);
  try { localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(customCollections)); }
  catch { if (editing) customCollections[kind][editIndex] = oldItem; else customCollections[kind].pop(); showToast('This photo is too large to save on this device. Choose a smaller image.'); return; }
  $('#collection-item-dialog').close(); renderCollections(); showToast(editing ? 'Changes saved.' : 'Item added.');
});
document.querySelectorAll('#unit-marker-dialog, #site-settings-dialog, #links-settings-dialog, #collection-item-dialog').forEach(dialog => dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); }));
$('#home-destination-grid').addEventListener('click', event => {
  const favoritesButton = event.target.closest('[data-home-favorites]');
  if (favoritesButton) {
    state.favoritesOnly = true;
    $('#favorites-toggle').setAttribute('aria-pressed', 'true');
    setPage('unit-builds');
    render();
    return;
  }
  const recentButton = event.target.closest('[data-home-recent]');
  if (recentButton) {
    state.category = 'ur-list'; state.tag = ''; state.query = ''; state.favoritesOnly = false; state.sortBy = 'recent';
    $('#search-input').value = ''; $('#sort-select').value = 'recent';
    $('#favorites-toggle').setAttribute('aria-pressed', 'false');
    setPage('unit-builds');
    render();
  }
});
window.addEventListener('hashchange', () => {
  const requested = location.hash.slice(1);
  setPage(requested === 'library' ? 'unit-builds' : requested, false);
});
window.addEventListener('popstate', () => {
  const requested = location.hash.slice(1);
  setPage(requested === 'library' ? 'unit-builds' : requested, false);
});
$('#sidebar-toggle').addEventListener('click', () => {
  const open = !$('#app-sidebar').classList.contains('open');
  $('#app-sidebar').classList.toggle('open', open);
  $('#sidebar-backdrop').hidden = !open;
  $('#sidebar-toggle').setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('sidebar-open', open);
});
$('#sidebar-backdrop').addEventListener('click', () => setPage(activePage, false));
$('#mobile-more-button').addEventListener('click', event => {
  const menu = $('#mobile-more-dialog');
  if (menu.open) menu.close();
  else menu.showModal();
  event.currentTarget.setAttribute('aria-expanded', String(menu.open));
});
$('#mobile-more-close').addEventListener('click', () => $('#mobile-more-dialog').close());
$('#mobile-more-dialog').addEventListener('close', () => $('#mobile-more-button').setAttribute('aria-expanded', 'false'));
$('#mobile-more-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
$('#mobile-add-guide').addEventListener('click', () => setPage('guides'));
$('#mobile-sea-soul').addEventListener('click', () => setPage('sea-soul'));
$('#sea-soul-add').addEventListener('click', () => openSeaSoulEditor());
$('#sea-soul-content').addEventListener('click', event => {
  const edit = event.target.closest('[data-edit-sea-soul]');
  if (edit) openSeaSoulEditor(seaSoulEntries.find(entry => entry.id === edit.dataset.editSeaSoul));
});
$('#sea-soul-edit-form').addEventListener('submit', async event => {
  event.preventDefault();
  let image = $('#sea-soul-edit-image').value.trim() || editingSeaSoulImage;
  let skillImage = $('#sea-soul-edit-skill-image').value.trim() || editingSeaSoulSkillImage;
  try {
    if ($('#sea-soul-edit-image-file').files?.[0]) image = await readImageFile($('#sea-soul-edit-image-file').files[0]);
    if ($('#sea-soul-edit-skill-image-file').files?.[0]) skillImage = await readImageFile($('#sea-soul-edit-skill-image-file').files[0]);
  }
  catch (error) { showToast(error.message); return; }
  const entry = { id: editingSeaSoulId || `sea-soul-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, name: $('#sea-soul-edit-name').value.trim(), image, skillImage, skillDescription: $('#sea-soul-edit-skill-description').value.trim(), attributes: $('#sea-soul-edit-attributes').value.trim(), bonuses: $('#sea-soul-edit-bonuses').value.trim() };
  const priorEntries = seaSoulEntries;
  seaSoulEntries = editingSeaSoulId ? seaSoulEntries.map(item => item.id === editingSeaSoulId ? entry : item) : [...seaSoulEntries, entry];
  try { localStorage.setItem(SEA_SOUL_CONTENT_KEY, JSON.stringify(seaSoulEntries)); }
  catch { seaSoulEntries = priorEntries; }
  if (seaSoulEntries === priorEntries) {
    showToast('Could not save this Sea Soul on this device.');
    return;
  }
  renderSeaSoulPage(); $('#sea-soul-edit-dialog').close(); showToast('Sea Soul saved');
});
$('#custom-guide-add').addEventListener('click', () => { $('#custom-guide-form').reset(); $('#custom-guide-dialog').showModal(); });
$('#custom-guide-form').addEventListener('submit', event => {
  event.preventDefault();
  const title = $('#custom-guide-title').value.trim(), content = $('#custom-guide-content').value.trim();
  if (!title || !content) return;
  customGuides.unshift({ id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, title, summary: $('#custom-guide-summary').value.trim(), content, updatedAt: new Date().toISOString() });
  try { localStorage.setItem(CUSTOM_GUIDES_KEY, JSON.stringify(customGuides)); } catch { showToast('Could not save this guide on this device.'); return; }
  renderCustomGuides(); $('#custom-guide-dialog').close(); showToast(`Saved ${title}`);
});
$('#custom-guides-list').addEventListener('click', event => { const card = event.target.closest('[data-custom-guide]'); if (card) openCustomGuide(card.dataset.customGuide); });
$('#guides-view').addEventListener('click', event => {
  const spendingChoice = event.target.closest('[data-spending-choice]');
  if (spendingChoice) {
    selectedSpendingGuideId = spendingChoice.dataset.spendingChoice === 'p2w' ? P2W_STRATEGY_GUIDE.id : F2P_STRATEGY_GUIDE.id;
    renderSpendingGuides();
    return;
  }
  const spendingCard = event.target.closest('#spending-guide-card [data-custom-guide]');
  if (spendingCard) { openCustomGuide(spendingCard.dataset.customGuide); return; }
  const choice = event.target.closest('[data-ascension-choice]');
  if (choice) { selectedAscensionId = choice.dataset.ascensionChoice; renderAscensionGuides(); return; }
  const card = event.target.closest('#ascension-guide-groups [data-custom-guide]');
  if (card) openCustomGuide(card.dataset.customGuide);
});
let mobileNavSwipeStart = null;
const primaryMobilePages = ['home', 'unit-builds', 'heroine', 'artifacts'];
$('main').addEventListener('touchstart', event => {
  if (!matchMedia('(max-width: 680px)').matches || $('#mobile-more-dialog').open || event.touches.length !== 1) return;
  const target = event.target;
  if (target.closest('input, textarea, select, button, a, .category-list, .wish-banner-tabs, .top-tiers-grid, [data-no-page-swipe]')) return;
  const touch = event.touches[0];
  if (touch.clientX < 28 || touch.clientX > innerWidth - 28) return;
  mobileNavSwipeStart = { x: touch.clientX, y: touch.clientY, page: activePage };
}, { passive: true });
$('main').addEventListener('touchend', event => {
  if (!mobileNavSwipeStart || event.changedTouches.length !== 1) { mobileNavSwipeStart = null; return; }
  const touch = event.changedTouches[0], start = mobileNavSwipeStart;
  mobileNavSwipeStart = null;
  const dx = touch.clientX - start.x, dy = touch.clientY - start.y;
  if (Math.abs(dx) < 84 || Math.abs(dy) > 56) return;
  const index = primaryMobilePages.indexOf(start.page);
  if (index < 0) return;
  const nextIndex = Math.max(0, Math.min(primaryMobilePages.length - 1, index + (dx < 0 ? 1 : -1)));
  if (nextIndex !== index) setPage(primaryMobilePages[nextIndex]);
}, { passive: true });
$('#mobile-more-dialog').querySelector('.mobile-more-heading').addEventListener('touchstart', event => {
  if (event.touches.length === 1) mobileMoreSwipeStartY = event.touches[0].clientY;
}, { passive: true });
let mobileMoreSwipeStartY = null;
$('#mobile-more-dialog').querySelector('.mobile-more-heading').addEventListener('touchend', event => {
  if (mobileMoreSwipeStartY === null || event.changedTouches.length !== 1) { mobileMoreSwipeStartY = null; return; }
  const distance = event.changedTouches[0].clientY - mobileMoreSwipeStartY;
  mobileMoreSwipeStartY = null;
  if (distance > 56 && $('#mobile-more-dialog').open) $('#mobile-more-dialog').close();
}, { passive: true });
$('#home-feature-open').addEventListener('click', event => {
  const guideId = event.currentTarget.dataset.featureGuide;
  if (guideId) { setPage('unit-builds'); openGuide(guideId); }
  else setPage('unit-builds');
});
$('#home-recent-guides').addEventListener('click', event => {
  const button = event.target.closest('[data-home-guide]');
  if (button) { setPage('unit-builds'); openGuide(button.dataset.homeGuide); }
});
$('#tier-rankings').addEventListener('click', event => {
  const saveButton = event.target.closest('[data-tier-save]');
  if (saveButton) { if (saveTopTierIds()) { render(); showToast('Tier list saved on this device.'); } return; }
  const addButton = event.target.closest('[data-tier-add]');
  if (addButton) {
    activeTierGroup = addButton.dataset.tierAdd;
    const group = TIER_GROUPS.find(item => item.id === activeTierGroup);
    if (!group) return;
    $('#tier-picker-title').textContent = `Add to ${group.role} · ${group.label}`;
    $('#tier-picker-search').value = '';
    renderTierPicker();
    $('#tier-picker-dialog').showModal();
    requestAnimationFrame(() => $('#tier-picker-search').focus());
    return;
  }
  const removeButton = event.target.closest('[data-remove-tier]');
  if (removeButton) {
    const groupId = removeButton.dataset.tierRank;
    const next = { ...topTierGroups, [groupId]: topTierGroups[groupId].filter(id => id !== removeButton.dataset.removeTier) };
    if (updateTopTierGroups(next)) render();
    return;
  }
  const openButton = event.target.closest('[data-open-tier]');
  if (openButton) openGuide(openButton.dataset.openTier);
});
let draggingTierUnit = null;
$('#tier-rankings').addEventListener('dragstart', event => {
  const card = event.target.closest('[data-tier-card]');
  if (!card) return;
  draggingTierUnit = { id: card.dataset.tierCard, rank: card.dataset.tierRank };
  card.classList.add('is-dragging');
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', card.dataset.tierCard);
});
$('#tier-rankings').addEventListener('dragover', event => {
  if (!draggingTierUnit) return;
  const target = event.target.closest('[data-tier-card]');
  const gridTarget = event.target.closest('[data-tier-grid]');
  if (!target && !gridTarget) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  $('#tier-rankings').querySelectorAll('.is-drop-target').forEach(item => item.classList.remove('is-drop-target'));
  (target || gridTarget).classList.add('is-drop-target');
});
$('#tier-rankings').addEventListener('drop', event => {
  if (!draggingTierUnit) return;
  const targetCard = event.target.closest('[data-tier-card]');
  const targetGrid = event.target.closest('[data-tier-grid]');
  if (!targetCard && !targetGrid) return;
  event.preventDefault();
  const source = draggingTierUnit;
  const destinationRank = targetCard?.dataset.tierRank || targetGrid.dataset.tierGrid;
  const destinationId = targetCard?.dataset.tierCard;
  if (destinationRank === source.rank && (!destinationId || destinationId === source.id)) return;
  const next = Object.fromEntries(TIER_GROUPS.map(group => [group.id, [...topTierGroups[group.id]]]));
  const sourceIndex = next[source.rank].indexOf(source.id);
  if (sourceIndex < 0) return;
  if (destinationId) {
    const destinationIndex = next[destinationRank].indexOf(destinationId);
    if (destinationIndex < 0) return;
    [next[source.rank][sourceIndex], next[destinationRank][destinationIndex]] = [next[destinationRank][destinationIndex], next[source.rank][sourceIndex]];
  } else {
    next[source.rank].splice(sourceIndex, 1);
    next[destinationRank].unshift(source.id);
  }
  if (updateTopTierGroups(next)) render();
});
$('#tier-rankings').addEventListener('dragend', () => {
  draggingTierUnit = null;
  $('#tier-rankings').querySelectorAll('.is-dragging,.is-drop-target').forEach(item => item.classList.remove('is-dragging', 'is-drop-target'));
});
$('#tier-picker-close').addEventListener('click', () => $('#tier-picker-dialog').close());
$('#tier-picker-search').addEventListener('input', renderTierPicker);
$('#tier-picker-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
$('#tier-picker-list').addEventListener('click', event => {
  const option = event.target.closest('[data-add-tier]');
  if (!option) return;
  const guide = state.guides.find(item => item.id === option.dataset.addTier);
  const group = TIER_GROUPS.find(item => item.id === activeTierGroup);
  const assigned = new Set(TIER_GROUPS.flatMap(item => topTierGroups[item.id]));
  if (!guide || !group || assigned.has(guide.id)) return;
  const next = { ...topTierGroups, [activeTierGroup]: [guide.id, ...topTierGroups[activeTierGroup]] };
  if (updateTopTierGroups(next)) { $('#tier-picker-dialog').close(); render(); }
});
$('#wish-banner-add').addEventListener('click', () => {
  if (!activeWishBannerId) return;
  const banner = WISH_BANNERS.find(item => item.id === activeWishBannerId);
  $('#wish-picker-title').textContent = `Add to ${banner.name} Banner`;
  renderWishPicker();
  $('#wish-picker-dialog').showModal();
});
$('#event-add').addEventListener('click', openEventForm);
$('#event-form').addEventListener('submit', event => {
  event.preventDefault();
  const startDate = $('#event-date').value, startTime = $('#event-time').value;
  const endDateInput = $('#event-end-date').value, endTimeInput = $('#event-end-time').value;
  const endDate = endDateInput || (endTimeInput ? startDate : ''), endTime = endTimeInput || (endDateInput ? '23:59' : '');
  if (endDate && new Date(`${endDate}T${endTime}`).getTime() <= new Date(`${startDate}T${startTime}`).getTime()) { showToast('The end time must be after the start time.'); return; }
  const item = {
    id: `event-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type: $('#event-type').value,
    name: $('#event-name').value.trim(),
    date: startDate,
    time: startTime,
    endDate,
    endTime,
    repeat: $('#event-repeat').value,
    notes: $('#event-notes').value.trim()
  };
  if (!item.name || !/^\d{4}-\d{2}-\d{2}$/.test(item.date)) return;
  personalEvents = [...personalEvents, item];
  try { localStorage.setItem(PERSONAL_EVENTS_KEY, JSON.stringify(personalEvents)); }
  catch { personalEvents.pop(); showToast('Could not save this event on this device.'); return; }
  $('#event-dialog').close();
  renderPersonalEvents();
  showToast('Event saved on this device.');
});
document.querySelectorAll('[data-add-event-type]').forEach(button => button.addEventListener('click', () => openEventForm(button.dataset.addEventType)));
$('#event-type').addEventListener('change', event => { const value = event.currentTarget.value; if (value !== 'Custom' && (!$('#event-name').value.trim() || ['Sanctuary', 'Adventures', 'Voyage'].includes($('#event-name').value))) $('#event-name').value = value; });
window.setInterval(updatePersonalEventTimers, 1000);
$('#wish-banner-tabs').addEventListener('click', event => {
  const tab = event.target.closest('[data-select-wish-banner]');
  if (!tab || !WISH_BANNERS.some(item => item.id === tab.dataset.selectWishBanner)) return;
  activeWishBannerId = tab.dataset.selectWishBanner;
  render();
});
$('#wish-picker-close').addEventListener('click', () => $('#wish-picker-dialog').close());
$('#wish-picker-dialog').addEventListener('click', event => { if (event.target === event.currentTarget) event.currentTarget.close(); });
$('#wish-picker-list').addEventListener('click', event => {
  const option = event.target.closest('[data-add-wish-unit]');
  if (!option || !activeWishBannerId) return;
  const guide = state.guides.find(item => item.id === option.dataset.addWishUnit);
  if (!guide || Object.values(wishBannerUnits).some(ids => ids.includes(guide.id))) return;
  const bannerId = activeWishBannerId;
  const pickerList = $('#wish-picker-list');
  const scrollTop = pickerList.scrollTop;
  wishBannerUnits = { ...wishBannerUnits, [bannerId]: [guide.id, ...wishBannerUnits[bannerId]] };
  saveWishBannerUnits();
  render();
  renderWishPicker();
  pickerList.scrollTop = scrollTop;
});
$('#wish-current-event').addEventListener('click', event => {
  const select = event.target.closest('[data-open-current-wish]');
  if (!select) return;
  activeWishBannerId = select.dataset.openCurrentWish;
  renderWishBanner();
  requestAnimationFrame(() => $('#wish-banner-board').scrollIntoView({ behavior: 'smooth', block: 'start' }));
});
$('#wish-banner-grid').addEventListener('click', event => {
  const remove = event.target.closest('[data-remove-wish-unit]');
  if (remove && activeWishBannerId) {
    const bannerId = activeWishBannerId;
    const unitId = remove.dataset.removeWishUnit;
    const previousUnits = Array.isArray(wishBannerUnits[bannerId]) ? wishBannerUnits[bannerId] : [];
    const nextUnits = previousUnits.filter(id => id !== unitId);
    if (nextUnits.length === previousUnits.length) return;
    wishBannerUnits = { ...wishBannerUnits, [bannerId]: nextUnits };
    if (!saveWishBannerUnits()) {
      wishBannerUnits = { ...wishBannerUnits, [bannerId]: previousUnits };
      render();
      return;
    }
    render();
    showToast('Unit removed from banner.');
    return;
  }
  const open = event.target.closest('[data-open-wish-unit]');
  if (open) openGuide(open.dataset.openWishUnit);
});
let draggingWishUnit = null;
$('#wish-banner-grid').addEventListener('dragstart', event => {
  const card = event.target.closest('[data-wish-card]');
  if (!card || !activeWishBannerId) return;
  draggingWishUnit = card.dataset.wishCard;
  card.classList.add('is-wish-dragging');
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', draggingWishUnit);
});
$('#wish-banner-grid').addEventListener('dragover', event => {
  if (!draggingWishUnit) return;
  const target = event.target.closest('[data-wish-card]');
  if (!target) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  $('#wish-banner-grid').querySelectorAll('.is-wish-drop-target').forEach(card => card.classList.remove('is-wish-drop-target'));
  target.classList.add('is-wish-drop-target');
});
$('#wish-banner-grid').addEventListener('drop', event => {
  if (!draggingWishUnit || !activeWishBannerId) return;
  const target = event.target.closest('[data-wish-card]');
  if (!target) return;
  event.preventDefault();
  const bannerId = activeWishBannerId;
  const nextOrder = [...(wishBannerUnits[bannerId] || [])];
  const sourceIndex = nextOrder.indexOf(draggingWishUnit);
  const destinationId = target.dataset.wishCard;
  if (sourceIndex < 0 || destinationId === draggingWishUnit) return;
  const [moved] = nextOrder.splice(sourceIndex, 1);
  const destinationIndex = nextOrder.indexOf(destinationId);
  if (destinationIndex < 0) return;
  nextOrder.splice(destinationIndex, 0, moved);
  const previousOrder = wishBannerUnits[bannerId];
  wishBannerUnits = { ...wishBannerUnits, [bannerId]: nextOrder };
  if (!saveWishBannerUnits()) wishBannerUnits = { ...wishBannerUnits, [bannerId]: previousOrder };
  render();
});
$('#wish-banner-grid').addEventListener('dragend', () => {
  draggingWishUnit = null;
  $('#wish-banner-grid').querySelectorAll('.is-wish-dragging,.is-wish-drop-target').forEach(card => card.classList.remove('is-wish-dragging', 'is-wish-drop-target'));
});
$('#wish-banner-save').addEventListener('click', () => { if (saveWishBannerUnits()) { render(); showToast('Wish lineup saved on this device.'); } });
$('#search-input').addEventListener('input', event => { state.query = event.target.value.trim(); render(); });
$('#search-clear').addEventListener('click', () => {
  state.query = '';
  $('#search-input').value = '';
  render();
  $('#search-input').focus();
});
$('#search-input').addEventListener('focus', updateSearchSuggestions);
$('#search-input').addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' && !searchSuggestions.hidden) {
    const first = searchSuggestions.querySelector('.search-suggestion');
    if (first) { event.preventDefault(); first.focus(); }
  } else if (event.key === 'Escape' && !searchSuggestions.hidden) {
    event.preventDefault(); searchSuggestions.hidden = true; event.currentTarget.setAttribute('aria-expanded', 'false');
  }
});
searchSuggestions.addEventListener('click', event => {
  const option = event.target.closest('[data-suggestion-id]');
  if (!option) return;
  const guide = state.guides.find(item => item.id === option.dataset.suggestionId);
  if (guide) { state.query = guide.title; $('#search-input').value = guide.title; render(); searchSuggestions.hidden = true; openGuide(guide.id); }
});
searchSuggestions.addEventListener('keydown', event => {
  const options = [...searchSuggestions.querySelectorAll('.search-suggestion')];
  const index = options.indexOf(event.target.closest('.search-suggestion'));
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    if (options.length) options[(Math.max(0, index) + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length].focus();
  } else if (event.key === 'Escape') { searchSuggestions.hidden = true; $('#search-input').setAttribute('aria-expanded', 'false'); $('#search-input').focus(); }
});
document.addEventListener('pointerdown', event => {
  if (!event.target.closest('.search-wrap') && !searchSuggestions.hidden) {
    searchSuggestions.hidden = true;
    $('#search-input').setAttribute('aria-expanded', 'false');
  }
});
$('#category-list').addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (button) { state.category = button.dataset.category; render(); }
});
$('#tag-select').addEventListener('change', event => { state.tag = event.target.value; render(); });
$('#tag-select-button').addEventListener('click', () => {
  const menu = $('#tag-select-menu');
  menu.hidden = !menu.hidden;
  $('#tag-select-button').setAttribute('aria-expanded', String(!menu.hidden));
});
$('#tag-select-menu').addEventListener('click', event => {
  const option = event.target.closest('[data-tag-option]');
  if (!option) return;
  $('#tag-select').value = option.dataset.tagOption;
  $('#tag-select-menu').hidden = true;
  $('#tag-select-button').setAttribute('aria-expanded', 'false');
  $('#tag-select').dispatchEvent(new Event('change', { bubbles: true }));
});
document.addEventListener('click', event => {
  if (event.target.closest('.ios-select-control')) return;
  const menu = $('#tag-select-menu');
  if (menu && !menu.hidden) { menu.hidden = true; $('#tag-select-button').setAttribute('aria-expanded', 'false'); }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !$('#tag-select-menu').hidden) { event.preventDefault(); event.stopPropagation(); $('#tag-select-menu').hidden = true; $('#tag-select-button').setAttribute('aria-expanded', 'false'); $('#tag-select-button').focus(); }
});
$('#clear-filters').addEventListener('click', () => {
  state.category = 'ur-list'; state.tag = ''; state.query = ''; state.favoritesOnly = false;
  $('#search-input').value = '';
  $('#sort-select').value = 'name'; state.sortBy = 'name';
  $('#favorites-toggle').setAttribute('aria-pressed', 'false');
  render();
});
$('#empty-favorites-button').addEventListener('click', () => {
  state.favoritesOnly = false;
  $('#favorites-toggle').setAttribute('aria-pressed', 'false');
  render();
});
$('#favorites-toggle').addEventListener('click', event => {
  state.favoritesOnly = !state.favoritesOnly;
  event.currentTarget.setAttribute('aria-pressed', String(state.favoritesOnly));
  setPage('unit-builds'); render();
});
function applyTheme(theme) {
  const light = theme === 'light';
  document.documentElement.dataset.theme = light ? 'light' : 'dark';
  const toggle = $('#theme-toggle');
  toggle.setAttribute('aria-pressed', String(light));
  toggle.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
  toggle.innerHTML = `<span aria-hidden="true">${light ? '☾' : '☼'}</span><small>${light ? 'Dark' : 'Light'}</small>`;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f2eee4' : '#101923');
  window.dispatchEvent(new CustomEvent('guidebook:themechange', { detail: { theme: light ? 'light' : 'dark' } }));
}
applyTheme(document.documentElement.dataset.theme || 'light');
$('#theme-toggle').addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch { showToast('Theme changed, but could not be saved on this device.'); }
});
$('#sort-select').addEventListener('change', event => { state.sortBy = event.target.value; render(); });
grid.addEventListener('click', event => {
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) {
    event.stopPropagation();
    const guide = state.guides.find(item => item.id === favorite.dataset.favorite);
    if (guide) {
      guide.favorite = !guide.favorite;
      const saved = guide.favorite;
      if (!persist()) guide.favorite = !guide.favorite;
      else showToast(saved ? `Saved ${guide.title} to your crew` : `Removed ${guide.title} from saved crew`);
      render();
    }
    return;
  }
  const card = event.target.closest('[data-id]'); if (card) openGuide(card.dataset.id);
});
grid.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-id]')) { event.preventDefault(); openGuide(event.target.dataset.id); }
});
document.addEventListener('keydown', event => {
  const typing = event.target.matches('input, textarea, select, [contenteditable="true"]');
  const searchShortcut = ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') || (event.key === '/' && !typing);
  if (searchShortcut && !document.querySelector('dialog[open]')) {
    event.preventDefault();
    if (activePage !== 'unit-builds') setPage('unit-builds');
    $('#search-input').focus();
    $('#search-input').select();
  }
  if (event.key === 'Escape' && document.activeElement === $('#search-input') && state.query && searchSuggestions.hidden) { state.query = ''; $('#search-input').value = ''; render(); }
});
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
$('#dialog-content').addEventListener('click', event => {
  const deleteButton = event.target.closest('[data-delete-guide]');
  if (deleteButton) { deleteGuide(deleteButton.dataset.deleteGuide); return; }
  const button = event.target.closest('[data-edit-guide]');
  if (button) editGuide(button.dataset.editGuide);
});
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; $('#install-button').hidden = false; });
$('#install-button').addEventListener('click', async () => {
  if (!installPrompt) return;
  installPrompt.prompt(); await installPrompt.userChoice; installPrompt = null; $('#install-button').hidden = true;
});
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./sw.js').catch(() => {});
let externalStorageRefreshPending = false;
function refreshAfterExternalStorageChange() {
  if (!externalStorageRefreshPending || document.querySelector('dialog[open]')) return;
  externalStorageRefreshPending = false;
  window.location.reload();
}
window.addEventListener('storage', event => {
  if (event.key !== null && !BACKUP_KEYS.includes(event.key)) return;
  externalStorageRefreshPending = true;
  refreshAfterExternalStorageChange();
});
document.querySelectorAll('dialog').forEach(item => item.addEventListener('close', refreshAfterExternalStorageChange));
$('#language-select').addEventListener('change', event => {
  currentLanguage = ['en', 'fr', 'de', 'ar'].includes(event.target.value) ? event.target.value : 'en';
  try { localStorage.setItem(LANGUAGE_KEY, currentLanguage); } catch {}
  applyLanguage();
  render();
  setPage(activePage, false);
});
const languageObserver = new MutationObserver(records => {
  const changed = new Set();
  records.forEach(record => {
    if (record.type === 'characterData') changed.add(record.target);
    else record.addedNodes.forEach(node => changed.add(node));
  });
  changed.forEach(node => { if (node.isConnected) applyLanguage(node); });
});
languageObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
applyLanguage(document.body);
async function initializeGuidebook() {
  await importBundledProfileOnFirstLaunch();
  loadSaved(); loadTopTierIds(); loadWishBannerUnits(); loadCustomData(); render();
  const initialPage = location.hash.slice(1);
  setPage(initialPage === 'library' ? 'unit-builds' : (PAGE_TITLES[initialPage] ? initialPage : 'home'), false);
  const startupScreen = $('#startup-screen');
  if (startupScreen) {
    let startupDismissed = false;
    const dismissStartup = () => {
      if (startupDismissed) return;
      startupDismissed = true;
      const elapsed = Date.now() - (Number(window.__guidebookStartedAt) || Date.now());
      window.setTimeout(() => {
        startupScreen.classList.add('is-exiting');
        window.setTimeout(() => startupScreen.remove(), 350);
      }, Math.max(0, 400 - elapsed));
    };
    // The app has rendered above; don't wait for slow remote images or window.load.
    dismissStartup();
    window.setTimeout(dismissStartup, 2500);
  }
}
initializeGuidebook();
window.setInterval(() => {
  if (activePage !== 'home') return;
  renderFeaturedGuide(true);
}, 5000);
window.setInterval(updateWishStatuses, 60000);
