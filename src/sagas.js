import { put, takeEvery, all, call } from 'redux-saga/effects'
import { CATALOGUE_FETCH_DATA,PROMOS_FETCH_DATA,USER_HOME_FETCH_DATA } from './actions'

//Base64 encode/decode UTF-8 string:
const utoa = function(str) {return window.btoa(unescape(encodeURIComponent(str)));}
const atou = function(str) {return decodeURIComponent(escape(window.atob(str)));}

const DoJSONLoad = (method = 'normal', action = 'get_nonexistant', record = -1) => {
  let myHeaders = new Headers({"Content-type":"application/x-www-form-urlencoded"});
  let myRequest = new Request('https://testbed2.cloud.tilaa.com:5000/ajax_fetch.php',{method: 'POST', headers: myHeaders, body: 'action='+action+'&method='+method+'&record='+record});
  return fetch(myRequest).then(response => (response.json()) );
};


export function* fetchUserHomeData() {try {const data = yield call(DoJSONLoad,'fetchData','UserHome',-1);yield put({type: USER_HOME_FETCH_DATA.OK, 'data':data.data});} catch (error) {yield put({type: USER_HOME_FETCH_DATA.FAIL, 'error':error.error});}}
export function* watchUserHomeFetchDataRequest() {yield takeEvery(USER_HOME_FETCH_DATA.REQ, fetchUserHomeData)}

export function* fetchPromoData() {try {const data = yield call(DoJSONLoad,'fetchData','Promo',-1);yield put({type: PROMOS_FETCH_DATA.OK, 'data':data.data});} catch (error) {yield put({type: PROMOS_FETCH_DATA.FAIL, 'error':error.error});}}
export function* watchPromoFetchDataRequest() {yield takeEvery(PROMOS_FETCH_DATA.REQ, fetchPromoData)}

export function* fetchCatalogueData() {try {const data = yield call(DoJSONLoad,'fetchData','Catalogue',-1); yield put({type: CATALOGUE_FETCH_DATA.OK, 'data':data.data});} catch (error) {yield put({type: CATALOGUE_FETCH_DATA.FAIL, 'error':error.error});}}
export function* watchCatalogueFetchDataRequest() {yield takeEvery(CATALOGUE_FETCH_DATA.REQ, fetchCatalogueData)}



export default function* rootSaga() {
  yield all([
    watchCatalogueFetchDataRequest(),
    watchPromoFetchDataRequest(),
    watchUserHomeFetchDataRequest()
  ])
}
