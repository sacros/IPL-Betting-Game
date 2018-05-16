pragma solidity ^0.4.23;

import "./Mortal.sol";


contract IPLGame is Mortal {

    // State variables
    uint public currentGame = 1;
    uint public minimumAmount = 1 finney;

    // Mappings
    mapping(uint=>mapping(string=>address[])) predictions;
    mapping(uint=>mapping(address=>uint)) public betAmount;
    mapping(uint=>string) public result;

    // Events
    event Winner(address indexed winner, uint amount);
    event BetPlaced(address indexed bettor, uint indexed matchId, string team, uint amount);
    event ResultSet(uint indexed matchId, string winningTeamId, string losingTeamId);
    event Winners(uint indexed matchId, address[] winners);
    event Losers(uint indexed matchId, address[] losers);

    // Functions
    function makeBet(uint _matchId, string _team, uint _timestamp) public payable {
        require((_timestamp < now), "Can't place bet after allowed time.");
        require((msg.value >= minimumAmount), "Minimum bet of 1 finney can be placed.");
        require(betAmount[_matchId][msg.sender] == 0, "Already placed a bet before");
        predictions[_matchId][_team].push(msg.sender);
        betAmount[_matchId][msg.sender] = msg.value;
        emit BetPlaced(msg.sender, _matchId, _team, msg.value);
    }

    function getPredictions(uint _matchId, string _team) public view returns (address[]) {
        return predictions[_matchId][_team];
    }

    function getPredictionNumber(uint _matchId, string _team) public view returns (uint) {
        return predictions[_matchId][_team].length;
    }

    function setResult(uint _matchId, string _winningTeamId, string _losingTeamId) onlyOwner(owner) public {
        require((_matchId == currentGame), "Only set the results for current game");
        emit ResultSet(_matchId, _winningTeamId, _losingTeamId);
        result[_matchId] = _winningTeamId;
        address[] memory losers = predictions[_matchId][_losingTeamId];
        emit Losers(_matchId, losers);
        uint toDistribute;
        uint total;
        for(uint i = 0; i < losers.length; i++){
            toDistribute += betAmount[_matchId][losers[i]];
        }
        toDistribute = (toDistribute/10)*9;

        address[] memory winners = predictions[_matchId][_winningTeamId];
        emit Winners(_matchId, winners);
        for (i = 0; i < winners.length; i++) {
            total += betAmount[_matchId][winners[i]];
        }
        for (i = 0; i < winners.length; i++) {
            uint transferAmount = ((toDistribute/total)+1)*betAmount[_matchId][winners[i]];
            winners[i].transfer(transferAmount);
            emit Winner(winners[i], transferAmount-betAmount[_matchId][winners[i]]);
        }
        currentGame++;
    }

    function getResult(uint _matchId) public view returns (string) {
        return result[_matchId];
    }

    function playerBalance() public view returns (uint) {
        return msg.sender.balance/(1 finney);
    }

    function getCurrentGame() public view returns (uint) {
        return currentGame;
    }

}