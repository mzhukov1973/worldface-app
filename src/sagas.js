import { put, takeEvery, all, call } from 'redux-saga/effects'
import { CMP_FETCH_DATA } from './actions'

//Base64 encode/decode UTF-8 string:
const utoa = function(str) {return window.btoa(unescape(encodeURIComponent(str)));}
const atou = function(str) {return decodeURIComponent(escape(window.atob(str)));}

const DoJSONLoad = (method = 'normal', action = 'get_nonexistant', record = -1) => {
  let myHeaders = new Headers({"Content-type":"application/x-www-form-urlencoded"});
  let myRequest = new Request('https://testbed2.cloud.tilaa.com:5000/ajax_fetch.php',{method: 'POST', headers: myHeaders, body: 'action='+action+'&method='+method+'&record='+record});
  return fetch(myRequest).then(response => (response.json()) );
};



export function* fetchData()
{
 try {
      const data = yield call(DoJSONLoad,'fetchData','allData',-1)
      yield put({type: CMP_FETCH_DATA.OK, 'data':data.data})
     }
 catch (error)
     {
      yield put({type: CMP_FETCH_DATA.FAIL, 'error':error.error}); 
     }
}

export function* watchCMPFetchDataRequest() {
  yield takeEvery(CMP_FETCH_DATA.REQ, fetchData)
}

export default function* rootSaga() {
  yield all([
    watchCMPFetchDataRequest()
  ])
}
