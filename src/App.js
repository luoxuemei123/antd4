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
