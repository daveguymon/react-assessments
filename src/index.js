import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DetailedView from './Components/DetailedView';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './ducks/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={ store }>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/:id" component={DetailedView} />
    </div>
  </Provider>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
