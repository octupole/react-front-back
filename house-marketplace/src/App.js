import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import 'react-toastify/dist/ReactToastify.css'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Explore />}
          />
          <Route
            path="/offers"
            element={<Offers />}
          />
          <Route
            path="/sign-in"
            element={<SignIn />}
          />
          <Route
            path="/profile"
            element={<SignIn />}
          />
          <Route
            path="/sign-up"
            element={<SignUp />}
          />
          {/* <Route path='/profile' element={<Profile/>}/> */}
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
        </Routes>
        <Navbar />
      </Router>
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
