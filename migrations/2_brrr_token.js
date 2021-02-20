const BrrrToken = artifacts.require("BrrrToken");

module.exports = function (deployer) {
  deployer.deploy(BrrrToken);
};
