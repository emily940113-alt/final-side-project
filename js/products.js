const products = [
  // Men's Leather Shoes (3)
  {
    id: "mens_1",
    name: "經典皇家德比皮鞋 Royal Derby Shoes",
    category: "mens",
    categoryName: "男性皮鞋",
    price: 3880,
    originalPrice: 4580,
    rating: 4.9,
    reviewsCount: 184,
    image: "assets/images/梁育瑄的鞋店-1號男士鞋子",
    title="梁育瑄鞋店1號男士鞋子，銷量第二名。",
    description: "極致奢華的德比皮鞋，採用頂級全粒面牛皮製成。經典的開放式襟片設計，不僅穿著舒適度極佳，更散發出無可比擬的英倫紳士氣息。適合商務場合與正式晚宴。",
    features: [
      "頂級義大利進口全粒面牛皮",
      "手工固特異沿條工藝，堅固耐用",
      "高密度吸震真皮鞋墊，減緩行走壓力",
      "防滑耐磨橡膠大底複合真皮鞋底"
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["極致黑 Onyx Black", "經典咖 Heritage Brown"]
  },
  {
    id: "mens_2",
    name: "紳士雕花布洛克鞋 Gentleman Brogue Shoes",
    category: "mens",
    categoryName: "男性皮鞋",
    price: 4280,
    originalPrice: 4980,
    rating: 4.8,
    reviewsCount: 142,
    image: "assets/images/mens_2.png",
    description: "精心雕琢的翼紋雕花（Broguing）設計，為傳統紳士皮鞋注入豐沛的細節與藝術感。經由資深鞋匠手工擦色處理，呈現層次豐富的漸層光澤，完美展現個人獨特品味。",
    features: [
      "復古手工擦色小牛皮",
      "精緻滿孔雕花細節",
      "全真皮透氣內裡，告別悶熱",
      "加厚足弓支撐鞋墊"
    ],
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ["復古焦糖色 Caramel", "深邃酒紅色 Bordeaux"]
  },
  {
    id: "mens_3",
    name: "經典英倫雀爾喜靴 Chelsea Leather Boots",
    category: "mens",
    categoryName: "男性皮鞋",
    price: 4980,
    originalPrice: 5800,
    rating: 4.7,
    reviewsCount: 96,
    image: "assets/images/mens_3.png",
    description: "極簡俐落的雀爾喜靴是英式時尚的經典象徵。高彈性側邊織帶搭配後跟拉環，穿脫極為便利。修長微尖的楦頭設計，能完美修飾腿部線條，無論搭配牛仔褲或西裝皆能輕鬆駕馭。",
    features: [
      "頂級精選麂皮與拋光牛皮雙材質可選",
      "高拉力進口彈性鬆緊帶",
      "防滑橡膠複合大底，適應各類天候",
      "一體成型人體工學鞋楦"
    ],
    sizes: [39, 40, 41, 42, 43],
    colors: ["麂皮沙色 Sand Suede", "曜石黑 Obsidian Black"]
  },

  // Women's High Heels (3)
  {
    id: "womens_1",
    name: "璀璨紅絲絨細高跟鞋 Velvet Stiletto Heels",
    category: "womens",
    categoryName: "女性高跟鞋",
    price: 3580,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 215,
    image: "assets/images/womens_1.png",
    description: "宛如女王般的奢華紅絲絨面料，搭配經典極細 Stiletto 鞋跟，展現出極致迷人的足部弧度。精準的鞋跟重心設計，讓您在優雅邁步時依然能維持絕佳的穩定感與自信。",
    features: [
      "奢華天鵝絨親膚鞋面",
      "9cm 精準重心極細鋼芯高跟",
      "加厚乳膠記憶棉前底減壓墊",
      "防滑靜音耐磨鞋底"
    ],
    sizes: [35, 36, 37, 38, 39, 40],
    colors: ["女王紅 Royal Red", "極夜黑 Midnight Black"]
  },
  {
    id: "womens_2",
    name: "裸色優雅尖頭皮鞋 Elegant Nude Pumps",
    category: "womens",
    categoryName: "女性高跟鞋",
    price: 3280,
    originalPrice: 3880,
    rating: 4.8,
    reviewsCount: 168,
    image: "assets/images/womens_2.png",
    description: "日常辦公與正式宴會的必備完美裸色高跟鞋。接近膚色的色調能自然延伸雙腿比例，視覺上更顯高挑。選用極其柔軟的羊皮製成，帶給您如同第二層肌膚般的包覆感受。",
    features: [
      "極致柔軟天然羊皮",
      "6.5cm 黃金高度中跟，適合全天穿著",
      "透氣真皮內裡與中底鞋墊",
      "加寬楦頭設計，不擠腳、不壓迫"
    ],
    sizes: [35, 36, 37, 38, 39],
    colors: ["溫柔裸粉 Nude", "象牙奶油白 Creamy White"]
  },
  {
    id: "womens_3",
    name: "奢華銀燦星空宴會鞋 Silver Galaxy Heels",
    category: "womens",
    categoryName: "女性高跟鞋",
    price: 5280,
    originalPrice: 6200,
    rating: 5.0,
    reviewsCount: 88,
    image: "assets/images/womens_3.png",
    description: "鞋面上鑲嵌數千顆微型水晶，隨著光線折射出令人屏息的星空光芒。腳踝處配有精緻的水晶環繞帶，璀璨動人。是婚禮、紅毯與盛大晚宴上最矚目的焦點。",
    features: [
      "頂級手工施華洛世奇級水鑽鑲嵌",
      "奢華金屬感羊皮包覆鞋跟（8.5cm）",
      "可調節式水晶踝帶",
      "真皮防滑鞋底"
    ],
    sizes: [35, 36, 37, 38, 39],
    colors: ["璀璨銀河 Stardust Silver", "玫瑰星金 Rose Gold"]
  },

  // Running Shoes (3)
  {
    id: "running_1",
    name: "霓虹極速避震跑鞋 Neon Speed Runner",
    category: "running",
    categoryName: "跑步鞋",
    price: 3980,
    originalPrice: 4800,
    rating: 4.8,
    reviewsCount: 310,
    image: "assets/images/running_1.svg",
    description: "搭載最新一代 SoleBoost 中底回彈科技，提供強悍能量反饋。一體成型的編織鞋面，具備絕佳透氣性，保持雙腳乾爽。大底部分採用耐磨碳素橡膠，適合長距離路跑。",
    features: [
      "SoleBoost 專利超回彈中底",
      "FlyKnit 一體式無縫透氣編織鞋面",
      "全掌式碳纖維推進板，推動力十足",
      "Continental 級耐磨橡膠大底"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: ["電光綠 Neon Green", "烈焰橘 Hyper Orange"]
  },
  {
    id: "running_2",
    name: "暗夜黑魂透氣跑鞋 Triple Black Air Runner",
    category: "running",
    categoryName: "跑步鞋",
    price: 3680,
    originalPrice: 4280,
    rating: 4.7,
    reviewsCount: 245,
    image: "assets/images/running_2.svg",
    description: "以極致純黑設計演繹街頭潮流與運動機能。鞋身配備反光條，提供夜間奔跑時的安全保障。環繞式氣墊中底提供全方位的緩震保護，適合都市夜跑與日常運動穿搭。",
    features: [
      "3M 炫彩反光安全條",
      "360度環繞透氣大氣墊",
      "人體工學足踝防護包裹結構",
      "極簡 Triple Black 全黑美學"
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    colors: ["暗夜黑 Triple Black", "冷光灰 Cyber Grey"]
  },
  {
    id: "running_3",
    name: "幻彩極光輕量慢跑鞋 Aurora Light Trainer",
    category: "running",
    categoryName: "跑步鞋",
    price: 4180,
    originalPrice: 4980,
    rating: 4.9,
    reviewsCount: 179,
    image: "assets/images/running_3.svg",
    description: "僅重 180 克的極致輕盈跑鞋。中底結合了幻彩極光漸層噴漆，視覺衝擊力十足。極薄防潑水面料，在細雨天也能保持奔跑節奏，提供彷彿赤足般的暢快體驗。",
    features: [
      "極輕羽量化超輕結構 (180g)",
      "防潑水抗污科技面料",
      "幻彩漸層減震中底",
      "超高抓地力立體防滑紋路"
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["極光紫 Aurora Purple", "海風藍 Sky Blue"]
  },

  // Kid's Shoes (3)
  {
    id: "kids_1",
    name: "繽紛活力魔鬼氈童鞋 Kids Active Velcro Sneaker",
    category: "kids",
    categoryName: "兒童鞋",
    price: 1880,
    originalPrice: 2380,
    rating: 4.8,
    reviewsCount: 156,
    image: "assets/images/kids_1.svg",
    description: "專為活潑好動兒童設計。便利的寬版魔鬼氈設計，讓孩子自己也能輕鬆穿脫。寬大楦頭給予發育中腳趾充分的活動空間，環保無毒材質讓家長百分之百放心。",
    features: [
      "環保無毒、通過嚴苛安全檢測認證",
      "高黏性耐用寬版魔鬼氈",
      "前掌寬楦防撞橡膠鞋頭，保護腳趾",
      "柔軟防滑橡膠鞋底，超強彈性"
    ],
    sizes: [28, 30, 31, 32, 33, 34, 35],
    colors: ["活力糖果粉 Candy Pink", "宇宙深海藍 Deep Blue"]
  },
  {
    id: "kids_2",
    name: "閃耀極光發光童跑鞋 Kids Light-up Runner",
    category: "kids",
    categoryName: "兒童鞋",
    price: 2280,
    originalPrice: 2780,
    rating: 4.9,
    reviewsCount: 112,
    image: "assets/images/kids_2.svg",
    description: "每一次著地都會閃爍絢麗彩色燈光的發光鞋，是孩子們最愛的校園明星單品。內置長效 LED 模組與靈敏重力感應，防水防震，安全省電，點亮歡樂童年。",
    features: [
      "智能感應震動發光 LED 機芯",
      "IPX7 級生活防潑水電路保護",
      "高回彈透氣排汗抗菌鞋墊",
      "超亮眼炫彩機甲風鞋身"
    ],
    sizes: [28, 29, 30, 31, 32, 33, 34],
    colors: ["極光綠 Cyber Green", "甜心粉 Dream Pink"]
  },
  {
    id: "kids_3",
    name: "時尚單寧休閒兒童鞋 Kids Denim Casual Shoes",
    category: "kids",
    categoryName: "兒童鞋",
    price: 1680,
    originalPrice: 2000,
    rating: 4.6,
    reviewsCount: 78,
    image: "assets/images/kids_3.svg",
    description: "採用水洗單寧布搭配高級超纖皮革，簡約大氣又極具時尚感。不論是家庭聚會、出遊拍照還是校園日常，都能打造最吸睛的小型潮男潮女造型。",
    features: [
      "水洗高質感防褪色單寧牛仔布",
      "側邊拉鍊設計，穿脫快一步",
      "輕量防滑橡膠平底",
      "柔軟親膚純棉帆布內裡"
    ],
    sizes: [30, 31, 32, 33, 34, 35],
    colors: ["經典牛仔藍 Classic Denim", "復古水洗黑 Acid Black"]
  },

  // Other Shoes (4)
  {
    id: "others_1",
    name: "雲朵舒適保暖居家拖鞋 Cloud Comfort Slippers",
    category: "others",
    categoryName: "其它類",
    price: 880,
    originalPrice: 1200,
    rating: 4.9,
    reviewsCount: 320,
    image: "assets/images/others_1.svg",
    description: "採用超柔軟珊瑚絨面料與加厚記憶海綿中底，雙腳踩上去如同踩在雲朵般柔軟舒適。保暖性極佳，是冬季居家工作與放鬆的最佳伴侶。靜音大底不傷木地板。",
    features: [
      "高密度親膚保暖珊瑚長絨毛",
      "4cm 超厚三層複合減壓記憶海綿",
      "EVA 靜音防滑輕量外底",
      "可直接機洗，清潔保養超省力"
    ],
    sizes: [36, 38, 40, 42, 44],
    colors: ["溫馨米色 Warm Beige", "霧霾灰色 Misty Grey"]
  },
  {
    id: "others_2",
    name: "經典復古高筒帆布鞋 Retro High-Top Canvas",
    category: "others",
    categoryName: "其它類",
    price: 1980,
    originalPrice: 2480,
    rating: 4.7,
    reviewsCount: 290,
    image: "assets/images/others_2.svg",
    description: "永不過時的街頭潮流單品。厚實耐磨的帆布鞋面，搭配經典耐磨橡膠硫化大底。獨家研發的軟彈鞋墊，打破傳統帆布鞋生硬死板的穿著感，久站不累。",
    features: [
      "12安士高密度防潑水耐磨帆布",
      "傳統高溫硫化橡膠鞋底，極高韌性",
      "升級 SoftCloud 慢回彈乳膠鞋墊",
      "經典復古金屬鞋眼與編織鞋帶"
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    colors: ["百搭黑白 Black & White", "焦糖奶油 Creamy Mustard"]
  },
  {
    id: "others_3",
    name: "征服者戶外防水登山靴 Conqueror Hiking Boots",
    category: "others",
    categoryName: "其它類",
    price: 5800,
    originalPrice: 6800,
    rating: 4.9,
    reviewsCount: 84,
    image: "assets/images/others_3.svg",
    description: "為戶外探險家量身打造。採用 TexDry 防水透氣薄膜阻擋雨水，同時排出內部濕氣。超耐磨 Vibram 級黃金齒痕大底，不論是泥濘山路或濕滑岩石，皆能提供驚人的抓地力。",
    features: [
      "TexDry 頂級防水防風透氣科技內襯",
      "高抓地力立體深齒耐磨橡膠大底",
      "一體化防碎石防泥防撞鞋舌",
      "鋼製快速鞋帶扣與護踝支撐系統"
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    colors: ["探險軍綠 Military Olive", "荒漠沙色 Desert Tan"]
  },
  {
    id: "others_4",
    name: "夏日輕盈水動能涼鞋 Summer Cork Sandals",
    category: "others",
    categoryName: "其它類",
    price: 1480,
    originalPrice: 1980,
    rating: 4.7,
    reviewsCount: 143,
    image: "assets/images/others_4.svg",
    description: "採用天然環保軟木與橡膠混製而成的鞋底，能隨著穿著時間完美貼合您的腳型。時尚雙扣帶設計，使用優質防水超纖皮革，海灘漫步或都市休閒皆完美合適。",
    features: [
      "天然環保人體工學軟木足弓中底",
      "雙扣帶可自由調節寬窄度",
      "親膚吸汗超細纖維鞋墊",
      "EVA 輕量吸震大底"
    ],
    sizes: [36, 37, 38, 39, 40, 41, 42, 43],
    colors: ["經典極簡黑 Onyx Black", "優雅摩卡褐 Mocha Brown"]
  }
];

// Helper functions for category management and cart
function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

// Export if running in node, else let it be global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, getProductById, getProductsByCategory };
}
