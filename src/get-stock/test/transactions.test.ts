import { getTransactionsByOrderType, getTotalTransactionsForSku } from '../functions/transactions';
import transactions from './data/transactions.json';


describe('functions related to transactions are being tested with positive and negative testing', () => {
    
    // positive 
    test('testing getTransactionsByOrderType function when given sku exist in transactions list with given type order', async ()=>{
        let sum:Number = await  getTransactionsByOrderType('UTF434696/37/18', transactions,"order");
            expect(sum).toEqual(75);
    });

    // positive
    test('testing getTransactionsByOrderType function when given sku exist in transactions list  with given type refund', async ()=>{
        let sum:Number = await getTransactionsByOrderType('UTF434696/37/18', transactions,"refund");
            expect(sum).toEqual(9);
    });

    // negative
    test('testing getTransactionsByOrderType function when given sku does not exits in transactions list with given order type', async ()=>{
       let sum:Number = await getTransactionsByOrderType('KGD740425/40/67', transactions,"order");
            expect(sum).toEqual(0);
    });
    
    // positive
    test('testing getTotalTransactionsForSku function when given sku, when transactions for that sku exist', async ()=>{
        let remaining:Number = await getTotalTransactionsForSku('UTF434696/37/18', transactions);
        expect(remaining).toEqual(66);
    });

    // negative
    test('testing getTotalTransactionsForSku function when given sku does not exits in transactions list', async ()=>{
        let remaining  = await getTotalTransactionsForSku('ELK733712/04/99', transactions);        
        expect(remaining).toEqual(0);
    });
});