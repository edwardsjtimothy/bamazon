DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
item_id Int(10) AUTO_INCREMENT NOT NULL,
product_name varchar(30),
department_name varchar(15),
price decimal(10,2),
stock_quantity Int,
primary key (item_id)
);

SELECT * FROM products; 


INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Nintendo Switch', 'Electronics', 300.00, 124);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Reading Lamp', 'Furniture', 25.99, 59);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Fender Stratocaster', 'Instruments', 900.00, 13);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Twilight Imperium', 'Games', 90.00, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Dinosaur Watering Can', 'Garden', 14.00, 34);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Coffee Table', 'Furniture', 199.99, 67);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Don Quixote', 'Books', 24.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Vox Amplifier', 'Instruments', 400.00, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('The Solar War', 'Books', 15.00, 19);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ('Infinite Jest', 'Books', 20.00, 6);