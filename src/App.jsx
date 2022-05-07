import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Footer/Footer";
import { AppHeader } from "./Pages/Header/Header";
import CustomAffix from "./Pages/Home/Affix/Affix";
import Home from "./Pages/Home/Home";
import AddInventory from "./Pages/Inventory/AddInventory/AddInventory";
import InventoryDetails from "./Pages/Inventory/InventoryDetails/InventoryDetails";
import ManageInventories from "./Pages/Inventory/ManageInventories/ManageInventories";
import MyInventories from "./Pages/Inventory/MyInventories/MyInventories";
import { ForgotPassword } from "./Pages/Login/ForgotPassword/ForgotPassword";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
//TODO: you can add react helmet if you want
//TODO: create home page

//TODO: clean up Social Button and Icon code
//TODO: optional:design the logo perfectly

function App() {
    // for changing theme
    const [colorScheme, setColorScheme] = useState("light");
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
                withNormalizeCSS
            >
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
                        <Route path="/about" element={<About></About>}></Route>
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
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
