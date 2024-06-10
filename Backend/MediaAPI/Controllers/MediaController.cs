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
            //return await _mediaContext.Media.ToListAsync();

            var mediaItems = await _mediaContext.Media
                .Include(m => m.MediaItems)
                .ToListAsync();
            var mediaDTOs = mediaItems.Select(m => new MediaDTO
            {
                Title = m.Title,
                Content = m.Content,
                ImageUrls = m.MediaItems.Where(mi => mi.ImageUrl != null).Select(mi => mi.ImageUrl).ToList(),
                VideoUrls = m.MediaItems.Where(mi => mi.VideoUrl != null).Select(mi => mi.VideoUrl).ToList()
            }).ToList();

            return Ok(mediaDTOs);
        }
    }
}

