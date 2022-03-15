import { expect } from "chai";
import { BigNumber } from "ethers";

export default (): void => {
  it(`wETH-DEPOSIT: deposit function works correctly (completed)`, async function (): Promise<void> {
    const balance1 = await this.instanceWETH.balanceOf(this.owner.address);
    expect(balance1).to.be.equal(0);
    await expect(
      await this.instanceWETH.deposit(this.owner.address, this.testMintAmount, {
        value: this.testMintAmount,
      })
    ).changeEtherBalance(
      this.owner,
      BigNumber.from(this.testMintAmount).mul(-1)
    );
    const balance2 = await this.instanceWETH.balanceOf(this.owner.address);
    expect(balance2).to.be.equal(this.testMintAmount);
  });
  it(`wETH-DEPOSIT: deposit function works correctly (completed when msg.value more then amount argument)`, async function (): Promise<void> {
    const balance1 = await this.instanceWETH.balanceOf(this.owner.address);
    expect(balance1).to.be.equal(0);
    await expect(
      await this.instanceWETH.deposit(this.owner.address, this.testMintAmount, {
        value: this.testMintAmount2,
      })
    ).changeEtherBalance(
      this.owner,
      BigNumber.from(this.testMintAmount).mul(-1)
    );
    const balance2 = await this.instanceWETH.balanceOf(this.owner.address);
    expect(balance2).to.be.equal(this.testMintAmount);
  });
  it(`wETH-DEPOSIT: deposit function works correctly (reverted with: "wETH: Not enough eth")`, async function (): Promise<void> {
    await expect(
      this.instanceWETH.deposit(this.owner.address, this.testMintAmount)
    ).revertedWith("wETH: Not enough eth");
  });
  it(`wETH-DEPOSIT: withdraw function works correctly (completed)`, async function (): Promise<void> {
    const balance1 = await this.instanceWETH.balanceOf(this.owner.address);
    expect(balance1).to.be.equal(0);
    await expect(
      await this.instanceWETH.deposit(this.owner.address, this.testMintAmount, {
        value: this.testMintAmount,
      })
    ).changeEtherBalance(
      this.owner,
      BigNumber.from(this.testMintAmount).mul(-1)
    );
    const balance2 = await this.instanceWETH.balanceOf(this.owner.address);
    expect(balance2).to.be.equal(this.testMintAmount);
    await expect(await this.instanceWETH.withdraw(this.testBurnAmount)).to.be
      .ok;
    const balance3 = await this.instanceWETH.balanceOf(this.owner.address);
    const expectedBalance3 = BigNumber.from(balance2).sub(this.testBurnAmount);
    expect(balance3).to.be.equal(expectedBalance3);
  });
};
