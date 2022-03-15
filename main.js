"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentSockLevel = void 0;
const transactions_1 = require("./transactions");
const stocks_1 = require("./stocks");
const helper_1 = require("./helper");
let stocks = (0, helper_1.readFile)('stock.json');
let transactions = (0, helper_1.readFile)('transactions.json');
/**
 * Returns current stock available for a given sku.
 * @function getCurrentSockLevel
 * @param {string} sku sku number for any stock item.
 * @return {Promise<{sku:string, qty:number}>} returns Promise of given sku and its available quantity.
 */
let getCurrentSockLevel = (sku) => __awaiter(void 0, void 0, void 0, function* () {
    let initialStock = yield (0, stocks_1.getStock)(sku, stocks);
    console.log("initialStock", initialStock === null || initialStock === void 0 ? void 0 : initialStock.stock);
    let actualOrdered = yield (0, transactions_1.getTotalTransactionsForSku)(sku, transactions);
    if ((initialStock === null || initialStock === void 0 ? void 0 : initialStock.stock) === 0 && actualOrdered === 0) {
        // if stock is not available in stock and transactions throw error
        throw Error('Sku not available in stock and transactions');
    }
    console.log("actualOrdered", actualOrdered);
    let stockLeft = (initialStock === null || initialStock === void 0 ? void 0 : initialStock.stock) - actualOrdered;
    console.log("sockLeft", stockLeft);
    return { sku: sku, qty: stockLeft };
});
exports.getCurrentSockLevel = getCurrentSockLevel;
// calling the getCurrentStockLevel function with given argument and logging output
getCurrentSockLevel(process.argv[2]).then((a) => console.log(a)).catch((e) => console.log("Error", e));
