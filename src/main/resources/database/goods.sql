DROP TABLE IF EXISTS "goods";

CREATE TABLE "goods"
(
    id    INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    price DOUBLE       NOT NULL
);

INSERT INTO "goods" (name, price)
VALUES ('Eggs', 100.0),
       ('Bread', 35.00);