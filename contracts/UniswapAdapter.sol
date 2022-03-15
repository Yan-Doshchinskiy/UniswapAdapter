//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.4;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract UniswapAdapter {
    // interfaces
    using SafeERC20 for IERC20;

    // EVENTS

    /**
     * Emitted when swap was completed
     * @param to - address of receiver of tokens
     * @param addressArray - array of addresses of pairs
     * @param amountsArray -  array of amounts of tokens
     */
    event Swapped(
        address indexed to,
        address[] addressArray,
        uint256[] amountsArray
    );

    /**
     * Emitted when pair was created
     * @param pair -  address of pair
     * @param tokenOne -  address of first token
     * @param tokenTwo -  address of second token
     */
    event PairCreated(
        address indexed pair,
        address tokenOne,
        address tokenTwo
    );

    /**
     * Emitted when liquidity was added.
     * @param to - address
     * @param amountOne - amount of tokenOne added to pool
     * @param amountTwo - amount of tokenTwo added to pool
     * @param amountLiquidity - amount of liquidity tokens to receive
     */
    event LiquidityProvided(
        address indexed to,
        uint256 amountOne,
        uint256 amountTwo,
        uint256 indexed amountLiquidity
    );
    /**
     * This even emiited when liquidity removed.
     * @param to - address
     * @param amountOne - amount of tokenOne to receive
     * @param amountTwo - amount of tokenTwo to receive
     * @param amountLiquidity amount of liquidity tokens that was send.
     */
    event LiquidityRemoved(
        address indexed to,
        uint256 amountOne,
        uint256 amountTwo,
        uint256 indexed amountLiquidity
    );

    // Uniswap factory address
    address public factoryAddress;

    // Uniswap router address
    address public routerAddress;

    /**
     * Constructor
     * @param _factoryAddress - Uniswap factory address
     * @param _routerAddress - Uniswap router address
     */
    constructor(address _factoryAddress, address _routerAddress) {
        factoryAddress = _factoryAddress;
        routerAddress = _routerAddress;
    }

    /**
     * Function that creates new tokens pair
     * @param tokenOne - address of first token
     * @param tokenTwo - address of second token
     * @return pairAddress - address of pair
     */
    function createPair(address tokenOne, address tokenTwo)
    external
    returns (address)
    {
        address pairAddress = IUniswapV2Factory(factoryAddress).createPair(tokenOne, tokenTwo);
        emit PairCreated(pairAddress, tokenOne, tokenTwo);
        return tokenOne;
    }

    /**
     * View function that returns address of tokens pair
     * @param tokenOne - address of first token
     * @param tokenTwo - address of second token
     * @return pairAddress - address of pair
     */
    function getTokensPair(address tokenOne, address tokenTwo)
    external
    view
    returns (address)
    {
        return IUniswapV2Factory(factoryAddress).getPair(tokenOne, tokenTwo);
    }

    /**
     * View function that returns count of all pairs
     * @return count - count of all pairs
     */
    function allPairsLength() external view returns (uint256) {
        return IUniswapV2Factory(factoryAddress).allPairsLength();
    }

    /**
     * Function that adds some tokens in liquidity pool
     * @param tokenOne - address of first token
     * @param tokenTwo - address of second token
     * @param amountOne - amount of tokenOne that you want to add to pool
     * @param amountTwo - amount of tokenTwo that you want to add to pool
     * @param amountMinOne - minimum amount of tokenOne that you want to add to pool
     * @param amountMinTwo - minimum amount of tokenTwo that you want to add to pool
     * @param to - address that gets liquidity tokens of pair
     * @param timeLimit - the time until which this call remains relevant
     * @return _amountOne - amount of tokenOne that was added to pool
     * @return _amountTwo - amount of tokenTwo that was added to pool
     * @return _liquidityAmount - amount of liquidity tokens that was send at "to" address
     */
    function provideLiquidity(
        address tokenOne,
        address tokenTwo,
        uint256 amountOne,
        uint256 amountTwo,
        uint256 amountMinOne,
        uint256 amountMinTwo,
        address to,
        uint256 timeLimit
    )
    external
    returns (
        uint256 _amountOne,
        uint256 _amountTwo,
        uint256 _liquidityAmount
    )
    {
        IERC20(tokenOne).safeTransferFrom(
            msg.sender,
            address(this),
            amountOne
        );
        IERC20(tokenTwo).safeTransferFrom(
            msg.sender,
            address(this),
            amountTwo
        );

        IERC20(tokenOne).approve(address(routerAddress), amountOne);
        IERC20(tokenTwo).approve(address(routerAddress), amountTwo);

        (_amountOne, _amountTwo, _liquidityAmount) = IUniswapV2Router02(routerAddress).addLiquidity(
            tokenOne,
            tokenTwo,
            amountOne,
            amountTwo,
            amountMinOne,
            amountMinTwo,
            to,
            timeLimit
        );

        if (amountOne > _amountOne) {
            IERC20(tokenOne).safeTransfer(msg.sender, amountOne - _amountOne);
        }
        if (amountTwo > _amountTwo) {
            IERC20(tokenTwo).safeTransfer(msg.sender, amountTwo - _amountTwo);
        }

        emit LiquidityProvided(to, _amountOne, _amountTwo, _liquidityAmount);
    }

    /**
     * Function that removes some tokens from liquidity pool
     * @param tokenOne - address of first token
     * @param tokenTwo - address of second token
     * @param liquidityAmount - amount of liquidity token that you want to send
     * @param amountMinOne - minimum amount of tokenOne that you want to get from pool
     * @param amountMinTwo - minimum amount of tokenTwo that you want to get from pool
     * @param to - address at which we will get tokens from pair
     * @param timeLimit - the time until which this call remains relevant
     * @return _amountOne - amount of tokenOne that "to" address gets
     * @return _amountTwo - amount of tokenTwo that "to" address gets
     */
    function removeLiquidity(
        address tokenOne,
        address tokenTwo,
        uint256 liquidityAmount,
        uint256 amountMinOne,
        uint256 amountMinTwo,
        address to,
        uint256 timeLimit
    ) external returns (uint256 _amountOne, uint256 _amountTwo) {
        address pair = (
            IUniswapV2Factory(factoryAddress).getPair(tokenOne, tokenTwo)
        );
        IERC20(pair).safeTransferFrom(
            msg.sender,
            address(this),
            liquidityAmount
        );

        IERC20(pair).approve(address(routerAddress), liquidityAmount);
        (_amountOne, _amountTwo) = IUniswapV2Router02(routerAddress).removeLiquidity(
            tokenOne,
            tokenTwo,
            liquidityAmount,
            amountMinOne,
            amountMinTwo,
            to,
            timeLimit
        );
        emit LiquidityRemoved(to, _amountOne, _amountTwo, liquidityAmount);
    }

    /**
     * Function that swaps amount of tokenOne for some amount of tokenTwo
     * @param amountOne - amount of tokenOne that you want to swap
     * @param amountTwo - amount of tokenTwo that you want to add send out
     * @param addressesPath -  array of addresses of pairs
     * @param to - address which will gets tokens out by swap
     * @param timeLimit - the time until which this call remains relevant
     * @return _amounts array of amounts of tokens
     */
    function swapExactTokensForTokens(
        uint256 amountOne,
        uint256 amountTwo,
        address[] calldata addressesPath,
        address to,
        uint256 timeLimit
    ) external returns (uint256[] memory _amounts) {
        IERC20(addressesPath[0]).safeTransferFrom(msg.sender, address(this), amountOne);
        IERC20(addressesPath[0]).approve(address(routerAddress), amountOne);

        _amounts = IUniswapV2Router02(routerAddress).swapExactTokensForTokens(
            amountOne,
            amountTwo,
            addressesPath,
            to,
            timeLimit
        );
        emit Swapped(to, addressesPath, _amounts);
    }

    /**
     * Function that swaps amount of tokenOne for some amount of tokenTwo
     * @param amountOut - amount of tokenTwo that you want to get
     * @param amountInMax - max amount of tokenOne that you want to send in
     * @param addressesPath -  array of addresses of pairs
     * @param to - address which will gets tokens out by swap
     * @param timeLimit - the time until which this call remains relevant
     * @return _amounts array of amounts of tokens
     */
    function swapTokensForExactTokens(
        uint256 amountOut,
        uint256 amountInMax,
        address[] calldata addressesPath,
        address to,
        uint256 timeLimit
    ) external returns (uint256[] memory _amounts) {
        IERC20(addressesPath[0]).safeTransferFrom(
            msg.sender,
            address(this),
            amountInMax
        );
        IERC20(addressesPath[0]).approve(address(routerAddress), amountInMax);
        _amounts = IUniswapV2Router02(routerAddress).swapTokensForExactTokens(
            amountOut,
            amountInMax,
            addressesPath,
            to,
            timeLimit
        );
        IERC20(addressesPath[0]).safeTransfer(msg.sender, amountInMax - _amounts[0]);
        emit Swapped(to, addressesPath, _amounts);
    }

    /**
     * Returns the maximum output amount of the asset
     * @param amountIn - amount of tokens that we swapping in
     * @param addressesPath -  array of addresses of pairs
     * @return array of amounts of tokens
     */
    function getAmountsOut(uint256 amountIn, address[] calldata addressesPath)
    external
    view
    returns (uint256[] memory)
    {
        return IUniswapV2Router02(routerAddress).getAmountsOut(amountIn, addressesPath);
    }

    /**
     * Returns a required input amount of the asset
     * @param amountOut amount of tokens that we want to receive
     * @param addressesPath -  array of addresses of pairs
     * @return array of amounts of tokens
     */
    function getAmountsIn(uint256 amountOut, address[] calldata addressesPath)
    external
    view
    returns (uint256[] memory)
    {
        return IUniswapV2Router02(routerAddress).getAmountsIn(amountOut, addressesPath);
    }
}
