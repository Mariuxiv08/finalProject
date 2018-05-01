import React , {Component }from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './containers/home';
import About from './containers/about';
import Findhero from './containers/findhero';
import FirebaseReg from './containers/register';
import FirebaseSign from './containers/signin';
import AppBarExampleIcon from './components/navbar';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



class App extends Component {

	render () {
	return (

		<Router>
		  <div>
			<MuiThemeProvider>
			  <AppBarExampleIcon />
			</MuiThemeProvider>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/findhero">Find your Hero</Link>
			<Link to="/register">Register</Link>
			<Link to="/signin">Sign In</Link>

			<Route exact path='/' component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/findhero' component={Findhero}/>
			<Route path='/register' component={FirebaseReg}/>
			<Route path='/signin' component={FirebaseSign}/>

			</div>
		</Router>
	);
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
