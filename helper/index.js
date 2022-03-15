"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const fs_1 = require("fs");
// let data:string = readFileSync(`./../data/stock.json`, 'utf-8');
/**
 * Returns Array.
 * @function readFile
 * @param {string} fileName filename in string.
 * @param {Stock[]} stocks  list of stock available.
 * @return {Array<Stock|Transaction>} returns Array of stocks when fileName is stock.json and Array of Transacktions when file name is transaction.json.
 */
let readFile = (fileName) => {
    try {
        let data = (0, fs_1.readFileSync)(`./data/${fileName}`, 'utf-8');
        let arr = JSON.parse(data);
        return arr;
    }
    catch (e) {
        throw Error("error on file read");
    }
};
exports.readFile = readFile;
