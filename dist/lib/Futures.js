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
    futuresGetFutureAccountTransactionHistoryList(params) {
        return this.sendRequest('/sapi/v1/futures/transfer', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresBorrowCrossCollateral(params) {
        return this.sendRequest('/sapi/v1/futures/loan/borrow', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    futuresCrossCollateralBorrowHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/borrow/history', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresRepayCrossCollateral(params) {
        return this.sendRequest('/sapi/v1/futures/loan/repay', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    futuresCrossCollateralRepaymentHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/repay/history', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    futuresCrossCollateralWallet(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/wallet', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    futuresCrossCollateralInformation(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/configs', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresCalculateRateAfterAdjustCrossCollateralLTV(params) {
        return this.sendRequest('/sapi/v1/futures/loan/calcAdjustLevel', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    futuresGetMaxAmountAdjustCrossCollateralLTV(params) {
        return this.sendRequest('/sapi/v1/futures/loan/calcMaxAdjustAmount', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    futuresAdjustCrossCollateralLTV(params) {
        return this.sendRequest('/sapi/v1/futures/loan/adjustCollateral', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    futuresAdjustCrossCollateralLTVHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/adjustCollateral/history', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    futuresCrossCollateralLiquidationHistory(params = {}) {
        return this.sendRequest('/sapi/v1/futures/loan/liquidationHistory', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Futures = Futures;
//# sourceMappingURL=Futures.js.map