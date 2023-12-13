import React from 'react';
import styles from './Header.module.css';

function Header(){
    return (
        <div className={styles.bg}>
            <header>
                <h1 className={styles.header}>Keeper</h1>
            </header>
        </div>
    );
}

export default Header;