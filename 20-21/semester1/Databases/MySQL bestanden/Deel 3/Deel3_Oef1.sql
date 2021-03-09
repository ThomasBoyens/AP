create database `learning` default charset utf8;
create table tblLanguages (
`id` int primary key,
`name` varchar(25)
);

create table tblCourseDefinitions (
`id` int primary key,
`languageId` int,
foreign key (`languageId`)
references `tblLanguages` (`id`),
`name` varchar(100),
`ReplicationKey` varchar(36)
);



