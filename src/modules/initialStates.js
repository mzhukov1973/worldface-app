export const userHomeDataInit = {
  componentsText: 'UserHomeC',
  width:          256,
  height:         256,
  modPrefix:      'UserHomeC_'+Date.now().toString(16).slice(4)+'_UserHomeC_'
}

export const navStateDataInit = {

}

export const uiStateDataInit = {

}

export const promosDataInit = {
  componentsText: 'PromosC',
  width:          256,
  height:         256,
  modPrefix:      'PromosC_'+Date.now().toString(16).slice(4)+'_PromosC_'
}

export const newsFeedDataInit = {
  5: {
    eventIdx:  5,
    label:     'sale',
    active:    true,
    summary:   'Акция: 40% скидка на товары группы 33!',
    meta:      '(ссылка на акцию)',
    extra:     '',
    timestamp: 1510139264,
  },
  4: {
    eventIdx:  4,
    label:     'misc',
    summary:   'Новый порядок регистрации пользователей.',
    meta:      '(ссылка на новость)',
    extra:     '',
    timestamp: (1510139264-2*24*3600-5*3600-22*60-20)
  },
  3: {
    eventIdx:  3,
    label:     'mail',
    read:      false,
    summary:   'Письмо от вашего менеджера.',
    meta:      '(ссылка на письмо)',
    extra:     '',
    timestamp: (1510139264-2*24*3600-6*3600-11*60-44)
  },
  2: {
    eventIdx:  2,
    label:     'mail',
    read:      true,
    summary:   'Письмо от складского робота.',
    meta:      '(ссылка на письмо)',
    extra:     '[Заказ №1234567 собран и ждёт отправки.]',
    timestamp: (1510139264-5*24*3600-2*3600-54*60-16)
  },
  1: {
    eventIdx:  1,
    label:     'sale',
    active:    false,
    summary:   '7 дней бесплатной доставки!',
    meta:      '(ссылка на акцию)',
    extra:     '',
    timestamp: (1510139264-8*24*3600-12*3600-43*60-13)
  },
  0: {
    eventIdx:  0,
    label:     'misc',
    summary:   'Запущена в эксплуатацию новая услуга.',
    meta:      '(ссылка на новость)',
    extra:     '',
    timestamp: (1510139264-8*24*3600-14*3600-37*60-17)
  }
}

export const catalogueDataInit = {
  componentsText: 'CatalogueC',
  width:          256,
  height:         256,
  modPrefix:      'CatalogueC_mainffff_CatalogueC_',
  catGroupPrefixes: [
    'CatGroupC_a012cd9e_CatGroupC_',
    'CatGroupC_add1eee2_CatGroupC_'
  ]
}

export const catGroupDatasInit = {
  'CatGroupC_a012cd9e_CatGroupC_': {
    modPrefix:   'CatGroupC_a012cd9e_CatGroupC_',
    shortName:   'Catalogue Group №0 (p07)',
    catItemPrefixes: [
      'CatItemC_8a113490_CatItemC_',
       'CatItemC_1127a044_CatItemC_',
       'CatItemC_4ea234f2_CatItemC_'
    ]
  },
  'CatGroupC_add1eee2_CatGroupC_': {
    modPrefix:   'CatGroupC_add1eee2_CatGroupC_',
    shortName:   'Catalogue Group №1 (p33)',
    catItemPrefixes: [
      'CatItemC_f2ffa870_CatItemC_',
      'CatItemC_4628a90c_CatItemC_',
      'CatItemC_7b1428a5_CatItemC_',
      'CatItemC_fffef102_CatItemC_',
      'CatItemC_7c7d18fa_CatItemC_',
      'CatItemC_11b20de1_CatItemC_'
    ]
  }
}

export const catItemDatasInit = {
  'CatItemC_8a113490_CatItemC_': {
    modPrefix:        'CatItemC_8a113490_CatItemC_',
    uniqueItemId:     '8a113490',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p07id96-w1120.jpg 1120w, images/p07id96-w1280.jpg 1280w, images/p07id96-w1440.jpg 1440w, images/p07id96-w1600.jpg 1600w, images/p07id96-w160.jpg 160w, images/p07id96-w320.jpg 320w, images/p07id96-w480.jpg 480w, images/p07id96-w640.jpg 640w, images/p07id96-w800.jpg 800w, images/p07id96-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №0 (p07id96)',
    variant:          'Модель/Вариант исполнения/Фасовки №0',
    description:      'Описание позиции №0',
    producer:         'Producer Ltd. №0',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':2200},
    activePromo:      {'promoName':'Акция', 'prePomoPrice':3900, 'promoEnds':'2017-11-02 00:00:00'},
    userReviews:      [
      {'username':'А.С.Пушкин',    'rating':4, 'reviewText':'123...'},
      {'username':'М.Ю.Лермонтов', 'rating':5, 'reviewText':'456...'},
      {'username':'П.В.Чехов',     'rating':3, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2', 'uniqueItemId3', 'uniqueItemId4'
    ],
    recommendedGoods: [
      'uniqueItemId7', 'uniqueItemId9'
    ]
  },
  'CatItemC_1127a044_CatItemC_': {
    modPrefix:        'CatItemC_1127a044_CatItemC_',
    uniqueItemId:     '1127a044',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p07id97-w1120.jpg 1120w, images/p07id97-w1280.jpg 1280w, images/p07id97-w1440.jpg 1440w, images/p07id97-w1600.jpg 1600w, images/p07id97-w160.jpg 160w, images/p07id97-w320.jpg 320w, images/p07id97-w480.jpg 480w, images/p07id97-w640.jpg 640w, images/p07id97-w800.jpg 800w, images/p07id97-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №1 (p07id97)',
    variant:          'Модель/Вариант исполнения/Фасовки №1',
    description:      'Описание позиции №1',
    producer:         'Producer Ltd. №1',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':1570},
    activePromo:      {},
    userReviews:      [
      {'username':'А.С.Пушкин',    'rating':4, 'reviewText':'123...'},
      {'username':'М.Ю.Лермонтов', 'rating':5, 'reviewText':'456...'},
      {'username':'П.В.Чехов',     'rating':3, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2', 'uniqueItemId3', 'uniqueItemId4'
    ],
    recommendedGoods: [
      'uniqueItemId7', 'uniqueItemId9'
    ]
  },
  'CatItemC_4ea234f2_CatItemC_': {
    modPrefix:        'CatItemC_4ea234f2_CatItemC_',
    uniqueItemId:     '4ea234f2',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p07id98-w1120.jpg 1120w, images/p07id98-w1280.jpg 1280w, images/p07id98-w1440.jpg 1440w, images/p07id98-w1600.jpg 1600w, images/p07id98-w160.jpg 160w, images/p07id98-w320.jpg 320w, images/p07id98-w480.jpg 480w, images/p07id98-w640.jpg 640w, images/p07id98-w800.jpg 800w, images/p07id98-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №2 (p07id98)',
    variant:          'Модель/Вариант исполнения/Фасовки №2',
    description:      'Описание позиции №2',
    producer:         'Producer Ltd. №2',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':9800},
    activePromo:      { },
    userReviews:      [
      {'username':'А.С.Пушкин',    'rating':4, 'reviewText':'123...'},
      {'username':'М.Ю.Лермонтов', 'rating':5, 'reviewText':'456...'},
      {'username':'П.В.Чехов',     'rating':3, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2', 'uniqueItemId3', 'uniqueItemId4'
    ],
    recommendedGoods: [
      'uniqueItemId7', 'uniqueItemId9'
    ]
  },
  'CatItemC_f2ffa870_CatItemC_': {
    modPrefix:        'CatItemC_f2ffa870_CatItemC_',
    uniqueItemId:     'f2ffa870',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p33id44-w1120.jpg 1120w, images/p33id44-w1280.jpg 1280w, images/p33id44-w1440.jpg 1440w, images/p33id44-w1600.jpg 1600w, images/p33id44-w160.jpg 160w, images/p33id44-w320.jpg 320w, images/p33id44-w480.jpg 480w, images/p33id44-w640.jpg 640w, images/p33id44-w800.jpg 800w, images/p33id44-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №44 (p33id44)',
    variant:          'Модель/Вариант исполнения/Фасовки №44',
    description:      'Описание позиции №44',
    producer:         'Producer Ltd. №33',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':1190},
    activePromo:      { },
    userReviews:      [
      {'username':'А.С.Пушкин',    'rating':1, 'reviewText':'123...'},
      {'username':'М.Ю.Лермонтов', 'rating':2, 'reviewText':'456...'},
      {'username':'П.В.Чехов',     'rating':1, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2'
    ],
    recommendedGoods: [
      'uniqueItemId7'
    ]
  },
  'CatItemC_4628a90c_CatItemC_': {
    modPrefix:        'CatItemC_4628a90c_CatItemC_',
    uniqueItemId:     '4628a90c',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p33id45-w1120.jpg 1120w, images/p33id45-w1280.jpg 1280w, images/p33id45-w1440.jpg 1440w, images/p33id45-w1600.jpg 1600w, images/p33id45-w160.jpg 160w, images/p33id45-w320.jpg 320w, images/p33id45-w480.jpg 480w, images/p33id45-w640.jpg 640w, images/p33id45-w800.jpg 800w, images/p33id45-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №45 (p33id45)',
    variant:          'Модель/Вариант исполнения/Фасовки №45',
    description:      'Описание позиции №45',
    producer:         'Producer Ltd. №33',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':16200},
    activePromo:      { },
    userReviews:      [
      {'username':'А.С.Пушкин',    'rating':3, 'reviewText':'123...'},
      {'username':'П.В.Чехов',     'rating':3, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2'
    ],
    recommendedGoods: [
    ]
  },
  'CatItemC_7b1428a5_CatItemC_': {
    modPrefix:        'CatItemC_7b1428a5_CatItemC_',
    uniqueItemId:     '7b1428a5',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p33id48-w1120.jpg 1120w, images/p33id48-w1280.jpg 1280w, images/p33id48-w1440.jpg 1440w, images/p33id48-w1600.jpg 1600w, images/p33id48-w160.jpg 160w, images/p33id48-w320.jpg 320w, images/p33id48-w480.jpg 480w, images/p33id48-w640.jpg 640w, images/p33id48-w800.jpg 800w, images/p33id48-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №48 (p33id48)',
    variant:          'Модель/Вариант исполнения/Фасовки №48',
    description:      'Описание позиции №48',
    producer:         'Producer Ltd. №33',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':990},
    activePromo:      { },
    userReviews:      [
      {'username':'А.С.Пушкин',    'rating':5, 'reviewText':'123...'},
      {'username':'М.Ю.Лермонтов', 'rating':5, 'reviewText':'456...'},
      {'username':'П.В.Чехов',     'rating':4, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId4', 'uniqueItemId2'
    ],
    recommendedGoods: [
      'uniqueItemId2'
    ]
  },
  'CatItemC_fffef102_CatItemC_': {
    modPrefix:        'CatItemC_fffef102_CatItemC_',
    uniqueItemId:     'fffef102',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p33id72-w1120.jpg 1120w, images/p33id72-w1280.jpg 1280w, images/p33id72-w1440.jpg 1440w, images/p33id72-w1600.jpg 1600w, images/p33id72-w160.jpg 160w, images/p33id72-w320.jpg 320w, images/p33id72-w480.jpg 480w, images/p33id72-w640.jpg 640w, images/p33id72-w800.jpg 800w, images/p33id72-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №72 (p33id72)',
    variant:          'Модель/Вариант исполнения/Фасовки №72',
    description:      'Описание позиции №72',
    producer:         'Producer Ltd. №33',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':5690},
    activePromo:      { },
    userReviews:      [
      {'username':'М.Ю.Лермонтов', 'rating':4, 'reviewText':'456...'},
      {'username':'П.В.Чехов',     'rating':3, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2'
    ],
    recommendedGoods: [
      'uniqueItemId7'
    ]
  },
  'CatItemC_7c7d18fa_CatItemC_': {
    modPrefix:        'CatItemC_7c7d18fa_CatItemC_',
    uniqueItemId:     '7c7d18fa',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p33id73-w1120.jpg 1120w, images/p33id73-w1280.jpg 1280w, images/p33id73-w1440.jpg 1440w, images/p33id73-w1600.jpg 1600w, images/p33id73-w160.jpg 160w, images/p33id73-w320.jpg 320w, images/p33id73-w480.jpg 480w, images/p33id73-w640.jpg 640w, images/p33id73-w800.jpg 800w, images/p33id73-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №73 (p33id73)',
    variant:          'Модель/Вариант исполнения/Фасовки №73',
    description:      'Описание позиции №73',
    producer:         'Producer Ltd. №33',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':3190},
    activePromo:      { },
    userReviews:      [
      {'username':'М.Ю.Лермонтов', 'rating':5, 'reviewText':'456...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2'
    ],
    recommendedGoods: [
      'uniqueItemId7'
    ]
  },
  'CatItemC_11b20de1_CatItemC_': {
    modPrefix:        'CatItemC_11b20de1_CatItemC_',
    uniqueItemId:     '11b20de1',
    cardFlipped:      false,
    photo:            {
      srcSet: "images/p33id74-w1120.jpg 1120w, images/p33id74-w1280.jpg 1280w, images/p33id74-w1440.jpg 1440w, images/p33id74-w1600.jpg 1600w, images/p33id74-w160.jpg 160w, images/p33id74-w320.jpg 320w, images/p33id74-w480.jpg 480w, images/p33id74-w640.jpg 640w, images/p33id74-w800.jpg 800w, images/p33id74-w960.jpg 960w",
      sizes:  "(min-width:360) calc(33vw - 2em), (min-width:600) calc(25vw - 2em), calc(50vw - 2em)"
    },
    salesName:        'Торговое наименование №74 (p33id74)',
    variant:          'Модель/Вариант исполнения/Фасовки №74',
    description:      'Описание позиции №74',
    producer:         'Producer Ltd. №33',
    isAvailable:      true,
    isFavourite:      false,
    price:            {'RUR':10900},
    activePromo:      { },
    userReviews:      [
      {'username':'П.В.Чехов',     'rating':2, 'reviewText':'Абв...'}
    ],
    similarGoods:     [
      'uniqueItemId1', 'uniqueItemId2'
    ],
    recommendedGoods: [
      'uniqueItemId7'
    ]
  }
}
