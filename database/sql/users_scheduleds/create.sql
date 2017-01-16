/*
    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS  Users_Scheduleds
(
    idus serial PRIMARY KEY,
    id_user integer NOT NULL REFERENCES Users (idu) ON DELETE RESTRICT,
    id_scheduled integer NOT NULL REFERENCES Scheduleds (ids) ON DELETE CASCADE,
    UNIQUE (id_user, id_scheduled)
);