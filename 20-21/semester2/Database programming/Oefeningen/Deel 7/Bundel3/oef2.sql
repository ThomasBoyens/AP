DROP VIEW [dbo].[V_PLAYERS_FINES]
GO

CREATE VIEW [dbo].[V_PLAYERS_TOTALFINEAMOUNT]
AS
SELECT 
	[s].[SPELERSNR],
	COALESCE(SUM([b].[BEDRAG]),0) AS [TOTALFINE]
FROM
	[dbo].[SPELERS] [s]
	LEFT JOIN [dbo].[BOETES] [b] ON [s].[SPELERSNR] = [b].[SPELERSNR]
GROUP BY
	[s].[SPELERSNR]
;
GO