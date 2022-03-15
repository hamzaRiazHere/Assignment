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
exports.getTotalTransactionsForSku = void 0;
/**
 * Returns total order quantity for given type and sku.
 * @function getTransactionsByOrderType
 * @param {string} sku sku number for any stock item.
 * @param {Transaction[]} transactions list of transactions.
 * @param {Type} string  order type.
 * @return {Promise<number>} returns Promise of total order quantity with given type and sku.
 */
let getTransactionsByOrderType = (sku, transactions, type) => __awaiter(void 0, void 0, void 0, function* () {
    let totalTransactions = transactions.filter((t) => t.sku === sku && t.type === type);
    let final = totalTransactions.reduce((p, c) => p + c.qty, 0);
    return final;
});
/**
 * Returns total ordered quantity by excluding refunds.
 * @function getTotalTransactionsForSku
 * @param {string} sku sku number for any stock item.
 * @param {Transaction[]} transactions list of transactions.
 * @return {Promise<number>} returns Promise of total ordered quantity by excluding refunds.
 */
let getTotalTransactionsForSku = (sku, transactions) => __awaiter(void 0, void 0, void 0, function* () {
    let orderedTransactionsQty = yield getTransactionsByOrderType(sku, transactions, "order");
    let refundTransactionsQty = yield getTransactionsByOrderType(sku, transactions, "refund");
    return orderedTransactionsQty - refundTransactionsQty;
});
exports.getTotalTransactionsForSku = getTotalTransactionsForSku;
