CREATE DATABASE SnapBooks_2021_04_18
ON
(NAME = Books, FILENAME = 'C:\Practice\Snapshots\Masterdata_snapshot.ss'),
(NAME = SecData1, FILENAME = 'C:\Practice\Snapshots\SecData1_snapshot.ss'),
(NAME = SecData2, FILENAME = 'C:\Practice\Snapshots\SecData2_snapshot.ss'),
(NAME = SecData3, FILENAME = 'C:\Practice\Snapshots\SecData3_snapshot.ss')
AS SNAPSHOT OF Books;