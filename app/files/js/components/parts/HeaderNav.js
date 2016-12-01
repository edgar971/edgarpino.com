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
                    <h1 className="header--title">&lt; Hi, my name Edgar Pino /&gt;</h1>
                </div>
            </figcaption>
        </figure>
    </header>


);

export default HeaderNav;
