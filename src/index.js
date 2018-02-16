import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PagesIndex from './components/page_index';
import pagesShow from './components/page_show';


import './index.css';
import './assets/css/editor-style.css';
import './assets/css/font-awesome.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';


import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/" exact component={PagesIndex} />
				<Route path="/pages/:slug" component={pagesShow} />
				
			</Switch>
		</div>
	</BrowserRouter>
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
