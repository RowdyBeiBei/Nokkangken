/*

    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS  Responses
(
    id serial PRIMARY KEY,
    wouldJoin boolean,
    id_user integer NOT NULL REFERENCES Users (id) ON DELETE CASCADE,
    id_possibles integer NOT NULL REFERENCES Possibles (id) ON DELETE CASCADE,
    id_prospect integer NOT NULL REFERENCES Users (id) ON DELETE CASCADE,
    id_prospectPossible integer NOT NULL REFERENCES Possibles (id) ON DELETE CASCADE,
    UNIQUE (id_user, id_possibles, id_prospect, id_prospectPossible)
);