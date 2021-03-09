/*
--1
SELECT 
    b.`BETALINGSNR`, b.`BEDRAG`, s.`NAAM`
FROM
    `boetes` b,
    `spelers` s
WHERE
    b.`SPELERSNR` = s.`SPELERSNR`;

--2
SELECT 
    s.`SPELERSNR`, s.`NAAM`, w.*
FROM
    `spelers` s,
    `wedstrijden` w
WHERE
    w.`SPELERSNR` = s.`SPELERSNR`;

--3
SELECT 
    b.`BETALINGSNR`, b.`BEDRAG`, s.`NAAM`, s.`PLAATS`
FROM
    `boetes` b,
    `spelers` s
WHERE
    b.`SPELERSNR` = s.`SPELERSNR`
        AND s.`PLAATS` = 'Den Haag';
        
--4
SELECT 
    w.`WEDSTRIJDNR`,
    s.`NAAM`,
    t.`DIVISIE`,
    `GEWONNEN` - `VERLOREN` AS 'RESULTAAT'
FROM
    `spelers` s,
    `wedstrijden` w,
    `teams` t
WHERE
    w.`SPELERSNR` = s.`SPELERSNR`
        AND t.`TEAMNR` = w.`TEAMNR`
        AND w.`WEDSTRIJDNR` <= 10;*/