CREATE OR ALTER PROCEDURE [dbo].[create_Constraints]
as
begin
ALTER TABLE [Staging].[CLEANSED].[Categories]
ADD CONSTRAINT FK_