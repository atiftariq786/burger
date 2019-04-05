
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (100) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);
