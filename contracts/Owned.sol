pragma solidity ^0.4.23;


contract Owned {
    address public owner;
    constructor () internal {
        owner = msg.sender;
    }

    modifier onlyOwner(address _account) {
        require(msg.sender == _account, "Sender not authorized");
        _;
    }
}