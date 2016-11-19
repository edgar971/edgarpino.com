import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';

import HeaderNav from './parts/HeaderNav';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

class MainApp extends React.Component {

    constructor() {
        super();

    }

    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <HeaderNav/>
            </MuiThemeProvider>
        );

    };

}


export default MainApp;
