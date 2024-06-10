using MediaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace MediaAPI.Data
{
    public class MediaContext:DbContext
    {
        public MediaContext(DbContextOptions<MediaContext> options) : base(options) { }

        public DbSet<Media> Media {  get; set; }
        public DbSet<Medias> MediaItems { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Media>()
        //        .HasMany(m => m.MediaItems)
        //        .WithOne(mi => mi.Media)
        //        .HasForeignKey(mi => mi.TitleId);

        //    base.OnModelCreating(modelBuilder);
        //}

    }
}
