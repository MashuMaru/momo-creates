import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
    <p>© Copyright {currentYear}. MOMO CREATES. All Rights Reserved.</p>

    </footer>
}

export default Footer;