const axios = require("axios");

// базова адреса API
const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("JSONPlaceholder API - homework 14.1", () => {

  // 1. перевіряємо список постів
  test("GET /posts - should return list of posts", async () => {
    const response = await axios.get(`${BASE_URL}/posts`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  // 2. отримуємо один пост по id
  test("GET /posts/1 - should return correct post", async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
    expect(response.data).toHaveProperty("userId");
  });

  // 3. отримуємо список користувачів
  test("GET /users - should return users array", async () => {
    const response = await axios.get(`${BASE_URL}/users`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toHaveProperty("id");
  });

  // 4. створюємо новий пост
  test("POST /posts - should create post", async () => {
    const payload = {
      title: "AQA homework",
      body: "Testing JSONPlaceholder API",
      userId: 1
    };

    const response = await axios.post(`${BASE_URL}/posts`, payload);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(payload.title);
    expect(response.data.body).toBe(payload.body);
    expect(response.data.userId).toBe(payload.userId);
  });

  // 5. створюємо коментар
  test("POST /comments - should create comment", async () => {
    const payload = {
      name: "Test comment",
      email: "test@mail.com",
      body: "Hello from test",
      postId: 1
    };

    const response = await axios.post(`${BASE_URL}/comments`, payload);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(payload);
  });

});