CREATE DATABASE OnlineMarket;

USE OnlineMarket;

CREATE TABLE Users
(
    username varchar(20) PRIMARY KEY,
    password varchar(20) NOT NULL,
    email varchar(30) NOT NULL,
    phone int NOT NULL,
    address varchar(45)
);
