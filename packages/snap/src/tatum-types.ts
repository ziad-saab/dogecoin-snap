export type TatumTransaction = {
  blockNumber: number;
  fee: string;
  hash: string;
  index: number;
  inputs: {
    prevout: {
      hash: string;
      index: number;
    };
    sequence: number;
    script: string;
    coin: {
      version: number;
      height: number;
      value: string;
      script: string;
      address: string;
      coinbase: boolean;
    };
  }[];
  locktime: number;
  outputs: {
    value: string;
    script: string;
    address: string;
  }[];
  size: number;
  time: number;
  version: number;
  vsize: number;
  witnessHash: string;
};

export type TatumUtxo = {
  address: string;
  chain: string;
  index: number;
  txHash: string;
  value: number;
};

export type TatumFees = {
  fast: number;
  medium: number;
  slow: number;
  block: number;
  time: string;
};

export type TatumBalance = {
  incoming: string;
  outgoing: string;
  incomingPending: string;
  outgoingPending: string;
};

export type GetRawTransactionResponse = {
  result: string;
};

export type BroadcastTransactionResponse = {
  txId: string;
};
