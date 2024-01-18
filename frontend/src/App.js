import Login from "./components/Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Authentication/Signup";
import Home from "./components//Authentication/Home";
import Managemovies from "./components/Admin/Managemovies";
import ManageUsers from "../src/components/Admin/UserList"
import ManageBookings from "./components/Admin/ManageBookings";
import Contact from "./components/User/Contact";
import About from "./components/User/About";
import UserBookingList from "./components/User/UserBookingList";
import { AdminPrivateRoutes, UserPrivateRoutes } from "./components/Authentication/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin/manage_movies" element={<AdminPrivateRoutes />}>
          <Route path="/admin/manage_movies" Component={Managemovies}></Route>
        </Route>
        <Route path="/admin/manage_users" element={<AdminPrivateRoutes />}>
          <Route path="/admin/manage_users" Component={ManageUsers}></Route>
        </Route>
        <Route path="/admin/booking_details" element={<AdminPrivateRoutes />}>
          <Route path="/admin/booking_details" Component={ManageBookings}></Route>
        </Route>

        {/* User Routes  */}

        <Route path="/user/about" element={<UserPrivateRoutes />}>
          <Route path="/user/about" Component={About}></Route>
        </Route>
        <Route path="/user/contact" element={<UserPrivateRoutes />}>
          <Route path="/user/contact" Component={Contact}></Route>
        </Route>
        <Route path="/user/bookings" element={<UserPrivateRoutes />}>
          <Route path="/user/bookings" Component={UserBookingList}></Route>
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
