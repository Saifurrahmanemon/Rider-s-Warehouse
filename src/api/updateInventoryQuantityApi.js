import axios from "axios";
import { API } from "./root";

const updateInventoryQuantityApi = async (
   inventoryId,
   updatedQuantityValue
) => {
   const url = `${API}/inventories/${inventoryId}`;
   const { data } = await axios.put(url, { updatedQuantityValue });
   return data;
};

export default updateInventoryQuantityApi;
