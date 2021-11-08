DROP TABLE IF EXISTS orders;

CREATE TABLE orders
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    client  VARCHAR(100) NOT NULL,
    "date"  DATE         NOT NULL,
    address VARCHAR(100) DEFAULT NULL
);

INSERT INTO orders (client, "date", address)
VALUES ('Dmitrii', '2021-11-08', 'Rostov-on-Don'),
       ('Ann', '2021-11-10', 'Moscow');