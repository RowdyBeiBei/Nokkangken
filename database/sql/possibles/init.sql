--dummy data for possibles table

INSERT INTO Possibles(possibleTime, id_user) VALUES
(10, (SELECT id FROM users WHERE facebook_id = 1)),
(20, (SELECT id FROM users WHERE facebook_id = 2)),
(10, (SELECT id FROM users WHERE facebook_id = 3)),
(10, (SELECT id FROM users WHERE facebook_id = 4)),
(10, (SELECT id FROM users WHERE facebook_id = 5))
RETURNING id;