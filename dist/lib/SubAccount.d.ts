import { Binance } from '../Binance';
export declare class SubAccounts {
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsList(this: Binance.Api): Promise<ISubAccountsList>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsTransferHistory(this: Binance.Api): Promise<ISubAccountsList>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsAssets(this: Binance.Api): Promise<ISubAccountsAssets>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsCreateVirtualSubAccount(this: Binance.Api, params: ISubAccountsCreateVirtualSubAccountParameters): Promise<ISubAccountsCreateVirtualSubAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountListSAPI(this: Binance.Api, params: ISubAccountsQuerySubAccountListSAPIParameters): Promise<ISubAccountsQuerySubAccountListSAPI>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountList(this: Binance.Api, params: ISubAccountsQuerySubAccountListParameters): Promise<ISubAccountsQuerySubAccountList>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountSpotAssetTransferHistory(this: Binance.Api, params: ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters): Promise<ISubAccountsQuerySubAccountSpotAssetTransferHistory>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountSpotAssetTransferHistorySAPI(this: Binance.Api, params: ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters): Promise<ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsSubAccountSpotAssetTransfer(this: Binance.Api, params: ISubAccountsSubAccountSpotAssetTransferParameters): Promise<ISubAccountsSubAccountSpotAssetTransfer>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountFuturesAssetTransferHistory(this: Binance.Api, params: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters): Promise<ISubAccountsQuerySubAccountFuturesAssetTransferHistory>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsSubAccountFuturesAssetTransfer(this: Binance.Api, params: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters): Promise<ISubAccountsQuerySubAccountFuturesAssetTransferHistory>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountsAssets(this: Binance.Api, params: ISubAccountsQuerySubAccountAssetsParameters): Promise<ISubAccountsQuerySubAccountAssets>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountsAssetsSAPI(this: Binance.Api, params: ISubAccountsQuerySubAccountAssetsSAPIParameters): Promise<ISubAccountsQuerySubAccountAssetsSAPI>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountSpotAssetsSummary(this: Binance.Api, params: ISubAccountsQuerySubAccountSpotAssetsSummaryParameters): Promise<ISubAccountsQuerySubAccountSpotAssetsSummary>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSubAccountDepositAddress(this: Binance.Api, params: ISubAccountsGetSubAccountDepositAddressParameters): Promise<ISubAccountsGetSubAccountDepositAddress>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSubAccountDepositHistory(this: Binance.Api, params: ISubAccountsGetSubAccountDepositAddressHistoryParameters): Promise<ISubAccountsGetSubAccountDepositAddressHistory[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSubAccountStatusMarginFutures(this: Binance.Api, params: ISubAccountsGetSubAccountStatusMarginFuturesParameters): Promise<ISubAccountsGetSubAccountStatusMarginFutures[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsEnableMarginSubAccount(this: Binance.Api, params: ISubAccountsEnableMarginSubAccountParameters): Promise<ISubAccountsEnableMarginSubAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetDetailSubAccountMarginAccount(this: Binance.Api, params: ISubAccountsGetDetailSubAccountMarginAccountParameters): Promise<ISubAccountsGetDetailSubAccountMarginAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSummarySubAccountMarginAccount(this: Binance.Api, params: ISubAccountsGetSummarySubAccountMarginAccountParameters): Promise<ISubAccountsGetSummarySubAccountMarginAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsEnableFuturesSubAccount(this: Binance.Api, params: ISubAccountsEnableFuturesSubAccountParameters): Promise<ISubAccountsEnableFuturesSubAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetDetailSubAccountFuturesAccount(this: Binance.Api, params: ISubAccountsGetDetailSubAccountFuturesAccountParameters): Promise<ISubAccountsGetDetailSubAccountFuturesAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSummarySubAccountFuturesAccount(this: Binance.Api, params: ISubAccountsGetSummarySubAccountFuturesAccountParameters): Promise<ISubAccountsGetSummarySubAccountFuturesAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetFuturesPositionRiskSubAccount(this: Binance.Api, params: ISubAccountsGetFuturesPositionRiskSubAccountParameters): Promise<ISubAccountsGetFuturesPositionRiskSubAccount[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsFuturesTransferSubAccount(this: Binance.Api, params: ISubAccountsFuturesTransferSubAccountParameters): Promise<ISubAccountsFuturesTransferSubAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsMarginTransferSubAccount(this: Binance.Api, params: ISubAccountsMarginTransferSubAccountParameters): Promise<ISubAccountsMarginTransferSubAccount>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsTransferSubAccountSameMaster(this: Binance.Api, params: ISubAccountsTransferSubAccountSameMasterParameters): Promise<ISubAccountsTransferSubAccountSameMaster>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsTransferToMaster(this: Binance.Api, params: ISubAccountsTransferToMasterParameters): Promise<ISubAccountsTransferToMaster>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsSubAccountTransferHistory(this: Binance.Api, params: ISubAccountsSubAccountTransferHistoryParameters): Promise<ISubAccountsSubAccountTransferHistory[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsUniversalTransfer(this: Binance.Api, params: ISubAccountsUniversalTransferParameters): Promise<ISubAccountsUniversalTransfer>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQueryUniversalTransferHistory(this: Binance.Api, params: ISubAccountsQueryUniversalTransferHistoryParameters): Promise<ISubAccountsQueryUniversalTransferHistory[]>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetDetailSubAccountFuturesAccountV2(this: Binance.Api, params: ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters): Promise<ISubAccountsGetDetailSubAccountFuturesAccountV2>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSummarySubAccountFuturesAccountV2(this: Binance.Api, params: ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters): Promise<ISubAccountsGetSummarySubAccountFuturesAccountV2>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetFuturesPositionRiskSubAccountV2(this: Binance.Api, params: ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters): Promise<ISubAccountsGetFuturesPositionRiskSubAccountV2>;
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsEnableLeverageTokenSubAccount(this: Binance.Api, params: ISubAccountsEnableLeverageTokenSubAccountParameters): Promise<ISubAccountsEnableLeverageTokenSubAccount>;
}
export interface ISubAccountsList {
    success: boolean;
    subAccounts: ISubAccountsListItem[];
}
export interface ISubAccountsListItem {
    email: string;
    status: string;
    activated: boolean;
    mobile: string;
    gAuth: boolean;
    createTime: number;
}
export interface ISubAccountsTransferHistory {
    success: boolean;
    transfers: ISubAccountsTransferHistoryItem[];
}
export interface ISubAccountsTransferHistoryItem {
    from: string;
    to: string;
    asset: string;
    qty: string;
    time: number;
}
export interface ISubAccountsAssets {
    success: boolean;
    balances: ISubAccountsAssetsBalance[];
}
export interface ISubAccountsAssetsBalance {
    asset: string;
    free: number;
    locked: number;
}
export interface ISubAccountsCreateVirtualSubAccountParameters extends Binance.IRequestParameters {
    subAccountString: string;
}
export interface ISubAccountsCreateVirtualSubAccount {
    email: string;
}
export interface ISubAccountsQuerySubAccountListSAPIParameters extends Binance.IRequestParameters {
    email?: string;
    isFreeze?: string;
    page?: number;
    limit?: number;
}
export interface ISubAccountsQuerySubAccountListSAPI {
    subAccounts: ISubAccountsQuerySubAccountListSAPIItem[];
}
export interface ISubAccountsQuerySubAccountListSAPIItem {
    email: string;
    isFreeze: boolean;
    createTime: number;
}
export interface ISubAccountsQuerySubAccountListParameters extends Binance.IRequestParameters {
    email?: string;
    status?: string;
    page?: number;
    limit?: number;
}
export interface ISubAccountsQuerySubAccountList {
    subAccounts: ISubAccountsQuerySubAccountListItem[];
    success: boolean;
}
export interface ISubAccountsQuerySubAccountListItem {
    email: string;
    status: string;
    activated: boolean;
    mobile: string;
    gAuth: boolean;
    createTime: number;
}
export interface ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters extends Binance.IRequestParameters {
    fromEmail?: string;
    toEmail?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
}
export interface ISubAccountsQuerySubAccountSpotAssetTransferHistory {
    transfers: ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem[];
    success: boolean;
}
export interface ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem {
    from: string;
    to: string;
    asset: string;
    qty: string;
    status: string;
    tranId: number;
    time: number;
}
export interface ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters extends Binance.IRequestParameters {
    fromEmail?: string;
    toEmail?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
}
export declare type ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPI = ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem;
export interface ISubAccountsSubAccountSpotAssetTransferParameters extends Binance.IRequestParameters {
    fromEmail: string;
    toEmail: string;
    asset: string;
    amount: number;
}
export interface ISubAccountsSubAccountSpotAssetTransfer {
    txnId: string;
    success: boolean;
}
export interface ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters extends Binance.IRequestParameters {
    email: string;
    futuresType: Binance.EFuturesType;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
}
export interface ISubAccountsQuerySubAccountFuturesAssetTransferHistory {
    futuresType: Binance.EFuturesType;
    success: boolean;
    transfers: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryItem[];
}
export interface ISubAccountsQuerySubAccountFuturesAssetTransferHistoryItem {
    from: string;
    to: string;
    asset: string;
    qty: string;
    tranId: number;
    time: number;
}
export interface ISubAccountsSubAccountFuturesAssetTransferParameters extends Binance.IRequestParameters {
    fromEmail: string;
    toEmail: string;
    asset: string;
    amount: number;
    futuresType: Binance.EFuturesType;
}
export interface ISubAccountsSubAccountFuturesAssetTransfer {
    txnId: string;
    success: boolean;
}
export interface ISubAccountsQuerySubAccountAssetsParameters extends Binance.IRequestParameters {
    email: string;
}
export interface ISubAccountsQuerySubAccountAssets {
    success: boolean;
    balances: ISubAccountsQuerySubAccountAssetsItem[];
}
export interface ISubAccountsQuerySubAccountAssetsItem {
    asset: string;
    free: number;
    locked: number;
}
export interface ISubAccountsQuerySubAccountAssetsSAPIParameters extends Binance.IRequestParameters {
    email: string;
}
export interface ISubAccountsQuerySubAccountAssetsSAPI {
    balances: ISubAccountsQuerySubAccountAssetsItem[];
}
export interface ISubAccountsQuerySubAccountAssetsSAPIItem {
    asset: string;
    free: number;
    locked: number;
}
export interface ISubAccountsQuerySubAccountSpotAssetsSummaryParameters extends Binance.IRequestParameters {
    email?: string;
    page?: number;
    size?: number;
}
export interface ISubAccountsQuerySubAccountSpotAssetsSummary {
    totalCount: number;
    masterAccountTotalAsset: string;
    spotSubUserAssetBtcVoList: ISubAccountsQuerySubAccountSpotAssetsSummaryItem[];
}
export interface ISubAccountsQuerySubAccountSpotAssetsSummaryItem {
    email: string;
    totalAsset: string;
}
export interface ISubAccountsGetSubAccountDepositAddressParameters extends Binance.IRequestParameters {
    email: string;
    coin: string;
    network?: string;
}
export interface ISubAccountsGetSubAccountDepositAddress {
    address: string;
    coin: string;
    tag: string;
    url: string;
}
export interface ISubAccountsGetSubAccountDepositAddressHistoryParameters extends Binance.IRequestParameters {
    email: string;
    coin?: string;
    status?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
    offset?: number;
}
export interface ISubAccountsGetSubAccountDepositAddressHistory {
    amount: string;
    coin: string;
    network: string;
    status: number;
    address: string;
    addressTag: string;
    txId: string;
    insertTime: number;
    transferType: number;
    confirmTimes: string;
}
export interface ISubAccountsGetSubAccountStatusMarginFuturesParameters extends Binance.IRequestParameters {
    email?: string;
}
export interface ISubAccountsGetSubAccountStatusMarginFutures {
    email: string;
    isSubUserEnabled: boolean;
    isUserActive: boolean;
    insertTime: number;
    isMarginEnabled: boolean;
    isFutureEnabled: boolean;
    mobile: number;
}
export interface ISubAccountsEnableMarginSubAccountParameters extends Binance.IRequestParameters {
    email: string;
}
export interface ISubAccountsEnableMarginSubAccount {
    email: string;
    isMarginEnabled: boolean;
}
export interface ISubAccountsGetDetailSubAccountMarginAccountParameters extends Binance.IRequestParameters {
    email: string;
}
export interface ISubAccountsGetDetailSubAccountMarginAccount {
    email: string;
    marginLevel: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    marginTradeCoeffVo: {
        forceLiquidationBar: string;
        marginCallBar: string;
        normalBar: string;
    };
    marginUserAssetVoList: ISubAccountsGetDetailSubAccountMarginAccountAsset[];
}
export interface ISubAccountsGetDetailSubAccountMarginAccountAsset {
    asset: string;
    borrowed: string;
    free: string;
    interest: string;
    locked: string;
    netAsset: string;
}
export interface ISubAccountsGetSummarySubAccountMarginAccountParameters extends Binance.IRequestParameters {
}
export interface ISubAccountsGetSummarySubAccountMarginAccount {
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
    subAccountList: ISubAccountsGetSummarySubAccountMarginAccountItem[];
}
export interface ISubAccountsGetSummarySubAccountMarginAccountItem {
    email: string;
    totalAssetOfBtc: string;
    totalLiabilityOfBtc: string;
    totalNetAssetOfBtc: string;
}
export interface ISubAccountsEnableFuturesSubAccountParameters extends Binance.IRequestParameters {
    email: string;
}
export interface ISubAccountsEnableFuturesSubAccount {
    email: string;
    isFuturesEnabled: boolean;
}
export interface ISubAccountsGetDetailSubAccountFuturesAccountParameters extends Binance.IRequestParameters {
    email: string;
}
export interface ISubAccountsGetDetailSubAccountFuturesAccount {
    email: string;
    asset: string;
    assets: ISubAccountsGetDetailSubAccountFuturesAccountItem[];
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    feeTier: number;
    maxWithdrawAmount: string;
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    updateTime: number;
}
export interface ISubAccountsGetDetailSubAccountFuturesAccountItem {
    asset: string;
    initialMargin: string;
    maintenanceMargin: string;
    marginBalance: string;
    maxWithdrawAmount: string;
    openOrderInitialMargin: string;
    positionInitialMargin: string;
    unrealizedProfit: string;
    walletBalance: string;
}
export interface ISubAccountsGetSummarySubAccountFuturesAccountParameters extends Binance.IRequestParameters {
}
export interface ISubAccountsGetSummarySubAccountFuturesAccount {
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
    subAccountList: ISubAccountsGetSummarySubAccountFuturesAccountItem[];
}
export interface ISubAccountsGetSummarySubAccountFuturesAccountItem {
    email: string;
    totalInitialMargin: string;
    totalMaintenanceMargin: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin: string;
    totalPositionInitialMargin: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
}
export interface ISubAccountsGetFuturesPositionRiskSubAccountParameters extends Binance.IRequestParameters {
    email: string;
}
export interface ISubAccountsGetFuturesPositionRiskSubAccount {
    entryPrice: string;
    leverage: string;
    maxNotional: string;
    liquidationPrice: string;
    markPrice: string;
    positionAmount: string;
    symbol: string;
    unrealizedProfit: string;
}
export interface ISubAccountsFuturesTransferSubAccountParameters extends Binance.IRequestParameters {
    email: string;
    asset: string;
    amount: number;
    type: number;
}
export interface ISubAccountsFuturesTransferSubAccount {
    txnId: string;
}
export interface ISubAccountsMarginTransferSubAccountParameters extends Binance.IRequestParameters {
    email: string;
    asset: string;
    amount: number;
    type: number;
}
export interface ISubAccountsMarginTransferSubAccount {
    txnId: string;
}
export interface ISubAccountsTransferSubAccountSameMasterParameters extends Binance.IRequestParameters {
    toEmail: string;
    asset: string;
    amount: number;
    type: number;
}
export interface ISubAccountsTransferSubAccountSameMaster {
    txnId: string;
}
export interface ISubAccountsTransferToMasterParameters extends Binance.IRequestParameters {
    asset: string;
    amount: number;
    type: number;
}
export interface ISubAccountsTransferToMaster {
    txnId: string;
}
export interface ISubAccountsSubAccountTransferHistoryParameters extends Binance.IRequestParameters {
    asset?: string;
    type?: number;
    startTime?: number;
    endTime?: number;
    limit?: number;
}
export interface ISubAccountsSubAccountTransferHistory {
    counterParty: string;
    email: string;
    type: number;
    asset: string;
    qty: string;
    fromAccountType: string;
    toAccountType: string;
    status: string;
    tranId: number;
    time: number;
}
export interface ISubAccountsUniversalTransferParameters extends Binance.IRequestParameters {
    fromEmail?: string;
    toEmail?: string;
    fromAccountType: Binance.EAccountType;
    toAccountType: Binance.EAccountType;
    asset: string;
    amount: number;
}
export interface ISubAccountsUniversalTransfer {
    txnId: string;
}
export interface ISubAccountsQueryUniversalTransferHistoryParameters extends Binance.IRequestParameters {
    fromEmail?: string;
    toEmail?: string;
    startTime?: number;
    endTime?: number;
    page?: number;
    limit?: number;
}
export interface ISubAccountsQueryUniversalTransferHistory {
    tranId: number;
    fromEmail: string;
    toEmail: string;
    asset: string;
    amount: string;
    fromAccountType: Binance.EAccountType;
    toAccountType: Binance.EAccountType;
    status: string;
    createTimeStamp: number;
}
export interface ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters extends Binance.IRequestParameters {
    email: string;
    futuresType: Binance.ESubAccountFuturesType;
}
export interface ISubAccountsGetDetailSubAccountFuturesAccountV2 {
    email: string;
    assets: ISubAccountsGetDetailSubAccountFuturesAccountV2Item[];
    canDeposit: boolean;
    canTrade: boolean;
    canWithdraw: boolean;
    feeTier: number;
    maxWithdrawAmount?: string;
    totalInitialMargin?: string;
    totalMaintenanceMargin?: string;
    totalMarginBalance?: string;
    totalOpenOrderInitialMargin?: string;
    totalPositionInitialMargin?: string;
    totalUnrealizedProfit?: string;
    totalWalletBalance?: string;
    updateTime: number;
}
export interface ISubAccountsGetDetailSubAccountFuturesAccountV2Item {
    asset: string;
    initialMargin: string;
    maintenanceMargin: string;
    marginBalance: string;
    maxWithdrawAmount: string;
    openOrderInitialMargin: string;
    positionInitialMargin: string;
    unrealizedProfit: string;
    walletBalance: string;
}
export interface ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters extends Binance.IRequestParameters {
    futuresTypes: Binance.ESubAccountFuturesType;
    page?: number;
    limit?: number;
}
export interface ISubAccountsGetSummarySubAccountFuturesAccountV2 {
    totalInitialMargin?: string;
    totalMaintenanceMargin?: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin?: string;
    totalPositionInitialMargin?: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
    subAccountList: ISubAccountsGetSummarySubAccountFuturesAccountV2Item[];
}
export interface ISubAccountsGetSummarySubAccountFuturesAccountV2Item {
    email: string;
    totalInitialMargin?: string;
    totalMaintenanceMargin?: string;
    totalMarginBalance: string;
    totalOpenOrderInitialMargin?: string;
    totalPositionInitialMargin?: string;
    totalUnrealizedProfit: string;
    totalWalletBalance: string;
    asset: string;
}
export interface ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters extends Binance.IRequestParameters {
    futuresTypes: Binance.ESubAccountFuturesType;
    page?: number;
    limit?: number;
}
export interface ISubAccountsGetFuturesPositionRiskSubAccountV2 {
    futurePositionRiskVos?: ISubAccountsGetFuturesPositionRiskSubAccountV2ItemUSDT[];
    deliveryPositionRiskVos?: ISubAccountsGetFuturesPositionRiskSubAccountV2ItemCOIN[];
}
export interface ISubAccountsGetFuturesPositionRiskSubAccountV2ItemUSDT {
    entryPrice: string;
    leverage: string;
    maxNotional: string;
    liquidationPrice: string;
    markPrice: string;
    positionAmount: string;
    symbol: string;
    unrealizedProfit: string;
}
export interface ISubAccountsGetFuturesPositionRiskSubAccountV2ItemCOIN {
    entryPrice: string;
    markPrice: string;
    leverage: string;
    isolated: string;
    isolatedWallet: string;
    isolatedMargin: string;
    isAutoAddMargin: string;
    positionSide: string;
    positionAmount: string;
    symbol: string;
    unrealizedProfit: string;
}
export interface ISubAccountsEnableLeverageTokenSubAccountParameters extends Binance.IRequestParameters {
    emai: string;
    enableBlvt: boolean;
}
export interface ISubAccountsEnableLeverageTokenSubAccount {
    emai: string;
    enableBlvt: boolean;
}
