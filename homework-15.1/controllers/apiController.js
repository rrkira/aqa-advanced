const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET всі пости
async function getPosts() {
  return axios.get(`${BASE_URL}/posts`);
}

// GET пост по id
async function getPostById(id) {
  return axios.get(`${BASE_URL}/posts/${id}`);
}

// GET користувачі
async function getUsers() {
  return axios.get(`${BASE_URL}/users`);
}

// POST створити пост
async function createPost(data) {
  return axios.post(`${BASE_URL}/posts`, data);
}

// GET коментарі
async function getComments() {
  return axios.get(`${BASE_URL}/comments`);
}

module.exports = {
  getPosts,
  getPostById,
  getUsers,
  createPost,
  getComments
};