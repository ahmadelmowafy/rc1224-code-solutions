# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  Scope is determined during compile time before the code is executed.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Functions remember variables from surroundings due to closures which have access to lexical scope.

- What values does a closure contain?
  The function definition and the variables from the scope of that function with updated state.

- When is a closure created?
  When a function is executed that references a variable from an outer function.

- How can you tell if a function will be created with a closure?
  When it is defined within another function and references variables from that surrounding function.

- In React, what is one important case where you need to know if a closure was created?
  When using the useEffect hook, where stale closures can occur, which can cause outdated values to be used.

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
