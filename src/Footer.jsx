import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
    <a class="fab fa-instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/"></a>
    {/* <img className="insta-img" src={require('./images/instagram-logo.png')} alt="instagram"></img> */}
    <p className="copyright">© Copyright {currentYear}. Momo Creates. All Rights Reserved.</p>

    </footer>
}

export default Footer;