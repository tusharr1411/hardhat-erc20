const {network} = require("hardhat");


const { developmentChains,INITIAL_SUPPLY,} = require("../helper-hardhat-config");


const{verifiy} = require("../helper-functions");

module.exports = async({getNamedAccounts,deployments})=>{
    const{deploy,log} = deployments;
    const{deployer} = await getNamedAccounts();
    const myToken = await deploy("MyToken",{
        from:deployer,
        args:[INITIAL_SUPPLY],
        log:true,
        waitConfirmations: network.config.blockConfirmations || 1,// we need to wait if on a live network so we can verify properly
    })

    log(`MyToken is deployed to ${myToken.address}`)

    //etherscan verification of the contract

    // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    //     await verify(MyToken.address, [INITIAL_SUPPLY])
    // }
}