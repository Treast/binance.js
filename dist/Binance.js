"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binance = void 0;
const fetch = require("node-fetch");
const hmacSHA256 = require("crypto-js/hmac-sha256");
const Wallet_1 = require("./lib/Wallet");
const Market_1 = require("./lib/Market");
var Binance;
(function (Binance) {
    class Api {
        constructor(apiKey, secretKey, testMode = true) {
            this.baseUrlApiLive = 'https://api.binance.com';
            this.baseUrlApiTest = 'https://testnet.binance.vision';
            this.securityTypeRequiringSignature = [ESecurityType.TRADE, ESecurityType.USER_DATA, ESecurityType.MARGIN];
            this.walletSystemStatus = Wallet_1.Wallet.prototype.walletSystemStatus;
            this.walletDepositHistory = Wallet_1.Wallet.prototype.walletDepositHistory;
            this.walletAccountStatus = Wallet_1.Wallet.prototype.walletAccountStatus;
            this.walletApiTradingStatus = Wallet_1.Wallet.prototype.walletApiTradingStatus;
            this.walletAssetDetail = Wallet_1.Wallet.prototype.walletAssetDetail;
            this.walletDailyAccountSnapshot = Wallet_1.Wallet.prototype.walletDailyAccountSnapshot;
            this.walletAllCoins = Wallet_1.Wallet.prototype.walletAllCoins;
            this.marketOrderBook = Market_1.Market.prototype.marketOrderBook;
            if (!apiKey)
                throw new Error('A valid API key is required');
            if (!secretKey)
                throw new Error('A valid secret key is required');
            this.apiKey = apiKey;
            this.secretKey = secretKey;
            this.testMode = testMode;
        }
        sendRequest(url, params, method, securityType) {
            const baseUrl = this.testMode ? this.baseUrlApiTest : this.baseUrlApiLive;
            let populatedParams = Object.assign({ timestamp: Date.now() }, params);
            let signature = null;
            const headers = this.defineSecurityType(securityType);
            const query = this.generateQuery(populatedParams);
            if (this.securityTypeRequiringSignature.includes(securityType)) {
                signature = hmacSHA256(query, this.secretKey).toString();
                populatedParams = Object.assign(Object.assign({}, populatedParams), { signature });
            }
            if (method === ERequestMethod.GET) {
                url += `?${this.generateQuery(populatedParams)}`;
                populatedParams = {};
            }
            return new Promise((resolve, reject) => {
                fetch(`${baseUrl}${url}`, {
                    method,
                    headers,
                    body: ERequestMethod.GET ? null : JSON.stringify(populatedParams),
                })
                    .then((res) => {
                    if (res.status === 404)
                        throw new Error('Endpoint not found');
                    if (res.status === 401)
                        throw new Error('Forbidden access');
                    return res.json();
                })
                    .then((res) => {
                    resolve(res);
                })
                    .catch((err) => reject(err));
            });
        }
        generateQuery(params) {
            return (Object.keys(params)
                //@ts-ignore
                .map((key) => `${key}=${params[key]}`)
                .join('&'));
        }
        defineSecurityType(securityType) {
            let headers = {};
            if (securityType !== ESecurityType.NONE) {
                headers['X-MBX-APIKEY'] = this.apiKey;
            }
            return headers;
        }
    }
    Binance.Api = Api;
    let ERequestMethod;
    (function (ERequestMethod) {
        ERequestMethod["POST"] = "POST";
        ERequestMethod["GET"] = "GET";
        ERequestMethod["PUT"] = "PUT";
        ERequestMethod["DELETE"] = "DELETE";
    })(ERequestMethod = Binance.ERequestMethod || (Binance.ERequestMethod = {}));
    let ESecurityType;
    (function (ESecurityType) {
        ESecurityType["NONE"] = "NONE";
        ESecurityType["TRADE"] = "TRADE";
        ESecurityType["USER_DATA"] = "USER_DATA";
        ESecurityType["MARGIN"] = "MARGIN";
        ESecurityType["USER_STREAM"] = "USER_STREAM";
        ESecurityType["MARKET_DATA"] = "MARKET_DATA";
    })(ESecurityType = Binance.ESecurityType || (Binance.ESecurityType = {}));
})(Binance = exports.Binance || (exports.Binance = {}));
//# sourceMappingURL=Binance.js.map