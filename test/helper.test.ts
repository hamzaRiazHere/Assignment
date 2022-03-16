import  { readFile } from '../helper';
import { Stock, Transaction } from '../interfaces';

describe('functions related to helper are being tested with positive and negative testing', () => {
    
    // positive
    test('testing readFile function for stock.json when file exists in data folder and given data is available', ()=>{
        let stocks : Stock[] =  readFile('stock.json') as Stock[];
        expect(stocks[0]).toMatchObject({ 
            sku: expect.any(String),
            stock: expect.any(Number) 
        });
    });

    // positive
    test('testing readFile function for transactions.json when file exists in data folder and given data is available', ()=>{
        let transactions : Transaction[] =  readFile('transactions.json') as Transaction[];
        expect(transactions[0]).toMatchObject({ 
            sku: expect.any(String),
            type: expect.any(String),
            qty: expect.any(Number) 
        });
    });

    // negative
    test('testing readFile function when file does not exists in data folder', ()=>{
        expect(() => readFile('invalid.json')).toThrowError(new Error("error on file read"));
    });
});