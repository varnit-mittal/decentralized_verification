import { Navbar, Welcome, Footer, Services, Transactions } from "../components"

const Landingpage = () =>{

  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar value={"true"}/>
          <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
      </div>
    </>
  )
}

export default Landingpage;
