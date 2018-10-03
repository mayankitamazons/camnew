import React, { Component } from 'react';
import Modelpop from './Modelpop';
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
			var category_model=JSON.stringify(this.state.data.category);
			var show_model=JSON.stringify(this.state.data.show_type);
			var ethencity_model=JSON.stringify(this.state.data.ethecity_type);
			var price_model=JSON.stringify(this.state.data.price);
			var age_model=JSON.stringify(this.state.data.age);
			var age_model=JSON.stringify(this.state.data.age);
			var apper_model=JSON.stringify(this.state.data.apper);
			var wild_model=JSON.stringify(this.state.data.wild);
			var model_data=JSON.stringify(this.state.data.model);
			var hair_model=JSON.stringify(this.state.data.hair);
		return(<div>  <nav className="navbar navbar-expand-md bg-dark navbar-dark">

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
				{ category_model ?   <li>
                    <a href="#category" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle">
                        Category
                    </a>
                    <ul class="collapse list-unstyled show" id="category">
					{this.state.data.category.map(cat =>
						 <li key={cat._id}><a href="#">{cat.category_name}</a></li>
						)}  
                      
                    </ul>
                </li> : ''	}
				{ show_model ?  <li>
                    <a href="#showtime" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Show type</a>
                    <ul className="collapse list-unstyled show" id="showtime">
                        {this.state.data.show_type.map(show =>
						 <li key={show.type}><a href="#">{show.label}</a></li>       
						)} 
                    </ul>
                </li> : '' }
				
               
			   {  ethencity_model ? 
				<li>
                    <a href="#ethnicity" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Ethnicity</a>
                    <ul className="collapse list-unstyled show" id="ethnicity">
                        <li><a href="#">Home 1</a></li>
                        <li><a href="#">Home 2</a></li>
                        <li><a href="#">Home 3</a></li>
                    </ul>
			   </li> :'' }
			   { price_model ?
				<li>
                    <a href="#price" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Price</a>
                    <ul className="collapse list-unstyled show" id="price">
                        <li><a href="#">0.98</a></li>
                        <li><a href="#">1.99 -2.99</a></li>
                        <li><a href="#">3.99 - 4.99</a></li>
                        <li><a href="#">4.99 - 9.99</a></li>
                    </ul>
			   </li> : '' }
			   { age_model ?
				<li>
                    <a href="#age" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Age</a>
                    <ul className="collapse list-unstyled show" id="age">
                        <li><a href="#">18-22</a></li>
                        <li><a href="#">22-30</a></li>
                        <li><a href="#">30-40</a></li>
                        <li><a href="#">40+</a></li>
                    </ul>
			   </li> : '' }
			   { apper_model ?
				<li>
                    <a href="#appearance" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Appearance</a>
                    <ul className="collapse list-unstyled show" id="appearance">
                       {this.state.data.apper.map(cat =>
						 <li key={cat._id}><a href="#">{cat.app_name}</a></li>
						)}
                    </ul>
			   </li> : '' }
			   { hair_model ?
				<li>
                    <a href="#hair" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Hair</a>
                    <ul className="collapse list-unstyled show" id="hair">
                       {this.state.data.hair.map(cat =>
						 <li key={cat._id}><a href="#">{cat.hair_name}</a></li>
						)}  
                           
                    </ul>
			   </li> : ''} 
			   {  wild_model ?
				<li>
                    <a href="#willingness" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Willingness</a>
                    <ul className="collapse list-unstyled show" id="willingness">
                      {this.state.data.wild.map(cat =>
						 <li key={cat._id}><a href="#">{cat.will_name}</a></li>
						)}
                    </ul>
			   </li> :'' }

            </ul>			
              
        </nav>
		   <div id="content">
			{ model_data ?  
		      
		       <div className="row">
			         {this.state.data.model.map(cat =>
					<div className="col-md-3 imageGridDiv" data-toggle="modal" data-target="#Modalboxmodal">
						<div className="containerImgGrid">
						<img src={cat.pic} alt="Avatar" className="modalImageInGrid"/>
						<div className="overlayWithHover">
							<span className="fa-circle-green"><i className="fas fa-circle"></i></span>
							<span className="nameofmodal">{cat.name}</span>
							<a href="#" className="heartIconOnHover"><i className="fas fa-heart"></i></a>
						</div>
						<div className="overlayWithoutHover">
							<span className="fa-circle-green"><i className="fas fa-circle"></i></span>
							<span className="nameofmodal">{cat.name}</span>
						</div>
						</div>
					</div>
					)}
				</div>
			: '' }
		   </div>
	</div>
	  <Modelpop />
</div>);
		  
	}
}


export default HomeHeader;
	