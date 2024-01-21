import { Navbar, Welcome, Footer, Services, Transactions } from "./components"
import Landingpage from "./pages/landingpage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () =>{

  return (
    <>
      
      <BrowserRouter>
        <Routes>
        // Update the JSX element to use the correct component name
<Route path="/" element={<Landingpage />} />

     
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} /> */}
          {/* Other routes go here */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
