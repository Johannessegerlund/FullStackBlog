import axios from 'axios';
import { Blogpost } from './src/models/Blogpost'

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
async function createBlogPost(blogPost: Blogpost) {
    try {
      const response = await axios.post('https://localhost:7202/blogpost', blogPost);
      return response.data;
    } catch (error) {
      console.error('Error creating blog post:', error);
      return null;
    }
  };
export { fetchWeatherForecasts, createBlogPost, getBlogPosts };