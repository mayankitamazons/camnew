import React, { Component } from 'react';
class Login extends Component {
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
		 return(<div>Login Page</div>);
	 }

}
export default Login;
