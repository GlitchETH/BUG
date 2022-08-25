import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Glitch',
  tokenName: 'Glitch',
  tokenSymbol: 'GCT',
  hiddenMetadataUri: 'ipfs://QmXWMR2jEeB99VtMgXdYV6BgcYXKyD4mWpne1eVpKQBQkf/Hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0x95941c22b3463fE03A4Bef51D71d7359D2c0F7Ec",
  marketplaceIdentifier: 'Glitch',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
