import axios from "axios";
import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        axios
            .get("https://radiant-anchorage-61997.herokuapp.com/inventories")
            .then(({ data }) => {
                setInventories(data);
            });
    }, []);
    return [inventories, setInventories];
};

export default useInventories;
