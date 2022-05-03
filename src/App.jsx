import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Footer/Footer";
import { AppHeader } from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";

//TODO: you can add react helmet if you want
//TODO: create home page

function App() {
    return (
        <div>
            <AppHeader></AppHeader>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
