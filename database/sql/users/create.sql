/*

    schema left in here in case we want to change pre-formatting
*/

CREATE TABLE IF NOT EXISTS Users
(
    idu serial PRIMARY KEY,
    facebook_id bigint UNIQUE NOT NULL, 
    name text NOT NULL,
    email text,
    bio text,
    picture text
);