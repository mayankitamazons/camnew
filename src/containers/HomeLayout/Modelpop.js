import React, { Component } from 'react';
const loginheader={
	display: 'inline',
	background:'#7b0000'
};
const closemodel={
	position: 'absolute',
	right:'75px',
	zIndex: '9999',
	color: 'white',
	background: 'black',
	padding:'2px 4px',
	borderRadius:'5px'
}
const model1={
	height:'425px',
	overflow:'hidden'
}
const padding5=
{
	paddingTop:'5px'
};
const padding15=
{
	paddingTop:'15px'
};
const floatleft={float:'left'};
const floatright={float:'right'};
class Modelpop extends Component {
	render() {
		  return(<div id="Modalboxmodal" className="modal fade videoModal">
		          <div className="modal-dialog modal-dialog-modalboxmodal">
				    <div className="modal-content modal-content-modalboxmodal">
					  <div className="modal-body">
					     <button type="button" className="close" style={closemodel} data-dismiss="modal"><span>Close &times;</span></button>
						  <div className="container-fluid">
						    <div className="row">
								<div className="col-md-9" style={model1}>
									<div align="center" className="embed-responsive embed-responsive-16by9">
										<video controls id="video1">
										  <source src="videos/small.mp4" type="video/mp4"/>
										  Your browser doesn't support HTML5 video tag.
										</video>
									</div>
								</div>
								<div className="col-md-3 imgNearVideo">
									other model page
								</div>
							</div>
							<div className="row" style={padding5}>
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
										chat section
									</div>
								</div>
							</div>
							<div className="row" style={padding15}>
								<ul className="nav nav-tabs nav-tabs-modal-popup">
									<li className="namemodel">Name Of Modal</li>   
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
										{/* First tab */}
										<div id="allcontent" className="container tab-pane active">
											<br/>
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
														<p class="card-text modal-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
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
														<div className="photoAlbumFolderContainer photoAlbumFolderBox"><div className="photoAlbumFolderInner"><i className="fas fa-box-open"></i></div></div>
													</div> 
												</div>
											</div>
										</div>
										{/* End First tab */}
											{/* 2nd tab */}
										 <div id="freecontent" className="container tab-pane fade">
											<br/>
											<p>2 rates</p>
										</div>
										{/* End 2nd tab */}
											{/* 3rd tab */}
										 <div id="premiumcontent" className="container tab-pane fade">
											<br/>
											<p>3 rates</p>
										</div>
										{/* End 3rd tab */}
									</div>
							</div>
						  </div>
					  </div>
					</div>
				  </div>
				</div>);
	}
}


export default Modelpop;
	