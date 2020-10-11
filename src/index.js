import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Test from './Example1';
// import App from './App';
// import TodoList from './TodoList';
import ExampleApp from "./ReacRouter/ExampleApp";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    {/* <Test /> */}
    {/* <App /> */}
    <ExampleApp />
  </React.StrictMode>,
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();