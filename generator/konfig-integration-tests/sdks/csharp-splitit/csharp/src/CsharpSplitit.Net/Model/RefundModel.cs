/*
 * splitit-web-api-v3
 *
 * Splitit's Web API
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
using OpenAPIDateConverter = CsharpSplitit.Net.Client.OpenAPIDateConverter;

namespace CsharpSplitit.Net.Model
{
    /// <summary>
    /// RefundModel
    /// </summary>
    [DataContract(Name = "RefundModel")]
    public partial class RefundModel : IEquatable<RefundModel>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "Status", IsRequired = true, EmitDefaultValue = true)]
        public RefundStatus Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="RefundModel" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RefundModel() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RefundModel" /> class.
        /// </summary>
        /// <param name="refundId">refundId.</param>
        /// <param name="submitDate">submitDate (required).</param>
        /// <param name="totalAmount">totalAmount (required).</param>
        /// <param name="status">status (required).</param>
        /// <param name="nonCreditRefundAmount">nonCreditRefundAmount (required).</param>
        /// <param name="creditRefundAmount">creditRefundAmount (required).</param>
        public RefundModel(string refundId = default(string), DateTime submitDate = default(DateTime), double totalAmount = default(double), RefundStatus status = default(RefundStatus), double nonCreditRefundAmount = default(double), double creditRefundAmount = default(double))
        {
            this.SubmitDate = submitDate;
            this.TotalAmount = totalAmount;
            this.Status = status;
            this.NonCreditRefundAmount = nonCreditRefundAmount;
            this.CreditRefundAmount = creditRefundAmount;
            this.RefundId = refundId;
        }

        /// <summary>
        /// Gets or Sets RefundId
        /// </summary>
        [DataMember(Name = "RefundId", EmitDefaultValue = false)]
        public string RefundId { get; set; }

        /// <summary>
        /// Gets or Sets SubmitDate
        /// </summary>
        [DataMember(Name = "SubmitDate", IsRequired = true, EmitDefaultValue = true)]
        public DateTime SubmitDate { get; set; }

        /// <summary>
        /// Gets or Sets TotalAmount
        /// </summary>
        [DataMember(Name = "TotalAmount", IsRequired = true, EmitDefaultValue = true)]
        public double TotalAmount { get; set; }

        /// <summary>
        /// Gets or Sets NonCreditRefundAmount
        /// </summary>
        [DataMember(Name = "NonCreditRefundAmount", IsRequired = true, EmitDefaultValue = true)]
        public double NonCreditRefundAmount { get; set; }

        /// <summary>
        /// Gets or Sets CreditRefundAmount
        /// </summary>
        [DataMember(Name = "CreditRefundAmount", IsRequired = true, EmitDefaultValue = true)]
        public double CreditRefundAmount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RefundModel {\n");
            sb.Append("  RefundId: ").Append(RefundId).Append("\n");
            sb.Append("  SubmitDate: ").Append(SubmitDate).Append("\n");
            sb.Append("  TotalAmount: ").Append(TotalAmount).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  NonCreditRefundAmount: ").Append(NonCreditRefundAmount).Append("\n");
            sb.Append("  CreditRefundAmount: ").Append(CreditRefundAmount).Append("\n");
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
            return this.Equals(input as RefundModel);
        }

        /// <summary>
        /// Returns true if RefundModel instances are equal
        /// </summary>
        /// <param name="input">Instance of RefundModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RefundModel input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.RefundId == input.RefundId ||
                    (this.RefundId != null &&
                    this.RefundId.Equals(input.RefundId))
                ) && 
                (
                    this.SubmitDate == input.SubmitDate ||
                    (this.SubmitDate != null &&
                    this.SubmitDate.Equals(input.SubmitDate))
                ) && 
                (
                    this.TotalAmount == input.TotalAmount ||
                    this.TotalAmount.Equals(input.TotalAmount)
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.NonCreditRefundAmount == input.NonCreditRefundAmount ||
                    this.NonCreditRefundAmount.Equals(input.NonCreditRefundAmount)
                ) && 
                (
                    this.CreditRefundAmount == input.CreditRefundAmount ||
                    this.CreditRefundAmount.Equals(input.CreditRefundAmount)
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
                if (this.RefundId != null)
                {
                    hashCode = (hashCode * 59) + this.RefundId.GetHashCode();
                }
                if (this.SubmitDate != null)
                {
                    hashCode = (hashCode * 59) + this.SubmitDate.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.TotalAmount.GetHashCode();
                hashCode = (hashCode * 59) + this.Status.GetHashCode();
                hashCode = (hashCode * 59) + this.NonCreditRefundAmount.GetHashCode();
                hashCode = (hashCode * 59) + this.CreditRefundAmount.GetHashCode();
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