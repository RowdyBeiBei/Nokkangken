
--checks to see if a user (${userid}) has a match at a certain time (${eventTime})


SELECT u.name, u.idu, r2.id_user, r2.wouldjoin, r1.id_user, r2.id_prospect, r1.wouldjoin, p1.idp
FROM users as u
INNER JOIN responses as r1
  ON u.idu = r1.id_prospect
INNER JOIN responses as r2
  ON r2.id_prospect = r1.id_user
    AND r1.id_prospect = r2.id_user
INNER JOIN possibles as p1
  ON p1.id_user = r1.id_user
INNER JOIN possibles as p2
  ON p2.id_user = r2.id_user 
WHERE r1.wouldjoin = TRUE
AND r2.wouldjoin = TRUE
AND p1.possibleTime = p2.possibleTime
AND r1.id_user = ${userId}
AND p1.possibleTime = ${eventTime};