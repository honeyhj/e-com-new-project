import React from "react";

import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createStore, applyMiddleware}  from 'redux'
import {Provider} from 'react-redux'
import rootreducer from "./Reducers/Rootreducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store=createStore(rootreducer,composeWithDevTools( applyMiddleware()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
