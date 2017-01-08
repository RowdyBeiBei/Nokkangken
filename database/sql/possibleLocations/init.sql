--dummy data for possibleLocations

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
RETURNING id;