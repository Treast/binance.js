export declare namespace Binance {
    class Api {
        private apiKey;
        private secretKey;
        private testMode;
        private baseUrlApiLive;
        private baseUrlApiTest;
        private securityTypeRequiringSignature;
        constructor(apiKey: string, secretKey: string, testMode?: boolean);
        protected sendRequest<T>(url: string, params: IRequestParameters, method: ERequestMethod, securityType: ESecurityType): Promise<T>;
        private generateQuery;
        private defineSecurityType;
        walletDepositHistory: (this: Api) => Promise<import("./lib/Wallet").IWalletDepositHistory>;
    }
    interface IRequest {
        headers: IRequestHeaders;
        body: IRequestBody;
        urlQuery: string;
    }
    interface IRequestParameters {
    }
    interface IRequestBody {
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
