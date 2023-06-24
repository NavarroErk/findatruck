import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

function Landing(){

return (
    <div id="landingContainer">
        <section id="landingSection1">
            <p id="landingSlogan">TAKING THE POWER OF THE WORLD'S LARGEST 3PLS AND PUTTING IT IN YOUR HAND</p>
        </section>
        <section id="landingSection2">
            <p id="landingTitleBar">F A T</p>
        </section>
        <section id="landingSection3">
            <button id="landingCreateAccountBtn">CREATE ACCOUNT</button>
            <button id="landingLoginBtn">LOG IN</button>
            <Link to="/accountrecovery">Forgot Password?</Link>
            <Link to="/search">Search</Link>
        </section>
        <section id="landingSection4">
            <div className="landingFeatureDiv">
                <div className="landingFeatureBubble"></div>
                <div className="landingFeaturePara">AI INTEGRATED LOAD <br /> AND TRUCK MATCHING</div>
            </div>
            <div className="landingFeatureDiv">
                <div className="landingFeatureBubble"></div>
                <div className="landingFeaturePara">OVER 500,000 MC NUMBERS TO <br /> CHOOSE FROM WITH OVER 200,000...</div>
            </div>
            <div className="landingFeatureDiv">
                <div className="landingFeatureBubble"></div>
                <div className="landingFeaturePara">MOST AFFORDABLE <br /> SOFTWARE AVAILABLE</div>
            </div>
        </section>
        <section id="landingSection5">
            <div id="landingFooterLinks">
                <p id="landingFooterLink1"><Link  to="#">CAREERS</Link></p>
                <p id="landingFooterLink2" ><Link to="#">PRODUCTS</Link></p>
                <p id="landingFooterLink3"><Link  to="#">SUPPORT</Link></p>
            </div>
            <div id="landingFooterSocials">o o o o o</div>
        </section>
    </div>
)

}

export default Landing