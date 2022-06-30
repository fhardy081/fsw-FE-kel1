import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import RegistrationPage from "./pages/RegistrationPage";
// import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
// import DetailProduct from "./DetailProduct";


function App() {

  // const [product, setProduct] = useState({})
  // const [user, setUser] = useState({
  //   id: 1
  // })

  // useEffect(() => {

  // }, [product])

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegistrationPage/>} />
      <Route path="/product" element={<ProductPage/>} />
    </Routes>
      {/* <Navbar/>
      <ProductPage/> */}
        {/* <DetailProduct user={user} product={product}/> */}
    </BrowserRouter>
      
    
      
      
  )
}

export default App;
