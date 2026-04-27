# API QA Automation Tests – Playwright

End-to-end API QA automation tests using Playwright.

## 🔍 What is tested
- GET requests (fetch data)
- POST requests (create data)
- Status code validation (200, 201, 404)
- Response body validation
- Negative test cases (invalid endpoints)

## 🧪 Technologies
- Playwright
- JavaScript
- Node.js

## ▶️ Run tests
bash
npx playwright test
"end code "

## 📊Example tests
- GET /users → returns list of users
- GET /users/:id → returns single user
- POST /posts → creates new post
- GET /wrong-endpoint → returns 404 error
