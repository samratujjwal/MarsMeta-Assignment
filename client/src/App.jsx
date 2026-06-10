import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
import EditProfilePage from "./pages/EditProfilePage.jsx";
import Navbar from "./navbar.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Navbar> */}
        <Route path="/" element={<ProfilePage />} />
        <Route path="/edit" element={<EditProfilePage />} />
        {/* </Navbar> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
