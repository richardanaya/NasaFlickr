import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import App from "./components/app"
import reducers from './reducers'
import "./styles/app.less"
import thunk from 'redux-thunk';

const middleware = [thunk,routerMiddleware(browserHistory)]

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
        app: reducers,
        routing: routerReducer
    }),
    applyMiddleware(...middleware)
)

var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=24662369@N07&format=json&nojsoncallback=1"

var r = new XMLHttpRequest();
r.open("GET", url, true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  debugger;
};
r.send();


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App} />
    </Router>
    </Provider>,
    document.getElementById('app')
)
