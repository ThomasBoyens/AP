
--1
SELECT 
    s.`SPELERSNR`
FROM
    `spelers` s
WHERE
    s.`SPELERSNR` NOT IN 
    (
		SELECT 
            w.`SPELERSNR`
        FROM
            `wedstrijden` w
        WHERE
            w.`GEWONNEN` = 3
	);
    

--2
SELECT 
    t.`TEAMNR`, 
    t.`DIVISIE`
FROM
    `teams` t
WHERE
    t.`SPELERSNR` NOT IN 
    (
		SELECT 
            w.`TEAMNR`
        FROM
            `wedstrijden` w
        WHERE
            w.`SPELERSNR` = 6
	);
		