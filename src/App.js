import './index.css'
import React, { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home';
import Books from './pages/Books';
import { books } from './data'
import { BookDetail } from './pages/BookDeatils';
import Cart from './pages/Cart';
function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    cart.find((item) => +item.id === +book.id) 
    ?
    setCart(cart.map((item) => item.id === book.id ? { ...item, quantity: item?.quantity + 1 } : item))
    :
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id ? { ...item, quantity: +quantity } : item
      )
    );
  }
  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }
  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }
  useEffect(() => {

  }, []);
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/book/:bookId" element={<BookDetail books={books} addToCart={addToCart} cart={cart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
                setCart={setCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
