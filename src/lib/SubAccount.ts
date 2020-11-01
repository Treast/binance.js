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
