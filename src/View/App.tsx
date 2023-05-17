import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import LoginPage from "./Pages/LoginPage";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mcsynergy-55878.firebaseapp.com",
  projectId: "mcsynergy-55878",
  storageBucket: "mcsynergy-55878.appspot.com",
  messagingSenderId: "822930182678",
  appId: "1:822930182678:web:23e8f0b3e044ae06cb9b37",
  measurementId: "G-3BK4KLMGTJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div className="text-MCS-DarkerBlue">"mcsevolved website"</div>} />
        <Route path="/login" element={<Layout />} >
          <Route path="/login/" element={<LoginPage/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}