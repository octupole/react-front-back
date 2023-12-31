import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route path='/edit-listing/:listingId' element={<EditListing />} />
          <Route
            path='/category/:categoryName/:listingId'
            element={<Listing />}
          />
          <Route path='/contact/:landlordId' element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  )
}
export default App;
// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={<Explore />}
//           />
//           <Route
//             path="/offers"
//             element={<Offers />}
//           />
//           <Route
//             path="/category/:categoryName"
//             element={<Category />}
//           />
//           <Route
//             path="/sign-in"
//             element={<SignIn />}
//           />
//           <Route
//             path="/profile"
//             element={<PrivateRoute />}
//           >
//             <Route
//               path="/profile"
//               element={<Profile />}
//             />
//           </Route>

//           <Route
//             path="/sign-up"
//             element={<SignUp />}
//           />
//           {/* <Route path='/profile' element={<Profile/>}/> */}
//           <Route
//             path="/forgot-password"
//             element={<ForgotPassword />}
//           />
//           <Route
//             path="/create-listing"
//             element={<CreateListing />}
//           />
//           <Route
//             path="/edit-listing/:listingId"
//             element={<EditListing />}
//           />
//         </Routes>
//         <Route
//             path='/category/:categoryName/:listingId'
//             element={<Listing />}
//           />

//         <Navbar />
//       </Router>
//       {/* Same as */}
//       <ToastContainer />
//     </>
//   );
// }
// export default App;

