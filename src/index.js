import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {applyMiddleware, createStore} from "redux";
import {createEpicMiddleware} from "redux-observable";
import {rootReducer} from "./reducers";
import {rootEpic} from "./epics";
import {ConnectToRedux} from "./util/connectToRedux/ConnectToRedux";

const epicMiddleware = createEpicMiddleware();


/**
 * The redux state store, built with the Epic middleware.
 */
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

ConnectToRedux.mountStore(store);

epicMiddleware.run(rootEpic);


ReactDOM.render( <App />, document.getElementById('root'));
