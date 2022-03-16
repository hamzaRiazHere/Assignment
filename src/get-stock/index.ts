import { getTotalTransactionsForSku } from './functions/transactions';
import { getStock } from './functions/stocks';
import { Stock, StockQntity }  from './types';
import stocks from '../data/stock.json';
import transactions from '../data/transactions.json';

/**
 * Returns current stock available for a given sku.
 * @function getCurrentSockLevel
 * @param {string} sku sku number for any stock item.
 * @return {Promise<StockQntity>} returns Promise of StockQntity of given sku.
 */

let getCurrentSockLevel = async function getCurrentSockLevel (sku: string):Promise<StockQntity> {
    let initialStock:Stock = await getStock(sku, stocks);
    console.log("initialStock",initialStock.stock);
    let actualOrdered:number = await getTotalTransactionsForSku(sku, transactions);
    if(initialStock.stock === 0 && actualOrdered === 0){
        // if stock is not available in stock and transactions throw error
        throw Error('Sku not available in stock and transactions');
    }
    console.log("actualOrdered",actualOrdered);
    let stockLeft = initialStock.stock - actualOrdered;
    console.log("sockLeft",stockLeft);
    return {sku: sku, qty: stockLeft}; 
};



// calling the getCurrentStockLevel function with given arguments
getCurrentSockLevel(process.argv[2]).catch((e)=> console.log("Error",e));
export { getCurrentSockLevel }
