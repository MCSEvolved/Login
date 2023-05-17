import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div className="text-MCS-DarkerBlue">"mcsevolved website"</div>} />
        <Route path="/login" element={<Layout />} >
          <Route path="/login/" element={<Home/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}