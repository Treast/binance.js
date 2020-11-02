"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binance = void 0;
const fetch = require("node-fetch");
const hmacSHA256 = require("crypto-js/hmac-sha256");
const Wallet_1 = require("./lib/Wallet");
const Market_1 = require("./lib/Market");
const Spot_1 = require("./lib/Spot");
var Binance;
(function (Binance) {
    class Api {
        constructor(apiKey, secretKey, testMode = true) {
            this.baseUrlApiLive = 'https://api.binance.com';
            this.baseUrlApiTest = 'https://testnet.binance.vision';
            this.securityTypeRequiringSignature = [ESecurityType.TRADE, ESecurityType.USER_DATA, ESecurityType.MARGIN];
            /** Wallet endpoints */
            this.walletDepositHistory = Wallet_1.Wallet.prototype.walletDepositHistory;
            this.walletWithdrawHistory = Wallet_1.Wallet.prototype.walletWithdrawHistory;
            this.walletDepositAddress = Wallet_1.Wallet.prototype.walletDepositAddress;
            this.walletAccountStatus = Wallet_1.Wallet.prototype.walletAccountStatus;
            this.walletSystemStatus = Wallet_1.Wallet.prototype.walletSystemStatus;
            this.walletApiTradingStatus = Wallet_1.Wallet.prototype.walletApiTradingStatus;
            this.walletDustLog = Wallet_1.Wallet.prototype.walletDustLog;
            this.walletDustTransfer = Wallet_1.Wallet.prototype.walletDustTransfer;
            this.walletTradeFee = Wallet_1.Wallet.prototype.walletTradeFee;
            this.walletAssetDetail = Wallet_1.Wallet.prototype.walletAssetDetail;
            this.walletAllCoins = Wallet_1.Wallet.prototype.walletAllCoins;
            this.walletDailyAccountSnapshot = Wallet_1.Wallet.prototype.walletDailyAccountSnapshot;
            this.walletAssetDividend = Wallet_1.Wallet.prototype.walletAssetDividend;
            this.walletWithdraw = Wallet_1.Wallet.prototype.walletWithdraw;
            this.walletDisableFastWithdrawSwitch = Wallet_1.Wallet.prototype.walletDisableFastWithdrawSwitch;
            this.walletEnableFastWithdrawSwitch = Wallet_1.Wallet.prototype.walletEnableFastWithdrawSwitch;
            /** Market endpoints */
            this.marketTestConnectivity = Market_1.Market.prototype.marketTestConnectivity;
            this.marketCheckServerTime = Market_1.Market.prototype.marketCheckServerTime;
            this.marketExchangeInformation = Market_1.Market.prototype.marketExchangeInformation;
            this.marketOrderBook = Market_1.Market.prototype.marketOrderBook;
            this.marketRecentTradesList = Market_1.Market.prototype.marketRecentTradesList;
            this.marketOldTradeLookup = Market_1.Market.prototype.marketOldTradeLookup;
            this.marketAggregateTradesList = Market_1.Market.prototype.marketAggregateTradesList;
            this.marketKlineData = Market_1.Market.prototype.marketKlineData;
            this.marketCurrentAveragePrice = Market_1.Market.prototype.marketCurrentAveragePrice;
            this.market24hrTickerPriceChange = Market_1.Market.prototype.market24hrTickerPriceChange;
            this.marketSymbolPriceTicker = Market_1.Market.prototype.marketSymbolPriceTicker;
            this.marketSymbolOrderBookTicker = Market_1.Market.prototype.marketSymbolOrderBookTicker;
            /** Spot endpoints */
            this.spotTestNewOrder = Spot_1.Spot.prototype.spotTestNewOrder;
            this.spotNewOrder = Spot_1.Spot.prototype.spotNewOrder;
            this.spotCancelOrder = Spot_1.Spot.prototype.spotCancelOrder;
            this.spotCancelAllOrdersOnSymbol = Spot_1.Spot.prototype.spotCancelAllOrdersOnSymbol;
            this.spotQueryOrder = Spot_1.Spot.prototype.spotQueryOrder;
            this.spotCurrentOpenOrders = Spot_1.Spot.prototype.spotCurrentOpenOrders;
            this.spotAllOrders = Spot_1.Spot.prototype.spotAllOrders;
            this.spotNewOCO = Spot_1.Spot.prototype.spotNewOCO;
            this.spotCancelOCO = Spot_1.Spot.prototype.spotCancelOCO;
            this.spotQueryOCO = Spot_1.Spot.prototype.spotQueryOCO;
            this.spotQueryAllOCO = Spot_1.Spot.prototype.spotQueryAllOCO;
            this.spotQueryOpenOCO = Spot_1.Spot.prototype.spotQueryOpenOCO;
            this.spotAccountInformation = Spot_1.Spot.prototype.spotAccountInformation;
            this.spotAccountTradeList = Spot_1.Spot.prototype.spotAccountTradeList;
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
    let EOrderType;
    (function (EOrderType) {
        EOrderType["LIMIT"] = "LIMIT";
        EOrderType["MARKET"] = "MARKET";
        EOrderType["STOP_LOSS"] = "STOP_LOSS";
        EOrderType["STOP_LOSS_LIMIT"] = "STOP_LOSS_LIMIT";
        EOrderType["TAKE_PROFIT"] = "TAKE_PROFIT";
        EOrderType["TAKE_PROFIT_LIMIT"] = "TAKE_PROFIT_LIMIT";
        EOrderType["LIMIT_MAKER"] = "LIMIT_MAKER";
    })(EOrderType = Binance.EOrderType || (Binance.EOrderType = {}));
    let EOrderSide;
    (function (EOrderSide) {
        EOrderSide["BUY"] = "BUY";
        EOrderSide["SELL"] = "SELL";
    })(EOrderSide = Binance.EOrderSide || (Binance.EOrderSide = {}));
    let EOrderResponseType;
    (function (EOrderResponseType) {
        EOrderResponseType["ACK"] = "ACK";
        EOrderResponseType["RESULT"] = "RESULT";
        EOrderResponseType["FULL"] = "FULL";
    })(EOrderResponseType = Binance.EOrderResponseType || (Binance.EOrderResponseType = {}));
    let EOrderTimeInForce;
    (function (EOrderTimeInForce) {
        EOrderTimeInForce["GTC"] = "GTC";
        EOrderTimeInForce["IOC"] = "IOC";
        EOrderTimeInForce["FOK"] = "FOK";
    })(EOrderTimeInForce = Binance.EOrderTimeInForce || (Binance.EOrderTimeInForce = {}));
    let EOrderStatus;
    (function (EOrderStatus) {
        EOrderStatus["NEW"] = "NEW";
        EOrderStatus["PARTIALLY_FILLED"] = "PARTIALLY_FILLED";
        EOrderStatus["FILLED"] = "FILLED";
        EOrderStatus["CANCELED"] = "CANCELED";
        EOrderStatus["PENDING_CANCEL"] = "PENDING_CANCEL";
        EOrderStatus["REJECTED"] = "REJECTED";
        EOrderStatus["EXPIRED"] = "EXPIRED";
    })(EOrderStatus = Binance.EOrderStatus || (Binance.EOrderStatus = {}));
})(Binance = exports.Binance || (exports.Binance = {}));
//# sourceMappingURL=Binance.js.map