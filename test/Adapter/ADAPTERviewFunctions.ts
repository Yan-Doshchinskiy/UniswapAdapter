import { expect } from "chai";

export default (): void => {
  it(`ADAPTER-VIEW: factoryAddress equal to constructor argument`, async function (): Promise<void> {
    const factoryAddress = await this.instanceAdapter.factoryAddress();
    expect(factoryAddress).to.equal(this.argumentsAdapter[0]);
  });
  it(`ERC20-VIEW: routerAddress equal to constructor argument`, async function (): Promise<void> {
    const routerAddress = await this.instanceAdapter.routerAddress();
    expect(routerAddress).to.equal(this.argumentsAdapter[1]);
  });
};
