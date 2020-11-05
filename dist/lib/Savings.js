"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Savings = void 0;
const Binance_1 = require("../Binance");
class Savings {
    savingsGetFlexibleProductList(params = {}) {
        return this.sendRequest('/sapi/v1/lending/daily/product/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetLeftDailyPurchaseQuotaFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/userLeftQuota', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    savingsPurchaseFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/purchase', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetLeftDailyRedemptionQuotaFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/userRedemptionQuota', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    savingsRedeemFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/redeem', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetFlexibleProductPosition(params) {
        return this.sendRequest('/sapi/v1/lending/daily/token/position', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetFixedActivityProjectList(params) {
        return this.sendRequest('/sapi/v1/lending/project/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    savingsPurchaseFixedActivityProject(params) {
        return this.sendRequest('/sapi/v1/lending/customizedFixed/purchase', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetFixedActivityProjectPosition(params) {
        return this.sendRequest('/sapi/v1/lending/project/position/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsLendingAccount(params = {}) {
        return this.sendRequest('/sapi/v1/lending/union/account', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetPurchaseRecord(params) {
        return this.sendRequest('/sapi/v1/lending/union/purchaseRecord', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetRedemptionRecord(params) {
        return this.sendRequest('/sapi/v1/lending/union/redemptionRecord', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetInterestHistory(params) {
        return this.sendRequest('/sapi/v1/lending/union/interestHistory', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    savingsChangeFixedActivityPositionToDailyPosition(params) {
        return this.sendRequest('/sapi/v1/lending/positionChanged', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Savings = Savings;
//# sourceMappingURL=Savings.js.map