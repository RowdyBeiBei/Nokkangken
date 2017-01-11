--inputs are (facebook_id, eventTime) ${facebookId} ${eventTime}
--returns id and info of person matched and the id for their 'possible'

SELECT DISTINCT ON (u.facebook_id) u.facebook_id, u.id, u.name, u.bio, u.picture, p.id
FROM users AS u
INNER JOIN possibles AS p
  ON u.id = p.id_user
INNER JOIN possibleLocations AS pl
  ON p.id = pl.id_possibles
LEFT OUTER JOIN responses AS r
  ON u.id = r.id_prospect
WHERE u.facebook_id != ${facebookId}
AND p.possibleTime = ${eventTime}
AND pl.businessid =
  ANY (SELECT pl.businessid
  FROM users AS u
  INNER JOIN possibles AS p
    ON u.id = p.id_user
  INNER JOIN possibleLocations AS pl
    ON p.id = pl.id_possibles
  WHERE p.possibletime = ${eventTime}
  AND u.facebook_id = ${facebookId})
AND r.wouldJoin IS null;
