import { Button, Center, Grid } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInventories from "../../Hooks/useInventories";
import SectionTitle from "../Shared/SectionTitle";
import InventoryItem from "./InventoryItem/InventoryItem";
const Inventory = () => {
    const navigate = useNavigate();
    const [inventories] = useInventories();

    return (
        <div>
            <SectionTitle>Inventories</SectionTitle>

            <Grid>
                {" "}
                {inventories.slice(0, 6).map((item) => (
                    <Grid.Col md={4} lg={3} key={item._id}>
                        <InventoryItem item={item}></InventoryItem>
                    </Grid.Col>
                ))}
            </Grid>
            <Center>
                <Button
                    onClick={() => navigate("/inventory/manageInventories")}
                    variant="default"
                    size="sm"
                    mt={15}
                    px={40}
                >
                    Manage Inventories
                </Button>
            </Center>
        </div>
    );
};

export default Inventory;
