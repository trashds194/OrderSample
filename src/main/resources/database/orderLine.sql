DROP TABLE IF EXISTS "order_line";

CREATE TABLE "order_line"
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    "order_id" INT NOT NULL,
    "goods_id" INT NOT NULL,
    count      INT NOT NULL
);

INSERT INTO "order_line" ("order_id", "goods_id", count)
VALUES (2, 1, 1),
       (3, 2, 2);