USE [NW_DWH]

BEGIN TRANSACTION
SET QUOTED_IDENTIFIER ON
SET ARITHABORT ON
SET NUMERIC_ROUNDABORT OFF
SET CONCAT_NULL_YIELDS_NULL ON
SET ANSI_NULLS ON
SET ANSI_PADDING ON
SET ANSI_WARNINGS ON
COMMIT

BEGIN TRANSACTION
GO
CREATE SCHEMA DIM
GO
CREATE SCHEMA FACT
GO
COMMIT

---

BEGIN TRANSACTION
GO
CREATE TABLE [DIM].Shippers
	(
	  Id int NOT NULL IDENTITY (1, 1)
      ,[Shipper_id] int NOT NULL
	  ,[Shipper_name] nvarchar(50) NOT NULL
	  ,[Phone] nvarchar(50) NULL
	)  ON [PRIMARY]
GO
ALTER TABLE DIM.Shippers ADD CONSTRAINT
	PK_Shippers PRIMARY KEY CLUSTERED 
	(
	Id
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]



GO
ALTER TABLE DIM.Shippers SET (LOCK_ESCALATION = TABLE)
GO
COMMIT