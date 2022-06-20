import {BrowserRouter} from "react-router-dom";
// import RegistrationPage from "./pages/RegistrationPage";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <ProductPage/>
      {/* <RegistrationPage/> */}
    </BrowserRouter>
      
    
      
      
  )
}

export default App;
