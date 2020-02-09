import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './store/rootReducer';
import thunk from "redux-thunk";
import {loadState, saveState} from "./localStorage";
import throttle from "lodash/throttle"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

const persistedState = loadState();

// const composeEnhancers =
//     process.env.NODE_ENV === "development"
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         : compose;

console.log("ls = ", persistedState);

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
    )
);
// composeEnhancers(applyMiddleware(thunk))

store.subscribe(throttle(() => {
    console.log("STORE = ", store.getState());
    saveState({
        collaboration: store.getState().collaboration,
        collaborations: store.getState().collaborations,
        companies: store.getState().companies,
        company_data: store.getState().company_data,
        datasets: store.getState().datasets,
        login_data: store.getState().login_data,
        socket: store.getState().socket,
        user: store.getState().user,
        users_collaborations: store.getState().users_collaborations,
        favorite_collaborations: store.getState().favorite_collaborations,
    })
}, 1000));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// collaboration: store.getState().state.collaboration,
// collaborations: store.getState().state.collaborations,
// companies: store.getState().state.companies,
// company_data: store.getState().state.company_data,
// datasets: store.getState().state.datasets,
// login_data: store.getState().state.login_data,
// socket: store.getState().state.socket,
// user: store.getState().state.user,
