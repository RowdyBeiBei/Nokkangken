--should take input ${userId} and output user info for all users that have schedulded events

SELECT * FROM users As u 
INNER JOIN users_scheduleds AS us1
  ON u.id = us1.id_user
WHERE us1.id_scheduled = 
  ANY (SELECT s.id FROM scheduleds AS s
    INNER JOIN users_scheduleds AS us2
      ON us2.id_scheduled = s.id
    WHERE us2.id_user = ${userId})
AND u.id != ${userId};

