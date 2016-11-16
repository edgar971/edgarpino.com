import React from 'react'

class LightStreak extends React.Component {

    render() {
        return(
           <header className="header--light-streaks">
               <ul>
                   <li className="bg-primary"></li>
                   <li className="bg-secondary"></li>
                   <li className="bg-tertiary"></li>
                   <li className="bg-orange"></li>
               </ul>
           </header>
        )
    }

}



export default LightStreak;