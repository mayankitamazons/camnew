import React, { Component } from 'react';
    import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../service/PostData';
const BaseURL = 'http://54.164.253.71:5000/api/';
const width100={width:"100%"};
const costomdesign={
	background:"#007bff",
	paddingTop:"15%"
};
const inputbox={
	background:"none",
	borderColor:'rgb(206, 212, 218)'
};
  const errStyle = {
  color:"#a94442"
}


class AdminHeader extends Component {
	
	 constructor(){
  super();
  this.state = {
  username: '',
  password: '',
  redirectToReferrer: false,
  submitted: false  
  };
  this.login = this.login.bind(this);
  this.onChange = this.onChange.bind(this);
  }
  login() {
 //API Action Here
   this.setState({ submitted: true });
     if(this.state.username && this.state.password){
    PostData('login',this.state).then((result) => {
    let responseJson = result;
    //console.log(responseJson);
    if(responseJson.code==200){
    sessionStorage.setItem('userData',JSON.stringify(responseJson));
    this.setState({redirectToReferrer: true});
    }
    else {
      alert('Invlid Login Detail');
    }
    });
    }
}

onChange(e){
 this.setState({[e.target.name]:e.target.value});
}
	render() {
		 if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
return (<Redirect to={'/superadmin/dashboard'}/>)
}
		return(<div className="container">
<div className="row">
<h2 className="signInContentLeftColumn">Camwish</h2>
</div>
	<div className="row signInContentContainer row-eq-height">
		<div className="col-md-6">
		<div className="signInContent">
			<h2 className="signInText">SignIn</h2>
			<p>Email address of your  account</p>
			

  <div className="form-group">
    <input type="text"  style={inputbox}  placeholder="Username" onChange={this.onChange} name="username" autoComplete="username" required  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">Login Detail.</small>
  </div>
  
    <div className="form-group">
    <input type="password" className="form-control" style={inputbox} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" name="password" onChange={this.onChange} autoComplete="current-password" required />
  </div>
			<div className="form-group">
			
			<button type="submit"  onClick={this.login} className="btn btn-primary" style={width100}>Next</button>
			</div>

		</div>
		
			
		</div>
		
		<div className="col-md-6">
		
		<img src="https://d1.awsstatic.com/Digital%20Marketing/sitemerch/sign-in/en/Site-Merch_PAC_EKS_SignIn_EN.6b8d5c98776faf9f3cf214eea005316ec13373a9.png" className="img-fluid"/>
		</div>
	</div>
	
<div className="row adminloginfooter">
<p>About Camwish.com Sign In</p>
<br/>
<p>Some about us data</p>
</div>
	
</div>
);
		  
	}
}


export default AdminHeader;
	