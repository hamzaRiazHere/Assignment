import { Stock, Transaction }  from './interfaces';
import { getTotalTransactionsForSku } from './transactions';
import  { getStock } from './stocks';
import { readFile } from './helper';
import { StockQntity } from './interfaces/stockQnty';

let stocks : Stock[] = readFile('stock.json')! as Stock[];
let transactions : Transaction[] = readFile('transactions.json')! as Transaction[];

/**
 * Returns current stock available for a given sku.
 * @function getCurrentSockLevel
 * @param {string} sku sku number for any stock item.
 * @return {Promise<StockQntity>} returns Promise of StockQntity of given sku.
 */

let getCurrentSockLevel = async (sku: string):Promise<StockQntity> =>{
    let initialStock = await getStock(sku, stocks);
    console.log("initialStock",initialStock?.stock);
    let actualOrdered = await getTotalTransactionsForSku(sku, transactions);
    if(initialStock?.stock === 0 && actualOrdered === 0){
        // if stock is not available in stock and transactions throw error
        throw Error('Sku not available in stock and transactions');
    }
    console.log("actualOrdered",actualOrdered);
    let stockLeft = initialStock?.stock - actualOrdered;
    console.log("sockLeft",stockLeft);
    return {sku: sku, qty: stockLeft}; 
}

// calling the getCurrentStockLevel function with given argument and logging output
getCurrentSockLevel(process.argv[2]).then((a:StockQntity)=>console.log(a)).catch((e)=> console.log("Error",e));

export { getCurrentSockLevel }
