const {expect} = require('chai');
const { ethers } = require('hardhat');
const { BigNumber } = require("@ethersproject/bignumber");
    // Wei convertor
function toWei(n) {
    return ethers.utils.parseEther(n);
}
function fromWei(n) {
    return n.div(BigNumber.from("1000000000000000000"));
}
function BnToString(n) {
    return ethers.utils.formatUnits(n, "ether");
}
function toBN(n) {
return BigNumber.from(n);
}
async function etherBalance(addr) {
    return await ethers.provider.getBalance(addr);
}
describe('Tiger contract: ',async()=>{
    let owner,
    thousandx,
    charity,
    Marketing,Dev,
    Prize,a1,a2,
    a3,a4,a5;
    // const router = '0xD99D1c33F9fC3444f8101754aBC46c52416550D1';

    // Token Name Test 
    describe('Test Name:',()=>{
        it("deploy : ", async ()=>{
            [owner, charity,Marketing,Dev,Prize,a1,a2,a2,a4,a5] = await ethers.getSigners();
            const Thousandx = await ethers.getContractFactory('ShaolinNetworkPLMasterContract');
            thousandx = await Thousandx.deploy(owner.address, Marketing.address);
            await thousandx.deployed(); 
        })
        it('token name:',async ()=>{
            expect( await thousandx.name()).to.eq('Rad token');
        });
        it("Win wallets : ", async ()=>{
            // console.log(charity.address, Marketing.address, Dev.address);
            // await thousandx.setWinWallet(charity.address);
            // await thousandx.setWinWallet(Marketing.address);
            // await thousandx.setWinWallet(Dev.address);
            // await thousandx.setWinWallet(Prize.address);
            const bal = await thousandx.balanceOf(owner.address);
            console.log((BigNumber.from(bal)).toString());
        });
        it("is Win Wallet : ",async ()=>{
            await thousandx.setWinWallet(charity.address,Dev.address,Prize.address);
            expect(await thousandx.isWinWallet(charity.address)).to.eq(true);
            // await thousandx.setWinWallet(a2.address);
            expect(await thousandx.isWinWallet(Dev.address)).to.eq(true);
            // await thousandx.setWinWallet(a3.address);
            expect(await thousandx.isWinWallet(Prize.address)).to.eq(true);
            // await thousandx.setWinWallet(a4.address);
            expect(await thousandx.isWinWallet(Marketing.address)).to.eq(true);
        });
        it("Total Fee : ",async ()=>{
            const fee = await thousandx.totalFees();
            console.log("this is Fee :", (BigNumber.from(fee)).toString());
        });
        it("transfer :", async()=>{
            const bal = await thousandx.balanceOf(owner.address);
            console.log((BigNumber.from(bal)).toString());
            expect(bal).to.eq("100000000000000000000");
            // await thousandx.connect(owner).approve(thousandx.address,"10000000000");
            await thousandx.connect(owner).transfer( a1.address, "10000000000");
            const bal2 = await thousandx.balanceOf(a1.address);
            console.log((BigNumber.from(bal2)).toString());
            const bal3 = await thousandx.balanceOf(Marketing.address);
            console.log((BigNumber.from(bal3)).toString());
            const bal4 = await thousandx.balanceOf(Dev.address);
            console.log((BigNumber.from(bal4)).toString());
            const bal5 = await thousandx.balanceOf(Prize.address);
            console.log((BigNumber.from(bal5)).toString());            
            const bal6 = await thousandx.balanceOf(charity.address);
            console.log((BigNumber.from(bal6)).toString());
            
        });
    });
});

