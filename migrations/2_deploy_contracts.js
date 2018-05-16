var Users = artifacts.require("./Users.sol");
var IPLGame = artifacts.require("./IPLGame.sol");
module.exports = function(deployer) {
  deployer.deploy(Users);
  deployer.deploy(IPLGame);
};
