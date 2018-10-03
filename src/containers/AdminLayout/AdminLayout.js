import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import routes from '../../App';
import { Redirect, Route, Switch } from 'react-router-dom';

class AdminLayout extends Component {
  render() {
    return (  
	<div>
        <AdminHeader/>
		 
		 </div>
    );
  }
}

export default AdminLayout;
