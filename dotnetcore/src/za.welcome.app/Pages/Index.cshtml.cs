using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;

namespace za.welcome.app.Pages
{

    public class IndexModel : PageModel
    {
        private IConfiguration config;

        public IndexModel(IConfiguration configuration)
        {
            config = configuration;
        }

        public void OnGet()
        {
            
            ViewData["name"] = Environment.GetEnvironmentVariable("ZA_APP_NAME"); //config["AppSettings:name"];
            ViewData["imageName"] = Environment.GetEnvironmentVariable("ZA_IMAGE_TYPE_NAME"); //config["AppSettings:imageName"];
             

        }
    }
}