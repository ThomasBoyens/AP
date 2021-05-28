CREATE OR ALTER PROCEDURE [dbo].[SP_GET_ALLPLAYERSANDGAMES]
AS
BEGIN
	SELECT
		[s].*,
		[w].[WEDSTRIJDNR],
		[w].[TEAMNR],
		[w].[GEWONNEN],
		[w].[VERLOREN]
	FROM
		[dbo].[SPELERS] AS [s]
		LEFT JOIN [dbo].[WEDSTRIJDEN] AS [w] ON [s].[SPELERSNR] = [w].[SPELERSNR];
END;
GO

EXEC [dbo].[SP_GET_ALLPLAYERSANDGAMES]
GO