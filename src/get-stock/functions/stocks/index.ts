import { Stock }  from '../../types';


/**
 * Returns Stock item for a given sku.
 * @function getStock
 * @param {string} sku sku number for any stock item.
 * @param {Stock[]} stocks  list of stock available.
 * @return {Promise<{sku:string, qty:number}>} returns Promise of given sku and its available quantity.
 */

let getStock = async (sku:string, stocks:Stock[]): Promise<Stock> => {
    let stockList : Stock [] = stocks.filter((s:Stock)=> s.sku === sku);
    if(!stockList.length){
        // if no stock available for a given sku suppose them with stock 0.
        stockList.push({sku: sku,stock:0});
    }
    return stockList[0];
}


 export  { getStock };


