/*
    Inserts a new user record. 
*/
INSERT INTO Users (facebook_id, name, email, bio, picture)
VALUES (${facebookId}, ${name}, ${email}, ${bio}, ${picture})
RETURNING idu;
