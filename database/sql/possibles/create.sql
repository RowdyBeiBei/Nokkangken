/*

    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS  ${schema~}.Possibles
(
    id serial PRIMARY KEY,
    possibleTime bigint NOT NULL,
    id_user integer REFERENCES Users (id) ON DELETE CASCADE
);