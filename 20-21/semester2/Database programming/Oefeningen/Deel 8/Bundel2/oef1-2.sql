CREATE OR ALTER PROCEDURE [dbo].[SP_GET_PLAYER_GAMECOUNT]
	@prm_spelersnr INT,
	@prm_gamecount INT OUT
AS
BEGIN
	SET @prm_gamecount = (SELECT COUNT(*) FROM [dbo].[WEDSTRIJDEN]
									WHERE [SPELERSNR] = @prm_spelersnr);
END;

DECLARE @var_gamecount INT;
SET @var_gamecount = 0;
EXEC SP_GET_PLAYER_GAMECOUNT 6, @var_gamecount OUT;
SELECT @var_gamecount;
GO