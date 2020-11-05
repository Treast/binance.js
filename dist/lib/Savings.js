"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESavingsSortBy = exports.ESavingsType = exports.ESavingsStatus = exports.Savings = void 0;
const Binance_1 = require("../Binance");
class Savings {
    savingsGetFlexibleProductList(params) {
        return this.sendRequest('/sapi/v1/lending/daily/product/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetLeftDailyPurchaseQuotaFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/userLeftQuota', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsPurchaseFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/purchase', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetLeftDailyRedemptionQuotaFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/userRedemptionQuota', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsRedeemFlexibleProduct(params) {
        return this.sendRequest('/sapi/v1/lending/daily/redeem', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetFlexibleProductPosition(params) {
        return this.sendRequest('/sapi/v1/lending/daily/token/position', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetFixedActivityProjectList(params) {
        return this.sendRequest('/sapi/v1/lending/project/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsPurchaseFixedActivityProject(params) {
        return this.sendRequest('/sapi/v1/lending/customizedFixed/purchase', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsGetFixedActivityProjectPosition(params) {
        return this.sendRequest('/sapi/v1/lending/project/position/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    savingsLendingAccount(params) {
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
    savingsChangeFixedActivityPositionToDailyPosition(params) {
        return this.sendRequest('/sapi/v1/lending/positionChanged', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Savings = Savings;
var ESavingsStatus;
(function (ESavingsStatus) {
    ESavingsStatus["ALL"] = "ALL";
    ESavingsStatus["SUBSCRIBABLE"] = "SUBSCRIBABLE";
    ESavingsStatus["UNSUBSCRIBABLE"] = "UNSUBSCRIBABLE";
})(ESavingsStatus = exports.ESavingsStatus || (exports.ESavingsStatus = {}));
var ESavingsType;
(function (ESavingsType) {
    ESavingsType["FAST"] = "FAST";
    ESavingsType["NORMAL"] = "NORMAL";
})(ESavingsType = exports.ESavingsType || (exports.ESavingsType = {}));
var ESavingsSortBy;
(function (ESavingsSortBy) {
    ESavingsSortBy["START_TIME"] = "START_TIME";
    ESavingsSortBy["LOT_SIZE"] = "LOT_SIZE";
    ESavingsSortBy["INTEREST_RATE"] = "INTEREST_RATE";
    ESavingsSortBy["DURATION"] = "DURATION";
})(ESavingsSortBy = exports.ESavingsSortBy || (exports.ESavingsSortBy = {}));
//# sourceMappingURL=Savings.js.map