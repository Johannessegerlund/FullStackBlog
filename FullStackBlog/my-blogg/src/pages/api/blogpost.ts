import axios from 'axios';
import { Blogpost } from '../../models/Blogpost';

const API_BASE_URL = 'https://localhost:7202';

export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blogpost`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving blog posts:', error);
    return [];
  }
};

export const createBlogPost = async (blogPost: Blogpost) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/blogpost`, blogPost);
    return response.data;
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
};

export const updateBlogPost = async (id: number, updatedBlogPost: Blogpost) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/blogpost/${id}`, updatedBlogPost);
    return response.data;
  } catch (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
};

export const deleteBlogPost = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/blogpost/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
};
