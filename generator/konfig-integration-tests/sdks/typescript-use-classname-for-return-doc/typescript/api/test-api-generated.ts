/* tslint:disable */
/* eslint-disable */
/*
typescript-use-classname-for-return-doc API

A simple API based for testing typescript-use-classname-for-return-doc.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TestFetchResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TestApi - axios parameter creator
 * @export
 */
export const TestApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Provide an input parameter to receive a JSON value with properties.
         * @summary Fetches a JSON value based on input parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetch: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/simple-endpoint`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, keyParamName: "X-API-KEY", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TestApi - functional programming interface
 * @export
 */
export const TestApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TestApiAxiosParamCreator(configuration)
    return {
        /**
         * Provide an input parameter to receive a JSON value with properties.
         * @summary Fetches a JSON value based on input parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetch(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TestFetchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetch(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TestApi - factory interface
 * @export
 */
export const TestApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TestApiFp(configuration)
    return {
        /**
         * Provide an input parameter to receive a JSON value with properties.
         * @summary Fetches a JSON value based on input parameter
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetch(options?: AxiosRequestConfig): AxiosPromise<TestFetchResponse> {
            return localVarFp.fetch(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TestApiGenerated - object-oriented interface
 * @export
 * @class TestApiGenerated
 * @extends {BaseAPI}
 */
export class TestApiGenerated extends BaseAPI {
    /**
     * Provide an input parameter to receive a JSON value with properties.
     * @summary Fetches a JSON value based on input parameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TestApiGenerated
     */
    public fetch(options?: AxiosRequestConfig) {
        return TestApiFp(this.configuration).fetch(options).then((request) => request(this.axios, this.basePath));
    }
}