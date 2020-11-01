"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccounts = void 0;
const Binance_1 = require("../Binance");
class SubAccounts {
    subAccountsList() {
        return this.sendRequest('/wapi/v3/sub-account/list.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    subAccountsTransferHistory() {
        return this.sendRequest('/wapi/v3/sub-account/transfer/history.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    subAccountsAssets() {
        return this.sendRequest('/wapi/v3/sub-account/assets.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.SubAccounts = SubAccounts;
//# sourceMappingURL=SubAccount.js.map