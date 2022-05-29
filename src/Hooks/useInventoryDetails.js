import axios from "axios";
import { useEffect, useState } from "react";

const useInventoryDetails = (inventoryId) => {
   const [inventory, setInventory] = useState({});
   const [loading, setLoading] = useState(false);
   const url = `http://localhost:5000/inventories/${inventoryId}`;
   useEffect(() => {
      const fetchAPI = async () => {
         const response = await axios.get(url);
         if (response) {
            setInventory(response.data);
            setLoading(!loading);
         }
      };
      fetchAPI();
   }, [loading, url]);
   return [inventory, setInventory];
};

export default useInventoryDetails;
