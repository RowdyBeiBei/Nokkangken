--add a response to the database

INSERT INTO responses (wouldJoin, id_user, id_possibles, id_prospect, id_prospectPossible)
VALUES 
  (${wouldJoin},
  (SELECT users.idu FROM Users Where users.idu = ${userId}),
  (SELECT possibles.idp FROM Possibles WHERE possibles.id_user = ${userId} AND possibles.possibleTime = ${eventTime}),
  (SELECT users.idu FROM Users Where users.idu = ${prospectId}),
  (SELECT possibles.idp FROM Possibles WHERE possibles.id_user = ${prospectId} AND possibles.possibleTime = ${eventTime}))
RETURNING idr;
