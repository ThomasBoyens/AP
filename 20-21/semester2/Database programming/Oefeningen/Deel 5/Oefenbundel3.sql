USE master;
CREATE DATABASE Sales5;


USE Sales5;

CREATE TABLE [dbo].[Customers]
(
	customer_id INT PRIMARY KEY,
	customer_name CHAR(255) NOT NULL
);