--once a match is created, will need to delete the possible event (as it will be scheduled)
DELETE FROM possibles
WHERE idp = $1
RETURNING *;