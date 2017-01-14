--gets all the users for an event (other than the current user themself)

SELECT us.id_user 
FROM users_scheduleds AS us
INNER JOIN scheduleds AS s
  ON us.id_scheduled = s.id
WHERE s.id = ${scheduledId}
AND us.id_user != ${userId};