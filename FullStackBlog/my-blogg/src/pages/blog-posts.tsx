import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogPosts } from './api/blogpost';
import { Blogpost } from '../models/Blogpost';

const BlogPostsPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const fetchedBlogPosts = await getBlogPosts();
      setBlogPosts(fetchedBlogPosts);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((blogPost: Blogpost) => (
          <li key={blogPost.id}>
            <Link href={`/blog-post/${blogPost.id}`}>
              <p>{blogPost.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostsPage;