import { Navbar, Welcome, Footer, Services, Transactions } from "./components"

const App = () =>{

  return (
    <>
    <h1>HI</h1>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar/>
          <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
      </div>
    </>
  )
}

export default App
