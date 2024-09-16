import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_RPC_URL ? process.env.MAINNET_RPC_URL : "",
        blockNumber: 14390000,
      },
      chainId: 1,
    },
  },
};

export default config;
