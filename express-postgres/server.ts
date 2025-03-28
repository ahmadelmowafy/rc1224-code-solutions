import express from 'express';
import { ClientError } from './lib/index.js';
import pg from 'pg';

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/films/', async (req, res, next) => {
  try {
    const sql = `
    select
      "filmId",
      "title",
      "releaseYear"
    from "films"
    order by "replacementCost" desc;
    `;
    const result = await db.query(sql);
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
      select
        "filmId",
        "title",
        "releaseYear"
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(404, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    if (title === undefined) {
      throw new ClientError(400, 'title is required');
    }

    const sql = `
      update "films"
      set "title" = $1
      where "filmId" = $2
      returning
        "filmId",
        "title",
        "releaseYear";
    `;
    const params = [title, filmId];

    const result = await db.query(sql, params);
    const updatedFilm = result.rows[0];

    if (!updatedFilm) {
      throw new ClientError(404, `film ${filmId} not found`);
    }

    res.send(updatedFilm);
  } catch (err) {
    next(err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
