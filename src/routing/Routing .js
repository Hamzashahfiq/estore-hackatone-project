import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import HeadernavBar from "../components/headerNavBar/HeadernavBar";
import AdminLogin from "../pages/auth/adminLogin/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { useSelector } from 'react-redux';
import AdminPage from "../pages/adminPage/AdminPage";




export default function Routing() {
    // const isLoginUser = useSelector((store) => store.AuthReducer.isLoginUser)
    //   console.log(isLoginUser)
      let isLoginUser = false;
    return (
        <BrowserRouter>
            <HeadernavBar />

            <Routes>
                <Route path="/admin" element={<AdminPage />} />

                <Route path="/" element={<Home />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
            </Routes>
        </BrowserRouter >
    )
}




