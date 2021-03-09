/*
--1
SELECT 
    s.*, bl.`FUNCTIE`, 
    CASE
		WHEN bl.`EIND_DATUM` IS NOT NULL THEN 'Actief'
        ELSE 'Niet Actief'
        END AS 'Actief?'
FROM
    `spelers` s
        INNER JOIN
    `bestuursleden` bl ON s.`SPELERSNR` = bl.`SPELERSNR`
WHERE
    bl.`FUNCTIE` = 'Voorzitter'
        OR bl.`FUNCTIE` = 'Penningmeester';
        
--2
SELECT 
    s.`SPELERSNR`,
    s.`NAAM`,
    CONCAT(w.`GEWONNEN`, " - ", w.`VERLOREN`) AS 'UITSLAG'
FROM
	`spelers` s 
    INNER JOIN `wedstrijden` w ON w.`SPELERSNR` = s.`SPELERSNR`
    INNER JOIN `teams` t ON t.`TEAMNR` = w.`TEAMNR`;
    
--3
SELECT 
    CONCAT(SUBSTRING(s.`NAAM` , INSTR(s.`NAAM`, ",") + 1), " ", SUBSTRING_INDEX(s.`NAAM`, ",", 1)) AS `NAAM`,
    w.*
FROM
    `spelers` s
        INNER JOIN
    `wedstrijden` w ON w.`SPELERSNR` = s.`SPELERSNR`
WHERE
    w.`GEWONNEN` > w.`VERLOREN`
        AND MONTH(s.`GEB_DATUM`) IN (8, 9, 10);*/