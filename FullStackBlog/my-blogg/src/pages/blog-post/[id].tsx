import React, { useEffect, useState } from 'react';
import { getBlogPostById } from '../../../api';
import { blogPost } from '../../models/blogPost';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SideMenu from '../../components/sideMenu';
import BlogPost from '../../components/blogPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

const BlogPostsPage: React.FC = () => {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<blogPost>();
  const blogPostId = router.query.id;

  useEffect(() => {
    const fetchBlogPost = async () => {
      const fetchedBlogPost = await getBlogPostById(blogPostId!.toString());
      setBlogPost(fetchedBlogPost);
    };

    if (blogPostId) {
      fetchBlogPost();
    }
  }, [blogPostId]);

  return (
    <div>
      <Header />
      <SideMenu />
      <BlogPost blogPost={blogPost} />
      <Footer />
    </div>
  );
};

export default BlogPostsPage;