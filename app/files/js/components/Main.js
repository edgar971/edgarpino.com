import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500,blueGrey300,brown100} from 'material-ui/styles/colors';
import HeaderNav from './parts/HeaderNav';
import MainSection from './parts/MainSection';


const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
    appBar: {
        color: blueGrey300,
    },
});

class MainApp extends React.Component {

    constructor() {
        super();

    }

    render() {
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <HeaderNav/>
                    <MainSection />
                </div>
            </MuiThemeProvider>
        );

    };

}


export default MainApp;
