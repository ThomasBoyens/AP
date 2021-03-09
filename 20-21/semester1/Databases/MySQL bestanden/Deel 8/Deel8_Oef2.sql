
--1
SELECT 
    *
FROM
    `spelers`
ORDER BY `naam` DESC;

--2
SELECT 
    *
FROM
    `spelers`
ORDER BY `jaartoe` , `plaats` , `naam` DESC;

--3
SELECT 
    `naam`, `voorletters`, `spelersnr`
FROM
    `spelers`
ORDER BY RIGHT(`naam`, 1) DESC;

--4
SELECT 
    s.`naam`,
    (SELECT 
            COUNT(*)
        FROM
            `boetes` b
        WHERE
            b.`spelersnr` = s.`spelersnr`) AS aantal
FROM
    `spelers` s
ORDER BY 2 DESC , s.`naam`;
    