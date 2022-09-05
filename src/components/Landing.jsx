import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from 'react-scroll'

export const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Most awarded online library platfrom</h1>
                        <h2>
                            Find your dream book with <span className="purple">Library</span>
                        </h2>
                        <Link to="features" spy={true} smooth={true} duration={200}>
                            <button className="btn">Browse books</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
};