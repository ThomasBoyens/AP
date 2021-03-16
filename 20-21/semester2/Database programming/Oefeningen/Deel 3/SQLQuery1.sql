CREATE DATABASE SnapBooks_2021_03_16
ON
(NAME = Books, FILENAME = 'D:\Practice\Snapshots\Masterdata_snapshot.ss'),
(NAME = SecData1, FILENAME = 'D:\Practice\Snapshots\SecData1_snapshot.ss'),
(NAME = SecData2, FILENAME = 'D:\Practice\Snapshots\SecData2_snapshot.ss'),
(NAME = SecData3, FILENAME = 'D:\Practice\Snapshots\SecData3_snapshot.ss')
AS SNAPSHOT OF Books;