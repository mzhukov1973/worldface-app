import React                                     from 'react'
import { render }                                from 'react-dom'
import injectTapEventPlugin                      from 'react-tap-event-plugin'
import { Provider }                              from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware                      from 'redux-saga'
import rootSaga                                  from './sagas'
import mainReducer                               from './reducers'
import App                                       from './components/App'
import * as initialStates                        from './modules/initialStates'
import registerServiceWorker                     from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

injectTapEventPlugin();

const initialState = {
  promosData:    initialStates.promosDataInit,
  userHomeData:  initialStates.userHomeDataInit,
  newsFeedData:  initialStates.newsFeedDataInit,
  catalogueData: initialStates.catalogueDataInit,
  catGroupDatas: initialStates.catGroupDatasInit,
  catItemDatas:  initialStates.catItemDatasInit
};

const sagaMiddleware = createSagaMiddleware();

let store = createStore(mainReducer, initialState, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(rootSaga);

const startIt = () => {
  render(
      <Provider store={store}>
        <App/>
      </Provider>,
   document.getElementById('root')
  );
  registerServiceWorker();
};



if (window.cordova) {document.addEventListener('deviceready',startIt,false);} else {startIt();}
