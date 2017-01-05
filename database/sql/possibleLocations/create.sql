/*
    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS ${schema~}.PossibleLocations
(
    id serial PRIMARY KEY,
    businessId text NOT NULL,
    id_possibles integer REFERENCES Possibles (id) ON DELETE CASCADE
);