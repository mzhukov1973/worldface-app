import { combineReducers } from 'redux'
import userHomeData        from './userHomeData'
import promosData          from './promosData'
import newsFeedData        from './newsFeedData'
import catalogueData       from './catalogueData'
import catGroupDatas       from './catGroupDatas'
import catItemDatas        from './catItemDatas'

const mainReducer = combineReducers({
  userHomeData,  promosData, newsFeedData, catalogueData, catGroupDatas, catItemDatas
});

export default mainReducer
