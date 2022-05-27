import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../api/root";

const useInventoryDetails = (inventoryId) => {
   const [inventory, setInventory] = useState({});
   const url = `${API}/inventories/${inventoryId}`;
   useEffect(() => {
      axios.get(url).then(({ data }) => setInventory(data));
   }, [url, inventory]);
   return [inventory, setInventory];
};

export default useInventoryDetails;
