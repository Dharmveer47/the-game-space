export const API_URL = `https://api.rawg.io/api/games/11859?key=${process.env.apiKey}`;
export async function getGameList() {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

export const singleData = {
  id: 11859,
  slug: 'team-fortress-2',
  name: 'Team Fortress 2',
  released: '2007-10-10',
  tba: false,
  background_image: 'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
  rating: 3.68,
  rating_top: 4,
  ratings: [
    {
      id: 4,
      title: 'recommended',
      count: 1289,
      percent: 45.24,
    },
    {
      id: 3,
      title: 'meh',
      count: 688,
      percent: 24.15,
    },
    {
      id: 5,
      title: 'exceptional',
      count: 596,
      percent: 20.92,
    },
    {
      id: 1,
      title: 'skip',
      count: 276,
      percent: 9.69,
    },
  ],
  ratings_count: 2823,
  reviews_text_count: 18,
  added: 12785,
  added_by_status: {
    yet: 184,
    owned: 9823,
    beaten: 786,
    toplay: 47,
    dropped: 1780,
    playing: 165,
  },
  metacritic: 92,
  playtime: 9,
  suggestions_count: 529,
  updated: '2024-02-17T15:39:19',
  user_game: null,
  reviews_count: 2849,
  saturated_color: '0f0f0f',
  dominant_color: '0f0f0f',
  platforms: [
    {
      platform: {
        id: 4,
        name: 'PC',
        slug: 'pc',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 525904,
        image_background:
          'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
      },
      released_at: '2007-10-10',
      requirements_en: {
        minimum:
          '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 512 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
        recommended:
          '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 (32/64-bit)<br></li><li><strong>Processor:</strong> Pentium 4 processor (3.0GHz, or better)<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
      },
      requirements_ru: {
        minimum:
          'Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c',
        recommended:
          'Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c',
      },
    },
    {
      platform: {
        id: 5,
        name: 'macOS',
        slug: 'macos',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 103400,
        image_background:
          'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
      },
      released_at: '2007-10-10',
      requirements_en: {
        minimum:
          '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X version Leopard 10.5.8 and above<br></li><li><strong>Processor:</strong> 1.7 GHz Processor or better<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>',
      },
      requirements_ru: null,
    },
    {
      platform: {
        id: 6,
        name: 'Linux',
        slug: 'linux',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 76454,
        image_background:
          'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
      },
      released_at: '2007-10-10',
      requirements_en: {
        minimum:
          '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 1 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 15 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>',
      },
      requirements_ru: null,
    },
  ],
  parent_platforms: [
    {
      platform: {
        id: 1,
        name: 'PC',
        slug: 'pc',
      },
    },
    {
      platform: {
        id: 5,
        name: 'Apple Macintosh',
        slug: 'mac',
      },
    },
    {
      platform: {
        id: 6,
        name: 'Linux',
        slug: 'linux',
      },
    },
  ],
  genres: [
    {
      id: 4,
      name: 'Action',
      slug: 'action',
      games_count: 178358,
      image_background:
        'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
    },
    {
      id: 2,
      name: 'Shooter',
      slug: 'shooter',
      games_count: 59459,
      image_background:
        'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    },
  ],
  stores: [
    {
      id: 13018,
      store: {
        id: 1,
        name: 'Steam',
        slug: 'steam',
        domain: 'store.steampowered.com',
        games_count: 89063,
        image_background:
          'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
      },
    },
  ],
  clip: null,
  tags: [
    {
      id: 40847,
      name: 'Steam Achievements',
      slug: 'steam-achievements',
      language: 'eng',
      games_count: 35702,
      image_background:
        'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
    },
    {
      id: 7,
      name: 'Multiplayer',
      slug: 'multiplayer',
      language: 'eng',
      games_count: 37130,
      image_background:
        'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
    },
    {
      id: 7808,
      name: 'steam-trading-cards',
      slug: 'steam-trading-cards',
      language: 'eng',
      games_count: 7569,
      image_background:
        'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
    },
    {
      id: 18,
      name: 'Co-op',
      slug: 'co-op',
      language: 'eng',
      games_count: 11072,
      image_background:
        'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    },
    {
      id: 411,
      name: 'cooperative',
      slug: 'cooperative',
      language: 'eng',
      games_count: 4703,
      image_background:
        'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
    },
    {
      id: 8,
      name: 'First-Person',
      slug: 'first-person',
      language: 'eng',
      games_count: 30626,
      image_background:
        'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
    },
    {
      id: 40845,
      name: 'Partial Controller Support',
      slug: 'partial-controller-support',
      language: 'eng',
      games_count: 11229,
      image_background:
        'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
    },
    {
      id: 30,
      name: 'FPS',
      slug: 'fps',
      language: 'eng',
      games_count: 12893,
      image_background:
        'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
    },
    {
      id: 9,
      name: 'Online Co-Op',
      slug: 'online-co-op',
      language: 'eng',
      games_count: 5203,
      image_background:
        'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
    },
    {
      id: 4,
      name: 'Funny',
      slug: 'funny',
      language: 'eng',
      games_count: 24154,
      image_background:
        'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
    },
    {
      id: 123,
      name: 'Comedy',
      slug: 'comedy',
      language: 'eng',
      games_count: 11960,
      image_background:
        'https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg',
    },
    {
      id: 79,
      name: 'Free to Play',
      slug: 'free-to-play',
      language: 'eng',
      games_count: 6248,
      image_background:
        'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
    },
    {
      id: 80,
      name: 'Tactical',
      slug: 'tactical',
      language: 'eng',
      games_count: 4789,
      image_background:
        'https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg',
    },
    {
      id: 11669,
      name: 'stats',
      slug: 'stats',
      language: 'eng',
      games_count: 4821,
      image_background:
        'https://media.rawg.io/media/games/f52/f5206d55f918edf8ee07803101106fa6.jpg',
    },
    {
      id: 40852,
      name: 'Steam Workshop',
      slug: 'steam-workshop',
      language: 'eng',
      games_count: 1447,
      image_background:
        'https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg',
    },
    {
      id: 40832,
      name: 'Cross-Platform Multiplayer',
      slug: 'cross-platform-multiplayer',
      language: 'eng',
      games_count: 2509,
      image_background:
        'https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg',
    },
    {
      id: 40838,
      name: 'Includes level editor',
      slug: 'includes-level-editor',
      language: 'eng',
      games_count: 1813,
      image_background:
        'https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg',
    },
    {
      id: 62,
      name: 'Moddable',
      slug: 'moddable',
      language: 'eng',
      games_count: 880,
      image_background:
        'https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg',
    },
    {
      id: 40837,
      name: 'In-App Purchases',
      slug: 'in-app-purchases',
      language: 'eng',
      games_count: 2440,
      image_background:
        'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    },
    {
      id: 40833,
      name: 'Captions available',
      slug: 'captions-available',
      language: 'eng',
      games_count: 1311,
      image_background:
        'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
    },
    {
      id: 125,
      name: 'Crafting',
      slug: 'crafting',
      language: 'eng',
      games_count: 3896,
      image_background:
        'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
    },
    {
      id: 11,
      name: 'Team-Based',
      slug: 'team-based',
      language: 'eng',
      games_count: 1494,
      image_background:
        'https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg',
    },
    {
      id: 40856,
      name: 'Valve Anti-Cheat enabled',
      slug: 'valve-anti-cheat-enabled',
      language: 'eng',
      games_count: 105,
      image_background:
        'https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg',
    },
    {
      id: 170,
      name: 'Competitive',
      slug: 'competitive',
      language: 'eng',
      games_count: 1116,
      image_background:
        'https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg',
    },
    {
      id: 197,
      name: 'Robots',
      slug: 'robots',
      language: 'eng',
      games_count: 8053,
      image_background:
        'https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg',
    },
    {
      id: 40834,
      name: 'Commentary available',
      slug: 'commentary-available',
      language: 'eng',
      games_count: 266,
      image_background:
        'https://media.rawg.io/media/games/594/5949baae74fe9e399adbce0c44e28783.jpg',
    },
    {
      id: 164,
      name: 'Cartoony',
      slug: 'cartoony',
      language: 'eng',
      games_count: 4991,
      image_background:
        'https://media.rawg.io/media/games/213/2138ba3c97d02b581ca0b50805fcd49c.jpg',
    },
    {
      id: 179,
      name: 'Cartoon',
      slug: 'cartoon',
      language: 'eng',
      games_count: 5489,
      image_background:
        'https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg',
    },
    {
      id: 265,
      name: 'Class-Based',
      slug: 'class-based',
      language: 'eng',
      games_count: 544,
      image_background:
        'https://media.rawg.io/media/screenshots/4e0/4e0ea16d3362361791100bcbd7a1bf1b.jpg',
    },
    {
      id: 245,
      name: 'Trading',
      slug: 'trading',
      language: 'eng',
      games_count: 1070,
      image_background:
        'https://media.rawg.io/media/screenshots/2af/2aff127d5caa7985bfdb5106f75052fe.jpg',
    },
  ],
  esrb_rating: {
    id: 4,
    name: 'Mature',
    slug: 'mature',
  },
  short_screenshots: [
    {
      id: -1,
      image: 'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
    },
    {
      id: 97905,
      image: 'https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg',
    },
    {
      id: 97906,
      image: 'https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg',
    },
    {
      id: 97907,
      image: 'https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg',
    },
    {
      id: 97908,
      image: 'https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg',
    },
    {
      id: 97909,
      image: 'https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg',
    },
    {
      id: 97910,
      image: 'https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg',
    },
  ],
};

export const singleDetails = {
  id: 11859,
  slug: 'team-fortress-2',
  name: 'Team Fortress 2',
  name_original: 'Team Fortress 2',
  description:
    '<p>TF2 is an objective based arena shooter with unique characters, representing different classes, acting as a staple of casual and competitive gaming for Steam. Dozens of different maps and game modes are trying to keep this game alive, after all the years it was available. Each character has a vast arsenal that can be accessed through completing in-game achievements, randomly receiving them from loot-boxes within the game, crafting them or just buying and trading items on the Steam Market. <br />\nFor players, that&#39;s not into the direct clash with players from the enemy team, Team Fortress 2 introduced a PvE mode, which is wave defense from the mirrored robotic opponents that have qualities of some of the playable classes. <br />\nEvery update and introduction, made over years, provided a lot of entertainment In the form of comic books an short animated videos, creating and explaining a story behind endless clashes for resources, briefcases or pure domination.</p>',
  metacritic: 92,
  metacritic_platforms: [],
  released: '2007-10-10',
  tba: false,
  updated: '2024-02-17T15:39:19',
  background_image: 'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
  background_image_additional:
    'https://media.rawg.io/media/screenshots/22d/22d0ef79c8ff037f83c633f904f79198.jpg',
  website: 'http://www.teamfortress.com/',
  rating: 3.68,
  rating_top: 4,
  ratings: [
    {
      id: 4,
      title: 'recommended',
      count: 1289,
      percent: 45.24,
    },
    {
      id: 3,
      title: 'meh',
      count: 688,
      percent: 24.15,
    },
    {
      id: 5,
      title: 'exceptional',
      count: 596,
      percent: 20.92,
    },
    {
      id: 1,
      title: 'skip',
      count: 276,
      percent: 9.69,
    },
  ],
  reactions: {
    '1': 5,
    '3': 5,
    '4': 8,
    '5': 3,
    '6': 2,
    '7': 4,
    '8': 7,
    '9': 1,
    '11': 3,
    '12': 3,
    '16': 1,
    '20': 1,
  },
  added: 12785,
  added_by_status: {
    yet: 184,
    owned: 9823,
    beaten: 786,
    toplay: 47,
    dropped: 1780,
    playing: 165,
  },
  playtime: 9,
  screenshots_count: 10,
  movies_count: 0,
  creators_count: 3,
  achievements_count: 520,
  parent_achievements_count: 518,
  reddit_url: 'https://www.reddit.com/r/tf2/',
  reddit_name: '',
  reddit_description: '',
  reddit_logo: '',
  reddit_count: 11838,
  twitch_count: 122,
  youtube_count: 1000000,
  reviews_text_count: 26,
  ratings_count: 2823,
  suggestions_count: 529,
  alternative_names: [],
  metacritic_url: '',
  parents_count: 0,
  additions_count: 1,
  game_series_count: 2,
  user_game: null,
  reviews_count: 2849,
  saturated_color: '0f0f0f',
  dominant_color: '0f0f0f',
  parent_platforms: [
    {
      platform: {
        id: 1,
        name: 'PC',
        slug: 'pc',
      },
    },
    {
      platform: {
        id: 5,
        name: 'Apple Macintosh',
        slug: 'mac',
      },
    },
    {
      platform: {
        id: 6,
        name: 'Linux',
        slug: 'linux',
      },
    },
  ],
  platforms: [
    {
      platform: {
        id: 4,
        name: 'PC',
        slug: 'pc',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 525904,
        image_background:
          'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
      },
      released_at: '2007-10-10',
      requirements: {
        minimum:
          'Minimum:\nOS: Windows® 7 (32/64-bit)/Vista/XP\nProcessor: 1.7 GHz Processor or better\nMemory: 512 MB RAM\nDirectX: Version 8.1\nNetwork: Broadband Internet connection\nStorage: 15 GB available space',
        recommended:
          'Recommended:\nOS: Windows® 7 (32/64-bit)\nProcessor: Pentium 4 processor (3.0GHz, or better)\nMemory: 1 GB RAM\nDirectX: Version 9.0c\nNetwork: Broadband Internet connection\nStorage: 15 GB available space',
      },
    },
    {
      platform: {
        id: 5,
        name: 'macOS',
        slug: 'macos',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 103400,
        image_background:
          'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
      },
      released_at: '2007-10-10',
      requirements: {
        minimum:
          'Minimum:\nOS: OS X version Leopard 10.5.8 and above\nProcessor: 1.7 GHz Processor or better\nMemory: 1 GB RAM\nGraphics: NVIDIA GeForce 8 or higher, ATI X1600 or higher, Intel HD 3000 or higher\nNetwork: Broadband Internet connection\nStorage: 15 GB available space',
      },
    },
    {
      platform: {
        id: 6,
        name: 'Linux',
        slug: 'linux',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 76454,
        image_background:
          'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
      },
      released_at: '2007-10-10',
      requirements: {
        minimum:
          'Minimum:\nOS: Ubuntu 12.04\nProcessor: Dual core from Intel or AMD at 2.8 GHz\nMemory: 1 GB RAM\nGraphics: nVidia GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1\nNetwork: Broadband Internet connection\nStorage: 15 GB available space\nSound Card: OpenAL Compatible Sound Card',
      },
    },
  ],
  stores: [
    {
      id: 13018,
      url: '',
      store: {
        id: 1,
        name: 'Steam',
        slug: 'steam',
        domain: 'store.steampowered.com',
        games_count: 89063,
        image_background:
          'https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg',
      },
    },
  ],
  developers: [
    {
      id: 1612,
      name: 'Valve Software',
      slug: 'valve-software',
      games_count: 43,
      image_background:
        'https://media.rawg.io/media/screenshots/d33/d331d95adf10b44ee3678129020bc31f.jpg',
    },
  ],
  genres: [
    {
      id: 4,
      name: 'Action',
      slug: 'action',
      games_count: 178358,
      image_background:
        'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
    },
    {
      id: 2,
      name: 'Shooter',
      slug: 'shooter',
      games_count: 59459,
      image_background:
        'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    },
  ],
  tags: [
    {
      id: 40847,
      name: 'Steam Achievements',
      slug: 'steam-achievements',
      language: 'eng',
      games_count: 35702,
      image_background:
        'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
    },
    {
      id: 7,
      name: 'Multiplayer',
      slug: 'multiplayer',
      language: 'eng',
      games_count: 37130,
      image_background:
        'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
    },
    {
      id: 7808,
      name: 'steam-trading-cards',
      slug: 'steam-trading-cards',
      language: 'eng',
      games_count: 7569,
      image_background:
        'https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg',
    },
    {
      id: 18,
      name: 'Co-op',
      slug: 'co-op',
      language: 'eng',
      games_count: 11072,
      image_background:
        'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    },
    {
      id: 411,
      name: 'cooperative',
      slug: 'cooperative',
      language: 'eng',
      games_count: 4703,
      image_background:
        'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
    },
    {
      id: 8,
      name: 'First-Person',
      slug: 'first-person',
      language: 'eng',
      games_count: 30626,
      image_background:
        'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
    },
    {
      id: 40845,
      name: 'Partial Controller Support',
      slug: 'partial-controller-support',
      language: 'eng',
      games_count: 11229,
      image_background:
        'https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg',
    },
    {
      id: 30,
      name: 'FPS',
      slug: 'fps',
      language: 'eng',
      games_count: 12893,
      image_background:
        'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
    },
    {
      id: 9,
      name: 'Online Co-Op',
      slug: 'online-co-op',
      language: 'eng',
      games_count: 5203,
      image_background:
        'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
    },
    {
      id: 4,
      name: 'Funny',
      slug: 'funny',
      language: 'eng',
      games_count: 24154,
      image_background:
        'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
    },
    {
      id: 123,
      name: 'Comedy',
      slug: 'comedy',
      language: 'eng',
      games_count: 11960,
      image_background:
        'https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg',
    },
    {
      id: 79,
      name: 'Free to Play',
      slug: 'free-to-play',
      language: 'eng',
      games_count: 6248,
      image_background:
        'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
    },
    {
      id: 80,
      name: 'Tactical',
      slug: 'tactical',
      language: 'eng',
      games_count: 4789,
      image_background:
        'https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg',
    },
    {
      id: 11669,
      name: 'stats',
      slug: 'stats',
      language: 'eng',
      games_count: 4821,
      image_background:
        'https://media.rawg.io/media/games/f52/f5206d55f918edf8ee07803101106fa6.jpg',
    },
    {
      id: 40852,
      name: 'Steam Workshop',
      slug: 'steam-workshop',
      language: 'eng',
      games_count: 1447,
      image_background:
        'https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg',
    },
    {
      id: 40832,
      name: 'Cross-Platform Multiplayer',
      slug: 'cross-platform-multiplayer',
      language: 'eng',
      games_count: 2509,
      image_background:
        'https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg',
    },
    {
      id: 40838,
      name: 'Includes level editor',
      slug: 'includes-level-editor',
      language: 'eng',
      games_count: 1813,
      image_background:
        'https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg',
    },
    {
      id: 62,
      name: 'Moddable',
      slug: 'moddable',
      language: 'eng',
      games_count: 880,
      image_background:
        'https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg',
    },
    {
      id: 40837,
      name: 'In-App Purchases',
      slug: 'in-app-purchases',
      language: 'eng',
      games_count: 2440,
      image_background:
        'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
    },
    {
      id: 40833,
      name: 'Captions available',
      slug: 'captions-available',
      language: 'eng',
      games_count: 1311,
      image_background:
        'https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg',
    },
    {
      id: 125,
      name: 'Crafting',
      slug: 'crafting',
      language: 'eng',
      games_count: 3896,
      image_background:
        'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
    },
    {
      id: 11,
      name: 'Team-Based',
      slug: 'team-based',
      language: 'eng',
      games_count: 1494,
      image_background:
        'https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg',
    },
    {
      id: 40856,
      name: 'Valve Anti-Cheat enabled',
      slug: 'valve-anti-cheat-enabled',
      language: 'eng',
      games_count: 105,
      image_background:
        'https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg',
    },
    {
      id: 170,
      name: 'Competitive',
      slug: 'competitive',
      language: 'eng',
      games_count: 1116,
      image_background:
        'https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg',
    },
    {
      id: 197,
      name: 'Robots',
      slug: 'robots',
      language: 'eng',
      games_count: 8053,
      image_background:
        'https://media.rawg.io/media/screenshots/e29/e29ce2369152515e9ae20c6e217cbe81.jpg',
    },
    {
      id: 40834,
      name: 'Commentary available',
      slug: 'commentary-available',
      language: 'eng',
      games_count: 266,
      image_background:
        'https://media.rawg.io/media/games/594/5949baae74fe9e399adbce0c44e28783.jpg',
    },
    {
      id: 164,
      name: 'Cartoony',
      slug: 'cartoony',
      language: 'eng',
      games_count: 4991,
      image_background:
        'https://media.rawg.io/media/games/213/2138ba3c97d02b581ca0b50805fcd49c.jpg',
    },
    {
      id: 179,
      name: 'Cartoon',
      slug: 'cartoon',
      language: 'eng',
      games_count: 5489,
      image_background:
        'https://media.rawg.io/media/games/c06/c06d88c35785c8003147cb53c84af033.jpg',
    },
    {
      id: 265,
      name: 'Class-Based',
      slug: 'class-based',
      language: 'eng',
      games_count: 544,
      image_background:
        'https://media.rawg.io/media/screenshots/4e0/4e0ea16d3362361791100bcbd7a1bf1b.jpg',
    },
    {
      id: 245,
      name: 'Trading',
      slug: 'trading',
      language: 'eng',
      games_count: 1070,
      image_background:
        'https://media.rawg.io/media/screenshots/2af/2aff127d5caa7985bfdb5106f75052fe.jpg',
    },
  ],
  publishers: [
    {
      id: 3399,
      name: 'Valve',
      slug: 'valve',
      games_count: 46,
      image_background:
        'https://media.rawg.io/media/screenshots/9fd/9fd128fef547eb630182a1995b1edeb5.jpg',
    },
  ],
  esrb_rating: {
    id: 4,
    name: 'Mature',
    slug: 'mature',
  },
  clip: null,
  description_raw:
    "TF2 is an objective based arena shooter with unique characters, representing different classes, acting as a staple of casual and competitive gaming for Steam. Dozens of different maps and game modes are trying to keep this game alive, after all the years it was available. Each character has a vast arsenal that can be accessed through completing in-game achievements, randomly receiving them from loot-boxes within the game, crafting them or just buying and trading items on the Steam Market. \r\nFor players, that's not into the direct clash with players from the enemy team, Team Fortress 2 introduced a PvE mode, which is wave defense from the mirrored robotic opponents that have qualities of some of the playable classes. \r\nEvery update and introduction, made over years, provided a lot of entertainment In the form of comic books an short animated videos, creating and explaining a story behind endless clashes for resources, briefcases or pure domination.",
};
