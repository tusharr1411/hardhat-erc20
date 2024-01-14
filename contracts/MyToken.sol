//SPDX-License-Identifier: MIT;

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    // initial supply = 100 ( by user)
    // then we will use initialSupply*18e = initialSupply*10**18

    constructor(uint256 initialSupply) ERC20("RANDOM COIN", "RDC") {
        _mint(msg.sender, initialSupply);
    }
}
