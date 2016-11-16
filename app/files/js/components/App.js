import React from 'react'
import Aside from './parts/Aside'
import Main from './parts/Main'
import Nav from './parts/Nav'
import HeadStreak from './parts/HeadStreak'

class MainApp extends React.Component {

    constructor() {
        super();

    }

    render() {
        return(
            <main className="content--wrapper full-height ">
                <HeadStreak/>
                <Aside/>
                <Main />
                <Nav />
            </main>
        );

    };

}


export default MainApp;