# Oracle

---

## JOIN

### LEFT OUTER JOIN
```sql
SELECT *
FROM A, B
WHERE A.column = B.column(+)
```

### RIGHT OUTER JOIN
```sql
SELECT *
FROM A, B
WHERE B.column(+) = A.column
```

## EXPLAIN PLAN
```sql
-- EXPLAIN PLAN
explain plan for select * from dual;
select * from table(dbms_xplan.display);
-- Timing
select to_char(sysdate, 'DD-MON-YYYY HH24:MI:SS' ) from dual;

```

---
## Roles / Priviledge / DB-Links

```sql
-- Select User's Roles
select * from USER_ROLE_PRIVS where USERNAME='SAMPLE';
select * from USER_TAB_PRIVS where Grantee = 'SAMPLE';
select * from USER_SYS_PRIVS where USERNAME = 'SAMPLE';

-- See what priviledge per Role
SELECT * FROM ROLE_TAB_PRIVS WHERE ROLE = 'EXAMPLE_READ_ROLE';

-- DB Links
SELECT * from DBA_DB_LINKS; -- All DB links defined in the database
SELECT * from ALL_DB_LINKS; -- All DB links the current user has access to
SELECT * from USER_DB_LINKS; -- All DB links owned by current user
```

---
## Dates

```sql
-- Dates

select DATE '2016-03-16'
from dual;

select TIMESTAMP '2016-03-16 00:00:00'
from dual;

select *
from search
where search_date >= to_date('03/16/2016 00:00:00', 'mm/dd/yyyy hh24:mi:ss');

-- Set time format for session
alter session set NLS_DATE_FORMAT='yyyy-mm-dd hh:mi:ssam';

```

---

## TableSpace / Quota

```sql
-- Space Utilization

-- Object Size
SELECT owner, segment_name, segment_type, partition_name, ROUND(bytes/(1024*1024),2) SIZE_MB, tablespace_name
FROM DBA_SEGMENTS
WHERE SEGMENT_TYPE IN ('TABLE', 'TABLE PARTITION', 'TABLE SUBPARTITION',
'INDEX', 'INDEX PARTITION', 'INDEX SUBPARTITION', 'TEMPORARY', 'LOBINDEX', 'LOBSEGMENT', 'LOB PARTITION')
--AND TABLESPACE_NAME LIKE 'COSTE%'
--AND SEGMENT_NAME LIKE 'P2010201%'
--AND partition_name LIKE 'P20100201%'
--AND segment_type = 'TABLE'
AND OWNER = 'FL88589'
--AND ROUND(bytes/(1024*1024),2) > 1000
ORDER BY bytes DESC;

-- User Space Utilization (Quota)
SELECT bytes/max_bytes, bytes/1024/1024 bytes_MB, DBA_TS_QUOTAS.*
from DBA_TS_QUOTAS
where USERNAME = 'FL88589';


-- Tables Space Utilization
select user_segments.*, bytes/1024/1024 MB from user_segments
order by bytes desc
;


-- Purge / Empty Recycle Bin
SELECT * FROM USER_RECYCLEBIN;
purge RECYCLEBIN;
```

---

## Rank

```sql
-- RANK
-- Get first value
select
a.name
, MAX(c.task) KEEP (DENSE_RANK FIRST ORDER BY c.task_code) as task_code 
from .....
group by a.name ;

-- Get first row
SELECT * FROM (
  SELECT
    a.*,
    ROW_NUMBER() OVER (PARTITION BY a.nm_insured_nm ORDER BY a.dw_lst_upd_tmsp ASC) rnum
  FROM all_cldw_data1 a
)
WHERE rnum = 1;
```

---

# PL SQL

## Bulk Insert

```sql
declare
  -- define array type of the new table
  TYPE new_table_array_type IS TABLE OF NEW_TABLE%ROWTYPE INDEX BY BINARY_INTEGER;

  -- define array object of new table
  new_table_array_object new_table_array_type;

  -- fetch size on  bulk operation, scale the value to tweak
  -- performance optimization over IO and memory usage
  fetch_size NUMBER := 5000;

  -- define select statment of old table
  -- select desiered columns of OLD_TABLE to be filled in NEW_TABLE
  CURSOR old_table_cursor IS
    select * from OLD_TABLE;

BEGIN

  OPEN old_table_cursor;
  loop
    -- bulk fetch(read) operation
    FETCH old_table_cursor BULK COLLECT
      INTO new_table_array_object LIMIT fetch_size;
    EXIT WHEN old_table_cursor%NOTFOUND;

    -- do your business logic here (if any)
    -- FOR i IN 1 .. new_table_array_object.COUNT  LOOP
    --   new_table_array_object(i).some_column := 'HELLO PLSQL';
    -- END LOOP;

    -- bulk Insert operation
    FORALL i IN INDICES OF new_table_array_object SAVE EXCEPTIONS
      INSERT INTO NEW_TABLE VALUES new_table_array_object(i);
    COMMIT;

  END LOOP;
  CLOSE old_table_cursor;
End;
```

## PL/SQL XML Conversion

```sql

declare
  xml_doc DBMS_XMLDOM.DOMDocument;
  xml_clob clob;
BEGIN
  dbms_lob.createtemporary(xml_clob, TRUE);
  FOR i IN 1 .. new_table_array_object.COUNT  LOOP
    xml_doc := DBMS_XMLDOM.NewDomDocument(new_table_array_object(i).xml_info);
    dbms_xmldom.writetoclob(xml_doc, xml_clob);
    new_table_array_object(i).xml_clob := xml_clob;
  END LOOP;
END;
```

## CLOB Aggregation


```sql
-- CLOB Aggregation

CLOB AGG
CREATE OR REPLACE
TYPE ClobAggregator
AS OBJECT
(
 aggregate_clob CLOB,
 
  STATIC FUNCTION ODCIAggregateInitialize( sctx IN OUT ClobAggregator )
    RETURN NUMBER,
  MEMBER FUNCTION ODCIAggregateIterate( self IN OUT ClobAggregator, value IN CLOB )
    RETURN NUMBER,
  MEMBER FUNCTION ODCIAggregateTerminate( self IN ClobAggregator, returnValue OUT CLOB, flags IN number )
    RETURN NUMBER,
  MEMBER FUNCTION ODCIAggregateMerge( self IN OUT ClobAggregator, ctx2 IN ClobAggregator )
    RETURN NUMBER
);
 
 
CREATE OR REPLACE
TYPE BODY ClobAggregator
IS
 
  STATIC FUNCTION ODCIAggregateInitialize( sctx IN OUT ClobAggregator )
  RETURN NUMBER
  IS
    temp_clob CLOB;
  BEGIN
 
    DBMS_LOB.CREATETEMPORARY( temp_clob, TRUE, DBMS_LOB.CALL );
 
    sctx := ClobAggregator( temp_clob );
 
    RETURN ODCIConst.Success;
 
  END;
 
  MEMBER FUNCTION ODCIAggregateIterate( self IN OUT ClobAggregator, value IN CLOB )
  RETURN NUMBER
  IS
  BEGIN
 
    IF DBMS_LOB.GETLENGTH( self.aggregate_clob ) > 0 THEN
      DBMS_LOB.APPEND( self.aggregate_clob, '||' );
    END IF;
 
    DBMS_LOB.APPEND( self.aggregate_clob, value );
 
    RETURN ODCIConst.Success;
 
  END;
 
  MEMBER FUNCTION ODCIAggregateTerminate( self IN ClobAggregator, returnValue OUT CLOB, flags IN number)
  RETURN NUMBER
  IS
  BEGIN
 
    returnValue := self.aggregate_clob;
 
    RETURN ODCIConst.Success;
 
  END;
 
  MEMBER FUNCTION ODCIAggregateMerge( self IN OUT ClobAggregator, ctx2 IN ClobAggregator )
  RETURN NUMBER
  IS
  BEGIN
 
    DBMS_LOB.APPEND( self.aggregate_clob, ctx2.aggregate_clob );
 
    RETURN ODCIConst.Success;
 
  END;
 
END;
 
CREATE OR REPLACE
FUNCTION CLOBAGG( input CLOB )
RETURN CLOB
PARALLEL_ENABLE AGGREGATE
USING ClobAggregator;
```
