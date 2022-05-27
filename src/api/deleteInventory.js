import axios from "axios";
import { API } from "./root";

const deleteInventoryApi = async (id) => {
   const url = `${API}/inventories/${id}`;
   const { data } = await axios.delete(url);
   return data;
};

export default deleteInventoryApi;
