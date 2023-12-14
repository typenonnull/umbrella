import { ethers } from "hardhat";

async function main() {
  const [signer, otherAddress] = await ethers.getSigners();
  const token =  await ethers.deployContract('Token');
  
  return await token.waitForDeployment();
}

main().then(console.log).catch(console.log);
