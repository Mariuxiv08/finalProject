import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class About extends Component {
	render (){
		return(
		<MuiThemeProvider>
			  <div className="container">
			  	<div className="row">
			 		<div className="col-md">
			    		<Paper style={style} zDepth={3} />
			    		<p>this is text</p>
			    	</div>
			    </div>
			  </div>
		  </MuiThemeProvider>
	)}
}

export default About;