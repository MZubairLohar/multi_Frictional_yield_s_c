const hre = require("hardhat");
require("dotenv").config();

async function main() {

    const SNPL1 = await ethers.getContractFactory("SNPL1");
    const sNPL1 = await SNPL1.deploy();
    await sNPL1.deployed();

    const SNPL2 = await ethers.getContractFactory("SNPL2");
    const sNPL2 = await SNPL2.deploy();
    await sNPL2.deployed();

    const SNPL3 = await ethers.getContractFactory("SNPL3");
    const sNPL3 = await SNPL3.deploy();
    await sNPL3.deployed();

    const SNPL4 = await ethers.getContractFactory("SNPL4");
    const sNPL4 = await SNPL4.deploy();
    await sNPL4.deployed();

    console.log("SNPL1 address > ", sNPL1.address);
    console.log("SNPL2 address > ", sNPL2.address);
    console.log("SNPL3 address > ", sNPL3.address);
    console.log("SNPL4 address > ", sNPL4.address);

    // SNPL1 address >  0x73d1c47A9dA96B1B88573103776702b56e3EAdF1
    // SNPL2 address > 0x3694b61e20D0Ba91d55E0d1DAfFF1eeEb889403f
    // SNPL3 address > 0x031f694D8992a04793c1fDE31f6f0e5D93DD5bed
    // SNPL4 address > 0x48f9448e880365e990598C5E3248F645e529E21F

    // SNPL1 address > 0xA2a882C5971dA2a0E181df2C1Fd5C941539C388c
    // SNPL2 address > 0x48Bfa0DcC6604b813621BACC04841536931D3EdA
    // SNPL3 address > 0x5538D9Cb72333edD92Ea32d3e3bF81f038f898C1
    // SNPL4 address > 0x6d8404bFA29b6a6A76B34EdfE5a15D02384cf428

}



main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
