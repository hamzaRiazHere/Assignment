import { readFile } from '../helper';
import { Stock } from '../interfaces';
import  { getStock } from '../stocks';


let stocks : Stock[] = readFile('stock.json')! as Stock[];

describe('functions related to stocks are being tested with positive and negative testing', () => {
    
    // positive
    test('testing get Stock function when given stock exists', async ()=>{
       
      let item:Stock = await   getStock('ELK743612/34/57', stocks)
      expect( item ).toMatchObject({ sku: "ELK743612/34/57",stock: 6616});

    });

    // negative
    test('testing get Stock function when given stock not exists', async ()=>{

        let item:Stock = await getStock('GKZ200017/86/99', stocks)
        expect( item ).toMatchObject({ sku: "GKZ200017/86/99",stock: 0});

    });
});