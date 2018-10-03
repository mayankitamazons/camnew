import React, { Component } from 'react';


import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';

class HomeLayout extends Component {
  render() {
    return (
	<div>
         <HomeHeader />
		  <HomeFooter />
         <div className="modal fade" id="joinNowModal">
  <div className="modal-dialog">

    <div className="modal-content">

      <div className="modal-body">
		<div className="row">
		<p><a href="" className="font12px support_signup" >Support</a><span><button type="button" className="close" data-dismiss="modal">&times;</button></span></p>
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
