import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route, Link, Switch } from "react-router-dom";

import App from './App'
render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component ={App} exact/>
        </Switch>
    </BrowserRouter>,
   document.getElementById('app'));