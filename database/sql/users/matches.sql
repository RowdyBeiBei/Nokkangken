--inputs are (userId, eventTime) ${userId} ${eventTime}
--returns id and info of person matched and the id for their 'possible'

SELECT DISTINCT ON (u.facebook_id) u.facebook_id, u.idu, u.name, u.bio, u.picture, p.idp, p.possibleTime, pl.businessid
FROM users AS u
INNER JOIN possibles AS p
  ON u.idu = p.idp_user
INNER JOIN possibleLocations AS pl
  ON p.idp = pl.id_possibles
LEFT OUTER JOIN responses AS r
  ON u.idu = r.id_prospect
WHERE u.idu != ${userId}
AND p.possibleTime = ${eventTime}
AND pl.businessid =
  ANY (SELECT pl.businessid
  FROM users AS u
  INNER JOIN possibles AS p
    ON u.idu = p.idp_user
  INNER JOIN possibleLocations AS pl
    ON p.idp = pl.id_possibles
  WHERE p.possibletime = ${eventTime}
  AND u.idu = ${userId})
AND r.wouldJoin IS null;



