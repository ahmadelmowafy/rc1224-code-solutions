# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  The `fetch()` function

- What two things need to be done to properly handle HTTP request errors? Why?
  Using a try/catch block, to handle errors when the fetch request was not successful. and checking the HTTP response status, because the fetch request still gets fulfilled even if an error is thrown.

- How can `useEffect` be used to load data for a component?
  By sending a GET request to an API and loading the data when the component mount if the fetch request was successful.

- How do you use `useEffect` to load component data just once when the component mounts?
  By leaving the dependency array empty

- How do you use `useEffect` to load component data every time the data key changes?
  By specifying the key in the dependency array

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  With a third-party data management library such as React Query and Vercel SWR.

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
