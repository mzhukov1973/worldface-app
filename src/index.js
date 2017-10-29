import React                                     from 'react'
import { render }                                from 'react-dom'
import { BrowserRouter }                         from 'react-router-dom'
import injectTapEventPlugin                      from 'react-tap-event-plugin'
import { Provider }                              from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware                      from 'redux-saga'
import rootSaga                                  from './sagas'
import mainReducer                               from './reducers'
import App                                       from './components/App'
import * as initialStates                        from './modules/initialStates'
import registerServiceWorker                     from './registerServiceWorker'
import './index.css'

injectTapEventPlugin();

const initialState = {
  promosData: initialStates.promosDataInit,
  userHomeData: initialStates.userHomeDataInit,
  catalogueData: initialStates.catalogueDataInit
};

const sagaMiddleware = createSagaMiddleware();

let store = createStore(mainReducer, initialState, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const startIt = () => {
  render(
    <BrowserRouter basename="/worldface-app">
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
   document.getElementById('root')
  );
  registerServiceWorker();
};



if (window.cordova) {document.addEventListener('deviceready',startIt,false);} else {startIt();}
