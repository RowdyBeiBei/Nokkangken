--add a response to the database

INSERT INTO responses (wouldJoin, id_user, id_possibles, id_prospect, id_prospectPossible)
VALUES 
  (${wouldJoin}, 
  (SELECT users.id FROM Users Where users.id = ${userId}),
  (SELECT possibles.id FROM Possibles WHERE possibles.id_user = ${userId} AND possibles.possibleTime = ${eventTime}),
  (SELECT users.id FROM Users Where users.id = ${prospectId}),
  (SELECT possibles.id FROM Possibles WHERE possibles.id_user = ${prospectId} AND possibles.possibleTime = ${eventTime}))
RETURNING id;