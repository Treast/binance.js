"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mining = void 0;
const Binance_1 = require("../Binance");
class Mining {
    miningAcquiringAlgorithm() {
        return this.sendRequest('/sapi/v1/mining/pub/algoList', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    miningAcquiringCoinName() {
        return this.sendRequest('/sapi/v1/mining/pub/coinList', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    miningRequestDetailMinerList(params) {
        return this.sendRequest('/sapi/v1/mining/worker/detail', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    miningRequestMinerList(params) {
        return this.sendRequest('/sapi/v1/mining/worker/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    miningRevenueList(params) {
        return this.sendRequest('/sapi/v1/mining/payment/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    miningStatisticList(params) {
        return this.sendRequest('/sapi/v1/mining/statistics/user/status', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    miningAccountList(params) {
        return this.sendRequest('/sapi/v1/mining/statistics/user/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Mining = Mining;
//# sourceMappingURL=Mining.js.map