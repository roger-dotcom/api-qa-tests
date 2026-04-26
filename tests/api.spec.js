const { test, expect } = require("@playwright/test");

const API_URL = "https://jsonplaceholder.typicode.com";

// ✅ GET users
test("GET users returns list", async ({ request }) => {
  const response = await request.get(`${API_URL}/users`);

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data.length).toBeGreaterThan(0);
});

// ✅ GET single user
test("GET single user returns correct user", async ({ request }) => {
  const response = await request.get(`${API_URL}/users/1`);

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty("id", 1);
  expect(data).toHaveProperty("email");
});

// ✅ POST create post
test("POST create post returns created data", async ({ request }) => {
  const response = await request.post(`${API_URL}/posts`, {
    data: {
      title: "QA Test",
      body: "Testing API with Playwright",
      userId: 1,
    },
  });

  expect(response.status()).toBe(201);

  const data = await response.json();
  expect(data).toHaveProperty("title", "QA Test");
  expect(data).toHaveProperty("body", "Testing API with Playwright");
  expect(data).toHaveProperty("userId", 1);
});

// ❌ GET unknown endpoint
test("GET unknown endpoint returns 404", async ({ request }) => {
  const response = await request.get(`${API_URL}/wrong-endpoint`);

  expect(response.status()).toBe(404);
});
