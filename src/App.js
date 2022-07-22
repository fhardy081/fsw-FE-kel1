import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import InfoProfil from "./pages/InfoProfil";
import ProductPage from "./pages/ProductPage";
import InfoProduct from "./pages/InfoProduct";
import InfoOffer from "./pages/InfoOffer";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/Login";
import ListProduct from "./pages/ListProduct";
import ListProduct2 from "./pages/ListProduct2";
import ListProduct3 from "./pages/ListProduct3";
import SecurePage from "./pages/SecurePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="infoproduct" element={<ListProduct />} />

        <Route path="/" element={<SecurePage />} >
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="info-profil" element={<InfoProfil />} />
          <Route path="infoproduct" element={<InfoProduct />} />
          <Route path="infoproduct/:id" element={<InfoProduct />} />
          <Route path="infooffer/:id" element={<InfoOffer />} />
          <Route path="listproduct" element={<ListProduct />} />
          <Route path="listproduct2" element={<ListProduct2 />} />
          <Route path="listproduct3" element={<ListProduct3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
