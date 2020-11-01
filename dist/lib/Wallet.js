"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const Binance_1 = require("../Binance");
class Wallet {
    walletDepositHistory() {
        return this.sendRequest('/wapi/v3/depositHistory.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map