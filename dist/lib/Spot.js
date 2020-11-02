"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spot = void 0;
const Binance_1 = require("../Binance");
class Spot {
    spotTestNewOrder(params) {
        return this.sendRequest('/api/v3/order/test', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    spotNewOrder(params) {
        return this.sendRequest('/api/v3/order', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    spotCancelOrder(params) {
        return this.sendRequest('/api/v3/order', params, Binance_1.Binance.ERequestMethod.DELETE, Binance_1.Binance.ESecurityType.TRADE);
    }
    spotCancelAllOrdersOnSymbol(params) {
        return this.sendRequest('/api/v3/openOrders', params, Binance_1.Binance.ERequestMethod.DELETE, Binance_1.Binance.ESecurityType.TRADE);
    }
    spotQueryOrder(params) {
        return this.sendRequest('/api/v3/order', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    spotCurrentOpenOrders(params) {
        return this.sendRequest('/api/v3/openOrders', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    spotAllOrders(params) {
        return this.sendRequest('/api/v3/allOrders', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    spotNewOCO(params) {
        return this.sendRequest('/api/v3/order/oco', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.TRADE);
    }
    spotCancelOCO(params) {
        return this.sendRequest('/api/v3/orderList', params, Binance_1.Binance.ERequestMethod.DELETE, Binance_1.Binance.ESecurityType.TRADE);
    }
    spotQueryOCO(params) {
        return this.sendRequest('/api/v3/orderList', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    spotQueryAllOCO(params = {}) {
        return this.sendRequest('/api/v3/allOrderList', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    spotQueryOpenOCO(params = {}) {
        return this.sendRequest('/api/v3/openOrderList', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    spotAccountInformation(params = {}) {
        return this.sendRequest('/api/v3/account', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    spotAccountTradeList(params) {
        return this.sendRequest('/api/v3/myTrades', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Spot = Spot;
//# sourceMappingURL=Spot.js.map