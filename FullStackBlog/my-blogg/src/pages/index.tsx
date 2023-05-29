import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import { getBlogPosts } from '../../api';
import React, { useEffect, useState } from 'react';
import { Blogpost } from '../models/blogPost';
import BlogPost from '../components/blogPost';
import styles from '../styles/home.module.css';

const Home: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<Blogpost[]>();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const fetchedBlogPosts = await getBlogPosts();
      setBlogPosts(fetchedBlogPosts);
    };

    fetchBlogPosts();
  }, []);
  return (
    <div className={styles.container}>
      <SideMenu />
      <Header />
      <div className={styles.blogPosts}>

        {blogPosts?.map((blogPost) => (
          <BlogPost
          key={blogPost.id}
          blogPost={blogPost}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
