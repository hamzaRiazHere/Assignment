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
exports.getStock = void 0;
/**
 * Returns Stock item for a given sku.
 * @function getStock
 * @param {string} sku sku number for any stock item.
 * @param {Stock[]} stocks  list of stock available.
 * @return {Promise<{sku:string, qty:number}>} returns Promise of given sku and its available quantity.
 */
let getStock = (sku, stocks) => __awaiter(void 0, void 0, void 0, function* () {
    let stockList = stocks.filter((s) => s.sku === sku);
    if (!stockList.length) {
        // if no stock available for a given sku suppose them with stock 0.
        stockList.push({ sku: sku, stock: 0 });
    }
    return stockList[0];
});
exports.getStock = getStock;
