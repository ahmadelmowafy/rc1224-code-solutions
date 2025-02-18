# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When it is first added to the DOM and drawn on the page.

- What is a React Effect?
  A side effect that occurs by a component rendering on a page, rather than by a particular event.

- When should you use an Effect and when should you not use an Effect?
  Use an Effect when you want to step out of React and synchronize with an API. Should not use if you are only adjusting a state.

- When do Effects run?
  Every time a component is rendered on the DOM.

- What function is used to declare an Effect?
  The useEffect() function

- What are Effect dependencies and how do you declare them?
  An array that is passed as a second argument to useEffect which prevents it from running more than once.

- Why would you want to clean up from an Effect?
  One instance is for Effects that need to specify how to stop or undo whatever they were doing.

- How do you clean up from an Effect?
  By returning a function that will undo the effect of the callback function.

- When does the cleanup function run?
  Each time before the Effect runs, and one final time when the component unmounts.

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
