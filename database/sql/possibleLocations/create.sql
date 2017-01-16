/*
    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS PossibleLocations
(
    idpl serial PRIMARY KEY,
    businessId text NOT NULL,
    id_possibles integer REFERENCES Possibles (idp) ON DELETE CASCADE
);