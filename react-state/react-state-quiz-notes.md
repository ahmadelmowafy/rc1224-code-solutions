# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  They are special functions in React, that allow functional components to use state and other React features.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Name must start with use and an uppercase letter, they can only be called by React components and other hooks, and must be called at the top level of a component.

- What is the purpose of state in React?
  Used to dynamically react to user interaction and maintain data between re-renders.

- Why can't we just maintain state in a local variable?
  Because data in local variables does not persist between re-renders.

- What two actions happen when you call a `state setter` function?
  The new value will be stored by React and the component will be re-rendered.

- When does the local `state variable` get updated with the new value?
  After the component is re-rendered.

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
