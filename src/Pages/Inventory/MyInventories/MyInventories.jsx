import {
   Avatar,
   Container,
   Group,
   Menu,
   ScrollArea,
   Table,
   Text,
} from "@mantine/core";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Note, Trash, TruckDelivery } from "tabler-icons-react";
import axiosPrivate from "../../../api/axiosPrivate";
import deleteInventory from "../../../api/deleteInventory";
import { API } from "../../../api/root";
import auth from "../../../firebase.init";
import ShowUserProfile from "../../Shared/ShowUserProfile";

const MyInventories = () => {
   const navigate = useNavigate();
   const [myInventories, setMyInventories] = useState([]);
   const [user] = useAuthState(auth);

   const name = user?.displayName;
   const img = user?.photoURL;

   useEffect(() => {
      const getInventories = async () => {
         const email = user?.email;
         const url = `${API}/myItems?email=${email}`;
         try {
            const { data } = await axiosPrivate.get(url);
            setMyInventories(data);
         } catch (err) {
            if (err.response.status === 401 || 403) {
               signOut(auth);
               navigate("/login");
            }
         }
      };
      getInventories();
   }, [navigate, user]);

   const handleDeleteItem = async (id) => {
      const proceed = window.confirm("Are you sure?");
      if (proceed) {
         deleteInventory(id);

         const remainingInventories = myInventories.filter(
            (inventory) => inventory._id !== id
         );
         setMyInventories(remainingInventories);
      }
   };
   // rows for data
   const rows = myInventories.map((item) => (
      <tr key={item._id}>
         <td>
            <Group spacing="sm">
               <Avatar size={40} src={item.img} radius={40} />
               <div>
                  <Text size="sm" weight={500}>
                     {item.name}
                  </Text>
                  <Text color="dimmed" size="xs">
                     {item.supplier}
                  </Text>
               </div>
            </Group>
         </td>
         <td>
            <Text size="sm" weight={500} color="gray">
               {user?.email}
            </Text>
            <Text size="xs" color="dimmed">
               Creator's Email
            </Text>
         </td>
         <td>
            <Text size="sm" weight={500} color="gray">
               ${item.price}
            </Text>
            <Text size="xs" color="dimmed">
               Rate
            </Text>
         </td>
         <td>
            <Text size="sm" weight={500} color="gray">
               {item.quantity}
            </Text>
            <Text size="xs" color="dimmed">
               quantity
            </Text>
         </td>
         <td>
            <Text size="sm" weight={500} color="gray">
               Available
            </Text>
            <Text size="xs" color="dimmed">
               status
            </Text>
         </td>
         <td>
            <Group spacing={0} position="right">
               <Menu transition="pop" withArrow placement="end">
                  <Menu.Item
                     onClick={() => navigate(`/inventory/${item._id}`)}
                     icon={<TruckDelivery size={16} />}
                  >
                     Delivered Item
                  </Menu.Item>
                  <Menu.Item
                     onClick={() => navigate(`/inventory/addInventory`)}
                     icon={<Note size={16} />}
                  >
                     Add New Item
                  </Menu.Item>
                  <Menu.Item
                     onClick={() => handleDeleteItem(item._id)}
                     icon={<Trash size={16} />}
                     color="red"
                  >
                     Delete Item
                  </Menu.Item>
               </Menu>
            </Group>
         </td>
      </tr>
   ));
   return (
      <div>
         <Container style={{ height: "80vh" }}>
            <Group position="left" my={20}>
               <ShowUserProfile
                  image={img}
                  name={name}
                  email={user?.email}
               ></ShowUserProfile>
            </Group>

            <ScrollArea>
               <Table
                  striped
                  highlightOnHover
                  sx={{ minWidth: 800 }}
                  verticalSpacing="sm"
               >
                  <tbody>{rows}</tbody>
               </Table>
            </ScrollArea>
         </Container>
      </div>
   );
};

export default MyInventories;
