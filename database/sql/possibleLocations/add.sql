--add locations for a possible event

INSERT INTO possibleLocations (businessId, id_possibles)
VALUES (${businessId}, (SELECT possibles.id FROM possibles Where possibles.id = ${possibleId}))
RETURNING id;