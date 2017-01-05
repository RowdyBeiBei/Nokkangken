/*
   Use this file to initialize the database, could use functions for create/drop
   that we have extended onto the database object
   perhaps remove those functions/files if we don't end up using them
*/

--Drop tables if they exist
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS possibles CASCADE;
DROP TABLE IF EXISTS scheduleds CASCADE;
DROP TABLE IF EXISTS possiblelocations CASCADE;
DROP TABLE IF EXISTS users_scheduleds CASCADE;
DROP TABLE IF EXISTS responses CASCADE;

--Create tables
CREATE TABLE IF NOT EXISTS  Users
(
    id serial PRIMARY KEY,
    facebook_id bigint UNIQUE NOT NULL, 
    name text NOT NULL,
    email text,
    bio text,
    picture text
);

CREATE TABLE IF NOT EXISTS  Possibles
(
    id serial PRIMARY KEY,
    possibleTime bigint NOT NULL,
    id_user integer REFERENCES Users (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS  Scheduleds
(
    id serial PRIMARY KEY,
    scheduledTime bigint NOT NULL,
    businessId text NOT NULL

);

CREATE TABLE IF NOT EXISTS PossibleLocations
(
    id serial PRIMARY KEY,
    businessId text NOT NULL,
    id_possibles integer REFERENCES Possibles (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS  Users_Scheduleds
(
    id serial PRIMARY KEY,
    id_user integer REFERENCES Users (id) ON DELETE RESTRICT,
    id_scheduled integer REFERENCES Scheduleds (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS  Responses
(
    id serial PRIMARY KEY,
    wouldJoin boolean,
    id_user integer REFERENCES Users (id) ON DELETE CASCADE,
    id_possibles integer REFERENCES Possibles (id) ON DELETE CASCADE,
    id_prospect integer REFERENCES Users (id) ON DELETE CASCADE,
    id_prospectPossible integer REFERENCES Possibles (id) ON DELETE CASCADE
);

