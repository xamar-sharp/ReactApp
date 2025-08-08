using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DataServerController : ControllerBase
    {
        private static List<string> _dataBase = new List<string>();
        [HttpGet]
        public IActionResult GetData()
        {
            return new ObjectResult(new {Name="React JS",State="Base Learned!"+new Random().Next(0,100000).ToString()});
        }
        [HttpPost]
        public IActionResult PostData([FromForm]DTO formData)
        {
            _dataBase.Add("New string" + DateTime.Now.ToString());
            return Ok();
        }
    }
    public class DTO
    {
        public string email { get; set; }
        public int age { get; set; }
    }
}
