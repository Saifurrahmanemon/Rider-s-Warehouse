import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
   AddInventory,
   AppHeader,
   Blog,
   Contact,
   CustomAffix,
   Footer,
   ForgotPassword,
   Home,
   InventoryDetails,
   Login,
   ManageInventories,
   MyInventories,
   NotFound,
   Register,
   RequireAuth,
} from "./Pages";

// Create a client
const queryClient = new QueryClient();

function App() {
   // for changing theme
   const [colorScheme, setColorScheme] = useState("light");
   const toggleColorScheme = (value) =>
      setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
   return (
      <QueryClientProvider client={queryClient}>
         <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
         >
            <MantineProvider
               theme={{ colorScheme }}
               withGlobalStyles
               withNormalizeCSS
            >
               {" "}
               <ModalsProvider>
                  {" "}
                  <NotificationsProvider
                     position="top-right"
                     zIndex={1000}
                     containerWidth={300}
                     autoClose={4000}
                  >
                     <AppHeader></AppHeader>
                     <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/login" element={<Login></Login>}></Route>
                        <Route
                           path="/login/forgotpassword"
                           element={<ForgotPassword></ForgotPassword>}
                        ></Route>
                        <Route
                           path="/register"
                           element={<Register></Register>}
                        ></Route>
                        <Route path="/home" element={<Home></Home>}></Route>
                        <Route
                           path="/contact"
                           element={<Contact></Contact>}
                        ></Route>
                        <Route path="/blog" element={<Blog></Blog>}></Route>
                        <Route path="*" element={<NotFound></NotFound>}></Route>

                        <Route
                           path="/inventory/:inventoryId"
                           element={
                              <RequireAuth>
                                 <InventoryDetails></InventoryDetails>
                              </RequireAuth>
                           }
                        ></Route>
                        <Route
                           path="/inventory/myInventories"
                           element={
                              <RequireAuth>
                                 <MyInventories></MyInventories>
                              </RequireAuth>
                           }
                        ></Route>
                        <Route
                           path="/inventory/manageInventories"
                           element={
                              <RequireAuth>
                                 <ManageInventories></ManageInventories>
                              </RequireAuth>
                           }
                        ></Route>
                        <Route
                           path="/inventory/addInventory"
                           element={
                              <RequireAuth>
                                 <AddInventory></AddInventory>
                              </RequireAuth>
                           }
                        ></Route>
                     </Routes>
                     <Footer></Footer>
                     <CustomAffix></CustomAffix>
                  </NotificationsProvider>
               </ModalsProvider>
            </MantineProvider>
         </ColorSchemeProvider>
      </QueryClientProvider>
   );
}

export default App;
