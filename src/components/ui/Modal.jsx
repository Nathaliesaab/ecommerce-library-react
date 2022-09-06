import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Price from "./Price";
export const Modal = ({ setDisplayModel, book }) => {
    return (
        <>
            <div className="model__background">
            </div>
            <div className="model__container">
                <div className="model__title--wrapper">
                    <h1 className="model__title">
                        Book successfully added to your shopping cart!
                    </h1>
                    <FontAwesomeIcon icon="fa-x" className="model__icon"
                        onClick={() => setDisplayModel(false)} />
                </div>
                <div className="model__book--details">
                    <img src={book.url} alt="Book Cover Image" className="model__book--img" />
                    <div className="model__book--info">
                        <h4 className="model__book--title">{book.title}</h4>
                        <Price originalPrice={book.originalPrice}
                            salePrice={book.salePrice}
                        />
                    </div>
                    <div>{book.quantity}</div>
                </div>
                <span className="model__actions">
                    <Link className="btn" to="/books">
                        Continue Shopping
                    </Link>
                    <Link className="btn" to="/cart">
                        Proceed to checkout
                    </Link>
                </span>
            </div>
        </>

    );
};
