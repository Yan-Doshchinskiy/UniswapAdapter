// eslint-disable-next-line node/no-missing-import
import { ethers, artifacts, waffle } from "hardhat";
import { Artifact } from "hardhat/types";
import ArgumentsTST from "../../arguments/TST";
import ArgumentsPOP from "../../arguments/POP";
import ArgumentsACDM from "../../arguments/ACDM";
import ArgumentsWETH from "../../arguments/wETH";
import ArgumentsAdapter from "../../arguments/Adapter";
import viewFunctions from "./ADAPTERviewFunctions";
import createFunctions from "./ADAPTERcreateFunctions";

export default describe("Adapter contract testing", async function () {
  before(async function () {
    this.ethers = ethers;
    [this.owner, this.user1, this.user2, this.user3, this.user4] =
      await ethers.getSigners();
    this.argumentsTST = ArgumentsTST;
    this.argumentsPOP = ArgumentsPOP;
    this.argumentsACDM = ArgumentsACDM;
    this.argumentsWETH = ArgumentsWETH;
    this.argumentsAdapter = ArgumentsAdapter;
  });

  beforeEach(async function () {
    const artifactEthToken: Artifact = await artifacts.readArtifact(
      "TokenERC20"
    );
    const artifacAdapter: Artifact = await artifacts.readArtifact(
      "UniswapAdapter"
    );
    this.instanceTST = await waffle.deployContract(
      this.owner,
      artifactEthToken,
      ArgumentsTST
    );
    this.instanceACDM = await waffle.deployContract(
      this.owner,
      artifactEthToken,
      ArgumentsACDM
    );
    this.instancePOP = await waffle.deployContract(
      this.owner,
      artifactEthToken,
      ArgumentsPOP
    );
    this.instanceWETH = await waffle.deployContract(
      this.owner,
      artifactEthToken,
      ArgumentsWETH
    );
    this.instanceAdapter = await waffle.deployContract(
      this.owner,
      artifacAdapter,
      ArgumentsAdapter
    );
  });
  viewFunctions();
  createFunctions();
});
