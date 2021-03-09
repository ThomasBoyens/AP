/*rename table `bestuursleden` to `tblBestuursleden`;
rename table `boetes` to `tblBoetes`;
rename table `spelers` to `tblSpelers`;
rename table `teams` to `tblTeams`;
rename table `wedstrijden` to `tblWedstrijden`;

alter table `tblBoetes` add
(
	`REDEN` varchar(255)
);

alter table `tblSpelers` add
(
	`VOORNAAM` varchar(50)
);

alter table `tblBoetes` add `PAYMENTDATE` date after `BEDRAG`;

alter table `tblSpelers`
drop `VOORLETTERS`;

alter table `tblBoetes`
change `PAYMENTDATE` `BETALINGSDATUM` date;

alter table `tblSpelers`
change `NAAM` `NAAM` varchar(50) not null ;*/

alter table `tblSpelers`
drop primary key `NAAM` `STRAAT` `HUISNR` `POSTCODE`;

