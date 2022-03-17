import { Transaction } from '../types';

/**
 * Returns total order quantity for given type and sku.
 * @function getTransactionsByOrderType
 * @param {string} sku sku number for any stock item.
 * @param {Transaction[]} transactions list of transactions.
 * @param {Type} string  order type.
 * @return {Promise<number>} returns Promise of total order quantity with given type and sku.
 */

const getTransactionsByType = async (
  sku: string,
  transactions: Transaction[],
  type: string
): Promise<number> => {
  const total = transactions.filter(
    (t: Transaction) => t.sku === sku && t.type === type
  );
  const sum = total.reduce((p: number, c: Transaction) => p + c.qty, 0);
  return sum;
};

/**
 * Returns total ordered quantity by excluding refunds.
 * @function getTotalTransactionsForSku
 * @param {string} sku sku number for any stock item.
 * @param {Transaction[]} transactions list of transactions.
 * @return {Promise<number>} returns Promise of total ordered quantity by excluding refunds.
 */

const getTotalTransactionsForSku = async (
  sku: string,
  transactions: Transaction[]
): Promise<number> => {
  const orderedQty = await getTransactionsByType(sku, transactions, 'order');
  const refundQty = await getTransactionsByType(sku, transactions, 'refund');
  return orderedQty - refundQty;
};

export { getTransactionsByType, getTotalTransactionsForSku };
