import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { Book } from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";
import { Modal } from "../components/ui/Modal";


export const BookDetail = ({ books, addToCart, cart }) => {
    const [displayModel, setDisplayModel] = useState(false);
    const { bookId } = useParams();
    let book = books.find((book) => +book.id === +bookId);
    function addBookToCart(book) {
        addToCart(book);
    }
    return (
        <div id="books__body">
            <main className="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img " />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice}
                                        salePrice={book.salePrice}
                                    />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Sit ratione, eaque quibusdam error corporis iusto sed
                                        expedita neque totam id asperiores cumque magni temporibus,
                                        obcaecati accusamus, nobis corrupti autem adipisci!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Sit ratione, eaque quibusdam error corporis iusto sed
                                        expedita neque totam id asperiores cumque magni temporibus,
                                        obcaecati accusamus, nobis corrupti autem adipisci!
                                    </p>
                                </div>
                                {/* {bookExistsOnCart() ? (
                                    <Link to={`/cart`} className="book__link">
                                        <button className="btn">Checkout</button>
                                    </Link>
                                ) : ( */}
                                        <button className="btn" onClick={
                                            () => {
                                            addBookToCart(book)
                                            setDisplayModel(true)
                                            }}>
                                        Add to cart
                                    </button>
                                {/* )} */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="book__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">Recommended Books</h2>
                        </div>
                        <div className="books">
                            {books.filter((book) => book.rating === 5 && +book.id !== +bookId)
                                .slice(0, 4)
                                .map((book) => (
                                    <Book book={book} key={book.id} />
                                ))}
                        </div>
                    </div>
                </div>
                {displayModel &&
                    <Modal setDisplayModel={setDisplayModel} book={book}/>
                }
            </main>
        </div>
    )
}