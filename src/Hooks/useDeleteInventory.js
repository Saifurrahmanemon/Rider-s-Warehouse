import axios from "axios";

const useDeleteInventory = async (id, inventories, setInventories) => {
    const url = `http://localhost:5000/inventories/${id}`;
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
        const { data } = await axios.delete(url);
        console.log(data);
        const remainingInventories = inventories.filter(
            (inventory) => inventory._id !== id
        );
        setInventories(remainingInventories);
    }
};

export default useDeleteInventory;
