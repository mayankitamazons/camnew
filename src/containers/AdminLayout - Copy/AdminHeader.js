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
		return( <div>
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
        <a className="nav-link" href="#"><i className="fas fa-envelope"></i></a>
      </li>
	  <li className="nav-item">
        <a className="nav-link" href="#"><i className="fas fa-heart"></i></a>
      </li> 
	  <li className="nav-item">
        <a className="nav-link" href="#">Get Credits</a>
      </li> 

   
    <li className="nav-item dropdown">
      <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
        EN <i className="fas fa-sort-down"></i>
      </a>
      <div className="dropdown-menu dropdown-menu-select-country">
		<div className="row">
			<div className="col-md-4">
				<a className="dropdown-item dropdown-item-select-country" href="#">
				<span className="img-thumbnail flag flag-icon-background flag-icon-es"></span>
				<span className="dropdown-menu-select-country-text">Español</span></a>
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
		<button type="button" className="btnSpecial joinbutton" style={joinbutton} data-toggle="modal" data-target="#joinNowModal" >
		  Join Now
		</button>
      </li>   
    </ul>
  </div> 
		   </nav>
		   <div className="wrapper">
      
        <nav id="sidebar">
            <div className="sidebar-header">			
					<div className="row inlineHeaderSelector">
						<a href="#" className="inlineHeaderSelectorHead"><p className="col-md-4">Girls</p></a>
						<a href="#" className="inlineHeaderSelectorHead"><p className="col-md-4">Boys</p></a>
						<a href="#" className="inlineHeaderSelectorHead"><p className="col-md-4">icon</p></a>
					</div>			
			</div>
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#category" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                        Category
                    </a>
                    <ul className="collapse list-unstyled" id="category">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
                <li>
                    <a href="#showtime" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Show Time</a>
                    <ul className="collapse list-unstyled" id="showtime">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#ethnicity" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Ethnicity</a>
                    <ul className="collapse list-unstyled" id="ethnicity">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#price" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Price</a>
                    <ul className="collapse list-unstyled" id="price">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#age" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Age</a>
                    <ul className="collapse list-unstyled" id="age">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#appearance" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Appearance</a>
                    <ul className="collapse list-unstyled" id="appearance">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#hair" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Hair</a>
                    <ul className="collapse list-unstyled" id="hair">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>
				
				<li>
                    <a href="#willingness" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Willingness</a>
                    <ul className="collapse list-unstyled" id="willingness">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
                </li>

            </ul>			
               
        </nav>
		   <div className="modal fade" id="loginModal">
				<div className="modal-dialog">
				   <div className="modal-content">
				      <div className="modal-header" style={loginheader}>
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<p  className="white" style={floatleft}>Login <i  className="fas fa-lock"></i></p>
						<p  className="second_button font12px" style={floatright}>Contact Support</p>
					  </div>

     
		<div className="modal-body">
			<p style={welcomeheader}>Welcome to LiveJasmin</p>
			<div className="container">
				
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
	