--some dummy data for users table

INSERT INTO Users(facebook_id, name) VALUES
(1, 'Demo User 1'), -- user 1;
(2, 'Demo User 2'), -- user 2;
(3, 'Demo User 3'), -- user 3;
(4, 'Demo User 4'), -- user 4;
(5, 'Demo User 5') -- user 5;
RETURNING id;