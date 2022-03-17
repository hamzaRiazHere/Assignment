import {
  getTransactionsByType,
  getTotalTransactionsForSku,
} from '../functions/transactions';
import transactions from './data/transactions-mock.json';

describe('functions related to transactions are being tested with positive and negative testing', () => {
  // positive
  test('testing getTransactionsByType function when given sku exist in transactions list with given type order', async () => {
    const sum: number = await getTransactionsByType(
      'UTF434696/37/18',
      transactions,
      'order'
    );
    expect(sum).toEqual(66);
  });

  // positive
  test('testing getTransactionsByType function when given sku exist in transactions list  with given type refund', async () => {
    const sum: number = await getTransactionsByType(
      'UTF434696/37/18',
      transactions,
      'refund'
    );
    expect(sum).toEqual(9);
  });

  // negative
  test('testing getTransactionsByType function when given sku does not exits in transactions list with given order type', async () => {
    const sum: number = await getTransactionsByType(
      'KGD740425/40/67',
      transactions,
      'order'
    );
    expect(sum).toEqual(0);
  });

  // positive
  test('testing getTotalTransactionsForSku function when given sku, when transactions for that sku exist', async () => {
    const remaining: number = await getTotalTransactionsForSku(
      'UTF434696/37/18',
      transactions
    );
    expect(remaining).toEqual(57);
  });

  // negative
  test('testing getTotalTransactionsForSku function when given sku does not exits in transactions list', async () => {
    const remaining: number = await getTotalTransactionsForSku(
      'ELK733712/04/99',
      transactions
    );
    expect(remaining).toEqual(0);
  });
});
