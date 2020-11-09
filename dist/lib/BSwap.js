"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BSwap = void 0;
const Binance_1 = require("../Binance");
class BSwap {
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapListAllSwapPools() {
        return this.sendRequest('/sapi/v1/bswap/pools', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapGetLiquidityInformationOfPool(params = {}) {
        return this.sendRequest('/sapi/v1/bswap/liquidity', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapAddLiquIBSwapAddLiquidity(params) {
        return this.sendRequest('/sapi/v1/bswap/liquidityAdd', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapRemoveLiquidity(params) {
        return this.sendRequest('/sapi/v1/bswap/liquidityRemove', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapGetLiquidityOperationRecord(params = {}) {
        return this.sendRequest('/sapi/v1/bswap/liquidityOps', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapRequestQuote(params) {
        return this.sendRequest('/sapi/v1/bswap/quote', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapSwap(params) {
        return this.sendRequest('/sapi/v1/bswap/swap', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    bSwapGetSwapHistory(params = {}) {
        return this.sendRequest('/sapi/v1/bswap/swap', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.BSwap = BSwap;
//# sourceMappingURL=BSwap.js.map