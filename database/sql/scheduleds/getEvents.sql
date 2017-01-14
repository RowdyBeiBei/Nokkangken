--gets all the scheduled events for a particular user

SELECT * 
FROM scheduleds as s
INNER JOIN users_scheduleds as us
  ON s.id = us.id_scheduled
WHERE us.id_user = ${userId};
