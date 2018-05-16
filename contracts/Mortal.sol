pragma solidity ^0.4.23;
import "./Owned.sol";


contract Mortal is Owned {
    function kill() public onlyOwner(owner) {
        selfdestruct(owner);
    }
}