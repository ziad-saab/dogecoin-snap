import { useState } from 'react';
import { makeTransaction } from '../utils';

export const useSendDoge = () => {
  const [lastTxId, setLastTxId] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const sendDoge = async (data: FormData) => {
    if (isLoading) {
      return;
    }

    try {
      setError(undefined);
      setLastTxId(undefined);
      setIsLoading(true);
      const toAddress = data.get('toAddress');
      const amountInDoge = data.get('amountInDoge');

      if (typeof toAddress === 'string' && typeof amountInDoge === 'string') {
        const response = await makeTransaction({
          toAddress,
          amountInDoge: Number(amountInDoge),
        });
        setLastTxId(response.txId);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === 'string') {
        setError(err);
      } else {
        setError(`An unknown error occurred: ${JSON.stringify(err)}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { lastTxId, isLoading, error, sendDoge };
};
