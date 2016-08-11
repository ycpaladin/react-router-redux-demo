using System;
using Microsoft.IdentityModel.Tokens;
 
namespace Models
{
    public class TokenProviderOptions
    {
        public string Path { get; set; } = "/token";
 
        public string Issuer { get; set; }
 
        public string Audience { get; set; }
 
        public TimeSpan Expiration { get; set; } = TimeSpan.FromHours(24);
 
        public SigningCredentials SigningCredentials { get; set; }
    }
}