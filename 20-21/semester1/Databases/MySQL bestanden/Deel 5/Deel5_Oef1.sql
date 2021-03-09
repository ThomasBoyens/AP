/*
--1
SELECT 
    `BETALINGSNR`, `BEDRAG`
FROM
    `boetes`
WHERE
    `BEDRAG` > 60;

--2
SELECT 
    `SPELERSNR`,
    `GEWONNEN`,
    `VERLOREN`,
    `GEWONNEN` + `VERLOREN` AS `AANTAL_SETS`
FROM
    `wedstrijden`
WHERE
    `GEWONNEN` + `VERLOREN` = 5;
    
--3
SELECT 
    `NAAM`, `PLAATS`
FROM
    `SPELERS`
WHERE
    `PLAATS` = 'Den Haag'
        OR `PLAATS` = 'Rijswijk';
        
--4
SELECT 
    `NAAM`, `GESLACHT`, `PLAATS`
FROM
    `SPELERS`
WHERE
    `PLAATS` = 'Zoetermeer'
        AND `GESLACHT` = 'V';
        
--5
SELECT 
    *
FROM
    `boetes`
WHERE
    `SPELERSNR` = 44
        AND YEAR(`DATUM`) = 1980
        OR MONTH(`DATUM`) <> 12;
        
--7
SELECT 
    `SPELERSNR`, `NAAM`, `JAARTOE`
FROM
    `spelers`
WHERE
    `JAARTOE` >= 1982;
    
--6
SELECT 
    `SPELERSNR`, `NAAM`, `PLAATS`, `STRAAT`
FROM
    `spelers`
WHERE
    LEFT(`STRAAT`, 1) = 's'
        AND `PLAATS` <> 'Den Haag';
        
--8
SELECT 
    `SPELERSNR`, `NAAM`, `PLAATS`
FROM
    `spelers`
WHERE
    `GESLACHT` = 'V'
        AND `PLAATS` <> 'Den Haag';*/