import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"><img className="insta-img" src={require('./images/instagram-logo.png')} alt="instagram"></img></a>
    <p className="copyright">© Copyright {currentYear}. Momo Creates. All Rights Reserved.</p>

    </footer>
}

export default Footer;