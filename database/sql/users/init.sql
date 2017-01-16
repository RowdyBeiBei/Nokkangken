--some dummy data for users table

INSERT INTO Users(facebook_id, name, picture, bio) VALUES
(1, 'Nick', '', 'bio1'), -- user 1;
(2, 'Dan', '', 'bio2'), -- user 2;
(3, 'Bei', '', 'bio3'), -- user 3;
(4, 'Wasiff', 'g', 'bio4'), -- user 4;
(5, 'Niko', 'e1c70cac85f.jpg', 'bio5') -- user 5;
RETURNING idu;
