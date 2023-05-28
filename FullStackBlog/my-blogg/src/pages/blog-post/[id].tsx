import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getBlogPostById } from '../../../api';
import { Blogpost } from '../../models/Blogpost';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SideMenu from '../../components/sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiTrash, BiPen } from 'react-icons/bi'; // Import the trash and pen icons from react-icons
import styles from '../../styles/BlogPostPage.module.css';
import { deleteBlogPost, updateBlogPost } from '../../../api';

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<Blogpost | null>(null);
  const blogPostId = Number(router.query.id);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const fetchedBlogPost = await getBlogPostById(blogPostId);
      setBlogPost(fetchedBlogPost);
    };

    if (!isNaN(blogPostId)) {
      fetchBlogPost();
    }
  }, [blogPostId]);

  const handleDelete = async () => {
    try {
      await deleteBlogPost(blogPostId);
      router.push(`/blog-posts?deleted=true`);
    } catch (error) {
      throw new Error(`Failed to delete blogpost with id ${blogPostId}`);
    }
  };

  const handleUpdate = () => {
    // Implement update logic here
    router.push(`/create-blog-post?id=${blogPostId}`);
  };

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <SideMenu />
      <div className={`${styles.headerSpace} p-4`}>
        <div className={`${styles.blogPostContainer} p-4`}>
          <h2 className={styles.blogPostTitle}>{blogPost.title}</h2>
          <div className={styles.blogPostContent}>{blogPost.content}</div>
          <div className={styles.buttonContainer}>
          <div className={styles.buttonContainer}>
            <span className={styles.tooltip}>
              <BiTrash onClick={handleDelete} className={styles.icon}  />
              <span className={styles.tooltipText}>Delete</span>
            </span>
            <span className={styles.tooltip}>
              <BiPen onClick={handleUpdate} className={styles.icon}  />
              <span className={styles.tooltipText}>Update</span>
            </span>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
