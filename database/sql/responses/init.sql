--dummy data for responses

INSERT INTO Responses(wouldJoin, id_possibles, id_user, id_prospectpossible, id_prospect) VALUES
(FALSE, 
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1),
  (SELECT users.id FROM users WHERE users.facebook_id = 1),
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 3),
  (SELECT users.id FROM users WHERE users.facebook_id = 3)
),
(FALSE, 
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 5),
  (SELECT users.id FROM users WHERE users.facebook_id = 5),
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 4),
  (SELECT users.id FROM users WHERE users.facebook_id = 4)
),
(FALSE, 
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 4),
  (SELECT users.id FROM users WHERE users.facebook_id = 4),
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 5),
  (SELECT users.id FROM users WHERE users.facebook_id = 5)
),
(TRUE, 
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1),
  (SELECT users.id FROM users WHERE users.facebook_id = 1),
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 4),
  (SELECT users.id FROM users WHERE users.facebook_id = 4)
),
(TRUE, 
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 4),
  (SELECT users.id FROM users WHERE users.facebook_id = 4),
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1),
  (SELECT users.id FROM users WHERE users.facebook_id = 1)
),
(TRUE, 
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 3),
  (SELECT users.id FROM users WHERE users.facebook_id = 3),
  (SELECT possibles.id FROM possibles, users WHERE users.id = possibles.id_user AND users.facebook_id = 1),
  (SELECT users.id FROM users WHERE users.facebook_id = 1)
)
RETURNING id;