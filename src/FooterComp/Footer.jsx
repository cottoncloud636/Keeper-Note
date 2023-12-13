/* 
Display copyright with current year
*/

import React from 'react';
import sty from './Footer.module.css';

let currentYear = new Date().getFullYear();

function Footer(){
    return (
        <footer >
            <p>Copyright@{currentYear}</p>
        </footer>
    );
}

export default Footer;