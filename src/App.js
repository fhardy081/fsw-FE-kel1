import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import InfoProduct from "./pages/InfoProduct";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/infoproduct" element={<InfoProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
