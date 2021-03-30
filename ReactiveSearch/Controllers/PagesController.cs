using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactiveSearch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PagesController : ControllerBase
    {

        private readonly ILogger<PagesController> _logger;

        public PagesController(ILogger<PagesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public String Get()
        {
            return "The server side is empty, so far, run Angular app";
        }
    }
}
