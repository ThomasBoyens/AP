CREATE DATABASE SnapBooks_2021_04_18
ON
(NAME = Books, FILENAME = 'C:\DBOefeningen\D\Practice\Snapshots\Primary\Masterdata_snapshot.ss'),
(NAME = SecData1, FILENAME = 'C:\DBOefeningen\D\Practice\Snapshots\SecData1_snapshot.ss'),
(NAME = SecData2, FILENAME = 'C:\DBOefeningen\D\Practice\Snapshots\SecData2_snapshot.ss'),
(NAME = SecData3, FILENAME = 'C:\DBOefeningen\D\Practice\Snapshots\SecData3_snapshot.ss')
AS SNAPSHOT OF Books;