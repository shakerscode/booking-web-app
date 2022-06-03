import { Route, Routes } from "react-router-dom";
import Home  from "./Pages/Home/Home";
import Contact  from "./Pages/Contact/Contact";
import Login  from "./Pages/Login/Login";
import Hotels  from "./Pages/Hotels/Hotels";
import Hotel  from "./Pages/Hotel/Hotel";
import Navbar from "./Pages/Shared/Navbar";
import Register from "./Pages/Register/Register";



function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/hotels" element={<Hotels></Hotels>}></Route>
          <Route path="/hotels/:id" element={<Hotel></Hotel>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
    </div>
  );
}

export default App;
