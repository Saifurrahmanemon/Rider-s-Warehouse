import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Footer/Footer";
import { AppHeader } from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
//TODO: you can add react helmet if you want
//TODO: create home page

//TODO: clean up Social Button and Icon code
//TODO: optional:design the logo perfectly

function App() {
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
                <AppHeader></AppHeader>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route
                        path="/register"
                        element={<Register></Register>}
                    ></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/blog" element={<Blog></Blog>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                </Routes>
                <Footer></Footer>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
