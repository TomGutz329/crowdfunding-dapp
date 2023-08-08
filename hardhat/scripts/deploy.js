const hre = require("hardhat");

async function main() {
	const crowdfundingContract = await hre.ethers.deployContract("Crowdfunding");
	await crowdfundingContract.waitForDeployment();
	console.log(`Contract deployed to: ${crowdfundingContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  })