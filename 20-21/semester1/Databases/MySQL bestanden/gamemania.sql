DROP DATABASE IF EXISTS `gamemania`;
CREATE DATABASE  IF NOT EXISTS `gamemania` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `gamemania`;

-- Table structure for `tblconsoles`
DROP TABLE IF EXISTS `tblconsoles`;

CREATE TABLE `tblconsoles` (
  `id` int(11) NOT NULL,
  `naam` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fabrikant` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `releasedatum` datetime DEFAULT NULL,
  `eindeproduktie`	datetime DEFAULT NULL,
  `prijs`	decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Data for `tblconsoles`
LOCK TABLES `tblconsoles` WRITE;
/*!40000 ALTER TABLE `tblconsoles` DISABLE KEYS */;
INSERT INTO `tblconsoles` VALUES 
 (1,'PS3','Sony','2006-11-06',NULL, 399)
,(2,'PS4','Sony','2013-11-13',NULL, 399)
,(3,'XBOX 360','Microsoft','2005-11-16',NULL, 300)
,(4,'XBOX One','Microsoft','2013-11-22',NULL, 499)
,(5,'Nintendo Wii','Nintendo','2006-11-19','2013-10-20', 249)
,(6,'PS', 'Sony','1994-12-03','2006-03-31', 299)
,(7,'PS2', 'Sony','2000-03-04','2012-12-28', 299)
,(8,'DreamCast', 'Sega','1998-11-27','2001-03-31', 199)
,(9,'Super Nintendo', 'Nintendo','1990-11-21','2003-09-25', 199)
;
/*!40000 ALTER TABLE `tblconsoles` ENABLE KEYS */;
UNLOCK TABLES;

-- Table structure for `tbluitgevers`
DROP TABLE IF EXISTS `tbluitgevers`;

CREATE TABLE `tbluitgevers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) UNIQUE COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Data for `tbluitgevers`
LOCK TABLES `tbluitgevers` WRITE;
/*!40000 ALTER TABLE `tbluitgevers` DISABLE KEYS */;
INSERT INTO `tbluitgevers` (`id`,`naam`) VALUES 
 (1,'Ubisoft')
,(2, 'CAPCOM')
,(3,'Electronic Arts')
,(4, 'Slightly Mad Studios')
,(5, 'Running With Scissors')
,(6, 'Treyarch')
,(7, 'Tradewest')
,(8, 'Taito Corporation')
,(9, 'Rare Ltd')
,(10, 'Midway games')
,(11, 'Square Enix')
,(12, 'Naughty Dog')
,(13, 'Konami')
,(14,'Sony Computer Entertainment')
,(15,'Rockstar Games')
,(16,'LucasArts')
,(17,'Activision')
,(18,'Namco Bandai Games')
,(19,'Insomniac Games')
,(20,'FromSoftware')
,(21,'Bethesda Softworks')
,(22,'Deep Silver')
,(23,'Microsoft Studios')
,(24,'Warner Bros. Interactive Entertainment')
,(25,'Epic')
,(26,'Yacht Club Games')
,(27,'Nintendo')
,(28,'Next Level Games')
,(29,'Sega')
,(30,'Tecmo')
,(31,'Acclaim')
;

/*!40000 ALTER TABLE `tbluitgevers` ENABLE KEYS */;
UNLOCK TABLES;

-- Table structure for `tblgamedefinitions`
DROP TABLE IF EXISTS `tblgamedefinitions`;

CREATE TABLE `tblgamedefinitions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naam` varchar(255) UNIQUE COLLATE utf8_unicode_ci NOT NULL,
  `uitgever` int(11) UNSIGNED NOT NULL,
  `releasedatum` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Data for `tblgamedefinitions`
LOCK TABLES `tblgamedefinitions` WRITE;
/*!40000 ALTER TABLE `tblgamedefinitions` DISABLE KEYS */;
INSERT INTO `tblgamedefinitions` (`id`,`naam`,`uitgever`, `releasedatum`) VALUES 
 (1,'FIFA 014',3,'2013-09-23')
,(2,'FIFA 015',3,'2014-09-23')
,(3,'FIFA 016',3,'2015-09-22')
,(4,'NHL 014',3,'2013-09-10')
,(5,'NHL 015',3,'2014-09-09')
,(6,'NHL 016',3,'2015-09-09')
,(7,'Call Of Duty Black Ops 2',6,'2012-11-12')
-- SNES
,(8,'Super Double Dragon',7,'1992-10-01')
,(9,'Donkey Kong Country',9,'1994-11-21')
,(10,'Aladdin',2,'1993-11-21')
,(11,'Street Fighter Alpha 2',2,'1996-11-05')
,(12,'Bust-a-Move',8,'1995-03-07')
,(13,'Mortal Kombat II',10,'1993,06-25')
,(14,'Donkey Kong Country 2: Diddy''s Kong Quest',9,'1995-11-20')
,(15,'Final Fight',2,'1990-12-10')
,(16,'Super Ghouls ''n Ghosts',2,'1991-10-04')
,(17,'Ultimate Mortal Kombat 3',10,'1995-10-06')
-- PS 1
,(18,'Final Fantasy IX',11,'2000-07-07')
,(19,'Crash Bandicoot 2: Cortex Strikes Back',12,'1997-10-31')
,(20,'Resident Evil 2',2,'1998-01-21')
,(21,'Crash Bandicoot',12,'1996-09-09')
,(22,'Final Fantasy Tactics',11,'1997-06-20')
,(23,'Castlevania: Symphony of the Night',13,'1997-06-20')
,(24,'Final Fantasy VIII',11,'1999-02-11')
,(25,'Metal Gear Solid',13,'1998-03-03')
,(26,'Chrono Cross',11,'1999-11-18')
,(27,'Final Fantasy VII',11,'1997-01-31')
-- PS 2
,(28,'God of War',14,'2005-03-22')
,(29,'Resident Evil 4',2,'2005-11-01')
,(30,'Grand Theft Auto: Vice City',15,'2002-10-27')
,(31,'Final Fantasy X',11,'2001-07-19')
,(32,'Star Wars: Battlefront II',16,'2005-10-31')
,(33,'Metal Gear Solid 3: Snake Eater',13,'2004-11-17')
,(34,'Grand Theft Auto: San Andreas',15,'2004-10-26')
,(35,'Kingdom Hearts',11,'2002-03-28')
,(36,'Shadow of the Colossus',14,'2005-10-18')
,(37,'Kingdom Hearts II',11,'2005-12-22')
-- PS 3
,(38,'The Last of Us',14,'2013-06-14')
,(39,'Destiny',17,'2014-09-09')
,(40,'Grand Theft Auto V',15,'2013-09-17')
,(41,'Ni no Kuni: Wrath of the White Witch',18,'2013-01-22')
,(42,'Red Dead Redemption',15,'2010-05-18')
,(43,'Journey',14,'2012-03-13')
,(44,'Fallout: New Vegas',18,'2010-10-19')
,(45,'Uncharted 2: Among Thieves',12,'2009-10-13')
,(46,'Assassin’s Creed IV: Black Flag',1,'2013-10-29')
,(47,'Resistance 3',19,'2011-09-06')
-- PS 4
,(48,'Bloodborne',20,'2015-03-24')
,(49,'Call of Duty: Black Ops 3',17,'2015-11-06')
,(50,'Fallout 4',21,'2015-10-11')
,(51,'Star Wars: Battlefront',16,'2015-11-17')
,(52,'Just Cause 3',11,'2015-12-01')
,(53,'Final Fantasy XV',11,'2016-03-12')
,(54,'Uncharted 4: A Thief''s End',12,'2016-03-18')
,(55,'Street Fighter 5',2,'2016-03-31')
,(56,'Dead Island 2',22,'2016-12-31')
,(57,'Rise of the Tomb Raider',11,'2015-11-10')
-- XBOX 360
,(58,'Halo 4',23,'2012-11-06')
,(59,'Batman: Arkham City',24,'2011-10-18')
,(60,'Fallout 3',18,'2008-10-28')
,(61,'Gears Of War',25,'2006-11-07')
,(62,'Halo 3',23,'2007-09-25')
,(63,'Gears Of War 2',25,'2008-11-07')
,(64,'The Elder Scrolls V: Skyrim',21,'2011-11-11')
,(65,'Gears Of War 3',25,'2011-09-20')
,(66,'Forza Motorsport 4',23,'2011-10-11')
,(67,'Shadow Complex',25,'2009-08-19')
-- XBOX One
,(68,'Sunset Overdrive',19,'2014-10-28')
,(69,'The Wolf Among Us',24,'2014-07-08')
,(70,'Call of Duty: Advanced Warfare',17,'2014-11-04')
,(71,'The Evil Within',21,'2014-10-14')
,(72,'Wolfenstein: The New Order',21,'2014-05-20')
,(73,'Resident Evil Revelations 2',2,'2015-02-25')
,(74,'Shovel Knight',26,'2014-06-26')
,(75,'Titanfall',3,'2014-03-11')
,(76,'Middle-earth: Shadow of Mordor',24,'2014-09-30')
,(77,'Far Cry 4',1,'2014-11-18')
-- Nintendo Wii
,(78,'Wii Sports Resort',27,'2009-06-25')
,(79,'Wario Ware: Smooth Moves',27,'2006-12-02')
,(80,'Sin & Punishment: Star Successor',27,'2009-10-29')
,(81,'Fire Emblem',27,'2007-02-22')
,(82,'Punch-Out',28,'2009-05-18')
,(83,'Red Steel 2',1,'2010-03-23')
,(84,'Monster Hunter Tri',2,'2009-08-01')
,(85,'No More Heroes 2',1,'2010-01-26')
,(86,'The Last Story',27,'2011-01-27')
,(87,'Donkey Kong Country Returns',27,'2010-11-21')
-- DreamCast
,(88,'Sonic Adventure 2',29,'2001-06-19')
,(89,'Hydro Thunder',10,'1999-09-09')
,(90,'Sega Rally 2',29,'1999-01-28')
,(91,'NBA 2K',29,'1999-10-17')
,(92,'Dead or Alive 2',30,'1999-10-16')
,(93,'Sonic Adventure',29,'1998-12-23')
,(94,'Resident Evil: Code Veronica',2,'2000-02-03')
,(95,'Quake 3 Arena',17,'1999-12-02')
,(96,'Virtua Tennis',29,'2000-07-12')
,(97,'Crazy Taxi',31,'2000-02-01');

/*!40000 ALTER TABLE `tblgamedefinitions` ENABLE KEYS */;
UNLOCK TABLES;

-- Table structure for `tblgametypes`
DROP TABLE IF EXISTS `tblgametypes`;

CREATE TABLE `tblgametypes` (
  `id` int(11) NOT NULL,
  `gametype` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- `Data for tblgametypes`
LOCK TABLES `tblgametypes` WRITE;
/*!40000 ALTER TABLE `tblgametypes` DISABLE KEYS */;
INSERT INTO `tblgametypes` VALUES 
 (1,'New game')
,(2,'USED game');
/*!40000 ALTER TABLE `tblgametypes` ENABLE KEYS */;
UNLOCK TABLES;

-- Table structure for `tblgames`
DROP TABLE IF EXISTS `tblgames`;

CREATE TABLE `tblgames` (
  `gamedefinitionid` int(11) NOT NULL DEFAULT '0',
  `consoleid` int(11) NOT NULL DEFAULT '0',
  `gametypeid` int(11) NOT NULL DEFAULT '0',
  `price` decimal(5,2) NOT NULL,
  `btw_percentage` tinyint unsigned NOT NULL,
  PRIMARY KEY (`gamedefinitionid`,`consoleid`,`gametypeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Data for `tblgames`
LOCK TABLES `tblgames` WRITE;
/*!40000 ALTER TABLE `tblgames` DISABLE KEYS */;
INSERT INTO `tblgames` VALUES 
 (1,1,1,49.99,0.21)
,(1,1,2,29.99,0.21)
,(2,2,1,59.99,0.21)
,(2,2,2,39.99,0.21)
,(3,2,1,45.99,0.21)
,(3,2,2,35.99,0.21)
,(4,1,1,49.99,0.21)
,(4,1,2,39.99,0.21)
,(5,4,1,36.99,0.21)
,(5,4,2,23.99,0.21)
,(6,4,1,49.99,0.21)
,(6,4,2,39.99,0.21)
,(7,3,1,49.99,0.19)
,(7,3,2,39.99,0.19)
-- SNES
,(8,9,1,37.99,0.21)
,(8,9,2,27.99,0.21)
,(9,9,1,34.99,0.21)
,(9,9,2,20.99,0.21)
,(10,9,1,35,0.21)
,(10,9,2,25,0.21)
,(11,9,1,37,0.21)
,(11,9,2,26,0.21)
,(12,9,1,49,0.21)
,(12,9,2,35,0.21)
,(13,9,1,54,0.21)
,(13,9,2,25,0.21)
,(14,9,1,60,0.21)
,(14,9,2,30,0.21)
,(15,9,1,47,0.21)
,(15,9,2,27,0.21)
,(16,9,1,39,0.21)
,(16,9,2,19,0.21)
,(17,9,1,35,0.21)
,(17,9,2,15,0.21)
-- PS 1
,(18,6,1,33,0.21)
,(19,6,1,44,0.21)
,(20,6,1,45,0.21)
,(21,6,1,39,0.21)
,(22,6,1,48,0.21)
,(23,6,1,67,0.21)
,(24,6,1,35,0.21)
,(25,6,1,35,0.21)
,(26,6,1,30,0.21)
,(27,6,1,45,0.21)
,(18,6,2,22,0.21)
,(19,6,2,33,0.21)
,(20,6,2,35,0.21)
,(21,6,2,29,0.21)
,(22,6,2,38,0.21)
,(23,6,2,57,0.21)
,(24,6,2,25,0.21)
,(25,6,2,25,0.21)
,(26,6,2,20,0.21)
,(27,6,2,35,0.21)
-- PS 2
,(28,7,1,54,0.21)
,(29,7,1,50,0.21)
,(30,7,1,49,0.21)
,(31,7,1,38,0.21)
,(32,7,1,64,0.21)
,(33,7,1,35,0.21)
,(34,7,1,35,0.21)
,(35,7,1,49,0.21)
,(36,7,1,54,0.21)
,(37,7,1,60,0.21)
,(28,7,2,44,0.21)
,(29,7,2,40,0.21)
,(30,7,2,39,0.21)
,(31,7,2,28,0.21)
,(32,7,2,54,0.21)
,(33,7,2,25,0.21)
,(34,7,2,25,0.21)
,(35,7,2,39,0.21)
,(36,7,2,44,0.21)
,(37,7,2,50,0.21)
-- PS 3
,(38,1,1,60,0.21)
,(39,1,1,50,0.21)
,(40,1,1,55,0.21)
,(41,1,1,60,0.21)
,(42,1,1,65,0.21)
,(43,1,1,45,0.21)
,(44,1,1,40,0.21)
,(45,1,1,35,0.21)
,(46,1,1,49,0.21)
,(47,1,1,49,0.21)
,(38,1,2,50,0.21)
,(39,1,2,40,0.21)
,(40,1,2,45,0.21)
,(41,1,2,50,0.21)
,(42,1,2,55,0.21)
,(43,1,2,35,0.21)
,(44,1,2,30,0.21)
,(45,1,2,25,0.21)
,(46,1,2,39,0.21)
,(47,1,2,39,0.21)
-- PS 4
,(48,2,1,49,0.21)
,(49,2,1,39,0.21)
,(50,2,1,35,0.21)
,(51,2,1,45,0.21)
,(52,2,1,55,0.21)
,(53,2,1,60,0.21)
,(54,2,1,50,0.21)
,(55,2,1,45,0.21)
,(56,2,1,59,0.21)
,(57,2,1,59,0.21)
,(48,2,2,39,0.21)
,(49,2,2,29,0.21)
,(50,2,2,25,0.21)
,(51,2,2,35,0.21)
,(52,2,2,45,0.21)
,(53,2,2,50,0.21)
,(54,2,2,40,0.21)
,(55,2,2,35,0.21)
,(56,2,2,49,0.21)
,(57,2,2,49,0.21)
-- XBOX 360
,(58,3,1,45,0.21)
,(59,3,1,35,0.21)
,(60,3,1,75,0.21)
,(61,3,1,30,0.21)
,(62,3,1,30,0.21)
,(63,3,1,49,0.21)
,(64,3,1,50,0.21)
,(65,3,1,50,0.21)
,(66,3,1,49,0.21)
,(67,3,1,60,0.21)
,(58,3,2,35,0.21)
,(59,3,2,25,0.21)
,(60,3,2,65,0.21)
,(61,3,2,20,0.21)
,(62,3,2,20,0.21)
,(63,3,2,39,0.21)
,(64,3,2,40,0.21)
,(65,3,2,40,0.21)
,(66,3,2,39,0.21)
,(67,3,2,50,0.21)
-- XBOX One
,(68,4,1,54,0.21)
,(69,4,1,39,0.21)
,(70,4,1,39,0.21)
,(71,4,1,49,0.21)
,(72,4,1,65,0.21)
,(73,4,1,39,0.21)
,(74,4,1,65,0.21)
,(75,4,1,50,0.21)
,(76,4,1,40,0.21)
,(77,4,1,45,0.21)
,(68,4,2,44,0.21)
,(69,4,2,29,0.21)
,(70,4,2,29,0.21)
,(71,4,2,39,0.21)
,(72,4,2,55,0.21)
,(73,4,2,29,0.21)
,(74,4,2,55,0.21)
,(75,4,2,40,0.21)
,(76,4,2,30,0.21)
,(77,4,2,35,0.21)
-- Nintendo Wii
,(78,5,1,29,0.21)
,(79,5,1,35,0.21)
,(80,5,1,35,0.21)
,(81,5,1,45,0.21)
,(82,5,1,40,0.21)
,(83,5,1,39,0.21)
,(84,5,1,39,0.21)
,(85,5,1,35,0.21)
,(86,5,1,35,0.21)
,(87,5,1,40,0.21)
,(78,5,2,19,0.21)
,(79,5,2,25,0.21)
,(80,5,2,25,0.21)
,(81,5,2,35,0.21)
,(82,5,2,30,0.21)
,(83,5,2,29,0.21)
,(84,5,2,29,0.21)
,(85,5,2,25,0.21)
,(86,5,2,25,0.21)
,(87,5,2,30,0.21)
-- DreamCast
,(88,8,1,45,0.21)
,(89,8,1,50,0.21)
,(90,8,1,40,0.21)
,(91,8,1,49,0.21)
,(92,8,1,49,0.21)
,(93,8,1,50,0.21)
,(94,8,1,35,0.21)
,(95,8,1,35,0.21)
,(96,8,1,39,0.21)
,(97,8,1,39,0.21)
,(88,8,2,35,0.21)
,(89,8,2,40,0.21)
,(90,8,2,30,0.21)
,(91,8,2,39,0.21)
,(92,8,2,39,0.21)
,(93,8,2,40,0.21)
,(94,8,2,25,0.21)
,(95,8,2,25,0.21)
,(96,8,2,29,0.21)
,(97,8,2,29,0.21);

/*!40000 ALTER TABLE `tblgames` ENABLE KEYS */;
UNLOCK TABLES;

COMMIT;
