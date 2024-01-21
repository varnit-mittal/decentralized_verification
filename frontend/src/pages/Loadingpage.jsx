import React, { useEffect } from "react";

const Loadingpage = () => {
  const address = 1; // Replace with your actual logic to get the address

  useEffect(() => {
    // Check if the address is not set, and redirect if needed
    if (!address) {
      // Redirect to a different page (replace "/example" with the desired path)
      window.location.href = "/example";
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
   
      </h2>
    </div>
  );
};

export default Loadingpage;
