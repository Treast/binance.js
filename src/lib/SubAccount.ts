import { Binance } from '../Binance';

export class SubAccounts {
  subAccountsList(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, ISubAccountsList>(
      '/wapi/v3/sub-account/list.html',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  subAccountsTransferHistory(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, ISubAccountsList>(
      '/wapi/v3/sub-account/transfer/history.html',
      {},
      Binance.ERequestMethod.GET,
      Binance.ESecurityType.USER_DATA
    );
  }

  subAccountsAssets(this: Binance.Api) {
    return this.sendRequest<Binance.IRequestParameters, ISubAccountsAssets>(
      '/wapi/v3/sub-account/assets.html',
      {},
      Binance.ERequestMethod.GET,
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
