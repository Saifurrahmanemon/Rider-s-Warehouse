import { Container, Grid } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import InventoryItem from "./InventoryItem/InventoryItem";
const Inventory = () => {
    const [items, setItems] = useState([]);
    // show only six items in the home inventory section

    useEffect(() => {
        axios.get("details.json").then(({ data }) => {
            setItems(data);
        });
    }, []);
    return (
        <div>
            <SectionTitle>Inventories</SectionTitle>
            <Container size="md">
                <Grid>
                    {" "}
                    {items.slice(0, 6).map((item) => (
                        <Grid.Col md={4} lg={3} key={item.id}>
                            <InventoryItem item={item}></InventoryItem>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Inventory;
