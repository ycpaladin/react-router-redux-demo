using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebApplication.Data;
using WebApplication.Models;
using WebApplication.Services;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Models;
using Middleware;
using Microsoft.Extensions.Options;

namespace WebApplication
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsDevelopment())
            {
                // For more details on using the user secret store see https://go.microsoft.com/fwlink/?LinkID=532709
                builder.AddUserSecrets();
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddMvc();

            var policy = new CorsPolicy();

            policy.Headers.Add("*");
            policy.Methods.Add("*");
            policy.Origins.Add("*");

            services.AddCors(t => t.AddPolicy("corsPolicy", policy));

            // Add application services.
            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
        }


        private static readonly string secretKey = "mysupersecret_secretkey!123";

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseIdentity();

            app.UseCors("corsPolicy");



            #region JWT Token


            // var secretKey = "mysupersecret_secretkey!123";
            // var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));




            // Add JWT generation endpoint:
            var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey));
            var options = new TokenProviderOptions
            {
                Audience = "ExampleAudience",
                Issuer = "ExampleIssuer",
                SigningCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256),
            };


            var tokenValidationParameters = new TokenValidationParameters
            {
                // The signing key must match!
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = signingKey,

                // Validate the JWT Issuer (iss) claim
                ValidateIssuer = true,
                ValidIssuer = "ExampleIssuer",

                // Validate the JWT Audience (aud) claim
                ValidateAudience = true,
                ValidAudience = "ExampleAudience",

                // Validate the token expiry
                ValidateLifetime = true,

                // If you want to allow a certain amount of clock drift, set that here:
                ClockSkew = TimeSpan.Zero
            };


            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = tokenValidationParameters
            });

            app.UseMiddleware<TokenProviderMiddleware>(Options.Create(options));
            #endregion


            // app.UseCookieAuthentication(new CookieAuthenticationOptions
            // {
            //     AutomaticAuthenticate = true,
            //     AutomaticChallenge = true,
            //     AuthenticationScheme = "Cookie",
            //     CookieName = "access_token",
            //     TicketDataFormat = new CustomJwtDataFormat(SecurityAlgorithms.HmacSha256, tokenValidationParameters)
            // });

            // Add external authentication middleware below. To configure them please see https://go.microsoft.com/fwlink/?LinkID=532715

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
