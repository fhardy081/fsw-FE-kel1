import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import InfoProfil from "./pages/InfoProfil";
import ProductPage from "./pages/ProductPage";
import InfoProduct from "./pages/InfoProduct";
import InfoOffer from "./pages/InfoOffer";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/Login";
import ListProduct from "./pages/ListProduct";
import SecurePage from "./pages/SecurePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/" element={<SecurePage />} >
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="info-profil" element={<InfoProfil />} />
          <Route path="infoproduct" element={<InfoProduct />} />
          <Route path="infoproduct/:id" element={<InfoProduct />} />
          <Route path="infooffer" element={<InfoOffer />} />
          <Route path="listproduct" element={<ListProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
