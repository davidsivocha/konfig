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
    /// PaymentMethodModel
    /// </summary>
    [DataContract(Name = "PaymentMethodModel")]
    public partial class PaymentMethodModel : IEquatable<PaymentMethodModel>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "Type", IsRequired = true, EmitDefaultValue = true)]
        public PaymentMethodType Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentMethodModel" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PaymentMethodModel() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentMethodModel" /> class.
        /// </summary>
        /// <param name="type">type (required).</param>
        /// <param name="card">card.</param>
        /// <param name="token">token.</param>
        /// <param name="bluesnapVaultedShopperToken">bluesnapVaultedShopperToken.</param>
        /// <param name="mockerShopperToken">mockerShopperToken.</param>
        /// <param name="spreedlyToken">spreedlyToken.</param>
        public PaymentMethodModel(PaymentMethodType type = default(PaymentMethodType), CardData card = default(CardData), string token = default(string), BluesnapVaultedShopperToken bluesnapVaultedShopperToken = default(BluesnapVaultedShopperToken), MockerShopperToken mockerShopperToken = default(MockerShopperToken), SpreedlyToken spreedlyToken = default(SpreedlyToken))
        {
            this.Type = type;
            this.Card = card;
            this.Token = token;
            this.BluesnapVaultedShopperToken = bluesnapVaultedShopperToken;
            this.MockerShopperToken = mockerShopperToken;
            this.SpreedlyToken = spreedlyToken;
        }

        /// <summary>
        /// Gets or Sets Card
        /// </summary>
        [DataMember(Name = "Card", EmitDefaultValue = false)]
        public CardData Card { get; set; }

        /// <summary>
        /// Gets or Sets Token
        /// </summary>
        [DataMember(Name = "Token", EmitDefaultValue = false)]
        public string Token { get; set; }

        /// <summary>
        /// Gets or Sets BluesnapVaultedShopperToken
        /// </summary>
        [DataMember(Name = "BluesnapVaultedShopperToken", EmitDefaultValue = false)]
        public BluesnapVaultedShopperToken BluesnapVaultedShopperToken { get; set; }

        /// <summary>
        /// Gets or Sets MockerShopperToken
        /// </summary>
        [DataMember(Name = "MockerShopperToken", EmitDefaultValue = false)]
        public MockerShopperToken MockerShopperToken { get; set; }

        /// <summary>
        /// Gets or Sets SpreedlyToken
        /// </summary>
        [DataMember(Name = "SpreedlyToken", EmitDefaultValue = false)]
        public SpreedlyToken SpreedlyToken { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PaymentMethodModel {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Card: ").Append(Card).Append("\n");
            sb.Append("  Token: ").Append(Token).Append("\n");
            sb.Append("  BluesnapVaultedShopperToken: ").Append(BluesnapVaultedShopperToken).Append("\n");
            sb.Append("  MockerShopperToken: ").Append(MockerShopperToken).Append("\n");
            sb.Append("  SpreedlyToken: ").Append(SpreedlyToken).Append("\n");
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
            return this.Equals(input as PaymentMethodModel);
        }

        /// <summary>
        /// Returns true if PaymentMethodModel instances are equal
        /// </summary>
        /// <param name="input">Instance of PaymentMethodModel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PaymentMethodModel input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Card == input.Card ||
                    (this.Card != null &&
                    this.Card.Equals(input.Card))
                ) && 
                (
                    this.Token == input.Token ||
                    (this.Token != null &&
                    this.Token.Equals(input.Token))
                ) && 
                (
                    this.BluesnapVaultedShopperToken == input.BluesnapVaultedShopperToken ||
                    (this.BluesnapVaultedShopperToken != null &&
                    this.BluesnapVaultedShopperToken.Equals(input.BluesnapVaultedShopperToken))
                ) && 
                (
                    this.MockerShopperToken == input.MockerShopperToken ||
                    (this.MockerShopperToken != null &&
                    this.MockerShopperToken.Equals(input.MockerShopperToken))
                ) && 
                (
                    this.SpreedlyToken == input.SpreedlyToken ||
                    (this.SpreedlyToken != null &&
                    this.SpreedlyToken.Equals(input.SpreedlyToken))
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
                hashCode = (hashCode * 59) + this.Type.GetHashCode();
                if (this.Card != null)
                {
                    hashCode = (hashCode * 59) + this.Card.GetHashCode();
                }
                if (this.Token != null)
                {
                    hashCode = (hashCode * 59) + this.Token.GetHashCode();
                }
                if (this.BluesnapVaultedShopperToken != null)
                {
                    hashCode = (hashCode * 59) + this.BluesnapVaultedShopperToken.GetHashCode();
                }
                if (this.MockerShopperToken != null)
                {
                    hashCode = (hashCode * 59) + this.MockerShopperToken.GetHashCode();
                }
                if (this.SpreedlyToken != null)
                {
                    hashCode = (hashCode * 59) + this.SpreedlyToken.GetHashCode();
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