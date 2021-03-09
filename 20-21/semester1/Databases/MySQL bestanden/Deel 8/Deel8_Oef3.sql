
--1
SELECT 
    *
FROM
    `boetes`
ORDER BY `bedrag` DESC
LIMIT 3;

--2
SELECT 
    *
FROM
    `spelers` s
WHERE
    s.`plaats` IN (SELECT 
            s2.`plaats`
        FROM
            `spelers` s2
        WHERE
            s2.`naam` = 'Bischoff')
ORDER BY s.`jaartoe` DESC
LIMIT 3;

--3
USE `gamemania`;

SELECT 
    *
FROM
    `tblgamedefinitions` gd
ORDER BY gd.`releasedatum` DESC
LIMIT 30 , 10;

--4
SELECT 
    s.`naam`,
    s.`geb_datum`,
    (SELECT 
            COUNT(*)
        FROM
            `boetes` b
        WHERE
            b.`spelersnr` = s.`spelersnr`) AS aantal
FROM
    `spelers` s
ORDER BY 3 DESC , s.`geb_datum` 
LIMIT 3;