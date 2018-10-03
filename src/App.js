import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { HashRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
// Containers
import { HomeLayout } from './containers';
import { AdminLayout } from './containers';
function Loading() {
  return <div>Loading...</div>;
}
const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),   
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/superadmin/dashboard" name="Dahsboard Page" component={Dashboard} />
            <Route path="/superadmin" name="Home" component={AdminLayout} />
            <Route path="/superadmin/login" name="Home" component={AdminLayout} />
          
           <Route path="/" name="Home" component={HomeLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
