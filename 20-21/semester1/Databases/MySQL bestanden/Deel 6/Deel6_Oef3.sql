/*
--1
SELECT 
	s.`SPELERSNR`, 
    t.`TEAMNR`
FROM
	`spelers` s 
    LEFT JOIN `teams` t ON s.`SPELERSNR` = t.`SPELERSNR`;
    
--2
SELECT 
    s.`SPELERSNR`,
    CASE
        WHEN b.`BEDRAG` IS NULL THEN 0
        ELSE b.`BEDRAG`
    END AS `BOETEBEDRAG`
FROM
    `spelers` s
        LEFT JOIN
    `boetes` b ON s.`SPELERSNR` = b.`SPELERSNR`;*/
