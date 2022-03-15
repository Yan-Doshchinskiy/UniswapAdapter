import { expect } from "chai";

export default (): void => {
  it(`wETH-VIEW: Name equal to constructor argument`, async function (): Promise<void> {
    const name = await this.instanceWETH.name();
    expect(name).to.equal(this.argumentsWETH[0]);
  });
  it(`wETH-VIEW: Symbol equal to constructor argument`, async function (): Promise<void> {
    const symbol = await this.instanceWETH.symbol();
    expect(symbol).to.equal(this.argumentsWETH[1]);
  });
};
