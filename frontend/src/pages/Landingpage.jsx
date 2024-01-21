import { Navbar, Welcome, Footer, Services } from "../components"

const Landingpage = () =>{

  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar/>
          <Welcome/>
        </div>
        <Services/>
        <Footer/>
      </div>
    </>
  )
}

export default Landingpage;
