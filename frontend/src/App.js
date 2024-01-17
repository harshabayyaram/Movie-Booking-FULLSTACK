import Login from "./components/Authentication/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Authentication/Signup";
import Home from "./components//Authentication/Home";
import Managemovies from "./components/Admin/Managemovies";
import PrivateRoutes from "./components/Authentication/ProtectedRoutes";


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
        {/* <Route path="/user/manage_movies" element={<PrivateRoutes/>}>
          <Route path="/user/manage_movies" Component={Managemovies}></Route>
        </Route> */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
