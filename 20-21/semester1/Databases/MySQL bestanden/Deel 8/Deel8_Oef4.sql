
--1
SELECT 
    s.`jaartoe`
FROM
    `spelers` s
GROUP BY s.`jaartoe`

--2
SELECT 
    s.`jaartoe`, COUNT(*)
FROM
    `spelers` s
GROUP BY s.`jaartoe`;

--3
SELECT 
	w.`teamnr`, 
    COUNT(*),
    SUM(w.`gewonnen`)
FROM 
	`wedstrijden` w 
WHERE 
	w.`teamnr` in	
    (
		SELECT
			t.`teamnr`
		FROM
			`teams` t
		WHERE t.`divisie` = 'ere'
	)
GROUP BY
	w.`teamnr`;
    
--4
SELECT 
    s.`spelersnr`, s.`naam`, SUM(b.`bedrag`)
FROM
    `spelers` s
        INNER JOIN
    `boetes` b ON s.`spelersnr` = b.`spelersnr`
GROUP BY 
	s.`spelersnr`, s.`naam`;

--5
SELECT 
    t.`teamnr`, t.`divisie`, SUM(w.`gewonnen`)
FROM
    `teams` t
        INNER JOIN
    `wedstrijden` w ON t.`teamnr` = w.`teamnr`
GROUP BY t.`teamnr` , t.`divisie`;

--6 /*overgenomen van oplossingen*/
SELECT distinct
	w.`spelersnr`,
    coalesce(ab.`aantal_boetes`,0) AS `aantal boetes`
from
	`wedstrijden` w 
    LEFT JOIN
    (
		SELECT
			b.`spelersnr`,
            COUNT(*) aantal_boetes
		FROM
			`boetes` b
		GROUP BY
			b.`spelersnr`
	) AS ab ON w.`spelersnr` = ab.`spelersnr`;
            
--7 /*werkt nog niet*/
SELECT 
	w.`teamnr`,
    COUNT(DISTINCT(w.`spelersnr`)) aantal
FROM 
	`wedstrijden` w 
    INNER JOIN
    (
		SELECT
			t.`teamnr`
		FROM
			`teams` t 
            INNER JOIN `spelers` s ON t.`spelersnr` = s`spelersnr`
		WHERE
			s.`plaats` = 'Den Haag'
	) AS team_denhaag ON w.`teamnr` = team_denhaag.`teamnr`
WHERE 
	w.`gewonnen` > w.`verloren`
GROUP BY 
	w.`teamnr`;
		
	