BEGIN;

INSERT INTO lists (id, category, name, note, price, weight, start_date, completed_date, checked, category_id, user_id)
VALUES 
(1, 'vegetables', 'cabbage', 'stor name', 2.05, '2', '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 1, 2),
(2, 'Fruits', 'Pineapple', 'next week new deal', 5.05, 2, '2020-01-03T00:00:00.000Z', '2022-05-03T00:00:00.000Z', 'false', 2, 1),
(3, 'Grain', 'Maize', 'next week new deal', 3.05, 3, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 3, 2),
(4, 'Frozen', 'Frozen Strawberries', 'next week new deal', 5.05, 3, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'true', 4, 2),
(5, 'Miscellaneous', 'Toilet Paper', 'next week new deal', 5.05, 1, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 5, 3);


COMMIT;