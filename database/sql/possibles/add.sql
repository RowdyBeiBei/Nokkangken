--add a possible event to the database

INSERT INTO possibles (possibleTime, id_user)
VALUES (${eventTime}, (SELECT users.idu FROM Users Where users.idu = ${userId}))
RETURNING idp;