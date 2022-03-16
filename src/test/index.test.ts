import {  StockQntity } from '../types';
import { getCurrentSockLevel } from '../get-stock';

describe('function of main file  is being tested with positive and negative testing', () => {
   
    // positive
    test('testing getCurrentSockLevel function when given sku exists', async ()=>{ 

       let stockQnty:StockQntity  = await getCurrentSockLevel('PRO481716/07/95');
       expect(stockQnty).toMatchObject({sku: expect.any(String) ,  qty: expect.any(Number)});

    });

    // negative
    test('testing getCurrentSockLevel function when given sku does not exists in both files', async ()=>{ 
          await   expect(getCurrentSockLevel('PTO48693/09/75')).rejects
                  .toThrowError(new Error("Sku not available in stock and transactions"));
     });


     test('testing getCurrentSockLevel function when given sku does not exists in stocks', async ()=>{ 
        let stockQnty:StockQntity  = await getCurrentSockLevel('BLW357145/52/57');
        expect(stockQnty).toMatchObject({ sku:'BLW357145/52/57', qty: -96})
    });
});