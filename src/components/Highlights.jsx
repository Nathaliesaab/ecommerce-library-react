import React from "react";
import { Highlight } from "./ui/Highlight";

export const Highlights = () => {
    const highlights = [
        {
            icon: "bolt",
            title: "Easy and Quick",
            paragaraph: "Get access to the book you purchased online instantly.",
        },
        {
            icon: "book-open",
            title: "10,000+ Books",
            paragaraph: "Library has books in all your favourite categories.",
        },
        {
            icon: "tags",
            title: "Affordable",
            paragaraph: "Get your hands on popular books for as little as $10.",
        },
    ]
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        {highlights.map((item, index) => {
                            return (
                                <Highlight
                                    icon={item.icon}
                                    title={item.title}
                                    paragraph={item.paragaraph}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}