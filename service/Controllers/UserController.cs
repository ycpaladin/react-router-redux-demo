

using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace WebApplication.Controllers
{
    public class User
    {
        public int id { get; set; }
        public string name { get; set; }

        public int age { get; set; }
    }
    public class UserController : Controller
    {

        static List<User> list = new List<User>{

            new User { id = 1, name = "kevin", age = 29},
            new User{ id = 2, name = "lxy", age = 26},
            new User{ id = 3, name = "ccw", age =1}
        };

        [Authorize]
        public async Task<List<User>> GetUserList()
        {

            return await Task.Run(() =>
            {
                return list;
            });
        }

        [HttpPost]
        [Authorize]
        public async Task<object> AddUser([FromBody ]User user)
        {
            return await Task.Run(() =>
            {
                list.Add(user);

                return new
                {
                    scuess = true,
                    message = "add user scuess.."
                };
            });

        }

    }
}