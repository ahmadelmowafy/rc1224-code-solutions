# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  C - POST, R - GET, U - PUT, D - DELETE. These methods are only by convention and are not required to be implemented.

- What is Express middleware?
  They are functions that have access to and manipulate the `req` object, the `res` object, and the `next` function.

- What is Express middleware useful for?
  Useful for tracking requests and responses, authentication, and error handling.

- How do you mount a middleware with an Express application?
  Using the `app.use()` or `app.METHOD()` functions

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  The `req` and `res` objects and the `next` function

- How do you specify and retrieve route parameters?
  They are specified within the route path, and retrieved by using dot notation or destructuring.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
