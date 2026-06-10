import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import AddProfile from "./pages/AddProfile.jsx";
import Navbar from "./navbar.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar> */}
        <Route path="/" element={<ProfilePage />} />
        <Route path="/add-profile" element={<AddProfile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        {/* </Navbar> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
