const { buildModule } = require ("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("RoperzNFTModule", (m) => {
    const nft = m.contract("RoperzNFT", []);
    return { nft };

});