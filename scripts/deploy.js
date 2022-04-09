const hre = require("hardhat");
require("dotenv").config();

async function main() {

    const Rad = await ethers.getContractFactory("ShaolinNetworkPLMasterContract");
    const rad = await Rad.deploy(
        process.env.MY_ACC,
        process.env.Marketing_ACC
    );
    await rad.deployed();

    console.log("rad address > ", rad.address);

    // 0x6D966319E4DaDF85Afc84fb0F2704166f4Cd50dB

}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
