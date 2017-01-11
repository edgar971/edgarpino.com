import React from 'react'
import HeaderNav from './parts/HeaderNav';
import MainSection from './parts/MainSection';




class MainApp extends React.Component {

    constructor() {
        super();

    }

    render() {
        return(

                <div>
                    <HeaderNav/>
                    <MainSection />
                </div>

        );

    };

}


export default MainApp;
