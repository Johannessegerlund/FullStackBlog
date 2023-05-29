import axios from 'axios';
import { Blogpost } from './src/models/blogPost'

async function fetchWeatherForecasts() {
  try {
    const response = await axios.get('https://localhost:7202/WeatherForecast');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather forecasts');
  }
}

async function getBlogPosts() {
  try {
    const response = await axios.get('https://localhost:7202/blogpost');
    return response.data;
  } catch (error) {
    console.error('Error retrieving blog posts:', error);
    return [];
  }
};

async function getBlogPostById(id: number) {
  try {
    const response = await axios.get(`https://localhost:7202/blogpost/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error retrieving blog post with id ${id}:`, error);
    return null;
  }
};

async function createBlogPost(blogPost: Blogpost) {
  try {
    const response = await axios.post('https://localhost:7202/blogpost', blogPost);
    return response.data;
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
};

async function updateBlogPost(id: number, updatedBlogPost: Blogpost) {
  try {
    const response = await axios.put(`https://localhost:7202/blogpost/${id}`, updatedBlogPost);
    return response.data;
  } catch (error) {
    console.error(`Error updating blog post with id ${id}:`, error);
    return null;
  }
};

async function deleteBlogPost(id: number) {
  try {
    const response = await axios.delete(`https://localhost:7202/blogpost/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting blog post with id ${id}:`, error);
    return null;
  }
};
export { fetchWeatherForecasts, createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost, getBlogPostById };