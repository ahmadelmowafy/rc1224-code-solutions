# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  In a Single Page App, the URL in the address bar does not change as the user navigates through the app. This can be a problem for the user because it breaks the back button and does not allow the user to use the back button and bookmark specific pages.

- What NPM package can be used to make navigating a React app behave as users expect?
  The `react-router-dom` package

- Which React Router component(s) can be used to set up your app's navigation?
  <BrowserRouter>, <Routes>, and <Route>

- How does React Router match the browser URL to one of your app's React components?
  It compares the current URL to the paths in the <Route> components and renders the first matching component.

- What is the purpose of React Router's `Outlet` component?
  It is used in a parent route to render the child route component, making it useful for nested routing.

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  The `useParams` hook

- What React Router hook is used to navigate programmatically?
  The `useNavigate` hook

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
