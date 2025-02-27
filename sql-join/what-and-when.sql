select "releaseYear",
       "g"."name" as "genre"
  from "genres" as "g"
  join "filmGenre" using ("genreId")
  join "films" as "f" using ("filmId")
 where "f"."title" = 'Boogie Amelie';
