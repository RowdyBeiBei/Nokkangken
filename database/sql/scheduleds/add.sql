--insert a new scheduled event row

INSERT INTO scheduleds (scheduledTime, businessId)
VALUES (${eventTime}, ${businessId})
RETURNING ids;