export declare namespace Binance {
    class Api {
        private apiKey;
        private secretKey;
        private testMode;
        private baseUrlApiLive;
        private baseUrlApiTest;
        private securityTypeRequiringSignature;
        constructor(apiKey: string, secretKey: string, testMode?: boolean);
        protected sendRequest<K, T>(url: string, params: K, method: ERequestMethod, securityType: ESecurityType): Promise<T>;
        private generateQuery;
        private defineSecurityType;
        walletSystemStatus: (this: Api) => Promise<import("./lib/Wallet").IWalletSystemStatus>;
        walletDepositHistory: (this: Api, params?: import("./lib/Wallet").IWalletDepositHistoryParameters) => Promise<import("./lib/Wallet").IWalletDepositHistory>;
        walletAccountStatus: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletAccountStatus>;
        walletApiTradingStatus: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletApiTradingStatus>;
        walletAssetDetail: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletAssetDetail>;
        walletDailyAccountSnapshot: (this: Api, params: import("./lib/Wallet").IWalletDailyAccountSnapshotParameters) => Promise<import("./lib/Wallet").IWalletDailyAccountSnapshot>;
        walletAllCoins: (this: Api, params?: IRequestParameters) => Promise<import("./lib/Wallet").IWalletAllCoins>;
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
        MARKET_DATA = "MARKET_DATA"
    }
}
