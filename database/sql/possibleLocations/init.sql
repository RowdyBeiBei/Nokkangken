--dummy data for possibleLocations

INSERT INTO possiblelocations(businessId, id_possibles) VALUES
('a', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 1)),
('b', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 1)),
('c', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 1)),
('d', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 1)),
('a', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 2)),
('b', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 2)),
('c', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 3)),
('b', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 3)),
('a', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 4)),
('b', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 4)),
('f', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 4)),
('e', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 5)),
('f', (SELECT possibles.idp FROM possibles, users WHERE users.idu = possibles.id_user AND users.facebook_id = 5))
RETURNING idpl;