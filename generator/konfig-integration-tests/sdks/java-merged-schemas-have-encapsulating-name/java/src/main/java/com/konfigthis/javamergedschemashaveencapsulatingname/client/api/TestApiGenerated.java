/*
 * java-merged-schemas-have-encapsulating-name API
 * A simple API based for testing java-merged-schemas-have-encapsulating-name.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@example.com
 *
 * NOTE: This class is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


package com.konfigthis.javamergedschemashaveencapsulatingname.client.api;

import com.konfigthis.javamergedschemashaveencapsulatingname.client.ApiCallback;
import com.konfigthis.javamergedschemashaveencapsulatingname.client.ApiClient;
import com.konfigthis.javamergedschemashaveencapsulatingname.client.ApiException;
import com.konfigthis.javamergedschemashaveencapsulatingname.client.ApiResponse;
import com.konfigthis.javamergedschemashaveencapsulatingname.client.Configuration;
import com.konfigthis.javamergedschemashaveencapsulatingname.client.Pair;
import com.konfigthis.javamergedschemashaveencapsulatingname.client.ProgressRequestBody;
import com.konfigthis.javamergedschemashaveencapsulatingname.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import com.konfigthis.javamergedschemashaveencapsulatingname.client.model.CSFLHResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.GenericType;

public class TestApiGenerated {
    private ApiClient localVarApiClient;
    private int localHostIndex;
    private String localCustomBaseUrl;

    public TestApiGenerated() throws IllegalArgumentException {
        this(Configuration.getDefaultApiClient());
    }

    public TestApiGenerated(ApiClient apiClient) throws IllegalArgumentException {
        if (apiClient.getApiKey() == null) {
            throw new IllegalArgumentException("\"X-API-KEY\" is required but no API key was provided. Please set \"X-API-KEY\" with ApiClient#setApiKey(String).");
        }
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public int getHostIndex() {
        return localHostIndex;
    }

    public void setHostIndex(int hostIndex) {
        this.localHostIndex = hostIndex;
    }

    public String getCustomBaseUrl() {
        return localCustomBaseUrl;
    }

    public void setCustomBaseUrl(String customBaseUrl) {
        this.localCustomBaseUrl = customBaseUrl;
    }

    private okhttp3.Call fetchCall(final ApiCallback _callback) throws ApiException {
        String basePath = null;
        // Operation Servers
        String[] localBasePaths = new String[] {  };

        // Determine Base Path to Use
        if (localCustomBaseUrl != null){
            basePath = localCustomBaseUrl;
        } else if ( localBasePaths.length > 0 ) {
            basePath = localBasePaths[localHostIndex];
        } else {
            basePath = null;
        }

        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/simple-endpoint";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        if (localVarContentType != null) {
            localVarHeaderParams.put("Content-Type", localVarContentType);
        }

        String[] localVarAuthNames = new String[] { "ApiKey" };
        return localVarApiClient.buildCall(basePath, localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call fetchValidateBeforeCall(final ApiCallback _callback) throws ApiException {
        return fetchCall(_callback);

    }


    private ApiResponse<CSFLHResponse> fetchWithHttpInfo() throws ApiException {
        okhttp3.Call localVarCall = fetchValidateBeforeCall(null);
        Type localVarReturnType = new TypeToken<CSFLHResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    private okhttp3.Call fetchAsync(final ApiCallback<CSFLHResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = fetchValidateBeforeCall(_callback);
        Type localVarReturnType = new TypeToken<CSFLHResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }

    public class FetchRequestBuilder {

        private FetchRequestBuilder() {
        }

        /**
         * Build call for fetch
         * @param _callback ApiCallback API callback
         * @return Call to execute
         * @throws ApiException If fail to serialize the request body object
         * @http.response.details
         <table summary="Response Details" border="1">
            <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
            <tr><td> 200 </td><td> Successful response </td><td>  -  </td></tr>
         </table>
         */
        public okhttp3.Call buildCall(final ApiCallback _callback) throws ApiException {
            return fetchCall(_callback);
        }


        /**
         * Execute fetch request
         * @return CSFLHResponse
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         * @http.response.details
         <table summary="Response Details" border="1">
            <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
            <tr><td> 200 </td><td> Successful response </td><td>  -  </td></tr>
         </table>
         */
        public CSFLHResponse execute() throws ApiException {
            ApiResponse<CSFLHResponse> localVarResp = fetchWithHttpInfo();
            return localVarResp.getResponseBody();
        }

        /**
         * Execute fetch request with HTTP info returned
         * @return ApiResponse&lt;CSFLHResponse&gt;
         * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
         * @http.response.details
         <table summary="Response Details" border="1">
            <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
            <tr><td> 200 </td><td> Successful response </td><td>  -  </td></tr>
         </table>
         */
        public ApiResponse<CSFLHResponse> executeWithHttpInfo() throws ApiException {
            return fetchWithHttpInfo();
        }

        /**
         * Execute fetch request (asynchronously)
         * @param _callback The callback to be executed when the API call finishes
         * @return The request call
         * @throws ApiException If fail to process the API call, e.g. serializing the request body object
         * @http.response.details
         <table summary="Response Details" border="1">
            <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
            <tr><td> 200 </td><td> Successful response </td><td>  -  </td></tr>
         </table>
         */
        public okhttp3.Call executeAsync(final ApiCallback<CSFLHResponse> _callback) throws ApiException {
            return fetchAsync(_callback);
        }
    }

    /**
     * Fetches a JSON value based on input parameter
     * Provide an input parameter to receive a JSON value with properties.
     * @return FetchRequestBuilder
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> Successful response </td><td>  -  </td></tr>
     </table>
     */
    public FetchRequestBuilder fetch() throws IllegalArgumentException {
        return new FetchRequestBuilder();
    }
}