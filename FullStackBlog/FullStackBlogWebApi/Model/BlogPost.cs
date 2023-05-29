namespace FullStackBlogWebApi.Model
{
    public class BlogPost
    {
            public Guid? Id { get; set; }
            public string Title { get; set; }
            public string Content { get; set; }
            public DateTime? CreatedAt { get; set; } 
    }
}
