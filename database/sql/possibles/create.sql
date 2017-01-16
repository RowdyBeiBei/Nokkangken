/*

    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS Possibles
(
    idp serial PRIMARY KEY,
    possibleTime bigint NOT NULL,
    id_user integer REFERENCES Users (idu) ON DELETE CASCADE,
    UNIQUE (possibleTime, id_user)
);