// eslint-disable-next-line node/no-missing-import
import { ethers, artifacts, waffle } from "hardhat";
import { Artifact } from "hardhat/types";
import ArgumentsERC20 from "../../arguments/TST";
import viewFunctions from "./ERC20viewFunctions";
import supplyFunctions from "./ERC20supplyFunctions";

export default describe("ERC20 contract testing", async function () {
  before(async function () {
    this.ethers = ethers;
    [this.owner, this.user1, this.user2] = await ethers.getSigners();
    this.erc20Arguments = ArgumentsERC20;
    this.testMintAmount = "20000000000000000000000000";
    this.testBurnAmount = "5000000000000000000000000";
  });

  beforeEach(async function () {
    const artifactEthToken: Artifact = await artifacts.readArtifact(
      "TokenERC20"
    );
    this.instance = await waffle.deployContract(
      this.owner,
      artifactEthToken,
      this.erc20Arguments
    );
  });
  viewFunctions();
  supplyFunctions();
});
