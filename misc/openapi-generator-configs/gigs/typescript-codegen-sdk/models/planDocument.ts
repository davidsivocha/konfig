/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type planDocument = {
    /**
     * Type of object is always `planDocument`.
     */
    object: string;
    /**
     * Unique identifier for the given document.
     */
    id: string;
    /**
     * The name of the document.
     */
    name: string;
    /**
     * Unique identifier for the plan associated to this document.
     */
    plan: string;
    /**
     * The MIME type for the given document.
     */
    type: string;
    /**
     * The URL at which the document can be retrieved.
     */
    url: string;
    /**
     * The time the document was created.
     */
    createdAt: string;
};

