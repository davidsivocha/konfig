/*
Carbon

Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrderDir } from './order-dir';
import { Pagination } from './pagination';
import { WebhookFilters } from './webhook-filters';
import { WebhookOrderByColumns } from './webhook-order-by-columns';

/**
 * 
 * @export
 * @interface WebhookQueryInput
 */
export interface WebhookQueryInput {
    /**
     * 
     * @type {Pagination}
     * @memberof WebhookQueryInput
     */
    'pagination'?: Pagination;
    /**
     * 
     * @type {WebhookOrderByColumns}
     * @memberof WebhookQueryInput
     */
    'order_by'?: WebhookOrderByColumns;
    /**
     * 
     * @type {OrderDir}
     * @memberof WebhookQueryInput
     */
    'order_dir'?: OrderDir;
    /**
     * 
     * @type {WebhookFilters}
     * @memberof WebhookQueryInput
     */
    'filters'?: WebhookFilters;
}
