import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../api/root";

const useInventories = () => {
   const [inventories, setInventories] = useState([]);

   useEffect(() => {
      axios.get(`${API}/inventories`).then(({ data }) => {
         setInventories(data);
      });
   }, []);
   return [inventories, setInventories];
};

export default useInventories;
