// npm install @truffle/hdwallet-provider
// rinkeby - 0xb14D3E37833D548390433f66bD7280B07e608704
// ropsten - 0xCB756340c30212BdbEeD0B641D1ea52f980c7E6b

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      websockets: false
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(`secret`, `wss://rinkeby.infura.io/ws/v3/edb2fc58d2f646da8a958c2d67f812ee`,1),
      network_id: 4,       // Rinkeby's id (my contract - 0x63482Bd7d5A2E1FB24a8C7700e5A187e79FaB6a2)
      gas: 3500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    ropsten: {
      provider: () => new HDWalletProvider(`secret`,0),
      network_id: 3,       // Rinkeby's id (my contract - 0x63482Bd7d5A2E1FB24a8C7700e5A187e79FaB6a2)
      gas: 3500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: { solc: { version: "0.4.24" } }
};