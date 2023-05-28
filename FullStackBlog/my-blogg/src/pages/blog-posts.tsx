import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogPosts } from '../../api';
import { Blogpost } from '../models/Blogpost';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/BlogPosts.module.css';
import { useRouter } from 'next/router';

const BlogPostsPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const router = useRouter();
  const { deleted } = router.query;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const fetchedBlogPosts = await getBlogPosts();
      setBlogPosts(fetchedBlogPosts);
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
    <Header />
    <SideMenu />
    <div className={`${styles.headerSpace} bg-light p-4`}>
      <div className="col-lg-15 text-center">
        <h2>Blog Posts</h2>
        {deleted === 'true' && <p className={styles.deleteMessage}>Blog post has been deleted.</p>}
        <div className={styles.blogPostContainer}>
          {blogPosts.map((blogPost: Blogpost) => (
            <Link className="nav-link text-black text-decoration:none" key={blogPost.id} href={`/blog-post/${blogPost.id}`}>
              <div className={styles.blogPostItem}>
                <h3 className={styles.blogPostTitle}>{blogPost.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default BlogPostsPage;
