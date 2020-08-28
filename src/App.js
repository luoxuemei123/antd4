/*
 * @Author: your name
 * @Date: 2020-07-24 11:35:30
 * @LastEditTime: 2020-08-28 11:03:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /antd4/src/App.js
 */
import React from 'react';
import './App.less';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom'
import Admin from './pages/admin/admin.jsx'
import Login from './pages/login/login.jsx'
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
