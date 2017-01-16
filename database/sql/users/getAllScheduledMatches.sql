--should take input ${userId} and output user info for all users that have schedulded events

SELECT u.idu, u.facebook_id, u.name, u.email, u.bio, u.picture, us1.id_scheduled, s.scheduledTime, s.businessId FROM users As u 
INNER JOIN users_scheduleds AS us1
  ON u.idu = us1.id_user
INNER JOIN scheduleds AS s
  ON us1.id_scheduled = s.ids
WHERE us1.id_scheduled = 
  ANY (SELECT s.ids FROM scheduleds AS s
    INNER JOIN users_scheduleds AS us2
      ON us2.id_scheduled = s.ids
    WHERE us2.id_user = ${userId})
AND u.idu != ${userId};

