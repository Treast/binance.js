import { Binance } from '../Binance';
export declare class SubAccounts {
    subAccountsList(this: Binance.Api): Promise<ISubAccountsList>;
    subAccountsTransferHistory(this: Binance.Api): Promise<ISubAccountsList>;
    subAccountsAssets(this: Binance.Api): Promise<ISubAccountsAssets>;
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
