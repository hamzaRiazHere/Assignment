import { StockQntity } from '../types';
import { getSockLevel } from './../index';

describe('function of main file  is being tested with positive and negative testing', () => {
  // positive
  test('testing getSockLevel function when given sku exists', async () => {
    const stockQnty: StockQntity = await getSockLevel('PRO481716/07/95');
    expect(stockQnty).toMatchObject({
      sku: expect.any(String),
      qty: expect.any(Number),
    });
  });

  // negative
  test('testing getSockLevel function when given sku does not exists in both files', async () => {
    await expect(getSockLevel('PTO48693/09/75')).rejects.toThrowError(
      new Error('Sku not available in stock and transactions')
    );
  });

  test('testing getSockLevel function when given sku does not exists in stocks', async () => {
    const stockQnty: StockQntity = await getSockLevel('BLW357145/52/57');
    expect(stockQnty).toMatchObject({ sku: 'BLW357145/52/57', qty: -96 });
  });
});
