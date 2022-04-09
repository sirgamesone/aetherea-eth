const SecondContract = artifacts.require("./SecondContract.sol");

module.exports = function (deployer) {
    deployer.deploy(SecondContract);
};
