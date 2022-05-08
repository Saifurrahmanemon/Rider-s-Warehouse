import { Container } from "@mantine/core";
import React from "react";
import Inventory from "../Inventory/Inventory";
import Banner from "./Banner/Banner";
import { FeaturesAsymmetrical } from "./Features/FeaturesAsymmetrical";
import NewsLetterBanner from "./NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Container>
                <Inventory></Inventory>
                <FeaturesAsymmetrical></FeaturesAsymmetrical>
                <NewsLetterBanner></NewsLetterBanner>
            </Container>
        </div>
    );
};

export default Home;
