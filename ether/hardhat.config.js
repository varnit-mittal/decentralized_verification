require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia:{
      url:process.env.RPC,
      accounts:[process.env.PRIVATE_KEY]
    }
  },
  paths:{
    sources:"./contracts"
  }
};

console.log(process.env.RPC)

// Organization deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
// User deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// Verification deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0