import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";
import bg from './Images/bg.jpg';

export default function App() {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className="image">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtask" element={<AddTask />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}