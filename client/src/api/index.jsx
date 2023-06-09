import React, { useEffect, useState } from 'react';
import axios from "axios";
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);


console.log(fetchPosts)
const MyApiComponent = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkAPIConnection = async () => {
      try {
        await axios.get("http://localhost:5000/posts");
        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);
      }
    };

    checkAPIConnection();
  }, []);

  return (
    <div>
      {isConnected ? (
        <p>API connection successful</p>
      ) : (
        <p>API connection failed</p>
      )}
    </div>
  );
};
export default MyApiComponent;