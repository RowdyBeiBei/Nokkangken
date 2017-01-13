

INSERT INTO users_scheduleds (id_user, id_scheduled)
VALUES ((SELECT users.id FROM Users Where users.id = ${userId}), (SELECT scheduleds.id FROM scheduleds Where scheduleds.id = ${scheduledId}))
RETURNING id;