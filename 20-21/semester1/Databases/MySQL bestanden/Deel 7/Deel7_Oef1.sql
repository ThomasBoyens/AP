/*
--1
SELECT 
	(
		SELECT `DIVISIE` FROM `teams` t
        WHERE t.`TEAMNR` = 1
	) AS `Divisie_t1`,
    (
		SELECT `DIVISIE` FROM `teams` t
        WHERE t.`TEAMNR` = 2
	) AS `Divisie_t2`;
    
    
--2
SELECT 
	s.`SPELERSNR`,
    (
    SELECT COUNT(*) FROM `wedstrijden` w
    WHERE w.`SPELERSNR` = s.`SPELERSNR`
    ) AS `Aantal`
FROM
	`spelers` s;*/