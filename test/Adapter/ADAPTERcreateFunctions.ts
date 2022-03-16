import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

export default (): void => {
  it(`ADAPTER-CREATE: createPair, allPairsLength and getTokensPair functions works correctly`, async function (): Promise<void> {
    const initLength = await this.instanceAdapter.allPairsLength();
    const newPair = await this.instanceAdapter.createPair(
      this.instanceTST.address,
      this.instanceACDM.address
    );
    const length = await this.instanceAdapter.allPairsLength();
    const pair = await this.instanceAdapter.getTokensPair(
      this.instanceTST.address,
      this.instanceACDM.address
    );
    expect(pair).to.equal(newPair);
    expect(initLength).to.be.equal(BigNumber.from(length).sub(1));
    await this.instanceTST.mint(this.owner.address, this.testAmount1);
    await this.instanceACDM.mint(this.owner.address, this.testAmount2);
    await this.instanceTST.approve(
      this.instanceAdapter.address,
      this.testAmount1
    );
    await this.instanceACDM.approve(
      this.instanceAdapter.address,
      this.testAmount2
    );
    const tx = await this.instanceAdapter.provideLiquidity(
      this.instanceTST.address,
      this.instanceACDM.address,
      this.testAmount1,
      this.testAmount2,
      this.testMinAmount1,
      this.testMinAmount2,
      this.owner.address,
      this.timeLimit
    );
    const { events } = tx.wait();
    await expect(
      await this.instanceAdapter
        .connect(this.dan)
        .getAmountsOut(this.testAmount1, [
          this.instanceTST.address,
          this.instanceACDM.address,
        ])
    ).to.be.ok;
    await expect(
      await this.instanceAdapter
        .connect(this.dan)
        .getAmountsIn(this.testMinAmount1, [
          this.instanceTST.address,
          this.instanceACDM.address,
        ])
    ).to.be.ok;
    const { args } = events.find(
      ({ event }: { event: any }) => event === "LiquidityProvided"
    );
    const { _amountOne, _amountTwo, _liquidityAmount } = args;
    expect(_amountOne).to.be.lessThanOrEqual(this.testAmount1);
    expect(_amountOne).to.be.greaterThanOrEqual(this.testMinAmount1);
    expect(_amountTwo).to.be.lessThanOrEqual(this.testAmount2);
    expect(_amountTwo).to.be.greaterThanOrEqual(this.testMinAmount2);
    console.log("_liquidityAmount", _liquidityAmount);
    const pairInstance = await ethers.getContractAt(
      "TokenERC20",
      newPair,
      this.owner
    );
    await pairInstance.approve(this.instanceAdapter, _liquidityAmount);
    const tx2 = await this.instanceAdapter.removeLiquidity(
      this.instanceTST.address,
      this.instanceACDM.address,
      _liquidityAmount,
      this.testMinAmount1,
      this.testMinAmount2,
      this.owner.address,
      this.timeLimit
    );
    const { events: events2 } = tx2.wait();
    const { args: args2 } = events2.find(
      ({ event }: { event: any }) => event === "LiquidityRemoved"
    );
    const {
      _amountOne: _amountOne2,
      _amountTwo: _amountTwo2,
      liquidityAmount: liquidityAmount2,
    } = args2;
    expect(_amountOne2).to.be.greaterThanOrEqual(this.testMinAmount1);
    expect(_amountTwo2).to.be.greaterThanOrEqual(this.testMinAmount2);
    console.log("liquidityAmount2", liquidityAmount2);
  });
};
