import React from "react";

function Header() {
    return <nav className="navbar navbar-expand-lg navbar-light header">
            <a className="header-momo" href="https://getbootstrap.com/docs/4.5/components/navbar/">MOMO CREATES</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <a className="links nav-link header-links ml-auto" href="https://getbootstrap.com/docs/4.5/components/navbar/">Home</a>

                    <a className="links nav-link header-links ml-auto" href="https://getbootstrap.com/docs/4.5/components/navbar/">Why Choose Momo Creates</a>

                    <a className="links nav-link header-links ml-auto" href="https://getbootstrap.com/docs/4.5/components/navbar/">Recent Works</a>

                    <a className="links nav-link header-links ml-auto" href="https://getbootstrap.com/docs/4.5/components/navbar/">Contact</a>
                    </div>
                </div>
            </nav>
}

export default Header;