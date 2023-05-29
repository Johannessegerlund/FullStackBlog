import React from 'react';
import { BiTrash, BiPen } from 'react-icons/bi';
import styles from '../styles/BlogPostPage.module.css';
import { blogPost } from '../models/blogPost';
import { deleteBlogPost } from '../../api';
import { useRouter } from 'next/router';

interface BlogPostProps {
  blogPost: blogPost | undefined;
}

const BlogPost: React.FC<BlogPostProps> = ({ blogPost }) => {
  const router = useRouter();

  const blogPostId = router.query.id;

  const handleDelete = async () => {
    try {
      await deleteBlogPost(blogPostId!.toString());
      router.push(`/blog-posts?deleted=true`);
    } catch (error) {
      throw new Error(`Failed to delete blogpost with id ${blogPost?.id}`);
    }
  };

  const handleUpdate = () => {
    router.push(`/create-blog-post?id=${blogPost?.id}`);
  };

  return (
    <div className={`${styles.headerSpace} p-4`}>
      <div className={`${styles.blogPostContainer} p-4`}>
        <h2 className={styles.blogPostTitle}>{blogPost?.title}</h2>
        <div className={styles.blogPostContent}>{blogPost?.content}</div>
        {blogPostId && (
          <div className={styles.buttonContainer}>
            <span className={styles.tooltip}>
              <BiTrash onClick={handleDelete} className={styles.icon} />
              <span className={styles.tooltipText}>Ta Bort</span>
            </span>
            <span className={styles.tooltip}>
              <BiPen onClick={handleUpdate} className={styles.icon} />
              <span className={styles.tooltipText}>Uppdatera</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;