import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import logo from '../assets/Library.svg'
export const Nav = ({ numberOfItems }) => {
    function openMenu() {
        document.body.classList += " menu--open"
    }

    function closeMenu() {
        document.body.classList.remove('menu--open')
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/" className="nav__link"><img className="logo" src={logo} alt="" /></Link>
                <ul className="nav__links">
                    <li className="nav__list"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="nav__list"><Link to="/books" className="nav__link">Books</Link></li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__list">
                        <Link to="cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        <span className="cart__length">{numberOfItems > 0 ? numberOfItems : 0} </span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={() => closeMenu()}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link" onClick={() => closeMenu()}>Home</Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/books" className="menu__link" onClick={() => closeMenu()}>Books</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}