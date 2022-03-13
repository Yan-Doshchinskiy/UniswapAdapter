import hre, { ethers } from "hardhat";
import { Chains } from "../interfaces/enums";
import AdapterArguments from "../arguments/Adapter";

// npx hardhat run --network rinkeby scripts/deploy.ts
// npx hardhat verify --network rinkeby --constructor-args ./arguments/Adapter.ts 0xD13698ac1f5019E53efa08C4281d1eB71C568cdc

async function main(): Promise<void> {
  const net = hre.network.name;
  if (net !== Chains.RINKEBY) {
    throw new Error(`Invalid chain. Expected chain: ${Chains.RINKEBY}`);
  }
  const [deployer] = await ethers.getSigners();
  // deploy Adapter contract
  const AdapterContractName = "UniswapAdapter";
  console.log(
    `Deploying ${AdapterContractName} contract with the account:`,
    deployer.address
  );
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const AdapterFactory = await ethers.getContractFactory(AdapterContractName);
  const AdapterContract = await AdapterFactory.deploy(...AdapterArguments);
  await AdapterContract.deployed();
  console.log("Adapter Contract deployed to:", AdapterContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
