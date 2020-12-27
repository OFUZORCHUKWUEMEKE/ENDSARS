import React from 'react'
import './NavBar.css'
 import protest from '../img/protest.jpg'

const NavBar = () => {
    const style= {
        background:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${protest}) no-repeat`,
        backgroundPosition:"center",
        backgroundSize:"Cover",
       
    }
    
    
    return (
        <>
        <div className="imgg" id="img " style={style}>
            
            <nav className="nav-wrapper transparent">
                <div className="container">
                    <a className="brand-logo red-text left sarz">#ENDSARS!!</a>
                    <a href="https://twitter.com/OfuzorEmeke?s=01" target="_blank"><i className="right fab fa-twitter mttt red-text"></i></a>
                </div>
            </nav>
            <div className="center-align centt">
                <p className="flow-text white-text fontt ">STOP <span className="red-text"></span> </p>
                <p className="flow-text red-text fontt">END SARZ NOW!!</p>
               
               
            </div>

        </div>
        </>
    )
}

export default NavBar
