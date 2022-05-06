import { Container, Grid } from "@mantine/core";
import React from "react";
import useInventories from "../../Hooks/useInventories";
import SectionTitle from "../Shared/SectionTitle";
import InventoryItem from "./InventoryItem/InventoryItem";
const Inventory = () => {
    const [inventories] = useInventories();

    return (
        <div>
            <SectionTitle>Inventories</SectionTitle>
            <Container size="md">
                <Grid>
                    {" "}
                    {inventories.slice(0, 6).map((item) => (
                        <Grid.Col md={4} lg={3} key={item._id}>
                            <InventoryItem item={item}></InventoryItem>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Inventory;
