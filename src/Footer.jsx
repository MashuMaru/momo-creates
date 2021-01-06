import React from "react";



function Footer() {

    function instagram() {
        window.open('https://www.instagram.com/', '_blank');
    }
    const currentYear = new Date().getFullYear();
    return <footer>
    <i className="fab fa-instagram inst-message" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" onClick={instagram}></i>
    {/* <img className="insta-img" src={require('./images/instagram-logo.png')} alt="instagram"></img> */}
    <p className="copyright">© Copyright {currentYear}. Momo Creates. All Rights Reserved.</p>
    <p className="copyright">Website designed and developed by <a href="https://mashumaru-dev.netlify.app/" rel="noreferrer">Mashumaru.</a></p>

    </footer>
}

export default Footer;