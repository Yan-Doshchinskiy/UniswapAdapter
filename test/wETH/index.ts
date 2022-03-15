// eslint-disable-next-line node/no-missing-import
import { ethers, artifacts, waffle } from "hardhat";
import { Artifact } from "hardhat/types";
import ArgumentsWETH from "../../arguments/wETH";
import viewFunctions from "./wETHviewFunctions";
import depositFunctions from "./wETHdepositFunctions";
import transferFunctions from "./wETHtransferFunctions";

export default describe("wETH contract testing", async function () {
  before(async function () {
    this.ethers = ethers;
    [this.owner, this.user1, this.user2] = await ethers.getSigners();
    this.argumentsWETH = ArgumentsWETH;
    this.testMintAmount = "10000000000000000";
    this.testMintAmount2 = "20000000000000000";
    this.testBurnAmount = "3000000000000000";
    this.testBigAmount = "20000000000000000000000";
    this.testBigAmoun2 = "30000000000000000000000";
  });

  beforeEach(async function () {
    const artifacWETH: Artifact = await artifacts.readArtifact("wEth");
    this.instanceWETH = await waffle.deployContract(
      this.owner,
      artifacWETH,
      ArgumentsWETH
    );
  });
  viewFunctions();
  depositFunctions();
  transferFunctions();
});
