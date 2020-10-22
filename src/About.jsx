import React from "react";

function About() {
    return <section className="about-section" id="about">
    <h1 className="about-heading">ABOUT ME</h1>
    <div className="row">
        <div className="col">
        <img className="about-image" src={require('./images/profile-img.jpg')} alt="pic"></img>
        </div>
        
        <div className="col">
        {/* <h1 className="about-heading">ABOUT ME</h1> */}

        {/* <div className="col">
        <img className="about-image" src={require('./images/profile-img.jpg')} alt="pic"></img>
        </div> */}

        <p className="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="about-p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="about-p">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="about-p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="about-p">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        {/* <div className="col">
        <img className="about-image" src={require('./images/profile-img.jpg')} alt="pic"></img>
        </div> */}
    </div>

    </section>


}

export default About;
