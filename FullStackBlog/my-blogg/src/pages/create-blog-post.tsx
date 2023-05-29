import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createBlogPost, getBlogPostById, updateBlogPost } from '../../api';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/sideMenu';
import styles from '../styles/createBlogPostPage.module.css';

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

    if (router.query.id) {
      try {
        await updateBlogPost(router.query.id.toString(), blogPost);
        router.push(`/blog-post/${router.query.id}`);
      } catch (error) {
        throw new Error(`Failed to update blog post with id ${router.query.id}`);
      }
    } else {
      const createdBlogPost = await createBlogPost(blogPost);
      if (createdBlogPost) {
        router.push(`/blog-post/${createdBlogPost.id}`);
      } else {
        throw new Error('Failed to create blog post, please try again later');
      }
    }
  };

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (router.query.id) {
        const fetchedBlogPost = await getBlogPostById(router.query.id.toString());
        setTitle(fetchedBlogPost.title);
        setContent(fetchedBlogPost.content);
      }
    };

    fetchBlogPost();
  }, [router.query.id]);

  return (
    <div className={styles.container}>
      <SideMenu />
      <Header />
      <div className={styles.createPostContainer}>
        <h2 className={styles.title}>{router.query.id ? 'Uppdatera' : 'Skapa nytt'} Blogginlägg</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Titel:</label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">Innehåll:</label>
            <textarea id="content" value={content} onChange={handleContentChange} className={styles.textarea} />
          </div>
          <button type="submit" className={styles.createButton}>
            {router.query.id ? 'Uppdatera' : 'Skapa'}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlogPostPage;
