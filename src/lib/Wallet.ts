import { Binance } from '../Binance';

export interface IWalletDepositHistory {
  success: boolean;
  depositList: IWalletDepositHistoryItem[];
}

export interface IWalletDepositHistoryItem {
  insertTime: number;
  amount: number;
  asset: string;
  address: string;
  txId: string;
  status: number;
}

export class Wallet {
  walletDepositHistory(this: Binance.Api) {
    return this.sendRequest<IWalletDepositHistory>('/wapi/v3/depositHistory.html', {}, Binance.ERequestMethod.GET, Binance.ESecurityType.USER_DATA);
  }
}
