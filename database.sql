-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE shoplist (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL(5,2),
    "unit" VARCHAR(20) NOT NULL
);

INSERT INTO shoplist ("name", "quantity", "unit")
VALUES ('Apples', 2, 'lbs'),
	('Bread', 1, 'loafs'),
  	('Milk', 1, 'gallon'),
  	('Sliced Almonds', 2, 'cups'),
    ('Bananas', 1, 'bunch');