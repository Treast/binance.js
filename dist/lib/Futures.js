"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Futures = void 0;
const Binance_1 = require("../Binance");
class Futures {
    /**
     * Warning: This function hasn't been tested.
     */
    futuresNewFutureAccountTransfer(params) {
        return this.sendRequest('/sapi/v1/futures/transfer', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.FUTURES);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresGetFutureAccountTransactionHistoryList(params) {
        return this.sendRequest('/sapi/v1/futures/transfer', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresBorrowCrossCollateral(params) {
        return this.sendRequest('/sapi/v1/futures/loan/borrow', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresCrossCollateralBorrowHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/borrow/history', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresRepayCrossCollateral(params) {
        return this.sendRequest('/sapi/v1/futures/loan/repay', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresCrossCollateralRepaymentHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/repay/history', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresCrossCollateralWallet(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/wallet', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresCrossCollateralInformation(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/configs', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresCalculateRateAfterAdjustCrossCollateralLTV(params) {
        return this.sendRequest('/sapi/v1/futures/loan/calcAdjustLevel', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresGetMaxAmountAdjustCrossCollateralLTV(params) {
        return this.sendRequest('/sapi/v1/futures/loan/calcMaxAdjustAmount', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresAdjustCrossCollateralLTV(params) {
        return this.sendRequest('/sapi/v1/futures/loan/adjustCollateral', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresAdjustCrossCollateralLTVHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/adjustCollateral/history', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresCrossCollateralLiquidationHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/liquidationHistory', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Futures = Futures;
//# sourceMappingURL=Futures.js.map