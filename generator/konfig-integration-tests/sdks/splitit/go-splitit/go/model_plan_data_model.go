/*
splitit-web-api-v3

Splitit's Web API

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package splitit

import (
	"encoding/json"
	"time"
)

// PlanDataModel struct for PlanDataModel
type PlanDataModel struct {
	TotalAmount float32 `json:"TotalAmount"`
	Currency *string `json:"Currency,omitempty"`
	NumberOfInstallments *int32 `json:"NumberOfInstallments,omitempty"`
	TerminalId *string `json:"TerminalId,omitempty"`
	PurchaseMethod PurchaseMethod `json:"PurchaseMethod"`
	RefOrderNumber *string `json:"RefOrderNumber,omitempty"`
	ExtendedParams *map[string]string `json:"ExtendedParams,omitempty"`
	FirstInstallmentAmount *float32 `json:"FirstInstallmentAmount,omitempty"`
	FirstInstallmentDate *time.Time `json:"FirstInstallmentDate,omitempty"`
}

// NewPlanDataModel instantiates a new PlanDataModel object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPlanDataModel(totalAmount float32, purchaseMethod PurchaseMethod) *PlanDataModel {
	this := PlanDataModel{}
	this.TotalAmount = totalAmount
	this.PurchaseMethod = purchaseMethod
	return &this
}

// NewPlanDataModelWithDefaults instantiates a new PlanDataModel object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPlanDataModelWithDefaults() *PlanDataModel {
	this := PlanDataModel{}
	return &this
}

// GetTotalAmount returns the TotalAmount field value
func (o *PlanDataModel) GetTotalAmount() float32 {
	if o == nil {
		var ret float32
		return ret
	}

	return o.TotalAmount
}

// GetTotalAmountOk returns a tuple with the TotalAmount field value
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetTotalAmountOk() (*float32, bool) {
	if o == nil {
    return nil, false
	}
	return &o.TotalAmount, true
}

// SetTotalAmount sets field value
func (o *PlanDataModel) SetTotalAmount(v float32) {
	o.TotalAmount = v
}

// GetCurrency returns the Currency field value if set, zero value otherwise.
func (o *PlanDataModel) GetCurrency() string {
	if o == nil || isNil(o.Currency) {
		var ret string
		return ret
	}
	return *o.Currency
}

// GetCurrencyOk returns a tuple with the Currency field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetCurrencyOk() (*string, bool) {
	if o == nil || isNil(o.Currency) {
    return nil, false
	}
	return o.Currency, true
}

// HasCurrency returns a boolean if a field has been set.
func (o *PlanDataModel) HasCurrency() bool {
	if o != nil && !isNil(o.Currency) {
		return true
	}

	return false
}

// SetCurrency gets a reference to the given string and assigns it to the Currency field.
func (o *PlanDataModel) SetCurrency(v string) {
	o.Currency = &v
}

// GetNumberOfInstallments returns the NumberOfInstallments field value if set, zero value otherwise.
func (o *PlanDataModel) GetNumberOfInstallments() int32 {
	if o == nil || isNil(o.NumberOfInstallments) {
		var ret int32
		return ret
	}
	return *o.NumberOfInstallments
}

// GetNumberOfInstallmentsOk returns a tuple with the NumberOfInstallments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetNumberOfInstallmentsOk() (*int32, bool) {
	if o == nil || isNil(o.NumberOfInstallments) {
    return nil, false
	}
	return o.NumberOfInstallments, true
}

// HasNumberOfInstallments returns a boolean if a field has been set.
func (o *PlanDataModel) HasNumberOfInstallments() bool {
	if o != nil && !isNil(o.NumberOfInstallments) {
		return true
	}

	return false
}

// SetNumberOfInstallments gets a reference to the given int32 and assigns it to the NumberOfInstallments field.
func (o *PlanDataModel) SetNumberOfInstallments(v int32) {
	o.NumberOfInstallments = &v
}

// GetTerminalId returns the TerminalId field value if set, zero value otherwise.
func (o *PlanDataModel) GetTerminalId() string {
	if o == nil || isNil(o.TerminalId) {
		var ret string
		return ret
	}
	return *o.TerminalId
}

// GetTerminalIdOk returns a tuple with the TerminalId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetTerminalIdOk() (*string, bool) {
	if o == nil || isNil(o.TerminalId) {
    return nil, false
	}
	return o.TerminalId, true
}

// HasTerminalId returns a boolean if a field has been set.
func (o *PlanDataModel) HasTerminalId() bool {
	if o != nil && !isNil(o.TerminalId) {
		return true
	}

	return false
}

// SetTerminalId gets a reference to the given string and assigns it to the TerminalId field.
func (o *PlanDataModel) SetTerminalId(v string) {
	o.TerminalId = &v
}

// GetPurchaseMethod returns the PurchaseMethod field value
func (o *PlanDataModel) GetPurchaseMethod() PurchaseMethod {
	if o == nil {
		var ret PurchaseMethod
		return ret
	}

	return o.PurchaseMethod
}

// GetPurchaseMethodOk returns a tuple with the PurchaseMethod field value
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetPurchaseMethodOk() (*PurchaseMethod, bool) {
	if o == nil {
    return nil, false
	}
	return &o.PurchaseMethod, true
}

// SetPurchaseMethod sets field value
func (o *PlanDataModel) SetPurchaseMethod(v PurchaseMethod) {
	o.PurchaseMethod = v
}

// GetRefOrderNumber returns the RefOrderNumber field value if set, zero value otherwise.
func (o *PlanDataModel) GetRefOrderNumber() string {
	if o == nil || isNil(o.RefOrderNumber) {
		var ret string
		return ret
	}
	return *o.RefOrderNumber
}

// GetRefOrderNumberOk returns a tuple with the RefOrderNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetRefOrderNumberOk() (*string, bool) {
	if o == nil || isNil(o.RefOrderNumber) {
    return nil, false
	}
	return o.RefOrderNumber, true
}

// HasRefOrderNumber returns a boolean if a field has been set.
func (o *PlanDataModel) HasRefOrderNumber() bool {
	if o != nil && !isNil(o.RefOrderNumber) {
		return true
	}

	return false
}

// SetRefOrderNumber gets a reference to the given string and assigns it to the RefOrderNumber field.
func (o *PlanDataModel) SetRefOrderNumber(v string) {
	o.RefOrderNumber = &v
}

// GetExtendedParams returns the ExtendedParams field value if set, zero value otherwise.
func (o *PlanDataModel) GetExtendedParams() map[string]string {
	if o == nil || isNil(o.ExtendedParams) {
		var ret map[string]string
		return ret
	}
	return *o.ExtendedParams
}

// GetExtendedParamsOk returns a tuple with the ExtendedParams field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetExtendedParamsOk() (*map[string]string, bool) {
	if o == nil || isNil(o.ExtendedParams) {
    return nil, false
	}
	return o.ExtendedParams, true
}

// HasExtendedParams returns a boolean if a field has been set.
func (o *PlanDataModel) HasExtendedParams() bool {
	if o != nil && !isNil(o.ExtendedParams) {
		return true
	}

	return false
}

// SetExtendedParams gets a reference to the given map[string]string and assigns it to the ExtendedParams field.
func (o *PlanDataModel) SetExtendedParams(v map[string]string) {
	o.ExtendedParams = &v
}

// GetFirstInstallmentAmount returns the FirstInstallmentAmount field value if set, zero value otherwise.
func (o *PlanDataModel) GetFirstInstallmentAmount() float32 {
	if o == nil || isNil(o.FirstInstallmentAmount) {
		var ret float32
		return ret
	}
	return *o.FirstInstallmentAmount
}

// GetFirstInstallmentAmountOk returns a tuple with the FirstInstallmentAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetFirstInstallmentAmountOk() (*float32, bool) {
	if o == nil || isNil(o.FirstInstallmentAmount) {
    return nil, false
	}
	return o.FirstInstallmentAmount, true
}

// HasFirstInstallmentAmount returns a boolean if a field has been set.
func (o *PlanDataModel) HasFirstInstallmentAmount() bool {
	if o != nil && !isNil(o.FirstInstallmentAmount) {
		return true
	}

	return false
}

// SetFirstInstallmentAmount gets a reference to the given float32 and assigns it to the FirstInstallmentAmount field.
func (o *PlanDataModel) SetFirstInstallmentAmount(v float32) {
	o.FirstInstallmentAmount = &v
}

// GetFirstInstallmentDate returns the FirstInstallmentDate field value if set, zero value otherwise.
func (o *PlanDataModel) GetFirstInstallmentDate() time.Time {
	if o == nil || isNil(o.FirstInstallmentDate) {
		var ret time.Time
		return ret
	}
	return *o.FirstInstallmentDate
}

// GetFirstInstallmentDateOk returns a tuple with the FirstInstallmentDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PlanDataModel) GetFirstInstallmentDateOk() (*time.Time, bool) {
	if o == nil || isNil(o.FirstInstallmentDate) {
    return nil, false
	}
	return o.FirstInstallmentDate, true
}

// HasFirstInstallmentDate returns a boolean if a field has been set.
func (o *PlanDataModel) HasFirstInstallmentDate() bool {
	if o != nil && !isNil(o.FirstInstallmentDate) {
		return true
	}

	return false
}

// SetFirstInstallmentDate gets a reference to the given time.Time and assigns it to the FirstInstallmentDate field.
func (o *PlanDataModel) SetFirstInstallmentDate(v time.Time) {
	o.FirstInstallmentDate = &v
}

func (o PlanDataModel) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["TotalAmount"] = o.TotalAmount
	}
	if !isNil(o.Currency) {
		toSerialize["Currency"] = o.Currency
	}
	if !isNil(o.NumberOfInstallments) {
		toSerialize["NumberOfInstallments"] = o.NumberOfInstallments
	}
	if !isNil(o.TerminalId) {
		toSerialize["TerminalId"] = o.TerminalId
	}
	if true {
		toSerialize["PurchaseMethod"] = o.PurchaseMethod
	}
	if !isNil(o.RefOrderNumber) {
		toSerialize["RefOrderNumber"] = o.RefOrderNumber
	}
	if !isNil(o.ExtendedParams) {
		toSerialize["ExtendedParams"] = o.ExtendedParams
	}
	if !isNil(o.FirstInstallmentAmount) {
		toSerialize["FirstInstallmentAmount"] = o.FirstInstallmentAmount
	}
	if !isNil(o.FirstInstallmentDate) {
		toSerialize["FirstInstallmentDate"] = o.FirstInstallmentDate
	}
	return json.Marshal(toSerialize)
}

type NullablePlanDataModel struct {
	value *PlanDataModel
	isSet bool
}

func (v NullablePlanDataModel) Get() *PlanDataModel {
	return v.value
}

func (v *NullablePlanDataModel) Set(val *PlanDataModel) {
	v.value = val
	v.isSet = true
}

func (v NullablePlanDataModel) IsSet() bool {
	return v.isSet
}

func (v *NullablePlanDataModel) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePlanDataModel(val *PlanDataModel) *NullablePlanDataModel {
	return &NullablePlanDataModel{value: val, isSet: true}
}

func (v NullablePlanDataModel) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePlanDataModel) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

