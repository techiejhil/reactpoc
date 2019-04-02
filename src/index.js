import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route,Link,Navlink, BrowserRouter as Router,Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Header from 'D:/reactjhilam/reacttest/src/components/headercomponent/header.js';
import Contact from 'D:/reactjhilam/reacttest/src/components/contactcomponent/contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/App">
            Home
          </Link>
          </li>
          <li>
           <Link to="/Contact">
            Contact
          </Link>
          </li>
       
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Home" component={Header} />
          <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
