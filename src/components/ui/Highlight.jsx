import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const Highlight = ({ icon, title, paragraph }) => {
    return (
        <div className="highlight">
            <div className="highlight__img">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3 className="highlight__subtitle">
                {title}
            </h3>
            <p className="highlight__para">
                {paragraph}
            </p>
        </div>
    );
}