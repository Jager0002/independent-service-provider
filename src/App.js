import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/CheckOut" element={<CheckOut></CheckOut>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
