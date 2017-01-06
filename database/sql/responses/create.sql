/*

    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS  Responses
(
    id serial PRIMARY KEY,
    wouldJoin boolean,
    id_user integer REFERENCES Users (id) ON DELETE CASCADE,
    id_possibles integer REFERENCES Possibles (id) ON DELETE CASCADE,
    id_prospect integer REFERENCES Users (id) ON DELETE CASCADE,
    id_prospectPossible integer REFERENCES Possibles (id) ON DELETE CASCADE
);