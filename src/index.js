import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import BaseLayout from './components/BaseLayout.js';
import JohnsData from './components/JohnsData.js';
import KevinsData from './components/KevinsData.js';
import ZachsData from './components/ZachsData.js';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/John' component={JohnsData}/>
        <Route path='/Kevin' component={KevinsData}/>
        <Route path='/Zach' component={ZachsData}/>
        <Route path='/' component={App}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
