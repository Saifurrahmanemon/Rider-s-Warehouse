import axios from "axios";
import { useEffect, useState } from "react";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);
    // show only six items in the home inventory section

    useEffect(() => {
        axios.get("http://localhost:5000/inventories").then(({ data }) => {
            setInventories(data);
        });
    }, []);
    return [inventories];
};

export default useInventories;
