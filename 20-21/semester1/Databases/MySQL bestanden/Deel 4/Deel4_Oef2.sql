/*SELECT 
    `SPELERSNR`, 
    `TEAMNR`, 
    CASE 
		WHEN(`GEWONNEN` - `VERLOREN`) > 0 THEN 'Gewonnen'
        WHEN(`GEWONNEN` - `VERLOREN`) < 0 THEN 'Verloren'
        ELSE 'Gelijk'
	END AS `RESULTAAT`
FROM
    `wedstrijden`;*/
    
