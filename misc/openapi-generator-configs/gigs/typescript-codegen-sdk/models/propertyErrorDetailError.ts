/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type propertyErrorDetailError = {
    /**
     * Type of object is always `propertyErrorDetail`.
     */
    object: string;
    /**
     * A machine-readable description of the error.
     */
    code: string;
    /**
     * A human readable description of the error.
     */
    message: string;
    /**
     * Name of the property associated with the error.
     */
    property: string;
    /**
     * Suggested alternative value for the field.
     */
    suggestion: string | null;
};

