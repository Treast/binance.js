"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLVT = void 0;
const Binance_1 = require("../Binance");
class BLVT {
    /**
     * Warning: This function hasn't been tested.
     */
    blvtGetBLVTInfo(params = {}) {
        return this.sendRequest('/sapi/v1/blvt/tokenInfo', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    blvtSubscribeBLVT(params) {
        return this.sendRequest('/sapi/v1/blvt/subscribe', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    blvtQuerySubscriptionRecord(params = {}) {
        return this.sendRequest('/sapi/v1/blvt/subscribe/record', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    blvtRedeemBLVT(params) {
        return this.sendRequest('/sapi/v1/blvt/redeem', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    blvtQueryRedemptionRecord(params) {
        return this.sendRequest('/sapi/v1/blvt/redeem/record', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.BLVT = BLVT;
//# sourceMappingURL=BLVT.js.map