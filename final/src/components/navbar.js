import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';



/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Hero App"
    iconElementRight={<FlatButton label="Home" />}
    iconElementRight={<FlatButton label="About" />}
    iconElementRight={<FlatButton label="FindYourHero" />}
    iconElementRight={<FlatButton label="Sign In" />}
 />

);

export default AppBarExampleIcon;