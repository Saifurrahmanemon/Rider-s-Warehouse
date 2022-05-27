import axios from "axios";
import { API } from "./root";

const updateInventoryQuantityApi = async (
   inventoryId,
   updatedQuantityValue
) => {
   const url = `${API}/inventories/${inventoryId}`;
   await axios.put(url, { updatedQuantityValue });
};

export default updateInventoryQuantityApi;
