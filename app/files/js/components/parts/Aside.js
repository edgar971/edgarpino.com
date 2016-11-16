import React from 'react'

class Header extends React.Component {

    render() {
        return(
            <aside className="aside--main">
                <section>
                    <header>
                        <figure>
                            <img className="profile-img round-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAc5AAAAJGVmOWQwOTBmLTU3MDQtNGVjOS04YTdhLWViNDIyZjNhMjY5MQ.jpg" />
                            <figcaption>
                                <h2>&lt;Edgar Pino/&gt;</h2>
                            </figcaption>
                        </figure>

                    </header>
                </section>
            </aside>
        )
    }

}



export default Header;