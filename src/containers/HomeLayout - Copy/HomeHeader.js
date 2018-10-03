import React, { Component } from 'react';
    import axios from 'axios';
const BaseURL = 'http://54.164.253.71:5000/api/';
const joinbutton = {
    background:'#fcb42c',
   borderRadius:'5px',
   color:'#fff'
};
const loginheader={
	display: 'inline',
	background:'#7b0000'
};
const floatleft={float:'left'};
const floatright={float:'right'};
const welcomeheader={fontSize:'14px',color:'#fff',textAlign:'center'};
const paddingmarginzero={padding:'0px',margin:'0px'};
const join1={position:'absolute',right:'15px',zIndex:'9999',opacity: 1,display:'block'};

class HomeHeader extends Component {
	constructor() {
        super();
        this.state = {
          category_name: '',
		  data:[
		  ]
          
        };
      }
	componentDidMount() {
    fetch(BaseURL+'homeapi', {
   method: 'POST'
   })
   .then((response) => response.json())
   .then((res) => {
        if(res.code==200){

            this.setState({data:res.data});

        }
        else {
          console.log('something went wrong ');
          return false;
        }
   })
   .catch((error) => {

   });

}
	render() {
		return(<div>
		      <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                        <div className="navbar-header">
                            <button type="button" id="sidebarCollapse" className="navbar-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
						
                        </div>



  <a className="navbar-brand" href="#">LOGO</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Live Cams</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Awards</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" data-toggle="modal" data-target="#joinNowModal"><i className="fas fa-envelope"></i></a>
      </li>
	  <li className="nav-item">
        <a className="nav-link" href="#" data-toggle="modal" data-target="#joinNowModal"><i className="fas fa-heart"></i></a>
      </li> 
	  <li className="nav-item">
        <a className="nav-link" href="#" data-toggle="modal" data-target="#joinNowModal">Get Credits</a>
      </li> 


    <li className="nav-item dropdown">
      <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
        EN <i className="fas fa-sort-down"></i>
      </a>
      <div className="dropdown-menu dropdown-menu-select-country">
		<div className="row">
			<div className="col-md-4">
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Español</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-de"></span><span className="dropdown-menu-select-country-text">Deutsch</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-fr"></span><span className="dropdown-menu-select-country-text">Français</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-it"></span><span className="dropdown-menu-select-country-text">Italiano</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-pt"></span><span className="dropdown-menu-select-country-text">Português</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-ne"></span><span className="dropdown-menu-select-country-text">Nederlands</span></a>
			</div>
			<div className="col-md-4">
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-sv"></span><span className="dropdown-menu-select-country-text">Svenska</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-no"></span><span className="dropdown-menu-select-country-text">Norwegian</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Dansk</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Suomi</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">日本語</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Pусский</span></a>
			</div>
			<div className="col-md-4">
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Magyar</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Český</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Slovenských</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Română</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">Polski</span></a>
				<a className="dropdown-item dropdown-item-select-country" href="#"><span className="img-thumbnail flag flag-icon-background flag-icon-es"></span><span className="dropdown-menu-select-country-text">简体中文</span></a>
			</div>
		</div>
      </div>
    </li>
	  
	  <li className="nav-item">
		<button type="button" className="btnSpecial" data-toggle="modal" data-target="#loginModal">
		  Login
		</button>
      </li> 
	  <li className="nav-item">
		<button type="button" className="btnSpecial" style={joinbutton} data-toggle="modal" data-target="#joinNowModal">
		  Join Now
		</button>
      </li>   
    </ul>
  </div> 
</nav>
<div id="Modalboxmodal" class="modal fade videoModal">
  <div class="modal-dialog modal-dialog-modalboxmodal">
		<div class="modal-content modal-content-modalboxmodal">
			<div class="modal-body">
				<button type="button" className="close" data-dismiss="modal"><span>Close &times;</span></button>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-9">
							<div align="center" className="embed-responsive embed-responsive-16by9">
								<video controls id="video1">
								  <source src="%PUBLIC_URL%/videos/small.mp4" type="video/mp4"/>
								  Your browser doesn't support HTML5 video tag.
								</video>
							</div>
						</div>
		
						<div className="col-md-3 imgNearVideo">
							<img src="https://imgx3.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f19/9dc1449cfbbb716348bb237b6aef89e9_erotic_285x160.jpg" className="modalimgOnModal"/>
							<img src="https://imgx0.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f14/4ae59ebfc2c9002295b6d09a7c612b10_erotic_285x160.jpg" className="modalimgOnModal"/>
							<img src="https://imgx2.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f13/33e077e922abad316adc791cd65bb30e_erotic_285x160.jpg" className="modalimgOnModal"/>
							<img src="%PUBLIC_URL%/images/sample-image.png" className="modalimgOnModal"/>
						</div>
					</div>
					<div className="row">
							<div className="col-md-9">
								<div className="row">
									<div className="col-md-3">
										<p className="checkMyWall">Check my wall</p>
									</div>
									
									<div className="col-md-6">
									<p className="startPrivateShow">start private show</p>
									</div>
									
									<div className="col-md-3">
									<p className="buyCredit"><i className="fas fa-coins"></i><span>buy credits</span></p>
									</div>
								</div>
							</div>
							
							<div className="col-md-3">
								<div className="row">
									<div className="col-md-12 chatOption">
									<p><span><i className="fas fa-comments"></i>chat</span><span><i className="fas fa-arrows-alt-v"></i></span></p>
									</div>
								</div>
							</div>
					</div>
						<div className="row">
							<ul className="nav nav-tabs nav-tabs-modal-popup">
								<li className="ModelName">Name Of Modal</li>
								<li className="nav-item">
								  <a className="nav-link active" data-toggle="tab" href="#allcontent">All Content</a>
								</li>
								<li className="nav-item">
								  <a className="nav-link" data-toggle="tab" href="#freecontent">Free Content</a>
								</li>
								<li className="nav-item">
								  <a className="nav-link" data-toggle="tab" href="#premiumcontent">Premium Content</a>
								</li>
							</ul>
							<div className="tab-content">
							   <div id="allcontent" className="container tab-pane active">
							      <div className="card-columns">
								     <div className="card modalCardBoxInPopUpNav">
									    <div className="row modalBoxInPopUpNav">
											<div className="col-md-3 imgBoxInPopUpNav">
												<img src="https://imgx0.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f14/4d34345b1fe935835b0f57e08296d46f_erotic_120x90.jpg?cno=0c5b" className="img-fluid"/>
											</div>
											<div className="col-md-9 ratingBoxInPopUpNav">
												<img src="images/star-rating.png" className="img-fluid"/>
												<p>142 rates</p>
											</div>
										</div>
										<div className="card-body modal-body">
											  <p className="card-text modal-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
											</div>
											<div className="row modalAwardBoxInPopUpNav">
												<div className="col-md-4 modalInfoBox1InPopUpNav">
													<p className="modalInfoBoxInPopUpNavP1">26</p>
													<p className="modalInfoBoxInPopUpNavP2">Age</p>
												</div>
												<div className="col-md-4 modalInfoBox2InPopUpNav">
													<p className="modalInfoBoxInPopUpNavP1">Huge</p>
													<p className="modalInfoBoxInPopUpNavP2">Breast Size</p>		
												</div>
												<div className="col-md-4 modalInfoBox3InPopUpNav">
													<p className="modalInfoBoxInPopUpNavP1">Female</p>
													<p className="modalInfoBoxInPopUpNavP2">Gender</p>		
												</div>
										</div>
										<div className="row modalInfoBoxInPopUpNav">
											<div className="col-md-4 modalInfoBox1InPopUpNav">
												<p className="modalInfoBoxInPopUpNavP1">26</p>
												<p className="modalInfoBoxInPopUpNavP2">Age</p>
											</div>
											<div className="col-md-4 modalInfoBox2InPopUpNav">
												<p className="modalInfoBoxInPopUpNavP1">Huge</p>
												<p className="modalInfoBoxInPopUpNavP2">Breast Size</p>		
											</div>
											<div className="col-md-4 modalInfoBox3InPopUpNav">
												<p className="modalInfoBoxInPopUpNavP1">Female</p>
												<p className="modalInfoBoxInPopUpNavP2">Gender</p>		
											</div>
										</div>
									 </div>
									 <div className="card p-3">
										<blockquote className="blockquote mb-0 card-body">
										  <p>Guys, check my new photoshoot and video 😍 . If you want to see more, SUBSCRIBE ⭐️to my FAN CLUB ⛔️. </p>
										</blockquote>
									</div>
									 <div className="card" data-toggle="modal" data-target="#photoalbummodal">
			<div className="photoAlbumText">Photo Album 121</div>
				<div className="containerCardManualOnPopup">
					<div className="photoAlbumInnerImage photoAlbumInnerContainer">
					<img src="https://gallery1.dditscdn.com/public/1c/82bbcd58a93215f1f5a7ec03cb04fa1f.jpg"/>
					<img src="https://gallery2.dditscdn.com/public/19/4369d0aeadd4a94a9fb683312414fc78.jpg"/>
					<img src="https://gallery1.dditscdn.com/public/17/b4c94aaaff77320c79c15eba6613c5f9.jpg"/>
					<img src="https://gallery1.dditscdn.com/public/15/699f332dc4f9d02a572775b34578efbf.jpg"/>
					</div>
					<div className="overlayCardManualOnPopup">
					<a href="#" className="iconCardManualOnPopup" title="User Profile">
					<i className="fa fa-user"></i>
					</a>
					</div>
				</div>
				<div className="photoAlbumFolderContainer photoAlbumFolderBox">
					<div className="photoAlbumFolderInner"><i className="fas fa-box-open"></i>
					</div>
				</div>
		</div>   
		<div className="card">
			<div className="photoAlbumText">Photo Album</div>
			<div className="containerCardManualOnPopup">
					<div className="photoAlbumInnerImage photoAlbumInnerContainer">
						<img src="https://gallery1.dditscdn.com/public/17/999437478084cba1a68ba5b0fb580207.jpg"/>
						<img src="https://gallery3.dditscdn.com/public/1c/3488988af47edb8511c25ce696a31ba3.jpg"/>
						<img src="https://gallery1.dditscdn.com/public/18/bbd8b6a2facb776e015871241c33317b.jpg"/>
						<img src="https://gallery0.dditscdn.com/public/1b/b03d62d36958c5a2a7d222f24ee8454a.jpg"/>
					</div>
			  <div className="overlayCardManualOnPopup">
				<a href="#" className="iconCardManualOnPopup" title="User Profile">
				  <i className="fa fa-user"></i>
				</a>
			  </div>
			</div>
			<div className="photoAlbumFolderContainer photoAlbumFolderBox"><div className="photoAlbumFolderInner"><i className="fas fa-box-open"></i></div></div>
		</div> 
		  // 
		<div className="card">
			<div className="photoAlbumText">Single Image</div>
			<div className="containerCardManualOnPopup">
					<div className="photoAlbumInnerContainer">
						<img src="https://gallery1.dditscdn.com/public/17/999437478084cba1a68ba5b0fb580207.jpg"/>
					</div>
			</div>
		</div>  
		<div className="card">
			<div className="photoAlbumText">Single Image</div>
			<div className="containerCardManualOnPopup">
					<div className="photoAlbumInnerContainer">
						<img src="https://gallery1.dditscdn.com/public/16/a9560f3665efea08632078974ebf2a1f.jpg"/>
					</div>
			</div>
		</div>   
		<div className="card">
			<div className="containerCardManualOnPopup">
			  <span className="premium_tag" data-title="Premium"></span>
				<div className="photoAlbumText">Single Photo Lock</div>
				<div className="containerCardManualOnPopup containerCardManualOnPopupBlur">
						<div className="photoAlbumInnerContainer">
						<img src="https://gallery1.dditscdn.com/public/1d/f958537fa9895526bea7ce635bcf969b.jpg"/>
						</div>
				</div>
				<div className="overlayCardManualOnPopupLockWithoutHover">
				<a href="#" className="iconCardManualOnPopupText">
				  <i className="fas fa-lock"></i>
				</a>
				</div>
			  
				<div className="overlayCardManualOnPopupLock">
					<span className="premium_tag" data-title="Premium"></span>
					<a href="#" className="iconCardManualOnPopupText">
					  <p className="iconCardManualOnPopupTextIcon"><i className="fas fa-lock"></i></p>
					  <button type="button" className="btnSpecial iconCardManualOnPopupTextButton" data-toggle="modal" data-target="#joinNowModal">
					  Unlock my album
					</button>
					  <p className="iconCardManualOnPopupTextCredit">1 Credit</p>
					</a>
				</div>
			</div>
		</div> 
		<div className="card">
			<div className="containerCardManualOnPopup">
			  <span className="premium_tag" data-title="Premium"></span>
			<div className="photoAlbumText">Photo Lock</div>
			  <div className="containerCardManualOnPopup containerCardManualOnPopupBlur">
						<div className="photoAlbumInnerImage photoAlbumInnerContainer">
						<img src="https://gallery1.dditscdn.com/public/1d/f958537fa9895526bea7ce635bcf969b.jpg"/>
						<img src="https://gallery0.dditscdn.com/public/1d/b5fd98c69d0f41c0e5907956b07ca846.jpg"/>
						<img src="https://gallery0.dditscdn.com/public/1e/830485725960a4f0fb18d5c014ef2bdb.jpg"/>
						</div>
				</div>
				<div className="overlayCardManualOnPopupLockWithoutHover">
				<a href="#" className="iconCardManualOnPopupText">
				  <i className="fas fa-lock"></i>
				</a>
			  </div>
			  
			  <div className="overlayCardManualOnPopupLock">
				<span className="premium_tag" data-title="Premium"></span>
				<a href="#" className="iconCardManualOnPopupText">
				  <p className="iconCardManualOnPopupTextIcon"><i className="fas fa-lock"></i></p>
				  <button type="button" className="btnSpecial iconCardManualOnPopupTextButton" data-toggle="modal" data-target="#joinNowModal">
				  Unlock my album
				</button>
				  <p className="iconCardManualOnPopupTextCredit">1 Credit</p>
				</a>
			  </div>
			</div>
		</div> 
		    <div className="card p-3 text-right">
			<blockquote className="blockquote mb-0">
			  <p>“Be yourself, everyone else is already taken” </p>
			</blockquote>
		</div>
		<div className="card">
			<div className="containerCardManualOnPopup">
			  <span className="premium_tag" data-title="Premium"></span>
				<div className="photoAlbumText">Video Lock</div>
			  <div className="containerCardManualOnPopup containerCardManualOnPopupBlur">
					<div className="photoAlbumInnerImage photoAlbumInnerContainer">
						<div align="center" className="embed-responsive embed-responsive-16by9">
							<video controls id="video1">
							  <source src="videos/small.mp4" type="video/mp4"/>
							  Your browser doesn't support HTML5 video tag.
							</video>
						</div>
					</div>
				</div>
				<div className="overlayCardManualOnPopupLockWithoutHover">
					<a href="#" className="iconCardManualOnPopupText">
					  <i className="fas fa-lock"></i>
					</a>
				</div>
				  <div className="overlayCardManualOnPopupLock">
					<a href="#" className="iconCardManualOnPopupText">
					  <p className="iconCardManualOnPopupTextIcon"><i className="fas fa-lock"></i></p>
					  <button type="button" className="btnSpecial iconCardManualOnPopupTextButton" data-toggle="modal" data-target="#joinNowModal">
					  Unlock my video
					</button>
					  <p className="iconCardManualOnPopupTextCredit">1 Credit</p>
					</a>
				  </div>
			</div>
		</div> 
		<div className="card" data-toggle="modal" data-target="#singlevideomodal">
		<div className="photoAlbumText">Video</div>
		<div className="containerCardManualOnPopup">
				<div className="photoAlbumInnerImage photoAlbumInnerContainer">
				<iframe className="iframeclass"  src="https://www.youtube.com/embed/qVkVVb7kddk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
		  <div className="overlayCardManualOnPopup">
			<a href="#" className="iconCardManualOnPopup" title="User Profile">
			  <i className="fa fa-user"></i>
			</a>
		  </div>
		</div>
		<div className="photoAlbumFolderContainer photoAlbumFolderBox"><div className="photoAlbumFolderInner"><i className="fas fa-play-circle"></i></div></div>
</div>   
 
  
  <div className="card p-3 text-right">
    <blockquote className="blockquote mb-0">
      <p>Guys, check my new photoshoot and video 😍 . If you want to see more, SUBSCRIBE ⭐️to my FAN CLUB ⛔️. </p>
    </blockquote>
  </div>
								  </div>
								   <div id="freecontent" className="container tab-pane fade">
								   <br/>
								       <div className="card-columns">
										 <div className="card">
											<div className="card-header">
												Card Header
											</div>
											<img className="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top"/>
										</div>
									   </div>
								   </div>
							   </div>
							</div>
						</div>
				</div>
			</div>
		</div>
	</div>
</div>
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
      <div className="wrapper">
	      <nav id="sidebar">
            <div className="sidebar-header">			
					<div className="row inlineHeaderSelector">
						<span className="col-md-4 inlineHeaderSelectorDiv"><a href="#" className="inlineHeaderSelectorHead">Girls</a></span>
						<span className="col-md-4"><a href="#" className="inlineHeaderSelectorHead">Boys</a></span>
						<span className="col-md-4">
<div className="dropdown">
  <button type="button" className="dropdown-toggle buttonDropdownMenuOnline" data-toggle="dropdown">
    <i className="fas fa-clock"></i>
  </button>
  <div className="dropdown-menu dropdownMenuOnline">
  <p className="buttonDropdownMenuOnlineHistory">History</p>
    <a className="dropdown-item buttonDropdownMenuOnlineHistoryList" href="#">
		<span><img src="images/img2.webp" className="buttonDropdownMenuOnlineHistoryListImage"/></span>
		<span className="buttonDropdownMenuOnlineHistoryListName">Name of modal</span>
		<span className="faCircleMenuOnlineHistoryRed"><i className="fas fa-circle"></i></span>
	</a>
    <a className="dropdown-item buttonDropdownMenuOnlineHistoryList" href="#">
		<span><img src="https://imgx0.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f1f/f97a2c3db12c162aef6b6069645494a2_erotic_120x90.jpg?cno=9995" className="buttonDropdownMenuOnlineHistoryListImage"/></span>
		<span className="buttonDropdownMenuOnlineHistoryListName">Name of modal</span>
		<span className="faCircleMenuOnlineHistoryGrey"><i className="fas fa-circle"></i></span>
	</a>
    <a className="dropdown-item buttonDropdownMenuOnlineHistoryList" href="#">
		<span><img src="images/img2.webp" className="buttonDropdownMenuOnlineHistoryListImage"/></span>
		<span className="buttonDropdownMenuOnlineHistoryListName">Name of modal</span>
		<span className="faCircleMenuOnlineHistoryGreen"><i className="fas fa-circle"></i></span>
	</a>
    <a className="dropdown-item buttonDropdownMenuOnlineHistoryList" href="#">
		<span><img src="https://imgx2.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f1e/ece1d20eb61c4d0705ba2b6b1786b0a5_erotic_120x90.jpg?cno=16b" className="buttonDropdownMenuOnlineHistoryListImage"/></span>
		<span className="buttonDropdownMenuOnlineHistoryListName">Name of modal</span>
		<span className="faCircleMenuOnlineHistoryGrey"><i className="fas fa-circle"></i></span>
	</a>
    <a className="dropdown-item buttonDropdownMenuOnlineHistoryList" href="#">
		<span><img src="https://imgx2.dditscdn.com/ff268cab8d9fbae1ed7506f97496274f16/6e991e4705c71efc59310081baa7dbfd_erotic_120x90.jpg?cno=f0ec" className="buttonDropdownMenuOnlineHistoryListImage"/></span>
		<span className="buttonDropdownMenuOnlineHistoryListName">Name of modal</span>
		<span className="faCircleMenuOnlineHistoryGrey"><i className="fas fa-circle"></i></span>
	</a>
  </div>
</div>
						</span>
					</div>			
			</div>
            <ul className="list-unstyled components">
                <li>
                    <a href="#category" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">
                        Category
                    </a>
                    <ul className="collapse list-unstyled show" id="category">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
                <li>
                    <a href="#showtime" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Show Time</a>
                    <ul className="collapse list-unstyled show" id="showtime">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#ethnicity" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Ethnicity</a>
                    <ul className="collapse list-unstyled show" id="ethnicity">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#price" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Price</a>
                    <ul className="collapse list-unstyled show" id="price">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#age" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Age</a>
                    <ul className="collapse list-unstyled show" id="age">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#appearance" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Appearance</a>
                    <ul className="collapse list-unstyled show" id="appearance">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#hair" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Hair</a>
                    <ul className="collapse list-unstyled show" id="hair">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#willingness" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Willingness</a>
                    <ul className="collapse list-unstyled show" id="willingness">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>

            </ul>			
              
        </nav>
		  <div id="content">
		    <div className="row">
			  <div className="col-md-3 imageGridDiv" data-toggle="modal" data-target="#Modalboxmodal">
	  <div className="containerImgGrid">
	  <img src="http://3.imimg.com/data3/YF/SK/MY-15008424/modal-photography-500x500.png" alt="Avatar" className="modalImageInGrid"/>
	  <div className="overlayWithHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		<a href="#" className="heartIconOnHover">
		  <i className="fas fa-heart"></i>
		</a>
	  </div>
	  <div className="overlayWithoutHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		</div>
	  </div>
	</div>
	<div className="col-md-3 imageGridDiv" data-toggle="modal" data-target="#Modalboxmodal">
	  <div className="containerImgGrid">
	  <img src="http://3.imimg.com/data3/YF/SK/MY-15008424/modal-photography-500x500.png" alt="Avatar" className="modalImageInGrid"/>
	  <div className="overlayWithHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		<a href="#" className="heartIconOnHover">
		  <i className="fas fa-heart"></i>
		</a>
	  </div>
	  <div className="overlayWithoutHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		</div>
	  </div>
	</div>
	<div className="col-md-3 imageGridDiv" data-toggle="modal" data-target="#Modalboxmodal">
	  <div className="containerImgGrid">
	  <img src="http://3.imimg.com/data3/YF/SK/MY-15008424/modal-photography-500x500.png" alt="Avatar" className="modalImageInGrid"/>
	  <div className="overlayWithHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		<a href="#" className="heartIconOnHover">
		  <i className="fas fa-heart"></i>
		</a>
	  </div>
	  <div className="overlayWithoutHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		</div>
	  </div>
	</div>
	<div className="col-md-3 imageGridDiv" data-toggle="modal" data-target="#Modalboxmodal">
	  <div className="containerImgGrid">
	  <img src="http://3.imimg.com/data3/YF/SK/MY-15008424/modal-photography-500x500.png" alt="Avatar" className="modalImageInGrid"/>
	  <div className="overlayWithHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		<a href="#" className="heartIconOnHover">
		  <i className="fas fa-heart"></i>
		</a>
	  </div>
	  <div className="overlayWithoutHover">
		<span className="fa-circle-red"><i className="fas fa-circle"></i></span>
		<span className="nameofmodal">Name</span>
		</div>
	  </div>
	</div>
			</div>
		  </div>
	  </div>
	    
		   </div>);
		  
	}
}


export default HomeHeader;
	