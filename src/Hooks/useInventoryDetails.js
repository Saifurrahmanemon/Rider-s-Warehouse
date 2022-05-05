import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryDetails = (inventoryId) => {
    const [inventory, setInventory] = useState({});
    const url = `http://localhost:5000/inventories/${inventoryId}`;
    useEffect(() => {
        axios.get(url).then(({ data }) => setInventory(data));
    }, [url]);
    return [inventory];
};

export default useInventoryDetails;
