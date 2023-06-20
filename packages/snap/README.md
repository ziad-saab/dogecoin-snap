# Dogecoin Snap 🐶

This Dogecoin snap was built as a tutorial on how to create a non-EVM chain with [MetaMask Snaps](https://docs.metamask.io/snaps/). For the full information and tutorial, consult the [root README](../../README.md).

## Features

The snap has the following features:

- Generate a single Dogecoin address
- Get the balance for that address
- Get the list of transactions for that address
- Send DOGETEST from that address to another address

## Permissions

The snap requires the following [permissions](https://docs.metamask.io/snaps/reference/permissions/):

- `endowment:network-access` - To connect to the [Tatum Dogecoin API](https://apidoc.tatum.io/tag/Dogecoin/).
- `snap_dialog` - To display a popup requiring the user to confirm a Dogecoin transaction.
- `endowment:rpc` - To allow Dapps to communicate with the snap's RPC API
- `snap_getBip44Entropy` - To derive Testnet private keys from the MetaMask secret recovery phrase

## RPC API

The snap exposes the following [RPC API](./src/rpc.ts):

- `doge_getAddress` - returns the single address of the wallet
- `doge_getTransactions` - returns a list of transactions for the address
- `doge_getBalance` - returns the balance for the address
- `doge_makeTransaction` - accepts a target address and amount in satoshis, and broadcasts a transaction to the network