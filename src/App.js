import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RegistrationPage from "./pages/RegistrationPage";
import Homepage from "./pages/homepage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      {/* <RegistrationPage/> */}
    </BrowserRouter>




  )
}

export default App;
