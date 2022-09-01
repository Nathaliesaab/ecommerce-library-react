import React from "react";
import logo from '../assets/Library.svg'
import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={logo} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/" className="footer__link no-cursor">About</Link>
                        <Link to="/books" className="footer__link">Books</Link>
                        <Link to="/"  className="footer__link no-cursor">Contact</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; 2021 Library</div>
                </div>
            </div>
        </footer>
    )
}