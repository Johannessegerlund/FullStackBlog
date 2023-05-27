using System;
using System.Collections.Generic;
using FullStackBlogWebApi.Model;
using Microsoft.AspNetCore.Mvc;

namespace FullStackBlogWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogPostController : ControllerBase
    {
        private static List<BlogPost> _blogPosts = new List<BlogPost>();
        
        [HttpGet]
        public IActionResult GetBlogPosts()
        {
            return Ok(_blogPosts);
        }

        [HttpGet("{id}")]
        public IActionResult GetBlogPost(int id)
        {
            var blogPost = _blogPosts.Find(bp => bp.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            return Ok(blogPost);
        }

        [HttpPost]
        public IActionResult CreateBlogPost(BlogPost blogPost)
        {
            blogPost.Id = _blogPosts.Count + 1;
            blogPost.CreatedAt = DateTime.Now;
            _blogPosts.Add(blogPost);
            return CreatedAtAction(nameof(GetBlogPost), new { id = blogPost.Id }, blogPost);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBlogPost(int id, BlogPost updatedBlogPost)
        {
            var blogPost = _blogPosts.Find(bp => bp.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            blogPost.Title = updatedBlogPost.Title;
            blogPost.Content = updatedBlogPost.Content;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBlogPost(int id)
        {
            var blogPost = _blogPosts.Find(bp => bp.Id == id);
            if (blogPost == null)
            {
                return NotFound();
            }

            _blogPosts.Remove(blogPost);
            return NoContent();
        }
    }
}


