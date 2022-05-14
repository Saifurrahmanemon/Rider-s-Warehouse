import axios from "axios";

const updateInventoryQuantityApi = async (
    inventoryId,
    updatedQuantityValue
) => {
    const url = `http://localhost:5000/inventories/${inventoryId}`;
    await axios.put(url, { updatedQuantityValue });
};

export default updateInventoryQuantityApi;
