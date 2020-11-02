"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
const Binance_1 = require("../Binance");
class Market {
    marketTestConnectivity() {
        return this.sendRequest('/api/v3/ping', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketCheckServerTime() {
        return this.sendRequest('/api/v3/time', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketExchangeInformation() {
        return this.sendRequest('/api/v3/exchangeInfo', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketOrderBook(params) {
        return this.sendRequest('/api/v3/depth', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketRecentTradesList(params) {
        return this.sendRequest('/api/v3/trades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketOldTradeLookup(params) {
        return this.sendRequest('/api/v3/historicalTrades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketAggregateTradesList(params) {
        return this.sendRequest('/api/v3/aggTrades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketKlineData(params) {
        return this.sendRequest('/api/v3/klines', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketCurrentAveragePrice(params) {
        return this.sendRequest('/api/v3/avgPrice', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    market24hrTickerPriceChange(params = {}) {
        return this.sendRequest('/api/v3/ticker/24hr', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketSymbolPriceTicker(params = {}) {
        return this.sendRequest('/api/v3/ticker/price', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
    marketSymbolOrderBookTicker(params = {}) {
        return this.sendRequest('/api/v3/ticker/bookTicker', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA, true);
    }
}
exports.Market = Market;
//# sourceMappingURL=Market.js.map