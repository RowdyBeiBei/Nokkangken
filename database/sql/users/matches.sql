--inputs are (facebook_id, eventTime) ${eventTime} ${facebookId}

SELECT DISTINCT ON (u.facebook_id) u.facebook_id, u.name, u.bio, u.picture
FROM users AS u
INNER JOIN possibles AS p 
  ON u.id = p.id_user
INNER JOIN possibleLocations AS pl
  ON p.id = pl.id_possibles
WHERE p.possibleTime = ${eventTime}
AND pl.businessid = 
  ANY (SELECT pl.businessid 
  FROM users AS u
  INNER JOIN possibles AS p
    ON u.id = p.id_user
  INNER JOIN possibleLocations AS pl
    ON p.id = pl.id_possibles
  WHERE p.possibletime = ${eventTime}
  AND u.facebook_id = ${facebookId})
AND u.facebook_id != ${facebookId};