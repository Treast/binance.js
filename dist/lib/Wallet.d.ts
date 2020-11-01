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
export declare class Wallet {
    walletDepositHistory(this: Binance.Api): Promise<IWalletDepositHistory>;
}
