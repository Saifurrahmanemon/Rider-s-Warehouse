import axios from "axios";
import React, { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem/InventoryItem";
const Inventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("details.json").then(({ data }) => {
            setItems(data);
        });
    }, []);

    return (
        <div>
            <h1>inventory</h1>
            {items.map((item) => (
                <InventoryItem item={item} key={item.key}></InventoryItem>
            ))}
        </div>
    );
};

export default Inventory;
