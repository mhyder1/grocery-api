BEGIN;

INSERT INTO users (id, username, name, password, date_created)
VALUES
(1, 'demo_user_name', 'John Smith', '$2a$12$A9x3aZ5.Xmyaoun.aPYqiOI2rIqY8HXA6CLyNghOBWQY24wPIebOW', '2020-01-03T00:00:00.000Z');


COMMIT;