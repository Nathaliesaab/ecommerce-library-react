import React from "react";
import { Book } from "./ui/Book";
import { books } from './../data.js';
export const Latest = () => {
    return (
        <section className="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discounted <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {books.filter((book) => book.salePrice > 0).slice(0, 8).map((item, index) => {
                            return (
                                <Book book={item} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >
    )
}