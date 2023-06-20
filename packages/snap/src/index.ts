import { OnRpcRequestHandler } from '@metamask/snaps-types';
import {
  getAddress,
  getBalance,
  getTransactions,
  makeTransaction,
} from './rpc';
import { assertIsMakeTransactionParams } from './types';

export * from './rpc-types';

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  switch (request.method) {
    case 'doge_getAddress':
      return getAddress();

    case 'doge_getTransactions':
      return getTransactions();

    case 'doge_getBalance':
      return getBalance();

    case 'doge_makeTransaction':
      assertIsMakeTransactionParams(request.params);
      return makeTransaction(request.params);

    default:
      throw new Error('Method not found.');
  }
};
