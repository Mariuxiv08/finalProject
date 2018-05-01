import React , {Component }from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import firebase from './firebaselog';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppBarExampleIcon extends Component {
	state ={ isSignedIn: false,
			  usserProfile:null
			};
	componentDidMount() {
		console.log('componentDidMount')
		this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user)=>{
			this.setState({isSignedIn: !!user, userProfile: user });
		})
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
		this.unregisterAuthObserver();
	}

	signin(){
		console.log('logging in')
		firebase.auth().createUserWithEmailAndPassword('heelo@njit.edu','123456')
	}

	render () {
		console.log('render')
		return (
		  <AppBar
		    title="Hero App"
		    iconElementRight={<FlatButton onClick={this.signin} label={this.state.isSignedIn?"UserName":"Sign In"}/>}
		 />
 )}

}

export default AppBarExampleIcon;