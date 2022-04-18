import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import CheckOut from "./pages/CheckOut/CheckOut";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./pages/RecquireAuth/RecquireAuth";
function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/checkOut"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
