import React,{ Component } from 'react';

import {cyan700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from '../components/AppBar';
import AutoComplete from '../components/AutoComplete';
import Avatar from '../components/Avatar';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan700,
  },
  appBar: {
    height: 50,
  },
});


export default class App extends Component{
	render(){
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
			        <AppBar />
			        <AutoComplete />
			        <Avatar />
		        </div>
		  	</MuiThemeProvider>
		)
	}
}