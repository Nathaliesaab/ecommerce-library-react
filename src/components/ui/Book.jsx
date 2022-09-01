import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";
export const Book = ({ book }) => {
    return (
        <div className="book">
            <figure className="book__img--wrapper">
                <img className="book__img" src={`${book.url}`} alt="" />
            </figure>
            <div className="book__title">
                <Link to={`/book/${book.id}`} className="book__title--link" >
                    {book.title}
                </Link>
            </div>
            <div className="book__ratings">
                <Rating rating={book.rating} />
            </div>
            <div className="book__price">
                <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                />
            </div>
        </div>
    )
}