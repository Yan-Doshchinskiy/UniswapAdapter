import { expect } from "chai";

export default (): void => {
  it(`ADAPTER-CREATE: createPair function works correctly`, async function (): Promise<void> {
    console.log(this.instanceTST.address, this.instanceACDM.address);
    const pair = await this.instanceAdapter.createPair(
      this.instanceTST.address,
      this.instanceACDM.address
    );
    expect(pair).to.equal(this.argumentsAdapter[0]);
  });
};
