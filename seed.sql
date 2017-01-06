/*
   Clears out db and inserts dummy data
*/

--Empty tables
TRUNCATE users CASCADE;
TRUNCATE possibles CASCADE;
TRUNCATE scheduleds CASCADE;
TRUNCATE possiblelocations CASCADE;
TRUNCATE users_scheduleds CASCADE;
TRUNCATE responses CASCADE;

--Create tables
INSERT INTO Users(facebook_id, name) VALUES
(1, 'Demo User 1'), -- user 1;
(2, 'Demo User 2'), -- user 2;
(3, 'Demo User 3'), -- user 3;
(4, 'Demo User 4'), -- user 4;
(5, 'Demo User 5') -- user 5;
RETURNING id;

INSERT INTO Possibles(possibleTime, id_user) VALUES
(10, (SELECT id FROM users WHERE facebook_id = 1)),
(20, (SELECT id FROM users WHERE facebook_id = 2)),
(10, (SELECT id FROM users WHERE facebook_id = 3)),
(10, (SELECT id FROM users WHERE facebook_id = 4)),
(10, (SELECT id FROM users WHERE facebook_id = 5))
RETURNING id;

INSERT INTO possiblelocations(businessId, id_possibles) VALUES
('a', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1)),
('b', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1)),
('c', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1)),
('d', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1)),
('a', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 2)),
('b', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 2)),
('c', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 3)),
('b', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 3)),
('a', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 4)),
('b', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 4)),
('f', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 4)),
('e', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 5)),
('f', (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 5))
RETURNING *;