"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const Binance_1 = require("../Binance");
class Wallet {
    walletDepositHistory(params = {}) {
        return this.sendRequest('/wapi/v3/depositHistory.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletWithdrawHistory(params = {}) {
        return this.sendRequest('/wapi/v3/withdrawHistory.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletDepositAddress(params) {
        return this.sendRequest('/wapi/v3/depositAddress.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletAccountStatus(params = {}) {
        return this.sendRequest('/wapi/v3/accountStatus.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletSystemStatus() {
        return this.sendRequest('/wapi/v3/systemStatus.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletApiTradingStatus(params = {}) {
        return this.sendRequest('/wapi/v3/apiTradingStatus.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletDustLog(params = {}) {
        return this.sendRequest('/wapi/v3/userAssetDribbletLog.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletTradeFee(params = {}) {
        return this.sendRequest('/wapi/v3/tradeFee.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletAssetDetail(params = {}) {
        return this.sendRequest('/wapi/v3/assetDetail.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletAllCoins(params = {}) {
        return this.sendRequest('/sapi/v1/capital/config/getall', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletDailyAccountSnapshot(params) {
        return this.sendRequest('/sapi/v1/accountSnapshot', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    walletAssetDividend(params = {}) {
        return this.sendRequest('/sapi/v1/asset/assetDividend', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map