export const userHomeDataInit = {
  componentsText: 'UserHomeC',
  width:          256,
  height:         256,
  modPrefix:      'UserHomeC_'+Date.now().toString(16).slice(4)+'_UserHomeC_'
}

export const promosDataInit = {
  componentsText: 'PromosC',
  width:          256,
  height:         256,
  modPrefix:      'PromosC_'+Date.now().toString(16).slice(4)+'_PromosC_'
}

export const catalogueDataInit = {
  componentsText: 'CatalogueC',
  width:          256,
  height:         256,
  modPrefix:      'CatalogueC_'+Date.now().toString(16).slice(4)+'_CatalogueC_'
}

export const catItemDataInit = {
  modPrefix:      'CatItemC_'+Date.now().toString(16).slice(4)+'_CatItemC_',
  uniqueItemId:   '12f9dde00a',
  photo:          {
    'sources':[
      {'px':160, 'src':'stock160w.jpg', 'prefix':'images/stockPhotos'},
      {'px':320, 'src':'stock320w.jpg', 'prefix':'images/stockPhotos'},
      {'px':480, 'src':'stock480w.jpg', 'prefix':'images/stockPhotos'},
      {'px':640, 'src':'stock640w.jpg', 'prefix':'images/stockPhotos'},
      {'px':800, 'src':'stock800w.jpg', 'prefix':'images/stockPhotos'},
      {'px':960, 'src':'stock960w.jpg', 'prefix':'images/stockPhotos'},
      {'px':1120,'src':'stock1120w.jpg','prefix':'images/stockPhotos'},
      {'px':1280,'src':'stock1280w.jpg','prefix':'images/stockPhotos'},
      {'px':1440,'src':'stock1440w.jpg','prefix':'images/stockPhotos'},
      {'px':1600,'src':'stock1600w.jpg','prefix':'images/stockPhotos'}
    ]
  },
  salesName:        'Торговое наименование',
  variant:          'Модель/Вариант исполнения/Фасовки',
  description:      'Описание',
  producer:         'Producer Ltd.',
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
}


export const catGroupDataInit = {
  componentsText: 'CatGroupC',
  width:          256,
  height:         256,
  modPrefix:      'CatGroupC_'+Date.now().toString(16).slice(4)+'_CatGroupC_'
}
