import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createBlogPost } from './api/blogpost';

const CreateBlogPostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const blogPost = {
      title,
      content,
    };

    const createdBlogPost = await createBlogPost(blogPost);

    if (createdBlogPost) {
      // Redirect to the blog post details page
      router.push(`/blog-post/${createdBlogPost.id}`);
    } else {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlogPostPage;