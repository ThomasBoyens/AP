/*
--1
select `BETALINGSNR`, `BEDRAG` from `boetes` where `BEDRAG` in (50,75,100);

--2
select * from `wedstrijden` where `SPELERSNR` not in (8,27,112);

--3
SELECT 
    `SPELERSNR`, `NAAM`, `STRAAT`
FROM
    `spelers`
WHERE
    LEFT(`STRAAT`, 1) IN ('e', 'l', 's');*/
    
    
SELECT 
    `SPELERSNR`,
    `JAARTOE`,
    `GEB_DATUM`,
    YEAR(CURDATE()) - YEAR(`jaartoe`) AS 'Aantal jaren'
FROM
    `spelers`;