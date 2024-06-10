namespace MediaAPI.Models
{
    public class MediaDTO
    {
        public string Title { get;set; }
        public string Content {  get;set; }
        public List<string> ImageUrls { get; set; }
        public List<string> VideoUrls { get; set; }
    }
}
