import React, { Component } from 'react';


import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
const loginheader={
	display: 'inline',
	background:'#7b0000'
};
const registerheader={
	padding:'0px',
	margin:'0px'
};
const floatleft={float:'left'};
const floatright={float:'right'};
class HomeLayout extends Component {
  render() {
    return (
	<div>
         <HomeHeader />
		  <HomeFooter />   
		   <div className="modal fade" id="loginModal">
					<div className="modal-dialog">
					<div className="modal-content">
				<div className="modal-header" style={loginheader}>
					<button type="button" className="close" data-dismiss="modal">&times;</button>
					<p style={floatleft} className="white">Login <i  className="fas fa-lock"></i></p>
					<p style={floatright} className="second_button font12px">Contact Support</p>
				</div>
			<div className="modal-body">
				<p>Welcome to LiveJasmin</p>
				<div className="container">
					<form action="/html/tags/html_form_tag_action.cfm">
						<div className="form-group row">
							<label for="user_name" className="col-xs-3 col-form-label mr-2 white">Username : </label>
							<div className="col-xs-9">
								<input type="text" className="form-control"/>
							</div>
						</div>
						<div className="form-group row">
							<label for="pwd" className="col-xs-3 col-form-label mr-2 white">Password : </label>
							<div className="col-xs-9"> 
								<input type="text" className="form-control"/>
							</div>
						</div>		
						<div className="form-group row">
							<div className="col-md-3"></div>
							<div className="col-md-3">
								<button type="submit" class="first_button buttonbg">Login</button>
							</div>
								<div className="col-md-6">
									<label className="form-check-label white"><input type="checkbox" className="form-check-input"/>Keep me logged in</label>
								</div>
							</div>	
	
						<div className="form-group row">
							<div className="col-md-3"></div>
							<div className="col-md-9 font12px pinkish"><a href="#" className="yelloish">Click here</a> if you forgot your password!</div>
						</div>
						
						<div className="form-group row">
							<div className="col-md-3"></div>
							<div className="col-md-9 font12px pinkish">Don't have an account? <a href="" className="yelloish">Join now</a></div>
						</div>
				</form>
			</div>

      </div>


    </div>
  </div>
</div>
         <div className="modal fade" id="joinNowModal">
  <div className="modal-dialog">

    <div className="modal-content">

      <div className="modal-body"  style={registerheader}>
		<div className="row" style={registerheader}>
		<p className="signupp"><a href="" className="font12px support_signup" >Support</a><span><button type="button" className="close" data-dismiss="modal">&times;</button></span></p>
			<div className="col-md-6 signup_form_left">
				<p className="white font32">Join now and enjoy!</p>
					<div className="signup_form">			
					 <form action="/action_page.php">
					  <div className="form-group">
						<label for="username" className="username">Username:</label>
						<input type="username" className="form-control" id="username"/>
					  </div>
					  <div className="form-group">
						<label for="pwd" className="pwd">Password:</label>
						<input type="password" className="form-control" id="pwd"/>
					  </div>
					  <div className="form-group">
						<label for="email" className="email">Email address:</label>
						<input type="email" className="form-control" id="email"/>
					  </div>
					  <p className="sign_up_agree">By clicking on Join now, I acknowledge that I have read and agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> applicable to all Cobranded and WhiteLabel sites, owned by DDITS.</p>
					  <div className="text-center"><a href="#"><button type="submit" className="first_button buttonbg">Join Now</button></a></div>
					  <div className="text-center"><p className="yelloish"><a href="#">Login</a></p></div>
					 </form> 
					</div>
				
			</div>
			
			<div className="col-md-6 signup_form_right form_right_bg">
				<p className="benifit_clr font32">Benefits of membership</p>
					<div>
						<span className="signupIcons free10minutes"></span>
						<span>Use 10 FREE minutes</span>
					 </div>
					 <div>
						<span className="signupIcons pickurfav"></span>
						<span>Pick your favorites</span>
					 </div>
					 <div>
						<span className="signupIcons stayprivandsec"></span>
						<span>Stay private and secure</span>
					 </div>
					 <div>
						<span className="signupIcons getpersonalized"></span>
						<span>Get personalized suggestions</span>
					 </div>
					 <div>
						<span className="signupIcons enjoyshow"></span>
						<span>Enjoy shows with no limits</span>
					 </div>
			</div>
		</div>
	  </div>


    </div>
  
  </div>
</div>
		 
		 </div>
    );
  }
}

export default HomeLayout;
