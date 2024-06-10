using MediaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MediaAPI.Data
{
    public class MediaContext:DbContext
    {
        public MediaContext(DbContextOptions<MediaContext> options) : base(options) { }

        public DbSet<Media> Media {  get; set; }
       
    }
}
