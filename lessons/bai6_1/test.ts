import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://ethereum-sepolia-rpc.publicnode.com"
  );

  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address account) view returns (uint256)"
  ];

  const contractAddress = "0x85474eA4b3adCdD62FE7deD33e3fE2A7090FFf62";

  // Địa chỉ ví deployer của bạn
  const deployerAddress = "0x436b5c8283B968438fFE45e37e62A66d3bF00def";

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const name = await contract.name();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();
  const totalSupply = await contract.totalSupply();
  const balance = await contract.balanceOf(deployerAddress);

  console.log("Token name:", name);
  console.log("Token symbol:", symbol);
  console.log("Decimals:", decimals.toString());
  console.log("Total supply:", ethers.formatUnits(totalSupply, decimals));
  console.log("Deployer balance:", ethers.formatUnits(balance, decimals));
}

main().catch(console.error);