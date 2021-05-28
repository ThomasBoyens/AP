CREATE OR ALTER VIEW [dbo].[V_PLAYERS_FINES]
AS
SELECT 
	[s].[SPELERSNR],
	(
		SELECT
			COALESCE(SUM([BEDRAG]),0)
		FROM
			[dbo].[BOETES] [b]
		WHERE
			[b].[SPELERSNR] = [s].[SPELERSNR]
	) AS [TOTALFINE]
FROM
	[dbo].[SPELERS] [s]
;
GO

SELECT * FROM [dbo].[V_PLAYERS_FINES];
GO