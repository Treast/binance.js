"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binance = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const Wallet_1 = __importDefault(require("./lib/Wallet"));
class Binance {
    constructor(apiKey, secretKey, testMode = true) {
        this.getWallet = Wallet_1.default.prototype.getWallet;
        this.apiKey = apiKey;
        this.secretKey = secretKey;
        this.testMode = testMode;
    }
    sendRequest(url, params, method) {
        const body = this.generateBody(params);
        return new Promise((resolve, reject) => {
            node_fetch_1.default(url)
                .then((res) => res.json())
                .then((res) => {
                resolve(res);
            })
                .catch((err) => reject(err));
        });
    }
    generateBody(params) {
        Object.assign(params, { timestamp: Date.now() });
        return (Object.keys(params)
            //@ts-ignore
            .map((key) => `${key}=${params[key]}`)
            .join('&'));
    }
    test() { }
}
exports.Binance = Binance;
(function (Binance) {
    let ERequestMethod;
    (function (ERequestMethod) {
        ERequestMethod["POST"] = "POST";
        ERequestMethod["GET"] = "GET";
        ERequestMethod["PUT"] = "PUT";
        ERequestMethod["DELETE"] = "DELETE";
    })(ERequestMethod = Binance.ERequestMethod || (Binance.ERequestMethod = {}));
})(Binance = exports.Binance || (exports.Binance = {}));
//# sourceMappingURL=Binance.js.map