import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../api/root";

const useToken = (user) => {
   const [token, setToken] = useState("");
   useEffect(() => {
      const getToken = async () => {
         const email = user?.user?.email;
         if (email) {
            const { data } = await axios.post(`${API}/login`, { email });
            // set token to state to get access
            setToken(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
         }
      };
      getToken();
   }, [user]);
   return [token];
};

export default useToken;
