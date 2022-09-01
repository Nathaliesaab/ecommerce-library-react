import React from "react";
import { Landing } from './../components/Landing';
import { Highlights } from './../components/Highlights';
import { Feautured } from './../components/Feautured';
import { Latest } from './../components/Latest';
import Explore from './../components/Explore'
export const Home = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Feautured />
            <Latest />
            <Explore />
        </>
    )
}