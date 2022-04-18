import { expect } from "chai";
import { BigNumber, Event } from "ethers";
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
    const { events: events1 } = await newPair.wait();
    const { args: args1 } = events1.find(
      (it: Event) => it.event === "PairCreated"
    );
    expect(pair).to.equal(args1.pair);
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
    const { events: events2 } = await tx.wait();
    await expect(
      this.instanceAdapter
        .connect(this.dan)
        .getAmountsOut(this.testAmount1, [
          this.instanceTST.address,
          this.instanceACDM.address,
        ])
    ).to.be.ok;
    await expect(
      this.instanceAdapter
        .connect(this.dan)
        .getAmountsIn(this.testMinAmount1, [
          this.instanceTST.address,
          this.instanceACDM.address,
        ])
    ).to.be.ok;
    const { args } = events2.find(
      ({ event }: { event: any }) => event === "LiquidityProvided"
    );
    const { amountOne, amountTwo, amountLiquidity } = args;
    expect(Number(amountOne)).to.be.lessThanOrEqual(Number(this.testAmount1));
    expect(Number(amountOne)).to.be.greaterThanOrEqual(
      Number(this.testMinAmount1)
    );
    expect(Number(amountTwo)).to.be.lessThanOrEqual(Number(this.testAmount2));
    expect(Number(amountTwo)).to.be.greaterThanOrEqual(
      Number(this.testMinAmount2)
    );
    console.log("args1.pair", args1.pair);
    const pairInstance = await ethers.getContractAt(
      "TokenERC20",
      args1.pair,
      this.owner
    );
    await pairInstance.approve(this.instanceAdapter.address, amountLiquidity);
    const tx2 = await this.instanceAdapter.removeLiquidity(
      this.instanceTST.address,
      this.instanceACDM.address,
      amountLiquidity,
      this.testMinAmount1,
      this.testMinAmount2,
      this.owner.address,
      this.timeLimit
    );
    const { events: events3 } = await tx2.wait();
    const { args: args2 } = events3.find(
      ({ event }: { event: any }) => event === "LiquidityRemoved"
    );
    const {
      amountOne: amountOne2,
      amountTwo: amountTwo2,
      amountLiquidity: amountLiquidity2,
    } = args2;
    console.log("args2", args2);
    // console.log(args2);
    expect(Number(amountOne2)).to.be.greaterThanOrEqual(
      Number(this.testMinAmount1)
    );
    expect(Number(amountTwo2)).to.be.greaterThanOrEqual(
      Number(this.testMinAmount2)
    );
  });
};
