const {
  getPosts,
  getPostById,
  getUsers,
  createPost,
  getComments
} = require("../controllers/apiController");

describe("Homework 15 - Controllers API tests", () => {

  test("GET posts", async () => {
    const res = await getPosts();

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test("GET post by id", async () => {
    const res = await getPostById(1);

    expect(res.status).toBe(200);
    expect(res.data.id).toBe(1);
  });

  test("GET users", async () => {
    const res = await getUsers();

    expect(res.status).toBe(200);
    expect(res.data[0]).toHaveProperty("id");
  });

  test("GET comments", async () => {
    const res = await getComments();

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test("POST create post", async () => {
    const payload = {
      title: "homework 15",
      body: "controllers test",
      userId: 1
    };

    const res = await createPost(payload);

    expect(res.status).toBe(201);
    expect(res.data.title).toBe(payload.title);
    expect(res.data.userId).toBe(payload.userId);
  });

});