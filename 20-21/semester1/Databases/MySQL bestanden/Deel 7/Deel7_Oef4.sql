
--1
SELECT 
    s.`SPELERSNR`, 
    s.`NAAM`
FROM
    `spelers` s
WHERE
    s.`SPELERSNR` IN 
    (
		SELECT 
            b.`SPELERSNR`
        FROM
            `boetes` b
        WHERE
            b.`BEDRAG` > 50
	);
    
    
--2
SELECT 
    b.`betalingsnr`, 
    b.`bedrag`
FROM
    `boetes` b
WHERE
    b.`bedrag` IN 
    (
		100,
        5 * b.`betalingsnr`,
        (
			SELECT 
                b2.`bedrag`
            FROM
                `boetes` b2
            WHERE
                b2.`betalingsnr` = 2
		)
	);
        


			