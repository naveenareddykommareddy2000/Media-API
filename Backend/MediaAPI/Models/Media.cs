namespace MediaAPI.Models
{
    public class Media
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Content {  get;set; }
        public ICollection<Medias> MediaItems { get; set; }



    }
}
