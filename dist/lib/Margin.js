"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Margin = void 0;
const Binance_1 = require("../Binance");
class Margin {
    /**
     * Warning: This function hasn't been tested.
     */
    marginCrossMarginAccountTransfer(params) {
        return this.sendRequest('/sapi/v1/margin/transfer', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.MARGIN);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    marginAccountBorrow(params) {
        return this.sendRequest('/sapi/v1/margin/load', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.MARGIN);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    marginAccountRepay(params) {
        return this.sendRequest('/sapi/v1/margin/repay', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.MARGIN);
    }
    marginQueryMarginAsset(params) {
        return this.sendRequest('/sapi/v1/margin/asset', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marginQueryCrossMarginPair(params) {
        return this.sendRequest('/sapi/v1/margin/pair', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marginGetAllCrossMarginAssets(params = {}) {
        return this.sendRequest('/sapi/v1/margin/allAssets', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marginGetAllCrossMarginPairs(params = {}) {
        return this.sendRequest('/sapi/v1/margin/allPairs', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marginQueryMarginPriceIndex(params) {
        return this.sendRequest('/sapi/v1/margin/priceIndex', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    marginAccounNewOrder(params) {
        return this.sendRequest('/sapi/v1/margin/order', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    marginAccounCancelOrder(params) {
        return this.sendRequest('/sapi/v1/margin/order', params, Binance_1.Binance.ERequestMethod.DELETE, Binance_1.Binance.ESecurityType.TRADE);
    }
    marginGetCrossMarginTransferHistory(params = {}) {
        return this.sendRequest('/sapi/v1/margin/transfer', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryLoanRecord(params) {
        return this.sendRequest('/sapi/v1/margin/loan', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryRepayRecord(params) {
        return this.sendRequest('/sapi/v1/margin/repay', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginGetInterestHistory(params) {
        return this.sendRequest('/sapi/v1/margin/interestHistory', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginGetForceLiquidationHistory(params = {}) {
        return this.sendRequest('/sapi/v1/margin/forceLiquidationRec', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryCrossMarginAccountDetails(params = {}) {
        return this.sendRequest('/sapi/v1/margin/account', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    marginQueryMarginAccountOrder(params) {
        return this.sendRequest('/sapi/v1/margin/order', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryMarginAccountOpenOrder(params) {
        return this.sendRequest('/sapi/v1/margin/openOrders', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryMarginAccountAllOrder(params) {
        return this.sendRequest('/sapi/v1/margin/allOrders', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryMarginAccountTradeList(params) {
        return this.sendRequest('/sapi/v1/margin/myTrades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryMaxBorrow(params) {
        return this.sendRequest('/sapi/v1/margin/maxBorrowable', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryMaxTransferOutAmount(params) {
        return this.sendRequest('/sapi/v1/margin/maxTransferable', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    marginCreateIsolatedMarginAccount(params) {
        return this.sendRequest('/sapi/v1/margin/isolated/create', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.MARGIN);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    marginIsolatedMarginAccountTransfer(params) {
        return this.sendRequest('/sapi/v1/margin/isolated/transfer', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.MARGIN);
    }
    marginGetIsolatedMarginTransferHistory(params) {
        return this.sendRequest('/sapi/v1/margin/isolated/transfer', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryIsolatedMarginAccountInfo(params = {}) {
        return this.sendRequest('/sapi/v1/margin/isolated/account', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginQueryIsolatedMarginSymbol(params) {
        return this.sendRequest('/sapi/v1/margin/isolated/pair', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    marginGetAllIsolatedMarginSymbol(params = {}) {
        return this.sendRequest('/sapi/v1/margin/isolated/allPairs', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Margin = Margin;
//# sourceMappingURL=Margin.js.map