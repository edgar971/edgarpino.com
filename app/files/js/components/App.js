import React from 'react'
import Header from './parts/Header'



class MainApp extends React.Component {

    constructor() {
        super();

    }

    render() {
        return(
            <main className="full-height">
                <Header/>
            </main>
        );

    };

}


export default MainApp;