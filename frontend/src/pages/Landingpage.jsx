import { Navbar, Welcome, Footer, Services } from "../components"

const Landingpage = () =>{

  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
     
          <Navbar value={"true"}/>
          <Welcome/>
        
        
        </div>
        <div id="wwd">
        <Services />
      
        <Footer/>
        </div>
      </div>
    
    </>
  )
}

export default Landingpage;
