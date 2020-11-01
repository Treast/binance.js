"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
const Binance_1 = require("../Binance");
class Market {
    marketTestConnectivity() {
        return this.sendRequest('/api/v3/ping', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketCheckServerTime() {
        return this.sendRequest('/api/v3/time', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketExchangeInformation() {
        return this.sendRequest('/api/v3/exchangeInfo', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketOrderBook(params) {
        return this.sendRequest('/api/v3/depth', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketRecentTradesList(params) {
        return this.sendRequest('/api/v3/trades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketOldTradeLookup(params) {
        return this.sendRequest('/api/v3/historicalTrades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketAggregateTradesList(params) {
        return this.sendRequest('/api/v3/aggTrades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketKlineData(params) {
        return this.sendRequest('/api/v3/klines', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketCurrentAveragePrice(params) {
        return this.sendRequest('/api/v3/avgPrice', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    market24hrTickerPriceChange(params = {}) {
        return this.sendRequest('/api/v3/ticker/24hr', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketSymbolPriceTicker(params = {}) {
        return this.sendRequest('/api/v3/ticker/price', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
    marketSymbolOrderBookTicker(params = {}) {
        return this.sendRequest('/api/v3/ticker/bookTicker', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.MARKET_DATA);
    }
}
exports.Market = Market;
//# sourceMappingURL=Market.js.map