import { Link, useLocation } from 'react-router-dom';
import { MenuLink } from '../MenuLink';
import styles from './Menu.module.css';

export function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Home
                </MenuLink>
                <MenuLink to="/about">
                    About
                </MenuLink>
            </nav>
        </header>
    )
}