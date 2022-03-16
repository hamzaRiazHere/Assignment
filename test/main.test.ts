import { Stock, Transaction, StockQntity } from '../interfaces';
import { readFile } from '../helper';
import { getCurrentSockLevel } from '../main';

describe('function of main file  is being tested with positive and negative testing', () => {
   
    // positive
    test('testing getCurrentSockLevel function when given sku exists', async ()=>{ 

       let stockQnty:StockQntity  = await getCurrentSockLevel('PRO481716/07/95');
       expect(stockQnty).toMatchObject({sku: expect.any(String) ,  qty: expect.any(Number)});

    });

    // negative
    test('testing getCurrentSockLevel function when given sku does not existsin both files', async ()=>{ 
          await   expect(getCurrentSockLevel('PTO48693/09/75')).rejects
                  .toThrowError(new Error("Sku not available in stock and transactions"));
     });
});