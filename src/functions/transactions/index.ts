import { Transaction }  from './../../types';


/**
 * Returns total order quantity for given type and sku.
 * @function getTransactionsByOrderType
 * @param {string} sku sku number for any stock item.
 * @param {Transaction[]} transactions list of transactions.
 * @param {Type} string  order type.
 * @return {Promise<number>} returns Promise of total order quantity with given type and sku.
 */

let getTransactionsByOrderType =  async (sku:string, transactions:Transaction[], type:string):Promise<number> => {
    let  totalTransactions =  transactions.filter((t:Transaction) => t.sku === sku && t.type === type);
    let sum = totalTransactions.reduce((p:number,c:Transaction) => p+c.qty  ,0);
    return sum;
}


/**
 * Returns total ordered quantity by excluding refunds.
 * @function getTotalTransactionsForSku
 * @param {string} sku sku number for any stock item.
 * @param {Transaction[]} transactions list of transactions.
 * @return {Promise<number>} returns Promise of total ordered quantity by excluding refunds.
 */

let getTotalTransactionsForSku = async (sku:string,transactions:Transaction[]): Promise<number> =>{
    let orderedTransactionsQty = await getTransactionsByOrderType(sku,transactions,"order");
    let refundTransactionsQty = await getTransactionsByOrderType(sku,transactions,"refund");
    return orderedTransactionsQty-refundTransactionsQty;
}

export  {  getTransactionsByOrderType, getTotalTransactionsForSku }