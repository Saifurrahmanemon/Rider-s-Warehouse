import axios from "axios";
import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/inventories").then(({ data }) => {
            setInventories(data);
        });
    }, []);
    return [inventories, setInventories];
};

export default useInventories;
