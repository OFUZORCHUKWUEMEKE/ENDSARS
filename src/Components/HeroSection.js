import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="container mt-3 secc">
            <div className="row">
                <div className="col s12 m4 imgg ">
                   <img src="img/ends (3).jpg" width="100%" height="350px"/> 
                </div>
                <div className="col s12  m6 offset-l2 ">
                  <h4  className="red-text center">END POLICE BRUTALITY </h4>
                  <p >Months of angst and protests on the streets of Twitter against a special Police Force unit known to terorise and extort from young Nigerians have finally spilled over into the streets of Major cities accross the country.</p>
                  <p >In Lagos, in Abuja, the nation's capital,in Osun,in Ogun, and in a number of other states,young Nigerians have taken to the streets to demand that country's leaders disband the Special Anti-Robbery Suad (SARS) and reform the nations's Police Force</p>
                <a className="btn red" href="https://techcabal.com/2020/10/09/end-sars-nigerian-twitter-warriors/" target="_blank">Read More</a>

                </div>
            </div>
        </div>
    )
}

export default HeroSection
