/*

    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS  Responses
(
    idr serial PRIMARY KEY,
    wouldJoin boolean,
    id_user integer NOT NULL REFERENCES Users (idu) ON DELETE CASCADE,
    id_possibles integer NOT NULL REFERENCES Possibles (idp) ON DELETE CASCADE,
    id_prospect integer NOT NULL REFERENCES Users (idu) ON DELETE CASCADE,
    id_prospectPossible integer NOT NULL REFERENCES Possibles (idp) ON DELETE CASCADE,
    UNIQUE (id_user, id_possibles, id_prospect, id_prospectPossible)
);