import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../../Hooks/useInventoryDetails";

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetails(inventoryId);
    console.log(inventory);
    return (
        <div>
            <h1>manage inventory</h1>
        </div>
    );
};

export default InventoryDetails;
