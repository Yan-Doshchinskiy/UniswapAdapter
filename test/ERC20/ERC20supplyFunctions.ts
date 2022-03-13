import { expect } from "chai";
import { BigNumber } from "ethers";

export default (): void => {
  it(`ERC20-SUPPLY: mint function works correctly (completed)`, async function (): Promise<void> {
    await this.instance
      .connect(this.user1)
      .mint(this.user1.address, this.testMintAmount);
    const balance = await this.instance.balanceOf(this.user1.address);
    expect(balance).to.be.equal(this.testMintAmount);
  });
  it(`ERC20-SUPPLY: burn function works correctly (completed)`, async function (): Promise<void> {
    await this.instance
      .connect(this.user1)
      .mint(this.user1.address, this.testMintAmount);
    const oldBalance = await this.instance.balanceOf(this.user1.address);
    await this.instance
      .connect(this.user1)
      .burn(this.user1.address, this.testBurnAmount);
    const balance = await this.instance.balanceOf(this.user1.address);
    const expectedBalance = BigNumber.from(oldBalance).sub(this.testBurnAmount);
    expect(balance).to.be.equal(expectedBalance);
  });
};
