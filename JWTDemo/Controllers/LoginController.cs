using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JWTDemo.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace JWTDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration Configuration;
        public LoginController(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        [HttpGet]
        public IActionResult Login(string username, string password) {
            UserModel login = new UserModel();
            login.UserName = username;
            login.PassWord = password;
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login);
            if (user != null) {
                var tokenStr = GenerteJSONWebToken(user);
                response = Ok(new { token = tokenStr });
            }
        }
        private UserModel AuthenticateUser(UserModel login)
        {
            UserModel user = null;
            if (login.UserName == "test" && login.PassWord == "test"){ 
            
                user=new UserModel { UserName="test",PassWord="test",EmailAddress="test.email.com"}
            }
            return user;

        }

        private string GenerteJSONWebToken(UserModel userinfo) {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]));
        }
    }
}