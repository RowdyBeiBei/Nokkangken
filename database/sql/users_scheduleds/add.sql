

INSERT INTO users_scheduleds (id_user, id_scheduled)
VALUES ((SELECT users.idu FROM Users Where users.idu = ${userId}), (SELECT scheduleds.ids FROM scheduleds Where scheduleds.ids = ${scheduledId}))
RETURNING idus;