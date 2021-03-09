/*
--1
SELECT 
    s.`SPELERSNR`, s.`NAAM`, s.`VOORLETTERS`
FROM
    `spelers` s
WHERE
    s.`SPELERSNR` = (SELECT 
            b.`SPELERSNR`
        FROM
            `boetes` b
        WHERE
            b.`BETALINGSNR` = 4);
            

--2
SELECT 
    s.`spelersnr`, s.`naam`, s.`voorletters`
FROM
    `spelers` s
WHERE
    s.`spelersnr` = (SELECT 
            w.`spelersnr`
        FROM
            `wedstrijden` w
        WHERE
            `WEDSTRIJDNR` = 2);
        
--3
SELECT 
    b.`SPELERSNR`, b.`BETALINGSNR`
FROM
    `boetes` b
WHERE
    b.`SPELERSNR` = (SELECT 
            w.`SPELERSNR`
        FROM
            `wedstrijden` w);*/