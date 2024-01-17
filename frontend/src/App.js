import Login from "./components/Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Authentication/Signup";
import Home from "./components//Authentication/Home";
import Managemovies from "./components/Admin/Managemovies";
import ManageUsers from "../src/components/Admin/UserList"
import PrivateRoutes from "./components/Authentication/ProtectedRoutes";
import ManageBookings from "./components/Admin/ManageBookings";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin/manage_movies" element={<PrivateRoutes/>}>
          <Route path="/admin/manage_movies" Component={Managemovies}></Route>
        </Route>
        <Route path="/admin/manage_users" element={<PrivateRoutes/>}>
          <Route path="/admin/manage_users" Component={ManageUsers}></Route>
        </Route>
        <Route path="/admin/booking_details" element={<PrivateRoutes/>}>
          <Route path="/admin/booking_details" Component={ManageBookings}></Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
