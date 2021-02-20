// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BrrrToken is ERC20 {

    constructor() public ERC20("Brrr Token", "Brrr") {
        _setupDecimals(2);
    }

    function print() public {
        _mint(msg.sender, 10000);
    }

}