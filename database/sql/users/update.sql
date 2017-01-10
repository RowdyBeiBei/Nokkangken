--updates user information if new values are not null, if all values null does nothing

UPDATE users SET
  name = COALESCE(${name}, name),
  email = COALESCE(${email}, email),
  bio = COALESCE(${bio}, bio),
  picture = COALESCE(${picture}, picture)
WHERE facebook_id = ${facebookId}
AND  (${name} IS DISTINCT FROM name OR
      ${email} IS DISTINCT FROM email OR
      ${bio} IS DISTINCT FROM bio OR
      ${picture} IS DISTINCT FROM picture
     );