CREATE TABLE [CLEANSED].[Categories]
(
	[CategoryID] BIT NOT NULL PRIMARY KEY,
    [CategoryName] NVARCHAR(20),
	[Discription] NVARCHAR(50)

);
CREATE TABLE [CLEANSED].[Customers]
(
	[CustomerID] CHAR(5) NOT NULL PRIMARY KEY,
	[Customer] VARCHAR(50),
	[ContactName Customer] VARCHAR(75),
	[Title] VARCHAR(25),
	[Adres] VARCHAR(30),
	[City] VARCHAR(20),
	[PostalCode] VARCHAR(10),
	[Country] VARCHAR(15),
	[Phone] VARCHAR(20)
);

CREATE TABLE [CLEANSED].[Shippers] (
	[ShippersID] BIT NOT NULL PRIMARY KEY,
	[Name] VARCHAR(20),
	[Phone] VARCHAR(20)
);

CREATE TABLE [CLEANSED].[Product] (
	[ProductID] TINYINT NOT NULL PRIMARY KEY,
	[ProductName] NVARCHAR(40),
	[SupplierID] FLOAT, --sebiet
	[CategoryID] BIT NOT NULL FOREIGN KEY REFERENCES [CLEANSED].[Categories](CategoryID),
	[QuantityPerUnit] NVARCHAR(35),
	[UnitPrice] DECIMAL(5,2),
	[UnitsInStock] INT,
	[UnitsOnOrder] INT,
	[ReorderLevel] INT,
	[Discontinued] BIT
)

CREATE TABLE [CLEANSED].[Orders]
(
	[OrderID] INT NOT NULL PRIMARY KEY,
	[CustomerID] CHAR(5) FOREIGN KEY REFERENCES [CLEANSED].[Customers](CustomerID),
	[EmployeeID] BIT,
	[OrderDate] DATETIME NOT NULL,
	[RequiredDate] DATETIME NOT NULL,
	[ShippedDate] DATETIME,
	[ShipVia] BIT NOT NULL FOREIGN KEY REFERENCES [CLEANSED].[Shippers](ShippersID),
	[Freight] DECIMAL(5,2),
	[ShipName] NVARCHAR(50),
	[ShipAddress] NVARCHAR(50),
	[ShipCity] NVARCHAR(20),
	[ShipPostalCode] NVARCHAR(10),
	[ShipCountry] NVARCHAR(15),
	[ProductID] TINYINT NOT NULL FOREIGN KEY REFERENCES [CLEANSED].[Product](ProductID)
);
CREATE TABLE [CLEANSED].[Orders Details]
(
	[OrderID] INT NOT NULL FOREIGN KEY REFERENCES [CLEANSED].[Orders](OrderID),
	[Quantity] TINYINT NOT NULL,
	[Discount] DECIMAL(3,2)
   
);
CREATE TABLE [CLEANSED].[Suppliers] (
	[SupplierID] TINYINT NOT NULL PRIMARY KEY,
	[Company] NVARCHAR(50),
	[Contact] NVARCHAR(35),
	[Contact title] NVARCHAR(35),
	[Phone] NVARCHAR(20),
	[Location] NVARCHAR(100))