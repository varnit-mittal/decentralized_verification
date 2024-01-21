import React, { useEffect, useState } from "react";

const Loadingpage = () => {
  const [address, setAddress] = useState("");

  const fetchEthereumAccounts = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
      } catch (error) {
        console.error("Error fetching Ethereum accounts:", error);
        // Handle error if needed
      }
    }
  };

  useEffect(() => {
    fetchEthereumAccounts();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  useEffect(() => {
    // Check if the address is not set, and redirect if needed
    if (address) {
      // Redirect to a different page (replace "/example" with the desired path)
      window.location.href = "/Dashboard_org";
    }

    // Perform other loading logic here

    // Clean up the effect
    return () => {
      // Optional cleanup logic
    };
  }, [address]);

  return (
    <div className="relative gradient-bg-welcome w-full h-screen flex flex-col items-center">
      <div className="absolute top-0 w-full">
        {/* <Navbar /> */}
      </div>
      <h2 className="text-5xl mb-4 font-bold absolute top-60 left-40 text-white">
        Loading...
      </h2>
    </div>
  );
};

export default Loadingpage;
