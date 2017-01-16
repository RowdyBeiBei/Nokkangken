--add locations for a possible event

INSERT INTO possibleLocations (businessId, id_possibles)
VALUES (${businessId}, (SELECT possibles.idp FROM possibles Where possibles.idp = ${possibleId}))
RETURNING idpl;