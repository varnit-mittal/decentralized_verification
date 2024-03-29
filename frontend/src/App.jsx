import { Navbar, Welcome, Footer, Services } from "./components"
import Landingpage from "./pages/landingpage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./pages/signup";
import Usersignup from "./pages/Usersignup";
import Organisationsignup from "./pages/Organizationsignup";
import Dashboard_user from "./pages/Dashboard_user";
import Dashboard_org from "./pages/Dashboard_org";
import Add_user from "./pages/Add_user";
import Add_new_id from "./pages/Add_new_id";
import Verification from "./pages/Verification";
import Loadingpage from "./pages/Loadingpage";



const App = () =>{

  return (
    <>
      
      <BrowserRouter>
        <Routes>
<Route path="/" element={<Landingpage />} />

<Route path="/Signup" element={<Signup />} />
<Route path="/Usersignup" element={<Usersignup />} />
<Route path="/Organizationsignup" element={<Organisationsignup />} />

<Route path="/Dashboard_user" element={<Dashboard_user />} />

<Route path="/Dashboard_org" element={<Dashboard_org />} />
<Route path="/Add_user" element={<Add_user />} />
<Route path="/Verification" element={<Verification />} />
<Route path="/Add_new_id" element={<Add_new_id />} />
<Route path="/Loadingpage" element={<Loadingpage />} />




     
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} /> */}
          {/* Other routes go here */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
