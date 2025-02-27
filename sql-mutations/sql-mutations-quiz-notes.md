# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Insert, Select, Update, Delete

- How do you add a row to a SQL table?
  By using an `insert` statement

- How do you add multiple rows to a SQL table at once?
  By comma-separating tuples of values that will be inserted as rows

- How do you update rows in a database table?
  By using an `update` statement

- How do you delete rows from a database table?
  By using a `delete` statement

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  To specify which rows will be modified, otherwise it will affect all rows in the table.

- How do you accidentally delete or update all rows in a table?
  By not including a `where` clause to specify the rows.

- How do you get back the modified row without a separate `select` statement?
  By adding a `returning` clause

- Why did you get an error when trying to delete certain films?
  Because the `filmId` attribute exists on other tables.

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
