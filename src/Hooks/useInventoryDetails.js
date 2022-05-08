import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryDetails = (inventoryId) => {
    const [inventory, setInventory] = useState({});
    const url = `https://radiant-anchorage-61997.herokuapp.com/inventories/${inventoryId}`;
    useEffect(() => {
        axios.get(url).then(({ data }) => setInventory(data));
    }, [url, inventory]);
    return [inventory, setInventory];
};

export default useInventoryDetails;
