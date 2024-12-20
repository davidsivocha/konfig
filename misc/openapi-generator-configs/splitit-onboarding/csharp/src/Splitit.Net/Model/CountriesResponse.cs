/*
 * Splitit.OnBoarding.Api.V2
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://konfigthis.com
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Splitit.Net.Client.OpenAPIDateConverter;

namespace Splitit.Net.Model
{
    /// <summary>
    /// CountriesResponse
    /// </summary>
    [DataContract(Name = "CountriesResponse")]
    public partial class CountriesResponse : IEquatable<CountriesResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CountriesResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CountriesResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CountriesResponse" /> class.
        /// </summary>
        /// <param name="countries">countries (required).</param>
        public CountriesResponse(List<CountryResponse> countries = default(List<CountryResponse>))
        {
            // to ensure "countries" is required (not null)
            if (countries == null)
            {
                throw new ArgumentNullException("countries is a required property for CountriesResponse and cannot be null");
            }
            this.Countries = countries;
        }

        /// <summary>
        /// Gets or Sets Countries
        /// </summary>
        [DataMember(Name = "countries", IsRequired = true, EmitDefaultValue = true)]
        public List<CountryResponse> Countries { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CountriesResponse {\n");
            sb.Append("  Countries: ").Append(Countries).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as CountriesResponse);
        }

        /// <summary>
        /// Returns true if CountriesResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of CountriesResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CountriesResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Countries == input.Countries ||
                    this.Countries != null &&
                    input.Countries != null &&
                    this.Countries.SequenceEqual(input.Countries)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Countries != null)
                {
                    hashCode = (hashCode * 59) + this.Countries.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
