import React from "react";

function Main() {
    return <div className="main-section" id="home">
                
                <h1 className="main-t">MOMO CREATES</h1>
                <p className="main-p">Your vision, woven into reality...</p>
                <img className="needle-logo" src={require('./images/needle.png')} alt="needle"></img>
                {/* <img className="needle-logo-two" src={require('./images/main-pink-img.jpg')} alt="bg-img-pink"></img> */}
    </div>
}

export default Main;