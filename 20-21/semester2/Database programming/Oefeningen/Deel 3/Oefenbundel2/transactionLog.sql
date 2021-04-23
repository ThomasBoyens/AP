SELECT
[Current LSN],
[Operation],
[Transaction ID],
[Previous LSN],
[AllocUnitName],
[Previous Page LSN],
[Page ID],
[XACT ID],
[Begin Time],
[End Time]
FROM
sys.fn_dblog (NULL, NULL);