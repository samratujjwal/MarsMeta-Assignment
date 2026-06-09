import { useState } from "react";
import "./App.css";
import ProfilePage from "./pages/ProfilePage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/edit" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
