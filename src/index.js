import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//imp from redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//imp from router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import rootReducer from './Reducers/rootReducer';
import BaseLayout from './Components/layout/BaseLayout';
import Container from './Components/Container';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/container' component={Container} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
