using System.ComponentModel.DataAnnotations.Schema;

namespace MediaAPI.Models
{
    public class Medias
    {
        public int Id { get; set; }

        public int TitleId {  get; set; }
        public string ImageUrl {  get; set; }
        public string VideoUrl { get; set; }
        [ForeignKey("TitleId")]
        public Media Media { get; set; }
    }
}
