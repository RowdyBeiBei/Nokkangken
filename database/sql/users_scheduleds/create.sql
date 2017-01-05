/*
    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS  ${schema~}.Users_Scheduleds
(
    id serial PRIMARY KEY,
    id_user integer REFERENCES Users (id) ON DELETE RESTRICT,
    id_scheduled integer REFERENCES Scheduleds (id) ON DELETE CASCADE
);