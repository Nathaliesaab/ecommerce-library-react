import React from "react";

const Price = ({ originalPrice, salePrice }) => {
    return (
        <div className="book__price">
            <span className="book__price--normal">{originalPrice.toFixed(2)}$</span>
            {salePrice && `${salePrice}$`}
        </div>
    );
};

export default Price;