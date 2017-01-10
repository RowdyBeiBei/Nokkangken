/*
    Inserts a new user record. If user already exists, updates the user's record
*/
INSERT INTO Users AS u (u.facebook_id, u.name, u.email, u.bio, u.picture)
VALUES(${facebookId}, ${name}, ${email}, ${bio}, ${picture})
RETURNING id
