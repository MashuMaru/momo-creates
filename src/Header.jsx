import React from "react";

function Header() {
    return <nav className="navbar navbar-expand-lg navbar-light header sticky-top" id="myHeader">
                <a className="header-momo" /*href="https://getbootstrap.com/docs/4.5/components/navbar/"*/>MOMO CREATES</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="links nav-link header-links ml-auto " href="#home">Home</a>
                        <a className="links nav-link ml-auto" href="#about">About</a>
                        <a className="links nav-link ml-auto" href="#why">Why Choose Momo Creates</a>
                        <a className="links nav-link ml-auto" href="#carouselExampleIndicators">Recent Works</a>
                        <a className="links nav-link ml-auto" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
            
}

export default Header;