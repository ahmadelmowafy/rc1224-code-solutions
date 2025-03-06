# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  Allows Node applications to communicate with databases.

- How do you tell `pg` which database to connect to?
  By using `pg.Pool()` and specifying the database in the `connectionString`

- How do you send SQL to PostgreSQL from your Express server?
  By using the method `db.query()`

- How do you access the rows that get returned from the SQL query?
  Access them using the `rows` property of the `pg.Result` object

- What must you always remember to put around your asynchronous route handlers? Why?
  A `try/catch` block for error handling, to guarantee a response to the client even if an error occurs

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  It is an attack where the attacker manipulates the SQL and inserts malicious data. The way to avoid it is by using parameterized queries.

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
