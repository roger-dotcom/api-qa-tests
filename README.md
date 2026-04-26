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
```bash
npx playwright test

📊 Example tests
GET users list
GET single user
POST create post
GET unknown endpoint (404)
