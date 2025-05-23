CREATE DATABASE SchoolManagement;
USE SchoolManagement;

CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT,
    longitude FLOAT
);

