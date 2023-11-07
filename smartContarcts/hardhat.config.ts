import "dotenv/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

import "@nomiclabs/hardhat-ganache";

const accounts = {
  mnemonic:
    "crack knock slow hen earn click solar lady concert casino raccoon embrace",
  accountsBalance: "100000000000000000000",
};

const config = {
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
      accounts,
      chainId: 80001,
      live: true,
      saveDeployments: true,
      from: "0xd0A2A25C75307078493C5097367BD85b0E78b1a4",
      provider: "mumbai",
    },
  },
  namedAccounts: {
    deployer:
      "privatekey://e93710543dba5df16fe284b0e1373e9ab60597b1075d36a76d0e290f64fae03a",
    alice: {
      default: 1,
    },
    bob: {
      default: 2,
    },
    carol: {
      default: 3,
    },
    dev: {
      default: 4,
    },
    feeTo: {
      default: 5,
    },
  },

  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
