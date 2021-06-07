"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binance = void 0;
require('isomorphic-fetch');
const hmacSHA256 = require("crypto-js/hmac-sha256");
const WebSocket = require("ws");
const Wallet_1 = require("./lib/Wallet");
const Market_1 = require("./lib/Market");
const Spot_1 = require("./lib/Spot");
const Margin_1 = require("./lib/Margin");
const Stream_1 = require("./lib/Stream");
const Savings_1 = require("./lib/Savings");
const Mining_1 = require("./lib/Mining");
const Futures_1 = require("./lib/Futures");
const BLVT_1 = require("./lib/BLVT");
const BSwap_1 = require("./lib/BSwap");
const SubAccount_1 = require("./lib/SubAccount");
var Binance;
(function (Binance) {
    class Api {
        constructor(apiKey, secretKey, testMode = true) {
            this.baseUrlApiLive = 'https://api.binance.com';
            this.baseUrlApiTest = 'https://testnet.binance.vision';
            this.baseUrlStream = 'wss://stream.binance.com:9443';
            this.streams = new Map();
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
            /** Margin endpoints */
            this.marginCrossMarginAccountTransfer = Margin_1.Margin.prototype.marginCrossMarginAccountTransfer;
            this.marginAccountBorrow = Margin_1.Margin.prototype.marginAccountBorrow;
            this.marginAccountRepay = Margin_1.Margin.prototype.marginAccountRepay;
            this.marginQueryMarginAsset = Margin_1.Margin.prototype.marginQueryMarginAsset;
            this.marginQueryCrossMarginPair = Margin_1.Margin.prototype.marginQueryCrossMarginPair;
            this.marginGetAllCrossMarginAssets = Margin_1.Margin.prototype.marginGetAllCrossMarginAssets;
            this.marginGetAllCrossMarginPairs = Margin_1.Margin.prototype.marginGetAllCrossMarginPairs;
            this.marginQueryMarginPriceIndex = Margin_1.Margin.prototype.marginQueryMarginPriceIndex;
            this.marginAccounNewOrder = Margin_1.Margin.prototype.marginAccounNewOrder;
            this.marginAccounCancelOrder = Margin_1.Margin.prototype.marginAccounCancelOrder;
            this.marginGetCrossMarginTransferHistory = Margin_1.Margin.prototype.marginGetCrossMarginTransferHistory;
            this.marginQueryLoanRecord = Margin_1.Margin.prototype.marginQueryLoanRecord;
            this.marginQueryRepayRecord = Margin_1.Margin.prototype.marginQueryRepayRecord;
            this.marginGetInterestHistory = Margin_1.Margin.prototype.marginGetInterestHistory;
            this.marginGetForceLiquidationHistory = Margin_1.Margin.prototype.marginGetForceLiquidationHistory;
            this.marginQueryCrossMarginAccountDetails = Margin_1.Margin.prototype.marginQueryCrossMarginAccountDetails;
            this.marginQueryMarginAccountOrder = Margin_1.Margin.prototype.marginQueryMarginAccountOrder;
            this.marginQueryMarginAccountOpenOrder = Margin_1.Margin.prototype.marginQueryMarginAccountOpenOrder;
            this.marginQueryMarginAccountAllOrder = Margin_1.Margin.prototype.marginQueryMarginAccountAllOrder;
            this.marginQueryMarginAccountTradeList = Margin_1.Margin.prototype.marginQueryMarginAccountTradeList;
            this.marginQueryMaxBorrow = Margin_1.Margin.prototype.marginQueryMaxBorrow;
            this.marginQueryMaxTransferOutAmount = Margin_1.Margin.prototype.marginQueryMaxTransferOutAmount;
            this.marginCreateIsolatedMarginAccount = Margin_1.Margin.prototype.marginCreateIsolatedMarginAccount;
            this.marginIsolatedMarginAccountTransfer = Margin_1.Margin.prototype.marginIsolatedMarginAccountTransfer;
            this.marginGetIsolatedMarginTransferHistory = Margin_1.Margin.prototype.marginGetIsolatedMarginTransferHistory;
            this.marginQueryIsolatedMarginAccountInfo = Margin_1.Margin.prototype.marginQueryIsolatedMarginAccountInfo;
            this.marginQueryIsolatedMarginSymbol = Margin_1.Margin.prototype.marginQueryIsolatedMarginSymbol;
            this.marginGetAllIsolatedMarginSymbol = Margin_1.Margin.prototype.marginGetAllIsolatedMarginSymbol;
            /** Streams */
            this.streamAggregateTrade = Stream_1.Stream.prototype.streamAggregateTrade;
            this.streamTrade = Stream_1.Stream.prototype.streamTrade;
            this.streamCandlestick = Stream_1.Stream.prototype.streamCandlestick;
            this.streamIndividualSymbolMiniTicker = Stream_1.Stream.prototype.streamIndividualSymbolMiniTicker;
            this.streamAllMarketMiniTickers = Stream_1.Stream.prototype.streamAllMarketMiniTickers;
            this.streamIndividualSymbolTicker = Stream_1.Stream.prototype.streamIndividualSymbolTicker;
            this.streamAllMarketTickers = Stream_1.Stream.prototype.streamAllMarketTickers;
            this.streamIndividualSymbolBookTicker = Stream_1.Stream.prototype.streamIndividualSymbolBookTicker;
            this.streamAllBookTickers = Stream_1.Stream.prototype.streamAllBookTickers;
            this.streamPartialBookDepth = Stream_1.Stream.prototype.streamPartialBookDepth;
            /** Savings endpoints */
            this.savingsGetFlexibleProductList = Savings_1.Savings.prototype.savingsGetFlexibleProductList;
            this.savingsGetLeftDailyPurchaseQuotaFlexibleProduct = Savings_1.Savings.prototype.savingsGetLeftDailyPurchaseQuotaFlexibleProduct;
            this.savingsPurchaseFlexibleProduct = Savings_1.Savings.prototype.savingsPurchaseFlexibleProduct;
            this.savingsGetLeftDailyRedemptionQuotaFlexibleProduct = Savings_1.Savings.prototype.savingsGetLeftDailyRedemptionQuotaFlexibleProduct;
            this.savingsRedeemFlexibleProduct = Savings_1.Savings.prototype.savingsRedeemFlexibleProduct;
            this.savingsGetFlexibleProductPosition = Savings_1.Savings.prototype.savingsGetFlexibleProductPosition;
            this.savingsGetFixedActivityProjectList = Savings_1.Savings.prototype.savingsGetFixedActivityProjectList;
            this.savingsPurchaseFixedActivityProject = Savings_1.Savings.prototype.savingsPurchaseFixedActivityProject;
            this.savingsGetFixedActivityProjectPosition = Savings_1.Savings.prototype.savingsGetFixedActivityProjectPosition;
            this.savingsLendingAccount = Savings_1.Savings.prototype.savingsLendingAccount;
            this.savingsGetPurchaseRecord = Savings_1.Savings.prototype.savingsGetPurchaseRecord;
            this.savingsGetRedemptionRecord = Savings_1.Savings.prototype.savingsGetRedemptionRecord;
            this.savingsGetInterestHistory = Savings_1.Savings.prototype.savingsGetInterestHistory;
            this.savingsChangeFixedActivityPositionToDailyPosition = Savings_1.Savings.prototype.savingsChangeFixedActivityPositionToDailyPosition;
            /** Mining endpoints */
            this.miningAcquiringAlgorithm = Mining_1.Mining.prototype.miningAcquiringAlgorithm;
            this.miningAcquiringCoinName = Mining_1.Mining.prototype.miningAcquiringCoinName;
            this.miningRequestDetailMinerList = Mining_1.Mining.prototype.miningRequestDetailMinerList;
            this.miningRequestMinerList = Mining_1.Mining.prototype.miningRequestMinerList;
            this.miningRevenueList = Mining_1.Mining.prototype.miningRevenueList;
            this.miningStatisticList = Mining_1.Mining.prototype.miningStatisticList;
            this.miningAccountList = Mining_1.Mining.prototype.miningAccountList;
            /** Futures endpoints */
            this.futuresNewFutureAccountTransfer = Futures_1.Futures.prototype.futuresNewFutureAccountTransfer;
            this.futuresGetFutureAccountTransactionHistoryList = Futures_1.Futures.prototype.futuresGetFutureAccountTransactionHistoryList;
            this.futuresBorrowCrossCollateral = Futures_1.Futures.prototype.futuresBorrowCrossCollateral;
            this.futuresCrossCollateralBorrowHistory = Futures_1.Futures.prototype.futuresCrossCollateralBorrowHistory;
            this.futuresRepayCrossCollateral = Futures_1.Futures.prototype.futuresRepayCrossCollateral;
            this.futuresCrossCollateralRepaymentHistory = Futures_1.Futures.prototype.futuresCrossCollateralRepaymentHistory;
            this.futuresCrossCollateralWallet = Futures_1.Futures.prototype.futuresCrossCollateralWallet;
            this.futuresCrossCollateralInformation = Futures_1.Futures.prototype.futuresCrossCollateralInformation;
            this.futuresCalculateRateAfterAdjustCrossCollateralLTV = Futures_1.Futures.prototype.futuresCalculateRateAfterAdjustCrossCollateralLTV;
            this.futuresGetMaxAmountAdjustCrossCollateralLTV = Futures_1.Futures.prototype.futuresGetMaxAmountAdjustCrossCollateralLTV;
            this.futuresAdjustCrossCollateralLTV = Futures_1.Futures.prototype.futuresAdjustCrossCollateralLTV;
            this.futuresAdjustCrossCollateralLTVHistory = Futures_1.Futures.prototype.futuresAdjustCrossCollateralLTVHistory;
            this.futuresCrossCollateralLiquidationHistory = Futures_1.Futures.prototype.futuresCrossCollateralLiquidationHistory;
            /** BLVT endpoints */
            this.blvtGetBLVTInfo = BLVT_1.BLVT.prototype.blvtGetBLVTInfo;
            this.blvtSubscribeBLVT = BLVT_1.BLVT.prototype.blvtSubscribeBLVT;
            this.blvtQuerySubscriptionRecord = BLVT_1.BLVT.prototype.blvtQuerySubscriptionRecord;
            this.blvtRedeemBLVT = BLVT_1.BLVT.prototype.blvtRedeemBLVT;
            this.blvtQueryRedemptionRecord = BLVT_1.BLVT.prototype.blvtQueryRedemptionRecord;
            /** BSwap endpoints */
            this.bSwapListAllSwapPools = BSwap_1.BSwap.prototype.bSwapListAllSwapPools;
            this.bSwapGetLiquidityInformationOfPool = BSwap_1.BSwap.prototype.bSwapGetLiquidityInformationOfPool;
            this.bSwapAddLiquIBSwapAddLiquidity = BSwap_1.BSwap.prototype.bSwapAddLiquIBSwapAddLiquidity;
            this.bSwapRemoveLiquidity = BSwap_1.BSwap.prototype.bSwapRemoveLiquidity;
            this.bSwapGetLiquidityOperationRecord = BSwap_1.BSwap.prototype.bSwapGetLiquidityOperationRecord;
            this.bSwapRequestQuote = BSwap_1.BSwap.prototype.bSwapRequestQuote;
            this.bSwapSwap = BSwap_1.BSwap.prototype.bSwapSwap;
            this.bSwapGetSwapHistory = BSwap_1.BSwap.prototype.bSwapGetSwapHistory;
            /** SubAccounts endpoints */
            this.subAccountsList = SubAccount_1.SubAccounts.prototype.subAccountsList;
            this.subAccountsTransferHistory = SubAccount_1.SubAccounts.prototype.subAccountsTransferHistory;
            this.subAccountsAssets = SubAccount_1.SubAccounts.prototype.subAccountsAssets;
            this.subAccountsCreateVirtualSubAccount = SubAccount_1.SubAccounts.prototype.subAccountsCreateVirtualSubAccount;
            this.subAccountsQuerySubAccountListSAPI = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountListSAPI;
            this.subAccountsQuerySubAccountList = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountList;
            this.subAccountsQuerySubAccountSpotAssetTransferHistory = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountSpotAssetTransferHistory;
            this.subAccountsQuerySubAccountSpotAssetTransferHistorySAPI = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountSpotAssetTransferHistorySAPI;
            this.subAccountsSubAccountSpotAssetTransfer = SubAccount_1.SubAccounts.prototype.subAccountsSubAccountSpotAssetTransfer;
            this.subAccountsQuerySubAccountFuturesAssetTransferHistory = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountFuturesAssetTransferHistory;
            this.subAccountsSubAccountFuturesAssetTransfer = SubAccount_1.SubAccounts.prototype.subAccountsSubAccountFuturesAssetTransfer;
            this.subAccountsQuerySubAccountsAssets = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountsAssets;
            this.subAccountsQuerySubAccountsAssetsSAPI = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountsAssetsSAPI;
            this.subAccountsQuerySubAccountSpotAssetsSummary = SubAccount_1.SubAccounts.prototype.subAccountsQuerySubAccountSpotAssetsSummary;
            this.subAccountsGetSubAccountDepositAddress = SubAccount_1.SubAccounts.prototype.subAccountsGetSubAccountDepositAddress;
            this.subAccountsGetSubAccountDepositHistory = SubAccount_1.SubAccounts.prototype.subAccountsGetSubAccountDepositHistory;
            this.subAccountsGetSubAccountStatusMarginFutures = SubAccount_1.SubAccounts.prototype.subAccountsGetSubAccountStatusMarginFutures;
            this.subAccountsEnableMarginSubAccount = SubAccount_1.SubAccounts.prototype.subAccountsEnableMarginSubAccount;
            this.subAccountsGetDetailSubAccountMarginAccount = SubAccount_1.SubAccounts.prototype.subAccountsGetDetailSubAccountMarginAccount;
            this.subAccountsGetSummarySubAccountMarginAccount = SubAccount_1.SubAccounts.prototype.subAccountsGetSummarySubAccountMarginAccount;
            this.subAccountsEnableFuturesSubAccount = SubAccount_1.SubAccounts.prototype.subAccountsEnableFuturesSubAccount;
            this.subAccountsGetDetailSubAccountFuturesAccount = SubAccount_1.SubAccounts.prototype.subAccountsGetDetailSubAccountFuturesAccount;
            this.subAccountsGetSummarySubAccountFuturesAccount = SubAccount_1.SubAccounts.prototype.subAccountsGetSummarySubAccountFuturesAccount;
            this.subAccountsGetFuturesPositionRiskSubAccount = SubAccount_1.SubAccounts.prototype.subAccountsGetFuturesPositionRiskSubAccount;
            this.subAccountsFuturesTransferSubAccount = SubAccount_1.SubAccounts.prototype.subAccountsFuturesTransferSubAccount;
            this.subAccountsMarginTransferSubAccount = SubAccount_1.SubAccounts.prototype.subAccountsMarginTransferSubAccount;
            this.subAccountsTransferSubAccountSameMaster = SubAccount_1.SubAccounts.prototype.subAccountsTransferSubAccountSameMaster;
            this.subAccountsTransferToMaster = SubAccount_1.SubAccounts.prototype.subAccountsTransferToMaster;
            this.subAccountsSubAccountTransferHistory = SubAccount_1.SubAccounts.prototype.subAccountsSubAccountTransferHistory;
            this.subAccountsUniversalTransfer = SubAccount_1.SubAccounts.prototype.subAccountsUniversalTransfer;
            this.subAccountsQueryUniversalTransferHistory = SubAccount_1.SubAccounts.prototype.subAccountsQueryUniversalTransferHistory;
            this.subAccountsGetDetailSubAccountFuturesAccountV2 = SubAccount_1.SubAccounts.prototype.subAccountsGetDetailSubAccountFuturesAccountV2;
            this.subAccountsGetSummarySubAccountFuturesAccountV2 = SubAccount_1.SubAccounts.prototype.subAccountsGetSummarySubAccountFuturesAccountV2;
            this.subAccountsGetFuturesPositionRiskSubAccountV2 = SubAccount_1.SubAccounts.prototype.subAccountsGetFuturesPositionRiskSubAccountV2;
            this.subAccountsEnableLeverageTokenSubAccount = SubAccount_1.SubAccounts.prototype.subAccountsEnableLeverageTokenSubAccount;
            if (!apiKey)
                throw new Error('A valid API key is required');
            if (!secretKey)
                throw new Error('A valid secret key is required');
            this.apiKey = apiKey;
            this.secretKey = secretKey;
            this.testMode = testMode;
        }
        sendRequest(url, params, method, securityType, preventTimestamp = false) {
            const baseUrl = this.testMode ? this.baseUrlApiTest : this.baseUrlApiLive;
            let populatedParams;
            if (preventTimestamp) {
                populatedParams = Object.assign({}, params);
            }
            else {
                populatedParams = Object.assign({ timestamp: Date.now() }, params);
            }
            let signature = null;
            const headers = this.defineSecurityType(securityType);
            const query = this.generateQuery(populatedParams);
            if (this.securityTypeRequiringSignature.includes(securityType)) {
                signature = hmacSHA256(query, this.secretKey).toString();
                populatedParams = Object.assign(Object.assign({}, populatedParams), { signature });
            }
            return new Promise((resolve, reject) => {
                fetch(`${baseUrl}${url}?${this.generateQuery(populatedParams)}`, {
                    method,
                    headers,
                })
                    .then((res) => {
                    if (res.status === 404)
                        reject('Endpoint not found');
                    if (res.status === 401)
                        reject('Forbidden access');
                    return res.json();
                })
                    .then((res) => {
                    if (res.code && res.code < 0)
                        reject(res);
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
            let headers = {
                'Content-Type': 'application/json;charset=UTF-8',
            };
            if (securityType !== ESecurityType.NONE) {
                headers['X-MBX-APIKEY'] = this.apiKey;
            }
            return headers;
        }
        createStream(url) {
            if (this.streams.has(url))
                return this.streams.get(url);
            const ws = new WebSocket(`${this.baseUrlStream}${url}`);
            ws.on('ping', () => ws.pong());
            ws.on('close', () => this.streams.delete(url));
            ws.on('open', () => this.streams.set(url, ws));
            return ws;
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
        ESecurityType["FUTURES"] = "FUTURES";
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
    let EOrderSideEffectType;
    (function (EOrderSideEffectType) {
        EOrderSideEffectType["NO_SIDE_EFFECT"] = "NO_SIDE_EFFECT";
        EOrderSideEffectType["MARGIN_BUY"] = "MARGIN_BUY";
        EOrderSideEffectType["AUTO_REPAY"] = "AUTO_REPAY";
    })(EOrderSideEffectType = Binance.EOrderSideEffectType || (Binance.EOrderSideEffectType = {}));
    let EStreamType;
    (function (EStreamType) {
        EStreamType["AGGREGATE_TRADE"] = "AGGREGATE_TRADE";
        EStreamType["TRADE"] = "TRADE";
        EStreamType["CANDLESTICK_TRADE"] = "CANDLESTICK_TRADE";
        EStreamType["SYMBOL_MINI_TICKER"] = "SYMBOL_MINI_TICKER";
        EStreamType["SYMBOL_TICKER"] = "SYMBOL_TICKER";
        EStreamType["BOOK_TICKER"] = "BOOK_TICKER";
        EStreamType["DEPTH"] = "DEPTH";
    })(EStreamType = Binance.EStreamType || (Binance.EStreamType = {}));
    let EInterval;
    (function (EInterval) {
        EInterval["INTERVAL_1m"] = "1m";
        EInterval["INTERVAL_3m"] = "3m";
        EInterval["INTERVAL_5m"] = "5m";
        EInterval["INTERVAL_15m"] = "15m";
        EInterval["INTERVAL_30m"] = "30m";
        EInterval["INTERVAL_1h"] = "1h";
        EInterval["INTERVAL_2h"] = "2h";
        EInterval["INTERVAL_4h"] = "4h";
        EInterval["INTERVAL_6h"] = "6h";
        EInterval["INTERVAL_8h"] = "8h";
        EInterval["INTERVAL_12h"] = "12h";
        EInterval["INTERVAL_1d"] = "1d";
        EInterval["INTERVAL_3d"] = "3d";
        EInterval["INTERVAL_1w"] = "1w";
        EInterval["INTERVAL_1M"] = "1M";
    })(EInterval = Binance.EInterval || (Binance.EInterval = {}));
    let ESavingsStatus;
    (function (ESavingsStatus) {
        ESavingsStatus["ALL"] = "ALL";
        ESavingsStatus["SUBSCRIBABLE"] = "SUBSCRIBABLE";
        ESavingsStatus["UNSUBSCRIBABLE"] = "UNSUBSCRIBABLE";
    })(ESavingsStatus = Binance.ESavingsStatus || (Binance.ESavingsStatus = {}));
    let ESavingsType;
    (function (ESavingsType) {
        ESavingsType["FAST"] = "FAST";
        ESavingsType["NORMAL"] = "NORMAL";
    })(ESavingsType = Binance.ESavingsType || (Binance.ESavingsType = {}));
    let ESavingsSortBy;
    (function (ESavingsSortBy) {
        ESavingsSortBy["START_TIME"] = "START_TIME";
        ESavingsSortBy["LOT_SIZE"] = "LOT_SIZE";
        ESavingsSortBy["INTEREST_RATE"] = "INTEREST_RATE";
        ESavingsSortBy["DURATION"] = "DURATION";
    })(ESavingsSortBy = Binance.ESavingsSortBy || (Binance.ESavingsSortBy = {}));
    let EFuturesType;
    (function (EFuturesType) {
        EFuturesType[EFuturesType["FROM_SPOT_TO_USDTFUTURS"] = 1] = "FROM_SPOT_TO_USDTFUTURS";
        EFuturesType[EFuturesType["FROM_USDTFUTURES_TO_SPOT"] = 2] = "FROM_USDTFUTURES_TO_SPOT";
        EFuturesType[EFuturesType["FROM_SPOT_TO_COINFUTURS"] = 3] = "FROM_SPOT_TO_COINFUTURS";
        EFuturesType[EFuturesType["FROM_COINFUTURES_TO_SPOT"] = 4] = "FROM_COINFUTURES_TO_SPOT";
    })(EFuturesType = Binance.EFuturesType || (Binance.EFuturesType = {}));
    let EAccountType;
    (function (EAccountType) {
        EAccountType["SPOT"] = "SPOT";
        EAccountType["USDT_FUTURE"] = "USDT_FUTURE";
        EAccountType["COIN_FUTURE"] = "COIN_FUTURE";
    })(EAccountType = Binance.EAccountType || (Binance.EAccountType = {}));
    let ESubAccountFuturesType;
    (function (ESubAccountFuturesType) {
        ESubAccountFuturesType[ESubAccountFuturesType["USDT"] = 1] = "USDT";
        ESubAccountFuturesType[ESubAccountFuturesType["COIN"] = 2] = "COIN";
    })(ESubAccountFuturesType = Binance.ESubAccountFuturesType || (Binance.ESubAccountFuturesType = {}));
})(Binance = exports.Binance || (exports.Binance = {}));
//# sourceMappingURL=Binance.js.map