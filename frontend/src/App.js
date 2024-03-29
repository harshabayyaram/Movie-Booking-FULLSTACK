import Login from "./components/Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Authentication/Signup";
import Home from "./components//Authentication/Home";
import Managemovies from "./components/Admin/Movies/Managemovies";
import ManageUsers from "./components/Admin/users/UserList"
import ManageBookings from "./components/Admin/Movies/ManageBookings";
import Contact from "./components/User/Contact Us/Contact";
import About from "./components/User/About/About";
import UserBookingList from "./components/User/movies/UserBookingList";
import { AdminPrivateRoutes, UserPrivateRoutes } from "./components/Authentication/ProtectedRoutes";
import MovieFullPage from "./components/User/movies/MovieFullPage";
import Sports from "./components/User/Sports/Sports";
import Activities from "./components/User/Activities/Activities";
import Events from "./components/User/Events/Events";
import Streams from "./components/User/Streams/Streams";
import GiftCards from "./components/User/Gift Cards/GiftCards";
import Offers from "./components/User/Offers/Offers";
import ListYourShow from "./components/User/List Your Show/ListYourShow";
import TermsAndConditions from "./components/Authentication/TermsAndConditions";
import PrivacyPolicy from "./components/Authentication/PrivacyPolicy";
import MovieSeatInfo from "./components/User/movies/MovieSeatInfo";
import EditProfile from "./components/User/EditProfile/EditProfile";
//harsha

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/user/about" Component={About}></Route>
        <Route path="/user/contact" Component={Contact}></Route>
        <Route path="/user/streams" Component={Streams}></Route>
        <Route path="/user/gift-cards" Component={GiftCards}></Route>
        <Route path="/user/offers" Component={Offers}></Route>
        <Route path="/user/events" Component={Events}></Route>
        <Route path="/user/activities" Component={Activities}></Route>
        <Route path="/user/sports" Component={Sports}></Route>
        

        {/* Admin Routes  */}
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
        {/* <Route path="/user/about" element={<UserPrivateRoutes />}>
          <Route path="/user/about" Component={About}></Route>
        </Route> */}
        {/* <Route path="/user/contact" element={<UserPrivateRoutes />}>
          <Route path="/user/contact" Component={Contact}></Route>
        </Route> */}
        <Route path="/user/bookings" element={<UserPrivateRoutes />}>
          <Route path="/user/bookings" Component={UserBookingList}></Route>
        </Route>
        <Route path="/user/movies/:id" element={<UserPrivateRoutes />}>
          <Route path="/user/movies/:id" Component={MovieFullPage}></Route>
        </Route>
        {/* <Route path="/user/sports" element={<UserPrivateRoutes />}>
          <Route path="/user/sports" Component={Sports}></Route>
        </Route> */}
        {/* <Route path="/user/activities" element={<UserPrivateRoutes />}>
          <Route path="/user/activities" Component={Activities}></Route>
        </Route> */}
        {/* <Route path="/user/events" element={<UserPrivateRoutes />}>
          <Route path="/user/events" Component={Events}></Route>
        </Route> */}
        {/* <Route path="/user/streams" element={<UserPrivateRoutes />}>
          <Route path="/user/streams" Component={Streams}></Route>
        </Route> */}
        {/* <Route path="/user/gift-cards" element={<UserPrivateRoutes />}>
          <Route path="/user/gift-cards" Component={GiftCards}></Route>
        </Route> */}
        {/* <Route path="/user/offers" element={<UserPrivateRoutes />}>
          <Route path="/user/offers" Component={Offers}></Route>
        </Route> */}
        <Route path="/user/list-your-show" element={<UserPrivateRoutes />}>
          <Route path="/user/list-your-show" Component={ListYourShow}></Route>
        </Route>
        <Route path="/user/movie-seat-info/:id" element={<UserPrivateRoutes />}>
          <Route path="/user/movie-seat-info/:id" Component={MovieSeatInfo}></Route>
        </Route>
        <Route path="/user/edit-profile" element={<UserPrivateRoutes />}>
          <Route path="/user/edit-profile" Component={EditProfile}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
