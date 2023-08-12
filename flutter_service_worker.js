'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "73f8865d14d26594cf793ec7907dc981",
".git/config": "37aa13b2809127e0e5ece35e6ec48d50",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3601531945213a470f3f82888fdb6d22",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "ebebfd9be676b77212a144baa9613e7b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9e698ab2cfdff33bc5d6157ce2738317",
".git/logs/refs/heads/master": "9e698ab2cfdff33bc5d6157ce2738317",
".git/logs/refs/remotes/origin/master": "b6e300da3eee6937c336536ab70a978d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/e0a995f3a9903434dd687ed19751e7e6e5e4d7": "10a152096027493d079a99c551c2935c",
".git/objects/08/812e724c428ccc0b29a79980cc18d728ad41eb": "1667de9869604f67f05b8d6cb56eeb22",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/b058d829a792c34063102f0309572f738c2b59": "6dad8791d1a20c019761050a290be58d",
".git/objects/14/7047299a591f971a78aa12365a2000e52412ce": "f7f7ae1dbbdb008282d1af894c3bdd57",
".git/objects/15/57b9aa828a8d4fdfd489ac0eb7ee3e9e870639": "423c8dbd6ef6f94f62b80d0b8acbc557",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/f5feb361a37fe7db63534e97fa8b50ad236d70": "eaf918f8d9d22b1ce3fae2619501b8f4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/f39abc268befae5f654a1ad2cc5f3e8b818bfd": "10fe5cd61439b0c75aacb79c007dc688",
".git/objects/2d/4396f8acafdbe19d3a3ee67bebf90d35917600": "52956969d8c6ec22ba1dbd9397dc8c41",
".git/objects/2f/9f3b7fe54751bcbca4175c119a868556accdfe": "41b8ebf1af6f29443e14794ca42a55bf",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/31/df6ca942357a4824246c398cb8f36b56a345ea": "2fa8124795e9126e7e4147f827c91132",
".git/objects/32/2bfacf510c4af897fb44f8e7b156bc7ec68d63": "feeb335c8b2995c3bcd6ffdc095e9087",
".git/objects/33/8f7cca7d1a85a72410c182264f6065320d30c5": "9d0f0837e3a62463a5fb931e2d82e138",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/c92544c005f26e2ec78c25f6f26f5c0ffbe659": "64738068fb96d57bbaf672f73d441826",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/e5310b26a18c3374f6b14027c2ba669c361232": "43aece0f3d4b4dc1871cb5214f0966a3",
".git/objects/3a/2518cfa5922a77d5e606a4ff4e6a2448495455": "62e21ea68a8b63a6f911b6b10eb0504d",
".git/objects/3f/a594b361e7bf222fee634414b5f6b9b11460bd": "2446b23d5da70c02c24b5ca8bf21d368",
".git/objects/49/86c40935c8934103ddcb9802c43ccc7c5797a0": "94b46d5da5b8446e09c03069af9256db",
".git/objects/4a/3e7c72ac73cb224fbcd55b9f7985d9da2df9f8": "a15423680d4ddadc0bab366360107396",
".git/objects/4a/bd88142a8f96b63d246ecd7e5db54feecd2bfd": "2aa3a9eb38129a4a6bae436ca97d796e",
".git/objects/4c/9d4346f83a3e71b8000b254029b234cd83112e": "bf46aba69f45a3b003f46c5a64036511",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/7f3d270f838b221bd07549fe31d6bde709eedc": "2a8a3ad14b5ec39f4097b6f5daff41fd",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/54/0a5394cc83710c5d65ccf73d5baa5e84aa6cf6": "1b0f4947d91ac112ea9535a945ca5351",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/57/bb4d6b5cd55a2d190cea39a78b83289e542d34": "c983ad5728552dbf635a6d0280488917",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/d76b205c6caf0e51b55b49933366d7159da765": "83545e9efd60e997840fe158e8e8125c",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/64/09bc03e5dd0328c4042659eff5c2bfbd24d703": "1b3ce01f9ede4466ef16d7726a89c795",
".git/objects/66/4791125e8468a145b2b8e25af3a690a6736a04": "e597d691727f68d03c5fc2f4e6dd35c6",
".git/objects/6b/d9f75b0b740679ce6f8057d7e624d27245b66b": "5a3ae59c54d35e0d3a72472110586575",
".git/objects/6e/06c0c2082fe0172616ada29179c3e8d4fdaa70": "1cee9ca94b336bae2a3f05c79154a009",
".git/objects/6f/a2c6235fdaea52ee27976ab498c553bf4062e4": "9f5fa8fce472a2360864460c01ad9958",
".git/objects/70/0a2aac878e9f1b23c61894d2f746c266b9802a": "6fb7db9f9f09df56828de3dfaff9f163",
".git/objects/71/8f0e1aab04becd28784cb8d097a2d326a32fa7": "a43dba0521ab74262f93c534092eebee",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/7b/11ba29ef562ac65b7e3f04e499b1bc9a6ff115": "c0df68e76688c7b6673199ab9eeca414",
".git/objects/7b/2d94bfab01fdacaae34eb70670993e915b2e27": "59cfd3a9c3d4e4536966d22517939333",
".git/objects/7b/7c3bab51bd670e69184f27440cb429d0ef9f2c": "a0452461d3964dd412e23506494cdbf2",
".git/objects/7f/5988a7eac2caa05488ed2fb1acdc8a391cad91": "45c4809c1b8908fdf6da2a9a943c13df",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/82/49e89b2b8fed349e72192e41271bee3d3190cf": "84d473e38b74f537a1fa1ddfa42b8c77",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/85/813f15bf90cefbd0966dea9ae18e585198cf95": "816880b871ff9cb33a18147b0b1e8c5b",
".git/objects/85/cb3a3a2f33733fd4c2d43ae7bc6973b07fb05c": "a35730b5a0510e782278334e076e7c70",
".git/objects/88/0fd359f5afda2b10315c4e9c104305c9f1e18f": "e0e05bf6dc2dfae4cb97cc6daab562e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/8b4d3eaa1a9f0d119e13855d7e9134ebcaa64d": "3cfab280293549e5ce4a831f5d1c7d62",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/93/fd6855b8b5fdae54dc29dbb11b39992cf8ae0d": "44fe589a575f3e56bb2aba5642b7ba04",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/9e/1216dfea83a93061544e5ab5ac6fe649367459": "53f69a031c564c864ff8d19140cac5b8",
".git/objects/a6/77047a6fe74876f4ca0e4d87f20c2998ba0afc": "61f74af1643e5fc6c92d5609f2e8df6d",
".git/objects/a7/6a53e09359688d2997350b4ee2307c4958bfa5": "133bc90ba6c34da5a89669ab4df847c9",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/a5d219ed9cf25dd55c22f60a0d3856cd7dd903": "c2c668381607659c26abea6c4a58a691",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/7a6368367ad23362146256b43d256ae25ad375": "8ef9f327af5db541362791ae4d54027e",
".git/objects/ba/70842c4643dc83a0f2ca6ddde86e650835e0c3": "c9bfa4a01696e97d756f0a2f01aa3777",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/311c5ff21429fdcf03d7026e800274a8321926": "f1446e238995b5d5c512cade0d7e1274",
".git/objects/bf/672844e0aa7b682d47c0cd4ad7fa8776e6a882": "9bb8b61472337a7b96f79d21b919b31a",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c6/da36b6563bac0dfee587f06ae6d13dd468102d": "5c1a5303d396cfc3a4eab99b021853f3",
".git/objects/ca/154759592a2ebb0d679829c63faef5b08b347d": "7fe95a94dc3c4c616e636d5dce3d9baf",
".git/objects/d1/7689e0ba552f40db550975cf918f6ee252b741": "06533b02e8119bba2c7e72c3c54c6e73",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6bd9af3d1e1faa3875cc84a6b849bff53aeb0b": "f250bac5cd7a688f5c9ef88df65246fe",
".git/objects/d9/0058f037a558fedf0e98aa5d67720e0377ba85": "b541b0a6a44fdbfa294c9db4d82bb240",
".git/objects/da/0e25cd6558467fce9a48f19753f2f29e2e2332": "873dd3b46299d6693c69d88f42881b67",
".git/objects/da/6da4830ccd0ac109958bc310efc54ce3fb688b": "17c2e88892d1484c099bfb7a35d2206a",
".git/objects/dd/e22aae49d77f5c872739ed0f84d5f15bd0c419": "d42e892c5394214bf348a386ad882c2d",
".git/objects/de/bab18e74457b3d289e0b59ec564212c4ff808a": "d8d75615faf1df1793ec5309fab24baa",
".git/objects/e4/1315f44df3f80b5cdbb961ff81b0976c903dd7": "ff0e7d61833108a49dc56f53d198a16d",
".git/objects/e9/a2656abb4909a4b20e07ec57b005cb679fe69e": "9ebc79123726548ed4989fba70297acb",
".git/objects/ea/b67ba6b6d59e093e20f1d4366e35a386b71de7": "4d0990aa1541c80c9d93e10652ab85c3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0a65e04f9efcd7c735fbbda475281eac7963f2": "2f985d0dbce6bf8dd06a316a426e1d06",
".git/objects/ef/88890c257cfa8557fa4c377b6d822094742d0f": "ec143310c90a81689a9807705e0202f7",
".git/objects/f3/50aca39c179f1c53564510c132afefbcbfe531": "b1d555efb6e8a2feea2146ea2b312385",
".git/objects/f5/730aa6edee9a1ae42895d828b4e666f282b3b7": "20ef570e86e375e986eb5ae401c81e6e",
".git/objects/f6/7bb9a12be2c447d2e09834cf3ed2ffae499872": "9b1c39fdcf855de28173d98fbca5b36e",
".git/objects/f7/04c64ee76eb077cf03f187449373b85207eb4d": "27a856362d095aec85cbe8370d9a30b7",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/fa/2ad7b2c5e9fd0ccb764693575e2d88c0b85f0b": "efcee92b83ae346167a486cfa75008e4",
".git/objects/fa/686f6f6af300279783db4bdb679765be3bc48c": "03bd2aca32cff2c62d0ea91b2643299b",
".git/objects/fb/04c8724fc7587ec34ccfa202a5127f52e280d4": "6853bad8f917028c0cd6a1c78bcfd94f",
".git/objects/ff/af7f15c4679d23adcd4eb9f74e99465b7eb900": "230a78efd8126b0972d008048f261f6a",
".git/refs/heads/master": "bc83d9356fb969076b17deefdc20bf66",
".git/refs/remotes/origin/master": "bc83d9356fb969076b17deefdc20bf66",
"assets/AssetManifest.bin": "4e296ba6fa3aa3bd0976ea36fc953d8f",
"assets/AssetManifest.json": "de02ae00c566bd1bf1d43b3d1a8df246",
"assets/assets/icons/email.svg": "8ff5070c7642380d03402556ef7a784c",
"assets/assets/icons/facebook.svg": "73d32212919b3ff5ba1a1c7245e89f95",
"assets/assets/icons/instagram.svg": "1664a8def78de85d49cd70a958e4a95f",
"assets/assets/icons/linkedin.svg": "68825a18048363cd7519a762ced88274",
"assets/assets/icons/mobile.svg": "5b4bcb000b7fbe66f916c1a659bd8180",
"assets/assets/icons/software_dev.svg": "847451b17dfda6c777e5fe273434c3e4",
"assets/assets/icons/system.svg": "8df09c4f930c19055868b0d18e706025",
"assets/assets/icons/twitter.svg": "92ab8cb8870daab5b724fb0e018bc9af",
"assets/assets/icons/whatsapp.svg": "732aff88946e42de3f73b5a65b716c3e",
"assets/assets/images/adminPanelMockup.jpg": "4b6af6a3fad83fca1f69b582eca98843",
"assets/assets/images/booklyMockup.png": "f12746f83d9cd602a5161a1da8ed4751",
"assets/assets/images/contact_image.jpeg": "5157db880facda86d7edfd15d09fd214",
"assets/assets/images/e-commerce-mockup.png": "1d10b354167182d3f826c63449c423d3",
"assets/assets/images/KidneyMockup.png": "d15e17e43622da14bdee4216585849cf",
"assets/assets/images/logo.png": "971c64999940ddc0dbdee5f9b9e5adcf",
"assets/assets/images/my_photo.jpeg": "6584fd6cac21343e1b3b7bc141664ef4",
"assets/assets/images/my_photo2.jpeg": "16319c75b72ab2224dd80f02e1091e3e",
"assets/assets/images/qrCodeAppMockup.png": "94843b80f4dfcf80febe7a78e1f03294",
"assets/assets/images/zoomMockup.png": "0c47e791c2c9ba2f3fa6411deaf417bb",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "d20f7aae91ee7cbcd177071a15664a74",
"assets/NOTICES": "ebc20ba447bcede60798d5a340385a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon-32x32.png": "e7592fd324e2b3b5683587b8561a4658",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/apple-touch-icon.png": "a1400738cbd1f7e2179f257d09823d63",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "734a12d6f451e0a4096d0b3c1229e3d4",
"/": "734a12d6f451e0a4096d0b3c1229e3d4",
"main.dart.js": "53064790a62c84a14f0872b65887f8f6",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
