import React from 'react';
import AppBar from 'material-ui/AppBar';

const HeaderNav = () => (
    <header className="main--header full-height">
        <AppBar
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <figure>
            <figcaption className="header--wrapper">
                <div className="header--fill">
                    <iframe width="100%" height="300px" allowfullscreen="" frameborder="0" src="//storage.googleapis.com/vrview/2.0/index.html?image=//storage.googleapis.com/vrview/examples/coral.jpg&is_stereo=true&is_vr_off"></iframe>
                    <h1 className="header--title">&lt; Hi, my name Edgar Pino /&gt;</h1>
                </div>
            </figcaption>
        </figure>
    </header>


);

export default HeaderNav;
