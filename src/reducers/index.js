import { combineReducers } from 'redux'
import userHomeData from './userHomeData'
import catalogueData from './catalogueData'
import promosData from './promosData'

const mainReducer = combineReducers({
  catalogueData, promosData, userHomeData
});

export default mainReducer
