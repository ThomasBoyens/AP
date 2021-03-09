SELECT 
    t.*
FROM
    (SELECT 
        s.`SPELERSNR`, s.`NAAM`, s.`PLAATS`, b.`BETALINGSNR`, b.`bedrag`
    FROM
        `spelers` s,
        `boetes` b
    WHERE
        b.`SPELERSNR` = s.`SPELERSNR`
            AND `PLAATS` = 'Den Haag'
            OR SUBSTR(`NAAM`, 1, 1) = 'C'
            AND b.`SPELERSNR` = s.`SPELERSNR`) t;
