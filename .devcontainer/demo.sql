-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);

-- Insert 5 products into the table
INSERT INTO products (id, name, price) VALUES (1, 'Product 1', 10.00);
INSERT INTO products (id, name, price) VALUES (2, 'Product 2', 20.00);
INSERT INTO products (id, name, price) VALUES (3, 'Product 3', 30.00);
INSERT INTO products (id, name, price) VALUES (4, 'Product 4', 40.00);
INSERT INTO products (id, name, price) VALUES (5, 'Product 5', 50.00);