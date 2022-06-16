import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header"
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return(
    <BrowserRouter>
      <RegistrationPage/>
    </BrowserRouter>
      
      
  )
}

export default App;
