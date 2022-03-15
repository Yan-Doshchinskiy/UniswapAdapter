import { expect } from "chai";

export default (): void => {
  it(`ADAPTER-CREATE: createPair function works correctly`, async function (): Promise<void> {
    const pair = await this.factory.createPair(
      this.instanceTST.address,
      this.instanceACDM.address
    );
    const { events } = await pair.wait();
    const { args } = events.find(({ event }: any) => event === "PairCreated");
    console.log("args", args);
    expect(pair).to.equal(this.argumentsAdapter[0]);
  });
  it(`ADAPTER-CREATE: provideLiquidity function works correctly`, async function (): Promise<void> {
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
    await this.instanceAdapter.provideLiquidity(
      this.instanceTST.address,
      this.instanceACDM.address,
      this.testAmount1,
      this.testAmount2,
      this.testMinAmount1,
      this.testMinAmount2,
      this.owner.address,
      "3600"
    );
  });
  it(`ADAPTER-CREATE: allPairsLength function works correctly`, async function (): Promise<void> {
    const pair = await this.instanceAdapter.allPairsLength();
    console.log("length", pair);
  });
};
