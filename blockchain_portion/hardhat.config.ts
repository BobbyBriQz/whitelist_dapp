import "@nomiclabs/hardhat-waffle";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'/.env' });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.NODE_API_URL,
      accounts: [process.env.API_PRIVATE_KEY],
    },
  },
};
