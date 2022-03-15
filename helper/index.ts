import { readFileSync } from 'fs';
import { Stock } from '../interfaces/stock';
import { Transaction } from '../interfaces/transaction';


// let data:string = readFileSync(`./../data/stock.json`, 'utf-8');

/**
 * Returns Array.
 * @function readFile
 * @param {string} fileName filename in string.
 * @param {Stock[]} stocks  list of stock available.
 * @return {Array<Stock|Transaction>} returns Array of stocks when fileName is stock.json and Array of Transacktions when file name is transaction.json.
 */

let readFile = (fileName:string):Array<Stock|Transaction> => {
    try{
        let data:string = readFileSync(`./data/${fileName}`, 'utf-8');
        let arr = JSON.parse(data);
        return arr;
    }catch(e){
        throw Error("error on file read");
    }
  
}

export { readFile };