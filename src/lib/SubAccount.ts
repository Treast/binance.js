import { Binance } from '../Binance';

export class SubAccounts {
  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsList(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, ISubAccountsList>(
      '/wapi/v3/sub-account/list.html',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsTransferHistory(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, ISubAccountsList>(
      '/wapi/v3/sub-account/transfer/history.html',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsAssets(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, ISubAccountsAssets>(
      '/wapi/v3/sub-account/assets.html',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsCreateVirtualSubAccount(this: Binance.Api, params: ISubAccountsCreateVirtualSubAccountParameters) {
    return this.sendRequest<ISubAccountsCreateVirtualSubAccountParameters, ISubAccountsCreateVirtualSubAccount>(
      '/sapi/v1/sub-account/virtualSubAccount',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountListSAPI(this: Binance.Api, params: ISubAccountsQuerySubAccountListSAPIParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountListSAPIParameters, ISubAccountsQuerySubAccountListSAPI>(
      '/sapi/v1/sub-account/list',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountList(this: Binance.Api, params: ISubAccountsQuerySubAccountListParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountListParameters, ISubAccountsQuerySubAccountList>(
      '/wapi/v3/sub-account/list.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountSpotAssetTransferHistory(this: Binance.Api, params: ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountSpotAssetTransferHistoryParameters, ISubAccountsQuerySubAccountSpotAssetTransferHistory>(
      '/wapi/v3/sub-account/transfer/history.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountSpotAssetTransferHistorySAPI(
    this: Binance.Api,
    params: ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters
  ) {
    return this.sendRequest<
      ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPIParameters,
      ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPI[]
    >('/sapi/v1/sub-account/sub/transfer/history', params, Binance.ERequestMethod.GET, Binance.ESecurityType.USER_DATA);
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsSubAccountSpotAssetTransfer(this: Binance.Api, params: ISubAccountsSubAccountSpotAssetTransferParameters) {
    return this.sendRequest<ISubAccountsSubAccountSpotAssetTransferParameters, ISubAccountsSubAccountSpotAssetTransfer>(
      '/wapi/v3/sub-account/transfer.html',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountFuturesAssetTransferHistory(this: Binance.Api, params: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters, ISubAccountsQuerySubAccountFuturesAssetTransferHistory>(
      '/sapi/v1/sub-account/futures/internalTransfer',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsSubAccountFuturesAssetTransfer(this: Binance.Api, params: ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountFuturesAssetTransferHistoryParameters, ISubAccountsQuerySubAccountFuturesAssetTransferHistory>(
      '/sapi/v1/sub-account/futures/internalTransfer',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountsAssets(this: Binance.Api, params: ISubAccountsQuerySubAccountAssetsParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountAssetsParameters, ISubAccountsQuerySubAccountAssets>(
      '/wapi/v3/sub-account/assets.html',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountsAssetsSAPI(this: Binance.Api, params: ISubAccountsQuerySubAccountAssetsSAPIParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountAssetsSAPIParameters, ISubAccountsQuerySubAccountAssetsSAPI>(
      '/sapi/v3/sub-account/assets',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQuerySubAccountSpotAssetsSummary(this: Binance.Api, params: ISubAccountsQuerySubAccountSpotAssetsSummaryParameters) {
    return this.sendRequest<ISubAccountsQuerySubAccountSpotAssetsSummaryParameters, ISubAccountsQuerySubAccountSpotAssetsSummary>(
      '/sapi/v1/sub-account/spotSummary',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSubAccountDepositAddress(this: Binance.Api, params: ISubAccountsGetSubAccountDepositAddressParameters) {
    return this.sendRequest<ISubAccountsGetSubAccountDepositAddressParameters, ISubAccountsGetSubAccountDepositAddress>(
      '/sapi/v1/capital/deposit/subAddress',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSubAccountDepositHistory(this: Binance.Api, params: ISubAccountsGetSubAccountDepositAddressHistoryParameters) {
    return this.sendRequest<ISubAccountsGetSubAccountDepositAddressHistoryParameters, ISubAccountsGetSubAccountDepositAddressHistory[]>(
      '/sapi/v1/capital/deposit/subHisrec',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSubAccountStatusMarginFutures(this: Binance.Api, params: ISubAccountsGetSubAccountStatusMarginFuturesParameters) {
    return this.sendRequest<ISubAccountsGetSubAccountStatusMarginFuturesParameters, ISubAccountsGetSubAccountStatusMarginFutures[]>(
      '/sapi/v1/sub-account/status',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsEnableMarginSubAccount(this: Binance.Api, params: ISubAccountsEnableMarginSubAccountParameters) {
    return this.sendRequest<ISubAccountsEnableMarginSubAccountParameters, ISubAccountsEnableMarginSubAccount>(
      '/sapi/v1/sub-account/margin/enable',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetDetailSubAccountMarginAccount(this: Binance.Api, params: ISubAccountsGetDetailSubAccountMarginAccountParameters) {
    return this.sendRequest<ISubAccountsGetDetailSubAccountMarginAccountParameters, ISubAccountsGetDetailSubAccountMarginAccount>(
      '/sapi/v1/sub-account/margin/account',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSummarySubAccountMarginAccount(this: Binance.Api, params: ISubAccountsGetSummarySubAccountMarginAccountParameters) {
    return this.sendRequest<ISubAccountsGetSummarySubAccountMarginAccountParameters, ISubAccountsGetSummarySubAccountMarginAccount>(
      '/sapi/v1/sub-account/margin/accountSummary',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsEnableFuturesSubAccount(this: Binance.Api, params: ISubAccountsEnableFuturesSubAccountParameters) {
    return this.sendRequest<ISubAccountsEnableFuturesSubAccountParameters, ISubAccountsEnableFuturesSubAccount>(
      '/sapi/v1/sub-account/futures/enable',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetDetailSubAccountFuturesAccount(this: Binance.Api, params: ISubAccountsGetDetailSubAccountFuturesAccountParameters) {
    return this.sendRequest<ISubAccountsGetDetailSubAccountFuturesAccountParameters, ISubAccountsGetDetailSubAccountFuturesAccount>(
      '/sapi/v1/sub-account/futures/account',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSummarySubAccountFuturesAccount(this: Binance.Api, params: ISubAccountsGetSummarySubAccountFuturesAccountParameters) {
    return this.sendRequest<ISubAccountsGetSummarySubAccountFuturesAccountParameters, ISubAccountsGetSummarySubAccountFuturesAccount>(
      '/sapi/v1/sub-account/futures/accountSummary',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetFuturesPositionRiskSubAccount(this: Binance.Api, params: ISubAccountsGetFuturesPositionRiskSubAccountParameters) {
    return this.sendRequest<ISubAccountsGetFuturesPositionRiskSubAccountParameters, ISubAccountsGetFuturesPositionRiskSubAccount[]>(
      '/sapi/v1/sub-account/futures/positionRisk',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsFuturesTransferSubAccount(this: Binance.Api, params: ISubAccountsFuturesTransferSubAccountParameters) {
    return this.sendRequest<ISubAccountsFuturesTransferSubAccountParameters, ISubAccountsFuturesTransferSubAccount>(
      '/sapi/v1/sub-account/futures/transfer',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsMarginTransferSubAccount(this: Binance.Api, params: ISubAccountsMarginTransferSubAccountParameters) {
    return this.sendRequest<ISubAccountsMarginTransferSubAccountParameters, ISubAccountsMarginTransferSubAccount>(
      '/sapi/v1/sub-account/margin/transfer',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsTransferSubAccountSameMaster(this: Binance.Api, params: ISubAccountsTransferSubAccountSameMasterParameters) {
    return this.sendRequest<ISubAccountsTransferSubAccountSameMasterParameters, ISubAccountsTransferSubAccountSameMaster>(
      '/sapi/v1/sub-account/transfer/subToSub',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsTransferToMaster(this: Binance.Api, params: ISubAccountsTransferToMasterParameters) {
    return this.sendRequest<ISubAccountsTransferToMasterParameters, ISubAccountsTransferToMaster>(
      '/sapi/v1/sub-account/transfer/subToMaster',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsSubAccountTransferHistory(this: Binance.Api, params: ISubAccountsSubAccountTransferHistoryParameters) {
    return this.sendRequest<ISubAccountsSubAccountTransferHistoryParameters, ISubAccountsSubAccountTransferHistory[]>(
      '/sapi/v1/sub-account/transfer/subUserHistory',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsUniversalTransfer(this: Binance.Api, params: ISubAccountsUniversalTransferParameters) {
    return this.sendRequest<ISubAccountsUniversalTransferParameters, ISubAccountsUniversalTransfer>(
      '/sapi/v1/sub-account/universalTransfer',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsQueryUniversalTransferHistory(this: Binance.Api, params: ISubAccountsQueryUniversalTransferHistoryParameters) {
    return this.sendRequest<ISubAccountsQueryUniversalTransferHistoryParameters, ISubAccountsQueryUniversalTransferHistory[]>(
      '/sapi/v1/sub-account/universalTransfer',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetDetailSubAccountFuturesAccountV2(this: Binance.Api, params: ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters) {
    return this.sendRequest<ISubAccountsGetDetailSubAccountFuturesAccountV2Parameters, ISubAccountsGetDetailSubAccountFuturesAccountV2>(
      '/sapi/v2/sub-account/futures/account',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetSummarySubAccountFuturesAccountV2(this: Binance.Api, params: ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters) {
    return this.sendRequest<ISubAccountsGetSummarySubAccountFuturesAccountV2Parameters, ISubAccountsGetSummarySubAccountFuturesAccountV2>(
      '/sapi/v2/sub-account/futures/accountSummary',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsGetFuturesPositionRiskSubAccountV2(this: Binance.Api, params: ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters) {
    return this.sendRequest<ISubAccountsGetFuturesPositionRiskSubAccountV2Parameters, ISubAccountsGetFuturesPositionRiskSubAccountV2>(
      '/sapi/v2/sub-account/futures/positionRisk',
      params,
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  /**
   * Warning: This function hasn't been tested.
   */
  subAccountsEnableLeverageTokenSubAccount(this: Binance.Api, params: ISubAccountsEnableLeverageTokenSubAccountParameters) {
    return this.sendRequest<ISubAccountsEnableLeverageTokenSubAccountParameters, ISubAccountsEnableLeverageTokenSubAccount>(
      '/sapi/v1/sub-account/blvt/enable',
      params,
      Binance.ERequestMethod.POST,
      Binance.ESecurityType.USER_DATA
    );
  }
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

export type ISubAccountsQuerySubAccountSpotAssetTransferHistorySAPI = ISubAccountsQuerySubAccountSpotAssetTransferHistoryItem;

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

export interface ISubAccountsGetSummarySubAccountMarginAccountParameters extends Binance.IRequestParameters {}

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

export interface ISubAccountsGetSummarySubAccountFuturesAccountParameters extends Binance.IRequestParameters {}

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
