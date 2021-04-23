DECLARE @i INT ;
SET @i = 1;

WHILE (@i<1000)
BEGIN
	INSERT INTO Customers(customer_id,customer_name) VALUES(@i, 'UserXXXX');
	SET @i=@i+1;
END;
GO