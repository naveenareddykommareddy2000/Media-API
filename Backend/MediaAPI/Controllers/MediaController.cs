using MediaAPI.Data;
using MediaAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MediaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MediaController : ControllerBase
    {
        private readonly MediaContext _mediaContext;
        public MediaController(MediaContext mediaContext)
        {
            _mediaContext = mediaContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Media>>> GetMedia()
        {
            return await _mediaContext.Media.ToListAsync();
        }

    }
}
