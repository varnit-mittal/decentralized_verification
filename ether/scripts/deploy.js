
const hre = require("hardhat");

async function main() {
  const org=await hre.ethers.getContractFactory("organization");
  const Org=await org.deploy();
  await Org.deployed();
  // console.log("Organization deployed to:",Org.address);
  const user=await hre.ethers.getContractFactory("user");
  const User=await user.deploy();
  await User.deployed();
  // console.log("User deployed to:",User.address);
  const verification=await hre.ethers.getContractFactory("verification");
  const Verification=await verification.deploy();
  await Verification.deployed();
  // console.log("Verification deployed to:",Verification.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
