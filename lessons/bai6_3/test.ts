import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider(
    "https://ethereum-sepolia-rpc.publicnode.com"
  );

  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function ownerOf(uint256 tokenId) view returns (address)",
    "function nextTokenId() view returns (uint256)"
  ];

  const contractAddress = "0x73Deaaf0169Ed656E465c973ec7770b83a653FA4";

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const name = await contract.name();
  const symbol = await contract.symbol();
  const ownerOfToken0 = await contract.ownerOf(0);
  const nextTokenId = await contract.nextTokenId();

  console.log("NFT name:", name);
  console.log("NFT symbol:", symbol);
  console.log("Owner of token 0:", ownerOfToken0);
  console.log("Next token id:", nextTokenId.toString());
}

main().catch(console.error);