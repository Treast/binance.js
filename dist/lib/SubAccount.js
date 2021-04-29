"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccounts = void 0;
const Binance_1 = require("../Binance");
class SubAccounts {
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsList() {
        return this.sendRequest('/wapi/v3/sub-account/list.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsTransferHistory() {
        return this.sendRequest('/wapi/v3/sub-account/transfer/history.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsAssets() {
        return this.sendRequest('/wapi/v3/sub-account/assets.html', {}, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsCreateVirtualSubAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/virtualSubAccount', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountListSAPI(params) {
        return this.sendRequest('/sapi/v1/sub-account/list', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountList(params) {
        return this.sendRequest('/wapi/v3/sub-account/list.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountSpotAssetTransferHistory(params) {
        return this.sendRequest('/wapi/v3/sub-account/transfer/history.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountSpotAssetTransferHistorySAPI(params) {
        return this.sendRequest('/sapi/v1/sub-account/sub/transfer/history', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsSubAccountSpotAssetTransfer(params) {
        return this.sendRequest('/wapi/v3/sub-account/transfer.html', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountFuturesAssetTransferHistory(params) {
        return this.sendRequest('/sapi/v1/sub-account/futures/internalTransfer', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsSubAccountFuturesAssetTransfer(params) {
        return this.sendRequest('/sapi/v1/sub-account/futures/internalTransfer', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountsAssets(params) {
        return this.sendRequest('/wapi/v3/sub-account/assets.html', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountsAssetsSAPI(params) {
        return this.sendRequest('/sapi/v3/sub-account/assets', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQuerySubAccountSpotAssetsSummary(params) {
        return this.sendRequest('/sapi/v1/sub-account/spotSummary', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSubAccountDepositAddress(params) {
        return this.sendRequest('/sapi/v1/capital/deposit/subAddress', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSubAccountDepositHistory(params) {
        return this.sendRequest('/sapi/v1/capital/deposit/subHisrec', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSubAccountStatusMarginFutures(params) {
        return this.sendRequest('/sapi/v1/sub-account/status', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsEnableMarginSubAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/margin/enable', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetDetailSubAccountMarginAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/margin/account', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSummarySubAccountMarginAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/margin/accountSummary', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsEnableFuturesSubAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/futures/enable', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetDetailSubAccountFuturesAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/futures/account', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSummarySubAccountFuturesAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/futures/accountSummary', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetFuturesPositionRiskSubAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/futures/positionRisk', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsFuturesTransferSubAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/futures/transfer', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsMarginTransferSubAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/margin/transfer', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsTransferSubAccountSameMaster(params) {
        return this.sendRequest('/sapi/v1/sub-account/transfer/subToSub', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsTransferToMaster(params) {
        return this.sendRequest('/sapi/v1/sub-account/transfer/subToMaster', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsSubAccountTransferHistory(params) {
        return this.sendRequest('/sapi/v1/sub-account/transfer/subUserHistory', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsUniversalTransfer(params) {
        return this.sendRequest('/sapi/v1/sub-account/universalTransfer', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsQueryUniversalTransferHistory(params) {
        return this.sendRequest('/sapi/v1/sub-account/universalTransfer', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetDetailSubAccountFuturesAccountV2(params) {
        return this.sendRequest('/sapi/v2/sub-account/futures/account', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetSummarySubAccountFuturesAccountV2(params) {
        return this.sendRequest('/sapi/v2/sub-account/futures/accountSummary', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsGetFuturesPositionRiskSubAccountV2(params) {
        return this.sendRequest('/sapi/v2/sub-account/futures/positionRisk', params, Binance_1.Binance.ERequestMethod.GET, Binance_1.Binance.ESecurityType.USER_DATA);
    }
    /**
     * Warning: This function hasn't been tested.
     */
    subAccountsEnableLeverageTokenSubAccount(params) {
        return this.sendRequest('/sapi/v1/sub-account/blvt/enable', params, Binance_1.Binance.ERequestMethod.POST, Binance_1.Binance.ESecurityType.USER_DATA);
    }
}
exports.SubAccounts = SubAccounts;
//# sourceMappingURL=SubAccount.js.map