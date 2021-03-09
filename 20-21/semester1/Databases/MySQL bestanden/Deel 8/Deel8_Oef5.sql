/*
--1
SELECT 
    s.`plaats`
FROM
    `spelers` s
GROUP BY s.`plaats`
HAVING COUNT(*) > 4;

--2*
SELECT
	b.`spelersnr`
FROM 
	`boetes` b
GROUP BY 
	`spelersnr` HAVING SUM(b.`bedrag`) > 150;

--3
SELECT 
	t.`teamnr`,
    t.`divisie`
FROM 
	`teams` t
WHERE
	t.`teamnr` IN
    (
		SELECT
			w.`teamnr`
		FROM
			`wedstrijden` w
		GROUP BY
			w.`teamnr` HAVING COUNT(DISTINCT w.`spelersnr`) > 4
	);
	
--4*/

    
	