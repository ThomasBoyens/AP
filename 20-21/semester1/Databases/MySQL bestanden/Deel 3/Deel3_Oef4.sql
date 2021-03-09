/*update `boetes` set 
	`bedrag` = `bedrag` * 1.05 where `betalingsnr` >= 0;
    
update `boetes` set 
	`bedrag` = 120 where `datum` >= '2020-01-01' and `datum` <= '2020-12-31' and `betalingsnr` >= 0;*/
    
select * from `boetes`;