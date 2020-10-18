import React from "react";

function Why() {
    return <div className="why-section">
    <div className="row">
        <div className="col">
        <img className="why-image" src={require('./images/why-image.jpg')} alt="pic"></img>
        </div>
        <div className="col">
        <h1 className="why-heading">WHY CHOOSE MOMO CREATES?</h1>
        <p className="why-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="why-p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p className="why-p">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>

    </div>


}

export default Why;
// PREVIOUS VERSION
// return <div className="why-section">
// {/* <img className="dec-img" src={require('./images/dec-needle.png')} alt="decoration"></img> */}
//     <h1 className="why-heading">WHY CHOOSE MOMO CREATES?</h1>
//     <div className="container">
// <div class="row">
//     <div class="col">
//     <img className="why-image" src={require('./images/why-image.jpg')} alt="pic"></img>
//     </div>
//     <div class="col">
//     <p className="why-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//     <p className="why-p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
//     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//     <p className="why-p">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//     </div>
// </div>
// </div>
// </div>
// }