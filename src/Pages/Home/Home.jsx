import React from "react";
import Inventory from "../Inventory/Inventory";
import Banner from "./Banner/Banner";
import { FeaturesAsymmetrical } from "./Features/FeaturesAsymmetrical";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <FeaturesAsymmetrical></FeaturesAsymmetrical>
        </div>
    );
};

export default Home;
