import React from "react";

function instagram() {
    window.open('https://www.instagram.com/', '_blank');
}

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
    <i class="fab fa-instagram inst-message" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" onClick={instagram}></i>
    {/* <img className="insta-img" src={require('./images/instagram-logo.png')} alt="instagram"></img> */}
    <p className="copyright">© Copyright {currentYear}. Momo Creates. All Rights Reserved.</p>

    </footer>
}

export default Footer;