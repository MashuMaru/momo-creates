import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
    <a href="https://www.instagram.com/"><img className="insta-img" src={require('./images/instagram-logo.png')} alt="instagram"></img></a>
    <p className="copyright">© Copyright {currentYear}. MOMO CREATES. All Rights Reserved.</p>

    </footer>
}

export default Footer;