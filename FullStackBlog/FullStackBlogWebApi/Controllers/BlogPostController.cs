using System.Text.Json;
using FullStackBlogWebApi.Model;
using Microsoft.AspNetCore.Mvc;

namespace FullStackBlogWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogPostController : ControllerBase
    {
        private static List<BlogPost> _blogPosts = new List<BlogPost>();
        private const string JsonFilePath = "blogposts.json";

        /// <summary>
        /// Get all blogposts
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult GetBlogPosts()
        {
            LoadBlogPosts();
            return Ok(_blogPosts);
        }

        /// <summary>
        /// Get one blogpost
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetBlogPost(Guid id)
        {
            LoadBlogPosts();
            var blogPost = _blogPosts.Find(bp => bp.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }
       
        /// <summary>
        /// Creates a new blog posts and gives it a uniq ID with guid
        /// </summary>
        /// <param name="blogPost"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult CreateBlogPost(BlogPost blogPost)
        {
            LoadBlogPosts();
            blogPost.Id = Guid.NewGuid();
            blogPost.CreatedAt = DateTime.Now;
            _blogPosts.Add(blogPost);
            SaveBlogPosts();
            return CreatedAtAction(nameof(GetBlogPost), new { id = blogPost.Id }, blogPost);
        }

        /// <summary>
        /// Updates blogpost
        /// </summary>
        /// <param name="id"></param>
        /// <param name="updatedBlogPost"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult UpdateBlogPost(Guid id, BlogPost updatedBlogPost)
        {
            LoadBlogPosts();
            var blogPost = _blogPosts.Find(bp => bp.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            blogPost.Title = updatedBlogPost.Title;
            blogPost.Content = updatedBlogPost.Content;
            SaveBlogPosts();
            return NoContent();
        }

        /// <summary>
        /// Deletes blogpost
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult DeleteBlogPost(Guid id)
        {
            LoadBlogPosts();
            var blogPost = _blogPosts.Find(bp => bp.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            _blogPosts.Remove(blogPost);
            SaveBlogPosts();
            return NoContent();
        }

        /// <summary>
        /// Laddar in och läser jsonfilen
        /// </summary>
        private void LoadBlogPosts()
        {
            if (System.IO.File.Exists(JsonFilePath))
            {
                var jsonData = System.IO.File.ReadAllText(JsonFilePath);
                _blogPosts = JsonSerializer.Deserialize<List<BlogPost>>(jsonData);
            }
            else
            {
                _blogPosts = new List<BlogPost>();
            }
        }

        /// <summary>
        /// Saves Blogposts to Json
        /// </summary>
        private void SaveBlogPosts()
        {
            var jsonData = JsonSerializer.Serialize(_blogPosts);
            System.IO.File.WriteAllText(JsonFilePath, jsonData);
        }
    }
}
