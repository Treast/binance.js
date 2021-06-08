import WebSocket = require('isomorphic-ws');
export declare namespace Binance {
    class Api {
        private apiKey;
        private secretKey;
        private testMode;
        private baseUrlApiLive;
        private baseUrlApiTest;
        private baseUrlStream;
        private streams;
        private securityTypeRequiringSignature;
        constructor(apiKey: string, secretKey: string, testMode?: boolean);
        protected sendRequest<K, T>(url: string, params: K, method: ERequestMethod, securityType: ESecurityType, preventTimestamp?: boolean): Promise<T>;
        private generateQuery;
        private defineSecurityType;
        protected createStream(url: string): WebSocket | undefined;
        /** Wallet endpoints */
        walletDepositHistory: (this: Api, params?: import("./lib/Wallet").IWalletDepositHistoryParameters) => Promise<import("./lib/Wallet").IWalletDepositHistory>;
        walletWithdrawHistory: (this: Api, params?: import("./lib/Wallet").IWalletWithdrawHistoryParameters) => Promise<import("./lib/Wallet").IWalletWithdrawHistory>;
        walletDepositAddress: (this: Api, params: import("./lib/Wallet").IWalletDepositAddressParameters) => Promise<import("./lib/Wallet").IWalletDepositAddress>;
        walletAccountStatus: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletAccountStatus>;
        walletSystemStatus: (this: Api) => Promise<import("./lib/Wallet").IWalletSystemStatus>;
        walletApiTradingStatus: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletApiTradingStatus>;
        walletDustLog: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletDustLog>;
        walletDustTransfer: (this: Api, params: import("./lib/Wallet").IWalletDustTransferParameters) => Promise<import("./lib/Wallet").IWalletDustTransfer>;
        walletTradeFee: (this: Api, params?: import("./lib/Wallet").IWalletTradeFeeParameters) => Promise<import("./lib/Wallet").IWalletTradeFee>;
        walletAssetDetail: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletAssetDetail>;
        walletAllCoins: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletAllCoins[]>;
        walletDailyAccountSnapshot: (this: Api, params: import("./lib/Wallet").IWalletDailyAccountSnapshotParameters) => Promise<import("./lib/Wallet").IWalletDailyAccountSnapshot>;
        walletAssetDividend: (this: Api, params?: import("./lib/Wallet").IWalletAssetDividendParameters) => Promise<import("./lib/Wallet").IWalletAssetDividend>;
        walletWithdraw: (this: Api, params: import("./lib/Wallet").IWalletWithdrawParameters) => Promise<import("./lib/Wallet").IWalletWithdraw>;
        walletDisableFastWithdrawSwitch: (this: Api, params: IRequestParameters) => Promise<IResponseEmpty>;
        walletEnableFastWithdrawSwitch: (this: Api, params: IRequestParameters) => Promise<IResponseEmpty>;
        /** Market endpoints */
        marketTestConnectivity: (this: Api) => Promise<IResponseEmpty>;
        marketCheckServerTime: (this: Api) => Promise<import("./lib/Market").IMarketCheckServerTime>;
        marketExchangeInformation: (this: Api) => Promise<import("./lib/Market").IMarketExchangeInformation>;
        marketOrderBook: (this: Api, params: import("./lib/Market").IMarketOrderBookParameters) => Promise<import("./lib/Market").IMarketOrderBook>;
        marketRecentTradesList: (this: Api, params: import("./lib/Market").IMarketRecentTradesListParameters) => Promise<import("./lib/Market").IMarketRecentTradesList[]>;
        marketOldTradeLookup: (this: Api, params: import("./lib/Market").IMarketOldTradeLookupParameters) => Promise<import("./lib/Market").IMarketOldTradeLookup[]>;
        marketAggregateTradesList: (this: Api, params: import("./lib/Market").IMarketAggregateTradesListParameters) => Promise<import("./lib/Market").IMarketAggregateTradesList[]>;
        marketKlineData: (this: Api, params: import("./lib/Market").IMarketKlineDataParameters) => Promise<(string | number)[][]>;
        marketCurrentAveragePrice: (this: Api, params: import("./lib/Market").IMarketCurrentAveragePriceParameters) => Promise<import("./lib/Market").IMarketCurrentAveragePrice>;
        market24hrTickerPriceChange: (this: Api, params?: import("./lib/Market").IMarket24hTickerPriceChangeParameters) => Promise<import("./lib/Market").IMarket24hTickerPriceChange | import("./lib/Market").IMarket24hTickerPriceChange[]>;
        marketSymbolPriceTicker: (this: Api, params?: import("./lib/Market").IMarket24hTickerPriceChangeParameters) => Promise<import("./lib/Market").IMarketSymbolPriceTicker | import("./lib/Market").IMarketSymbolPriceTicker[]>;
        marketSymbolOrderBookTicker: (this: Api, params?: import("./lib/Market").IMarket24hTickerPriceChangeParameters) => Promise<import("./lib/Market").IMarketSymbolOrderBookTicker | import("./lib/Market").IMarketSymbolOrderBookTicker[]>;
        /** Spot endpoints */
        spotTestNewOrder: (this: Api, params: import("./lib/Spot").ISpotNewOrderParameters) => Promise<IResponseEmpty>;
        spotNewOrder: (this: Api, params: import("./lib/Spot").ISpotNewOrderParameters) => Promise<import("./lib/Spot").ISpotNewOrder>;
        spotCancelOrder: (this: Api, params: import("./lib/Spot").ISpotCancelOrderParameters) => Promise<import("./lib/Spot").ISpotCancelOrder>;
        spotCancelAllOrdersOnSymbol: (this: Api, params: import("./lib/Spot").ISpotCancelAllOrdersOnSymbolParameters) => Promise<import("./lib/Spot").ISpotCancelAllOrdersOnSymbol[]>;
        spotQueryOrder: (this: Api, params: import("./lib/Spot").ISpotQueryOrderParameters) => Promise<import("./lib/Spot").ISpotQueryOrder>;
        spotCurrentOpenOrders: (this: Api, params: import("./lib/Spot").ISpotCurrentOpenOrdersParameters) => Promise<import("./lib/Spot").ISpotQueryOrder[]>;
        spotAllOrders: (this: Api, params: import("./lib/Spot").ISpotAllOrdersParameters) => Promise<import("./lib/Spot").ISpotQueryOrder[]>;
        spotNewOCO: (this: Api, params: import("./lib/Spot").ISpotNewOCOParameters) => Promise<import("./lib/Spot").ISpotNewOCO>;
        spotCancelOCO: (this: Api, params: import("./lib/Spot").ISpotCancelOCOParameters) => Promise<import("./lib/Spot").ISpotNewOCO>;
        spotQueryOCO: (this: Api, params: import("./lib/Spot").ISpotQueryOCOParameters) => Promise<import("./lib/Spot").ISpotQueryOCO>;
        spotQueryAllOCO: (this: Api, params?: import("./lib/Spot").ISpotQueryAllOCOParameters) => Promise<import("./lib/Spot").ISpotQueryOCO[]>;
        spotQueryOpenOCO: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Spot").ISpotQueryOrder[]>;
        spotAccountInformation: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Spot").ISpotAccountInformation>;
        spotAccountTradeList: (this: Api, params: import("./lib/Spot").ISpotAccountTradeListParameters) => Promise<import("./lib/Spot").ISpotAccountTradeList[]>;
        /** Margin endpoints */
        marginCrossMarginAccountTransfer: (this: Api, params: import("./lib/Margin").IMarginCrossMarginAccountTransferParameters) => Promise<import("./lib/Margin").IMarginCrossMarginAccountTransfer>;
        marginAccountBorrow: (this: Api, params: import("./lib/Margin").IMarginAccountBorrowParameters) => Promise<import("./lib/Margin").IMarginCrossMarginAccountTransfer>;
        marginAccountRepay: (this: Api, params: import("./lib/Margin").IMarginAccountBorrowParameters) => Promise<import("./lib/Margin").IMarginCrossMarginAccountTransfer>;
        marginQueryMarginAsset: (this: Api, params: import("./lib/Margin").IMarginQueryMarginAssetParameters) => Promise<import("./lib/Margin").IMarginQueryMarginAsset>;
        marginQueryCrossMarginPair: (this: Api, params: import("./lib/Margin").IMarginQueryCrossMarginPairParameters) => Promise<import("./lib/Margin").IMarginQueryCrossMarginPair>;
        marginGetAllCrossMarginAssets: (this: Api, params?: IResponseEmpty) => Promise<import("./lib/Margin").IMarginQueryMarginAsset[]>;
        marginGetAllCrossMarginPairs: (this: Api, params?: IResponseEmpty) => Promise<import("./lib/Margin").IMarginQueryCrossMarginPair[]>;
        marginQueryMarginPriceIndex: (this: Api, params: import("./lib/Margin").IMarginQueryCrossMarginPairParameters) => Promise<import("./lib/Margin").IMarginQueryMarginPriceIndex>;
        marginAccounNewOrder: (this: Api, params: import("./lib/Margin").IMarginAccountNewOrderParameters) => Promise<import("./lib/Margin").IMarginAccountNewOrder>;
        marginAccounCancelOrder: (this: Api, params: import("./lib/Margin").IMarginAccountCancelOrderParameters) => Promise<import("./lib/Margin").IMarginAccountCancelOrder>;
        marginGetCrossMarginTransferHistory: (this: Api, params?: import("./lib/Margin").IMarginGetCrossMarginTransferHistoryParameters) => Promise<import("./lib/Margin").IMarginGetCrossMarginTransferHistory>;
        marginQueryLoanRecord: (this: Api, params: import("./lib/Margin").IMarginQueryLoanRecordParameters) => Promise<import("./lib/Margin").IMarginQueryLoanRecord>;
        marginQueryRepayRecord: (this: Api, params: import("./lib/Margin").IMarginQueryLoanRecordParameters) => Promise<import("./lib/Margin").IMarginQueryRepayRecord>;
        marginGetInterestHistory: (this: Api, params: import("./lib/Margin").IMarginQueryLoanRecordParameters) => Promise<import("./lib/Margin").IMarginGetInterestHistory>;
        marginGetForceLiquidationHistory: (this: Api, params?: import("./lib/Margin").IMarginGetForceLiquidationHistoryParameters) => Promise<import("./lib/Margin").IMarginGetForceLiquidationHistory>;
        marginQueryCrossMarginAccountDetails: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Margin").IMarginQueryCrossMarginAccountDetails>;
        marginQueryMarginAccountOrder: (this: Api, params: import("./lib/Margin").IMarginQueryMarginAccountOrderParameters) => Promise<import("./lib/Margin").IMarginQueryMarginAccountOrder>;
        marginQueryMarginAccountOpenOrder: (this: Api, params: import("./lib/Margin").IMarginQueryMarginAccountOpenOrderParameters) => Promise<import("./lib/Margin").IMarginQueryMarginAccountOpenOrder[]>;
        marginQueryMarginAccountAllOrder: (this: Api, params: import("./lib/Margin").IMarginQueryMarginAccountAllOrderParameters) => Promise<import("./lib/Margin").IMarginQueryMarginAccountOpenOrder[]>;
        marginQueryMarginAccountTradeList: (this: Api, params: import("./lib/Margin").IMarginQueryMarginAccountTradeListParameters) => Promise<import("./lib/Margin").IMarginQueryMarginAccountTradeList[]>;
        marginQueryMaxBorrow: (this: Api, params: import("./lib/Margin").IMarginQueryMaxBorrowParameters) => Promise<import("./lib/Margin").IMarginQueryMaxBorrow>;
        marginQueryMaxTransferOutAmount: (this: Api, params: import("./lib/Margin").IMarginQueryMaxBorrowParameters) => Promise<import("./lib/Margin").IMarginQueryMaxTransferOutAmount>;
        marginCreateIsolatedMarginAccount: (this: Api, params: import("./lib/Margin").IMarginCreateIsolatedMarginAccountParameters) => Promise<import("./lib/Margin").IMarginCreateIsolatedMarginAccount>;
        marginIsolatedMarginAccountTransfer: (this: Api, params: import("./lib/Margin").IMarginIsolatedMarginAccountTransferParameters) => Promise<import("./lib/Margin").IMarginIsolatedMarginAccountTransfer>;
        marginGetIsolatedMarginTransferHistory: (this: Api, params: import("./lib/Margin").IMarginGetIsolatedMarginTransferHistoryParameters) => Promise<import("./lib/Margin").IMarginGetIsolatedMarginTransferHistory>;
        marginQueryIsolatedMarginAccountInfo: (this: Api, params?: import("./lib/Margin").IMarginQueryIsolatedMarginAccountInfoParameters) => Promise<import("./lib/Margin").IMarginQueryIsolatedMarginAccountInfo>;
        marginQueryIsolatedMarginSymbol: (this: Api, params: import("./lib/Margin").IMarginQueryIsolatedMarginSymbolParameters) => Promise<import("./lib/Margin").IMarginQueryIsolatedMarginSymbol>;
        marginGetAllIsolatedMarginSymbol: (this: Api, params?: IResponseEmpty) => Promise<import("./lib/Margin").IMarginQueryIsolatedMarginSymbol[]>;
        /** Streams */
        streamAggregateTrade: (this: Api, params: import("./lib/Stream").IStreamAggregateTradeParameters) => WebSocket | undefined;
        streamTrade: (this: Api, params: import("./lib/Stream").IStreamAggregateTradeParameters) => WebSocket | undefined;
        streamCandlestick: (this: Api, params: import("./lib/Stream").IStreamCandlestickParameters) => WebSocket | undefined;
        streamIndividualSymbolMiniTicker: (this: Api, params: import("./lib/Stream").IStreamAggregateTradeParameters) => WebSocket | undefined;
        streamAllMarketMiniTickers: (this: Api) => WebSocket | undefined;
        streamIndividualSymbolTicker: (this: Api, params: import("./lib/Stream").IStreamAggregateTradeParameters) => WebSocket | undefined;
        streamAllMarketTickers: (this: Api) => WebSocket | undefined;
        streamIndividualSymbolBookTicker: (this: Api, params: import("./lib/Stream").IStreamAggregateTradeParameters) => WebSocket | undefined;
        streamAllBookTickers: (this: Api) => WebSocket | undefined;
        streamPartialBookDepth: (this: Api, params: import("./lib/Stream").IStreamPartialBookDepth) => WebSocket | undefined;
        /** Savings endpoints */
        savingsGetFlexibleProductList: (this: Api, params?: import("./lib/Savings").ISavingsGetFlexibleProductListParameters) => Promise<import("./lib/Savings").ISavingsGetFlexibleProductList[]>;
        savingsGetLeftDailyPurchaseQuotaFlexibleProduct: (this: Api, params: import("./lib/Savings").ISavingsGetLeftDailyPurchaseQuotaFlexibleProductParameters) => Promise<import("./lib/Savings").ISavingsGetLeftDailyPurchaseQuotaFlexibleProduct>;
        savingsPurchaseFlexibleProduct: (this: Api, params: import("./lib/Savings").ISavingsPurchaseFlexibleProductParameters) => Promise<import("./lib/Savings").ISavingsPurchaseFlexibleProduct>;
        savingsGetLeftDailyRedemptionQuotaFlexibleProduct: (this: Api, params: import("./lib/Savings").ISavingsGetLeftDailyRedemptionQuotaFlexibleProductParameters) => Promise<import("./lib/Savings").ISavingsGetLeftDailyRedemptionQuotaFlexibleProduct>;
        savingsRedeemFlexibleProduct: (this: Api, params: import("./lib/Savings").ISavingsRedeemFlexibleProductParameters) => Promise<import("./lib/Savings").ISavingsRedeemFlexibleProduct>;
        savingsGetFlexibleProductPosition: (this: Api, params: import("./lib/Savings").ISavingsGetFlexibleProductPositionParameters) => Promise<import("./lib/Savings").ISavingsGetFlexibleProductPosition[]>;
        savingsGetFixedActivityProjectList: (this: Api, params: import("./lib/Savings").ISavingsGetFixedActivityProjectListParameters) => Promise<import("./lib/Savings").ISavingsGetFixedActivityProjectList[]>;
        savingsPurchaseFixedActivityProject: (this: Api, params: import("./lib/Savings").ISavingsPurchaseFixedActivityProjectParameters) => Promise<import("./lib/Savings").ISavingsPurchaseFixedActivityProject>;
        savingsGetFixedActivityProjectPosition: (this: Api, params: import("./lib/Savings").ISavingsGetFixedActivityProjectPositionParameters) => Promise<import("./lib/Savings").ISavingsGetFixedActivityProjectPosition[]>;
        savingsLendingAccount: (this: Api, params?: import("./lib/Savings").ISavingsLendingAccountParameters) => Promise<import("./lib/Savings").ISavingsLendingAccount>;
        savingsGetPurchaseRecord: (this: Api, params: import("./lib/Savings").ISavingsGetPurchaseRecordParameters) => Promise<import("./lib/Savings").ISavingsGetPurchaseRecord[]>;
        savingsGetRedemptionRecord: (this: Api, params: import("./lib/Savings").ISavingsGetRedemptionRecordParameters) => Promise<import("./lib/Savings").ISavingsGetRedemptionRecord[]>;
        savingsGetInterestHistory: (this: Api, params: import("./lib/Savings").ISavingsGetInterestHistoryParameters) => Promise<import("./lib/Savings").ISavingsGetInterestHistory[]>;
        savingsChangeFixedActivityPositionToDailyPosition: (this: Api, params: import("./lib/Savings").ISavingsChangeFixedActivityPositionToDailyPositionParameters) => Promise<import("./lib/Savings").ISavingsChangeFixedActivityPositionToDailyPosition>;
        /** Mining endpoints */
        miningAcquiringAlgorithm: (this: Api) => Promise<import("./lib/Mining").IMiningAcquiringAlgorithm>;
        miningAcquiringCoinName: (this: Api) => Promise<import("./lib/Mining").IMiningAcquiringCoinName>;
        miningRequestDetailMinerList: (this: Api, params: import("./lib/Mining").IMiningRequestDetailMinerListParameters) => Promise<import("./lib/Mining").IMiningRequestDetailMinerList>;
        miningRequestMinerList: (this: Api, params: import("./lib/Mining").IMiningRequestMinerListParameters) => Promise<import("./lib/Mining").IMiningRequestMinerList>;
        miningRevenueList: (this: Api, params: import("./lib/Mining").IMiningRevenueListParameters) => Promise<import("./lib/Mining").IMiningRevenueList>;
        miningStatisticList: (this: Api, params: import("./lib/Mining").IMiningStatisticListParameters) => Promise<import("./lib/Mining").IMiningStatisticList>;
        miningAccountList: (this: Api, params: import("./lib/Mining").IMiningStatisticListParameters) => Promise<import("./lib/Mining").IMiningAccountList>;
        /** Futures endpoints */
        futuresNewFutureAccountTransfer: (this: Api, params: import("./lib/Futures").IFuturesNewFutureAccountTransferParameters) => Promise<import("./lib/Futures").IFuturesNewFutureAccountTransfer>;
        futuresGetFutureAccountTransactionHistoryList: (this: Api, params: import("./lib/Futures").IFuturesGetFutureAccountTransactionHistoryListParameters) => Promise<import("./lib/Futures").IFuturesGetFutureAccountTransactionHistoryList>;
        futuresBorrowCrossCollateral: (this: Api, params: import("./lib/Futures").IFuturesBorrowCrossCollateralParameters) => Promise<import("./lib/Futures").IFuturesBorrowCrossCollateral>;
        futuresCrossCollateralBorrowHistory: (this: Api, params?: import("./lib/Futures").IFuturesCrossCollateralBorrowHistoryParameters) => Promise<import("./lib/Futures").IFuturesCrossCollateralBorrowHistory>;
        futuresRepayCrossCollateral: (this: Api, params: import("./lib/Futures").IFuturesRepayCrossCollateralParameters) => Promise<import("./lib/Futures").IFuturesRepayCrossCollateral>;
        futuresCrossCollateralRepaymentHistory: (this: Api, params?: import("./lib/Futures").IFuturesCrossCollateralRepaymentHistoryParameters) => Promise<import("./lib/Futures").IFuturesCrossCollateralRepaymentHistory>;
        futuresCrossCollateralWallet: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Futures").IFuturesCrossCollateralWallet>;
        futuresCrossCollateralInformation: (this: Api, params?: import("./lib/Futures").IFuturesCrossCollateralInformationParameters) => Promise<import("./lib/Futures").IFuturesCrossCollateralInformation[]>;
        futuresCalculateRateAfterAdjustCrossCollateralLTV: (this: Api, params: import("./lib/Futures").IFuturesCalculateRateAfterAdjustCrossCollateralLTVParameters) => Promise<import("./lib/Futures").IFuturesCalculateRateAfterAdjustCrossCollateralLTV>;
        futuresGetMaxAmountAdjustCrossCollateralLTV: (this: Api, params: import("./lib/Futures").IFuturesGetMaxAmountAdjustCrossCollateralLTVParameters) => Promise<import("./lib/Futures").IFuturesGetMaxAmountAdjustCrossCollateralLTV>;
        futuresAdjustCrossCollateralLTV: (this: Api, params: import("./lib/Futures").IFuturesAdjustCrossCollateralLTVParameters) => Promise<import("./lib/Futures").IFuturesAdjustCrossCollateralLTV>;
        futuresAdjustCrossCollateralLTVHistory: (this: Api, params?: import("./lib/Futures").IFuturesAdjustCrossCollateralLTVHistoryParameters) => Promise<import("./lib/Futures").IFuturesAdjustCrossCollateralLTVHistory>;
        futuresCrossCollateralLiquidationHistory: (this: Api, params?: import("./lib/Futures").IFuturesCrossCollateralLiquidationHistoryParameters) => Promise<import("./lib/Futures").IFuturesCrossCollateralLiquidationHistory>;
        /** BLVT endpoints */
        blvtGetBLVTInfo: (this: Api, params?: import("./lib/BLVT").IBLVTGetBLVTInfoParameters) => Promise<import("./lib/BLVT").IBLVTGetBLVTInfo[]>;
        blvtSubscribeBLVT: (this: Api, params: import("./lib/BLVT").IBLVTSubscribeBLVTParameters) => Promise<import("./lib/BLVT").IBLVTSubscribeBLVT>;
        blvtQuerySubscriptionRecord: (this: Api, params?: import("./lib/BLVT").IBLVTQuerySubscriptionRecordParameters) => Promise<import("./lib/BLVT").IBLVTQuerySubscriptionRecord[]>;
        blvtRedeemBLVT: (this: Api, params: import("./lib/BLVT").IBLVTRedeemBLVTParameters) => Promise<import("./lib/BLVT").IBLVTRedeemBLVT>;
        blvtQueryRedemptionRecord: (this: Api, params?: import("./lib/BLVT").IBLVTQueryRedemptionRecordParameters) => Promise<import("./lib/BLVT").IBLVTQueryRedemptionRecord[]>;
        /** BSwap endpoints */
        bSwapListAllSwapPools: (this: Api) => Promise<import("./lib/BSwap").IBSwapListAllSwapPools[]>;
        bSwapGetLiquidityInformationOfPool: (this: Api, params?: import("./lib/BSwap").IBSwapGetLiquidityInformationOfPoolParameters) => Promise<import("./lib/BSwap").IBSwapGetLiquidityInformationOfPool[]>;
        bSwapAddLiquIBSwapAddLiquidity: (this: Api, params: import("./lib/BSwap").IBSwapAddLiquidityParameters) => Promise<import("./lib/BSwap").IBSwapAddLiquidity>;
        bSwapRemoveLiquidity: (this: Api, params: import("./lib/BSwap").IBSwapRemoveLiquidityParameters) => Promise<import("./lib/BSwap").IBSwapRemoveLiquidity>;
        bSwapGetLiquidityOperationRecord: (this: Api, params?: import("./lib/BSwap").IBSwapGetLiquidityOperationRecordParameters) => Promise<import("./lib/BSwap").IBSwapGetLiquidityOperationRecord[]>;
        bSwapRequestQuote: (this: Api, params: import("./lib/BSwap").IBSwapRequestQuoteParameters) => Promise<import("./lib/BSwap").IBSwapRequestQuote>;
        bSwapSwap: (this: Api, params: import("./lib/BSwap").IBSwapSwapParameters) => Promise<import("./lib/BSwap").IBSwapSwap>;
        bSwapGetSwapHistory: (this: Api, params?: import("./lib/BSwap").IBSwapGetSwapHistoryParameters) => Promise<import("./lib/BSwap").IBSwapGetSwapHistory[]>;
        /** SubAccounts endpoints */
        subAccountsList: (this: Api) => Promise<import("./lib/SubAccount").ISubAccountsList>;
        subAccountsTransferHistory: (this: Api) => Promise<import("./lib/SubAccount").ISubAccountsList>;
        subAccountsAssets: (this: Api) => Promise<import("./lib/SubAccount").ISubAccountsAssets>;
        subAccountsCreateVirtualSubAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsCreateVirtualSubAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsCreateVirtualSubAccount>;
        subAccountsQuerySubAccountListSAPI: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountListSAPIParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountListSAPI>;
        subAccountsQuerySubAccountList: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountListParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountList>;
        subAccountsQuerySubAccountSpotAssetTransferHistory: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountSpotAssetTransferHistory>;
        subAccountsQuerySubAccountSpotAssetTransferHistorySAPI: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem[]>;
        subAccountsSubAccountSpotAssetTransfer: (this: Api, params: import("./lib/SubAccount").ISubAccountsSubAccountSpotAssetTransferParameters) => Promise<import("./lib/SubAccount").ISubAccountsSubAccountSpotAssetTransfer>;
        subAccountsQuerySubAccountFuturesAssetTransferHistory: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountFuturesAssetTransferHistory>;
        subAccountsSubAccountFuturesAssetTransfer: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountFuturesAssetTransferHistory>;
        subAccountsQuerySubAccountsAssets: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountAssetsParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountAssets>;
        subAccountsQuerySubAccountsAssetsSAPI: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountAssetsSAPIParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountAssetsSAPI>;
        subAccountsQuerySubAccountSpotAssetsSummary: (this: Api, params: import("./lib/SubAccount").ISubAccountsQuerySubAccountSpotAssetsSummaryParameters) => Promise<import("./lib/SubAccount").ISubAccountsQuerySubAccountSpotAssetsSummary>;
        subAccountsGetSubAccountDepositAddress: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetSubAccountDepositAddressParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetSubAccountDepositAddress>;
        subAccountsGetSubAccountDepositHistory: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetSubAccountDepositAddressHistoryParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetSubAccountDepositAddressHistory[]>;
        subAccountsGetSubAccountStatusMarginFutures: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetSubAccountStatusMarginFuturesParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetSubAccountStatusMarginFutures[]>;
        subAccountsEnableMarginSubAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsEnableMarginSubAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsEnableMarginSubAccount>;
        subAccountsGetDetailSubAccountMarginAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetDetailSubAccountMarginAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetDetailSubAccountMarginAccount>;
        subAccountsGetSummarySubAccountMarginAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetSummarySubAccountMarginAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetSummarySubAccountMarginAccount>;
        subAccountsEnableFuturesSubAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsEnableFuturesSubAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsEnableFuturesSubAccount>;
        subAccountsGetDetailSubAccountFuturesAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetDetailSubAccountFuturesAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetDetailSubAccountFuturesAccount>;
        subAccountsGetSummarySubAccountFuturesAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetSummarySubAccountFuturesAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetSummarySubAccountFuturesAccount>;
        subAccountsGetFuturesPositionRiskSubAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetFuturesPositionRiskSubAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsGetFuturesPositionRiskSubAccount[]>;
        subAccountsFuturesTransferSubAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsFuturesTransferSubAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsFuturesTransferSubAccount>;
        subAccountsMarginTransferSubAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsMarginTransferSubAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsMarginTransferSubAccount>;
        subAccountsTransferSubAccountSameMaster: (this: Api, params: import("./lib/SubAccount").ISubAccountsTransferSubAccountSameMasterParameters) => Promise<import("./lib/SubAccount").ISubAccountsTransferSubAccountSameMaster>;
        subAccountsTransferToMaster: (this: Api, params: import("./lib/SubAccount").ISubAccountsTransferToMasterParameters) => Promise<import("./lib/SubAccount").ISubAccountsTransferToMaster>;
        subAccountsSubAccountTransferHistory: (this: Api, params: import("./lib/SubAccount").ISubAccountsSubAccountTransferHistoryParameters) => Promise<import("./lib/SubAccount").ISubAccountsSubAccountTransferHistory[]>;
        subAccountsUniversalTransfer: (this: Api, params: import("./lib/SubAccount").ISubAccountsUniversalTransferParameters) => Promise<import("./lib/SubAccount").ISubAccountsUniversalTransfer>;
        subAccountsQueryUniversalTransferHistory: (this: Api, params: import("./lib/SubAccount").ISubAccountsQueryUniversalTransferHistoryParameters) => Promise<import("./lib/SubAccount").ISubAccountsQueryUniversalTransferHistory[]>;
        subAccountsGetDetailSubAccountFuturesAccountV2: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters) => Promise<import("./lib/SubAccount").ISubAccountsGetDetailSubAccountFuturesAccountV2>;
        subAccountsGetSummarySubAccountFuturesAccountV2: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters) => Promise<import("./lib/SubAccount").ISubAccountsGetSummarySubAccountFuturesAccountV2>;
        subAccountsGetFuturesPositionRiskSubAccountV2: (this: Api, params: import("./lib/SubAccount").ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters) => Promise<import("./lib/SubAccount").ISubAccountsGetFuturesPositionRiskSubAccountV2>;
        subAccountsEnableLeverageTokenSubAccount: (this: Api, params: import("./lib/SubAccount").ISubAccountsEnableLeverageTokenSubAccountParameters) => Promise<import("./lib/SubAccount").ISubAccountsEnableLeverageTokenSubAccount>;
    }
    interface IRequest {
        headers: IRequestHeaders;
        body: IRequestBody;
        urlQuery: string;
    }
    interface IRequestBody {
    }
    interface IRequestParameters {
        recvWindow?: number;
    }
    interface IResponseEmpty {
    }
    interface IRequestPopulatedParameters extends IRequestParameters {
        signature?: string;
        timestamp?: number;
    }
    type IRequestHeaders = Record<string, string>;
    enum ERequestMethod {
        POST = "POST",
        GET = "GET",
        PUT = "PUT",
        DELETE = "DELETE"
    }
    enum ESecurityType {
        NONE = "NONE",
        TRADE = "TRADE",
        USER_DATA = "USER_DATA",
        MARGIN = "MARGIN",
        USER_STREAM = "USER_STREAM",
        MARKET_DATA = "MARKET_DATA",
        FUTURES = "FUTURES"
    }
    enum EOrderType {
        LIMIT = "LIMIT",
        MARKET = "MARKET",
        STOP_LOSS = "STOP_LOSS",
        STOP_LOSS_LIMIT = "STOP_LOSS_LIMIT",
        TAKE_PROFIT = "TAKE_PROFIT",
        TAKE_PROFIT_LIMIT = "TAKE_PROFIT_LIMIT",
        LIMIT_MAKER = "LIMIT_MAKER"
    }
    enum EOrderSide {
        BUY = "BUY",
        SELL = "SELL"
    }
    enum EOrderResponseType {
        ACK = "ACK",
        RESULT = "RESULT",
        FULL = "FULL"
    }
    enum EOrderTimeInForce {
        GTC = "GTC",
        IOC = "IOC",
        FOK = "FOK"
    }
    enum EOrderStatus {
        NEW = "NEW",
        PARTIALLY_FILLED = "PARTIALLY_FILLED",
        FILLED = "FILLED",
        CANCELED = "CANCELED",
        PENDING_CANCEL = "PENDING_CANCEL",
        REJECTED = "REJECTED",
        EXPIRED = "EXPIRED"
    }
    enum EOrderSideEffectType {
        NO_SIDE_EFFECT = "NO_SIDE_EFFECT",
        MARGIN_BUY = "MARGIN_BUY",
        AUTO_REPAY = "AUTO_REPAY"
    }
    enum EStreamType {
        AGGREGATE_TRADE = "AGGREGATE_TRADE",
        TRADE = "TRADE",
        CANDLESTICK_TRADE = "CANDLESTICK_TRADE",
        SYMBOL_MINI_TICKER = "SYMBOL_MINI_TICKER",
        SYMBOL_TICKER = "SYMBOL_TICKER",
        BOOK_TICKER = "BOOK_TICKER",
        DEPTH = "DEPTH"
    }
    enum EInterval {
        INTERVAL_1m = "1m",
        INTERVAL_3m = "3m",
        INTERVAL_5m = "5m",
        INTERVAL_15m = "15m",
        INTERVAL_30m = "30m",
        INTERVAL_1h = "1h",
        INTERVAL_2h = "2h",
        INTERVAL_4h = "4h",
        INTERVAL_6h = "6h",
        INTERVAL_8h = "8h",
        INTERVAL_12h = "12h",
        INTERVAL_1d = "1d",
        INTERVAL_3d = "3d",
        INTERVAL_1w = "1w",
        INTERVAL_1M = "1M"
    }
    enum ESavingsStatus {
        ALL = "ALL",
        SUBSCRIBABLE = "SUBSCRIBABLE",
        UNSUBSCRIBABLE = "UNSUBSCRIBABLE"
    }
    enum ESavingsType {
        FAST = "FAST",
        NORMAL = "NORMAL"
    }
    enum ESavingsSortBy {
        START_TIME = "START_TIME",
        LOT_SIZE = "LOT_SIZE",
        INTEREST_RATE = "INTEREST_RATE",
        DURATION = "DURATION"
    }
    enum EFuturesType {
        FROM_SPOT_TO_USDTFUTURS = 1,
        FROM_USDTFUTURES_TO_SPOT = 2,
        FROM_SPOT_TO_COINFUTURS = 3,
        FROM_COINFUTURES_TO_SPOT = 4
    }
    enum EAccountType {
        SPOT = "SPOT",
        USDT_FUTURE = "USDT_FUTURE",
        COIN_FUTURE = "COIN_FUTURE"
    }
    enum ESubAccountFuturesType {
        USDT = 1,
        COIN = 2
    }
}
