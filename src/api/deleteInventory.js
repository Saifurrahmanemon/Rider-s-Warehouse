import axios from "axios";

const deleteInventoryApi = async (id) => {
    const url = `http://localhost:5000/inventories/${id}`;
    const { data } = await axios.delete(url);
    return data;
};

export default deleteInventoryApi;
