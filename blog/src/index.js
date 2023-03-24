import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
//DevTools
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';
import {getArticles} from './actions/articles.action';
//import {getInfos} from './actions/infos.action';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getArticles());
//store.dispatch(getInfos());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
