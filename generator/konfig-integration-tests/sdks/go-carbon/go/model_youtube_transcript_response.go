/*
Carbon

Connect external data to LLMs, no matter the source.

API version: 1.0.0
*/

// Code generated by Konfig (https://konfigthis.com); DO NOT EDIT.

package carbon

import (
	"encoding/json"
)

// YoutubeTranscriptResponse struct for YoutubeTranscriptResponse
type YoutubeTranscriptResponse struct {
	Status string `json:"status"`
	Error NullableString `json:"error"`
	Data NullableString `json:"data"`
	RawTranscript []map[string]RawTranscriptPropertyInnerValue `json:"raw_transcript"`
}

// NewYoutubeTranscriptResponse instantiates a new YoutubeTranscriptResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewYoutubeTranscriptResponse(status string, error_ NullableString, data NullableString, rawTranscript []map[string]RawTranscriptPropertyInnerValue) *YoutubeTranscriptResponse {
	this := YoutubeTranscriptResponse{}
	this.Status = status
	this.Error = error_
	this.Data = data
	this.RawTranscript = rawTranscript
	return &this
}

// NewYoutubeTranscriptResponseWithDefaults instantiates a new YoutubeTranscriptResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewYoutubeTranscriptResponseWithDefaults() *YoutubeTranscriptResponse {
	this := YoutubeTranscriptResponse{}
	return &this
}

// GetStatus returns the Status field value
func (o *YoutubeTranscriptResponse) GetStatus() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *YoutubeTranscriptResponse) GetStatusOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *YoutubeTranscriptResponse) SetStatus(v string) {
	o.Status = v
}

// GetError returns the Error field value
// If the value is explicit nil, the zero value for string will be returned
func (o *YoutubeTranscriptResponse) GetError() string {
	if o == nil || o.Error.Get() == nil {
		var ret string
		return ret
	}

	return *o.Error.Get()
}

// GetErrorOk returns a tuple with the Error field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *YoutubeTranscriptResponse) GetErrorOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return o.Error.Get(), o.Error.IsSet()
}

// SetError sets field value
func (o *YoutubeTranscriptResponse) SetError(v string) {
	o.Error.Set(&v)
}

// GetData returns the Data field value
// If the value is explicit nil, the zero value for string will be returned
func (o *YoutubeTranscriptResponse) GetData() string {
	if o == nil || o.Data.Get() == nil {
		var ret string
		return ret
	}

	return *o.Data.Get()
}

// GetDataOk returns a tuple with the Data field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *YoutubeTranscriptResponse) GetDataOk() (*string, bool) {
	if o == nil {
    return nil, false
	}
	return o.Data.Get(), o.Data.IsSet()
}

// SetData sets field value
func (o *YoutubeTranscriptResponse) SetData(v string) {
	o.Data.Set(&v)
}

// GetRawTranscript returns the RawTranscript field value
// If the value is explicit nil, the zero value for []map[string]RawTranscriptPropertyInnerValue will be returned
func (o *YoutubeTranscriptResponse) GetRawTranscript() []map[string]RawTranscriptPropertyInnerValue {
	if o == nil {
		var ret []map[string]RawTranscriptPropertyInnerValue
		return ret
	}

	return o.RawTranscript
}

// GetRawTranscriptOk returns a tuple with the RawTranscript field value
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *YoutubeTranscriptResponse) GetRawTranscriptOk() ([]map[string]RawTranscriptPropertyInnerValue, bool) {
	if o == nil || isNil(o.RawTranscript) {
    return nil, false
	}
	return o.RawTranscript, true
}

// SetRawTranscript sets field value
func (o *YoutubeTranscriptResponse) SetRawTranscript(v []map[string]RawTranscriptPropertyInnerValue) {
	o.RawTranscript = v
}

func (o YoutubeTranscriptResponse) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["status"] = o.Status
	}
	if true {
		toSerialize["error"] = o.Error.Get()
	}
	if true {
		toSerialize["data"] = o.Data.Get()
	}
	if o.RawTranscript != nil {
		toSerialize["raw_transcript"] = o.RawTranscript
	}
	return json.Marshal(toSerialize)
}

type NullableYoutubeTranscriptResponse struct {
	value *YoutubeTranscriptResponse
	isSet bool
}

func (v NullableYoutubeTranscriptResponse) Get() *YoutubeTranscriptResponse {
	return v.value
}

func (v *NullableYoutubeTranscriptResponse) Set(val *YoutubeTranscriptResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableYoutubeTranscriptResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableYoutubeTranscriptResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableYoutubeTranscriptResponse(val *YoutubeTranscriptResponse) *NullableYoutubeTranscriptResponse {
	return &NullableYoutubeTranscriptResponse{value: val, isSet: true}
}

func (v NullableYoutubeTranscriptResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableYoutubeTranscriptResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

