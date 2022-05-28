import {ethers} from "hardhat"

async function main() {

    const Whitelist = await ethers.getContractFactory("Whitelist")

    const deployedContract = await Whitelist.deploy([100])

    await deployedContract.deployed();

    console.log(
        "Whitelist Contract Address:",
        deployedContract.address
      );
}

main()
.then(() => process.exit(0))
.catch((e) => {
    console.error(e);
    process.exit(1)
})