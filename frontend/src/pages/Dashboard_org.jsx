import { Navbar, Welcome, Footer, Services } from "../components"
const DashboardOrg = () => {
  return (
    <div className=" relative gradient-bg-welcome w-full h-screen flex flex-col items-center ">
    <div className='absolute top-0 w-full'>
<Navbar/>
    </div>
  <h2 className="text-5xl mb-4 font-bold absolute top-60 left-40 text-white">
        Welcome, IIITB! 🙏
      </h2>
      <div className="text-left text-3xl text-white font-semibold mb-4 absolute top-[370px]">
        <p>
          Number of People in the Organization: 1245
        </p>
      </div>
      <h3 className="text-4xl mb-2  font-bold absolute top-[470px] left-[800px]     text-white">Issued Documents:</h3>
      <div className="text-left text-2xl absolute bottom-[80px] flex justify-between text-black ">
  <div className="card ">Document 1</div>
  <div className="card">Document 2</div>
  <div className="card">Document 3</div>
</div>
    </div>
  );
};

export default DashboardOrg;
