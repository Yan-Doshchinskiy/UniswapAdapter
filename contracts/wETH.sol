//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract wEth is ERC20, Ownable {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    }

    function deposit(address _to, uint256 _amount) external payable {
        require(_amount <= msg.value, "wETH: Not enough eth");
        _mint(_to, _amount);
        if (_amount < msg.value) {
            (bool done, ) = payable(msg.sender).call{value: msg.value - _amount}("");
            require(done, "wETH: Deposit transaction failed");
        }
    }

    function withdraw(uint256 _amount) public {
        _burn(msg.sender, _amount);
        (bool success,) = payable(msg.sender).call{value: _amount}("");
        require(success, "wETH: Withdraw transaction failed");
    }

    function transfer(address _to, uint256 _amount)
    override
    public
    returns (bool)
    {
        return super.transfer(_to, _amount);
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _amount
    ) public override returns (bool) {
        if (_from == msg.sender) {
            return super.transfer(_to, _amount);
        }
        require(
            allowance(_from, msg.sender) >= _amount,
            "wETH: amount exceeds allowance"
        );
        return super.transferFrom(_from, _to, _amount);
    }
}
