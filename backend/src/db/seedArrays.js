const arrEventPhoto = [
  {
    id: 1,
    EventId: 1,
    url: '/img/eventsPic/event-1.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    EventId: 1,
    url: '/img/eventsPic/event-2.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    EventId: 2,
    url: '/img/eventsPic/event-3.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    EventId: 2,
    url: '/img/eventsPic/event-4.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    EventId: 3,
    url: '/img/eventsPic/event-5.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const arrLocationPhoto = [
  {
    id: 1,
    LocationId: 1,
    url: '/img/locatePic/locate-1.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    LocationId: 1,
    url: '/img/locatePic/locate-2.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    LocationId: 1,
    url: '/img/locatePic/locate-3.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    LocationId: 2,
    url: '/img/locatePic/locate-4.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    LocationId: 2,
    url: '/img/locatePic/locate-5.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const arrAdmins = [
  {
    id: 1,
    username: 'qwe',
    email: 'qwe@qwe.ru',
    password: 'qwe',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const arrEvents = [
  {
    id: 1,
    AdminId: 1,
    LocationId: 1,
    title: 'Северный флот. Программа «10 лет альбому TODD»',
    description:
      '«TODD» — последнее творение Михаила Горшенёва и музыкантов «Король и Шут». Двойной альбом группы, объединённый общей историей о цирюльнике Суинни Тодде, вышедший в 2011 и 2012 годах. Тогда же был задуман масштабный концертный тур в поддержку этого альбома. Но плотная работа над одноимённой театральной постановкой, в основу которой лёг альбом, внесла свои коррективы, а затем произошли печальные события 2013 года. Тур группы «Король и Шут» так и не состоялся, а грандиозное музыкальное произведение было представлено слушателям только на театральной сцене.      Все эти годы рок-мюзикл «TODD» с успехом шёл на театральных площадках Москвы и Санкт-Петербурга, возглавив список лучших музыкальных событий столиц. Но Михаил всегда мечтал о глобальной концертной премьере, полностью раскрывающей музыкальный потенциал его работы. И вот, спустя 10 лет с момента выхода пластинки, желание автора исполнится!     На сцену выйдут музыканты группы «Король и Шут» — те самые люди, которые были с Михаилом до конца и вместе трудились над его последними композициями, а впоследствии объединились в группу «Северный Флот». В программу войдут все лучшие песни с двух альбомов «TODD», исполненные музыкантами в оригинальном звучании, как они и были задуманы, при участии специальных гостей — вокалистов. Одним из основных вокалистов в туре станет Александр Леонтьев, лидер группы «Северный Флот», музыкант и бэк-вокалист группы «Король и Шут». Также для тура будет создан тематический видеоряд, сопровождающий каждую композицию на мультимедийном экране за спинами музыкантов.',
    price: 'от 1700 рублей',
    subcategory: 'Рок',
    timeStart: '19:30',
    timeEnd: '',
    dorsOpen: '',
    dateStart: '7.03.2022',
    dateEnd: '',
    postAuthor: 'Admin',
    linkToRegister: '',
    linkToBuy:
      'https://afisha.yandex.ru/saint-petersburg/concert/10-let-albomu-todd-2022-03-07?utm_campaign=MSCAMP-60_%5BAF-P%5D_%7BWS%3AS%7D_RU-2_Category-Afisha_Exact%7C13814518310&utm_content=INTid%7Ckwd-300107410313%7Ccid%7C13814518310%7Cgid%7C126015649153%7Caid%7C532222141861%7Cpos%7C%7Csrc%7Cg_%7Cdvc%7Cc%7Cevid%7C0&utm_medium=search&utm_source=google&utm_term=%D0%B0%D1%84%D0%B8%D1%88%D0%B0.%5Be%5D&source=rubric',
    linkToEvent: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    AdminId: 1,
    LocationId: 1,
    title: 'Северный флот. Тест 2',
    description:
      '«TODD». Также для тура будет создан тематический видеоряд, сопровождающий каждую композицию на мультимедийном экране за спинами музыкантов.',
    subcategory: 'Ограниченный прокат',
    price: 'от 1700 рублей',
    timeStart: '19:30',
    timeEnd: '',
    dorsOpen: '',
    dateStart: '7.03.2022',
    dateEnd: '',
    postAuthor: 'Admin',
    linkToRegister: '',
    linkToBuy:
      'https://afisha.yandex.ru/saint-petersburg/concert/10-let-albomu-todd-2022-03-07?utm_campaign=MSCAMP-60_%5BAF-P%5D_%7BWS%3AS%7D_RU-2_Category-Afisha_Exact%7C13814518310&utm_content=INTid%7Ckwd-300107410313%7Ccid%7C13814518310%7Cgid%7C126015649153%7Caid%7C532222141861%7Cpos%7C%7Csrc%7Cg_%7Cdvc%7Cc%7Cevid%7C0&utm_medium=search&utm_source=google&utm_term=%D0%B0%D1%84%D0%B8%D1%88%D0%B0.%5Be%5D&source=rubric',
    linkToEvent: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    AdminId: 1,
    LocationId: 2,
    title: 'Тест второго места',
    description: 'Описание второго места.',
    subcategory: 'Рок',
    price: 'от 1700 рублей',
    timeStart: '19:30',
    timeEnd: '',
    dorsOpen: '',
    dateStart: '7.03.2022',
    dateEnd: '',
    postAuthor: 'Admin',
    linkToRegister: '',
    linkToBuy:
      'https://afisha.yandex.ru/saint-petersburg/concert/10-let-albomu-todd-2022-03-07?utm_campaign=MSCAMP-60_%5BAF-P%5D_%7BWS%3AS%7D_RU-2_Category-Afisha_Exact%7C13814518310&utm_content=INTid%7Ckwd-300107410313%7Ccid%7C13814518310%7Cgid%7C126015649153%7Caid%7C532222141861%7Cpos%7C%7Csrc%7Cg_%7Cdvc%7Cc%7Cevid%7C0&utm_medium=search&utm_source=google&utm_term=%D0%B0%D1%84%D0%B8%D1%88%D0%B0.%5Be%5D&source=rubric',
    linkToEvent: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

const arrLocations = [
  {
    id: 1,
    title: 'Юбилейный',
    description:
      'Дворец спорта «Юбилейный» — одно из немногих спортивных сооружений в стране, чьё открытие не было приурочено к грандиозному событию вроде Олимпиады. Спортивный комплекс на Добролюбова был официально открыт в 1967-м, а первое крупное мероприятие — чемпионат Европы по фигурному катанию — принял только в 1970-м. «Юбилейный» долгое время был основной ледовой ареной Петербурга — лишь в XXI веке первенство перехватил более современный «Ледовый дворец». Спортивная программа «Юбилейного» постоянно разбавляется культурными событиями стадионного масштаба, преимущественно концертами. Основная арена комплекса вмещает более 7000 зрителей. Тут выступают старожилы российской сцены вроде группы «Секрет» и Гарика Сукачёва, популярные поп-музыканты — Тима Белорусских, Полина Гагарина, в афише появляются известные рок-звёзды — Limp Bizkit, Bring Me the Horizon, Manowar.',
    address: 'просп. Добролюбова, 18',
    type: 'Концертный зал',
    coordX: 59.950402922548605,
    coordY: 30.291927108257962,
    openingHours: '',
    site: 'https://www.yubi.ru/',
    vk: 'https://vk.com/yubiarena',
    fb: 'https://www.facebook.com/yubiarenaspb',
    instagram: 'https://instagram.com/yubiarena',
    whatsapp: '',
    telegram: 'https://t.me/yubiarena',
    viber: '',
    email: '',
    tel1: '',
    tel2: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'Aurora',
    description:
      'AURORA – это современная площадка для выступления артистов разных жанров и поколений.',
    address: 'Пироговская наб., 5/2',
    type: 'Концертный зал',
    coordX: 59.956994,
    coordY: 30.341353,
    openingHours: '',
    site: 'https://aurora.fm/',
    vk: 'https://vk.com/aurora_fm_spb',
    fb: 'https://www.facebook.com/aurorafmspb',
    instagram: 'https://www.instagram.com/aurora.fm_spb/',
    whatsapp: '',
    telegram: '',
    viber: '',
    email: '',
    tel1: '8 812 407 37 70',
    tel2: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

module.exports = {
  arrEvents,
  arrLocations,
  arrAdmins,
  arrEventPhoto,
  arrLocationPhoto,
}
