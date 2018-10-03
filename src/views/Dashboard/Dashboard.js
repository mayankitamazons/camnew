import React, { Component } from 'react';
    import axios from 'axios';
const BaseURL = 'http://54.164.253.71:5000/api/';
    class Dashboard extends Component {
      constructor() {
        super();
        this.state = {
          category_name: '',
          
        };
      }

      onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {category_name } = this.state;

        axios.post(BaseURL+'addcategory', {category_name })
          .then((result) => {
            //access the results here....
			 let responseJson = result;
    console.log(responseJson);
    if(responseJson.status==200){
      alert('New Category Added');
	  window.location.reload();
    }
    else {
      alert('Invlid Something Went Wrong');
    }
          });
      }
	  componentDidMount() {
    fetch(BaseURL+'categorylist', {
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
		   var category_model=JSON.stringify(this.state.data);
        const { category_name } = this.state;
        return (
		<div>
            Category page
		  </div>
        );
      }
    }
  export default Dashboard;