import { expect } from "chai";
import { BigNumber } from "ethers";

export default (): void => {
  it(`wETH-TRANSFER: transfer function works correctly (completed)`, async function (): Promise<void> {
    await this.instanceWETH.deposit(this.owner.address, this.testMintAmount2, {
      value: this.testMintAmount2,
    });
    const recipientBalance1 = await this.instanceWETH.balanceOf(
      this.user1.address
    );
    expect(recipientBalance1).to.be.equal(0);
    const balance1 = await this.instanceWETH.balanceOf(this.owner.address);
    await this.instanceWETH.transfer(this.user1.address, this.testMintAmount);
    const balance2 = await this.instanceWETH.balanceOf(this.owner.address);
    const expected2 = BigNumber.from(balance1).sub(this.testMintAmount);
    const recipientBalance2 = await this.instanceWETH.balanceOf(
      this.user1.address
    );
    expect(balance2).to.be.equal(expected2);
    expect(recipientBalance2).to.be.equal(this.testMintAmount);
  });
  it(`wETH-TRANSFER: transferFrom function works correctly (completed)`, async function (): Promise<void> {
    await this.instanceWETH.deposit(this.user1.address, this.testMintAmount2, {
      value: this.testMintAmount2,
    });
    const recipientBalance1 = await this.instanceWETH.balanceOf(
      this.user2.address
    );
    expect(recipientBalance1).to.be.equal(0);
    const balance1 = await this.instanceWETH.balanceOf(this.user1.address);
    await this.instanceWETH
      .connect(this.user1)
      .approve(this.owner.address, this.testMintAmount);
    await this.instanceWETH
      .connect(this.owner)
      .transferFrom(
        this.user1.address,
        this.user2.address,
        this.testMintAmount
      );
    const balance2 = await this.instanceWETH.balanceOf(this.user1.address);
    const expected2 = BigNumber.from(balance1).sub(this.testMintAmount);
    const recipientBalance2 = await this.instanceWETH.balanceOf(
      this.user2.address
    );
    expect(balance2).to.be.equal(expected2);
    expect(recipientBalance2).to.be.equal(this.testMintAmount);
  });
  it(`wETH-TRANSFER: transferFrom function works correctly (reverted with: "wETH: amount exceeds allowance")`, async function (): Promise<void> {
    await expect(
      this.instanceWETH
        .connect(this.owner)
        .transferFrom(
          this.user1.address,
          this.user2.address,
          this.testMintAmount
        )
    ).revertedWith("wETH: amount exceeds allowance");
  });
  it(`wETH-TRANSFER: transferFrom function works correctly (completed if msg.sender use self address)`, async function (): Promise<void> {
    await this.instanceWETH.deposit(this.user1.address, this.testMintAmount2, {
      value: this.testMintAmount2,
    });
    const recipientBalance1 = await this.instanceWETH.balanceOf(
      this.user2.address
    );
    expect(recipientBalance1).to.be.equal(0);
    const balance1 = await this.instanceWETH.balanceOf(this.user1.address);
    await this.instanceWETH
      .connect(this.user1)
      .transferFrom(
        this.user1.address,
        this.user2.address,
        this.testMintAmount
      );
    const balance2 = await this.instanceWETH.balanceOf(this.user1.address);
    const expected2 = BigNumber.from(balance1).sub(this.testMintAmount);
    const recipientBalance2 = await this.instanceWETH.balanceOf(
      this.user2.address
    );
    expect(balance2).to.be.equal(expected2);
    expect(recipientBalance2).to.be.equal(this.testMintAmount);
  });
};
