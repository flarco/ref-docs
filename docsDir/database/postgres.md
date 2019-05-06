# PostgeSQL

## Configuration

### Installation

`apt-get install postgresql postgresql-client`


Default Port: 5433 or 5432

### Manual Installation

First, initialize directory:

`./initdb /dbdir`

 

Then run to start:

`./pg_ctl -D /dbdir -l logfile start`

 

To stop :

`./pg_ctl -D /dbdir -l logfile stop`

 

To restart:

`./pg_ctl -D /dbdir -l logfile restart`

### Python

http://initd.org/psycopg/docs/usage.html

 

### Config File

`/etc/postgresql/9.3/main/postgresql.conf`

#### Allow all remote connection
 

Append line to file /etc/postgresql/9.3/main/pg_hba.conf

`host all all 0.0.0.0/0 trust`

 

Append line to file /etc/postgresql/9.3/main/postgresql.conf

`listen_addresses = '*'`

 

#### Start/Stop

```
/etc/init.d/postgresql start

/etc/init.d/postgresql restart

/etc/init.d/postgresql stop
```
 

 

#### Install Client

sudo apt-get install postgresql-client

 

 

#### Query Logging

 

**User Session:**
```sql
SELECT set_config('log_statement', 'all', true);
```
 

**Long term:**

In your postgresql.conf file, change the log_statement setting to 'all':
```
log_line_prefix = '%t %c %u ' # time sessionid user

log_directory = 'pg_log'

log_filename = 'postgresql-queries.log'

log_statement = 'all'

logging_collector = on
```
 

**Log Analyzer**

http://pgfouine.projects.pgfoundry.org/

 

 

## Command Line

 
| COMMAND         | DESCRIPTION                                                                    |
|-----------------|--------------------------------------------------------------------------------|
| ?               | Help                                                                           |
| \q              | Quit/Exit                                                                      |
| \c [db]         | Connect to a database                                                          |
| \d [table]      | Describe \ Show table definition including triggers                            |
| \dt .           | List tables from all schemas (if . is omitted will only show SEARCH_PATH ones) |
| \l              | List databases                                                                 |
| \i              | executes the sql commands within the sql file. Example: \i tournament.sql      |
| \dn             | List schemas                                                                   |
| \df             | List functions                                                                 |
| \dv             | List views                                                                     |
| \df+ [function] | Show function SQL code. \x before pretty-formats it                            |

 

 


## Backup

 

### pg_dump

http://www.postgresql.org/docs/9.3/static/app-pgdump.html

 

Example:

`pg_dump --host=ibmhpgdb1.dhcp.internetbrands.com --port=5432 --dbname=mh --username=ll4_reader --table=ll4_1.persona --data-only > "C:_\WORK\Freelance\UpWork\rrsoft\Data\ll4_1\persona.SQL"`

 

### pg_restore

http://www.postgresql.org/docs/9.3/static/app-pgrestore.html

 


## SQL Queries

 
| QUERY                                                                                           | DESCRIPTION                                                                     |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| SELECT * FROM pg_proc WHERE proname='procedurename'                                             |  List procedure/function                                                        |
| SELECT * FROM pg_views WHERE viewname='viewname';                                               |  List view (including the definition)                                           |
| SELECT pg_size_pretty(pg_total_relation_size('table_name'));                                    |  Show DB table space in use                                                     |
| SELECT pg_size_pretty(pg_database_size('database_name'));                                       |  Show DB space in use                                                           |
| show statement_timeout;                                                                         |  Show current user's statement timeout                                          |
| SELECT pid, datname, waiting, state, query FROM pg_stat_activity WHERE datname='database_name'; |  Show queries being executed at a certain DB. Can also display query time, etc. |
| SELECT * FROM pg_indexes WHERE tablename='table_name' AND schemaname='schema_name';             |  Show table indexes                                                             |



### UPSERT

http://stackoverflow.com/questions/1109061/insert-on-duplicate-update-in-postgresql

 
```sql
UPDATE table SET field='C', field2='Z' WHERE id=3;
INSERT INTO table (id, field, field2)
SELECT 3, 'C', 'Z'
WHERE NOT EXISTS (SELECT 1 FROM table WHERE id=3);
```
 
### Table Lock

```sql

select pid, 
       usename, 
       pg_blocking_pids(pid) as blocked_by, 
       query as blocked_query
from pg_stat_activity
where cardinality(pg_blocking_pids(pid)) > 0;

SELECT * FROM pg_stat_activity WHERE state = 'active';

SELECT pg_cancel_backend(32143);

```
 

### Information Schema

 

#### All columns

`SELECT * FROM information_schema.columns;`

#### All Tables

`SELECT * FROM information_schema.tables;`

#### All indexes

```sql
SELECT
U.usename AS user_name,
ns.nspname AS schema_name,
idx.indrelid :: REGCLASS AS table_name,
i.relname               AS index_name,
idx.indisunique AS is_unique,
idx.indisprimary AS is_primary,
am.amname AS index_type,
idx.indkey,
ARRAY(
  SELECT pg_get_indexdef(idx.indexrelid, k + 1, TRUE)
  FROM
  generate_subscripts(idx.indkey, 1) AS k
  ORDER BY k
) AS index_keys,
(idx.indexprs IS NOT NULL) OR (idx.indkey::int[] @> array[0]) AS is_functional,
idx.indpred IS NOT NULL AS is_partial
FROM pg_index AS idx
JOIN pg_class AS i
ON i.oid = idx.indexrelid
JOIN pg_am AS am
ON i.relam = am.oid
JOIN pg_namespace AS NS ON i.relnamespace = NS.OID
JOIN pg_user AS U ON i.relowner = U.usesysid
WHERE NOT nspname LIKE 'pg%'; -- Excluding system tables;
```

#### All Primary Keys
 
```sql
select
tc.table_schema, tc.table_name, kc.column_name, tc.constraint_type
from
information_schema.table_constraints tc
join information_schema.key_column_usage kc on
kc.table_name = tc.table_name
and kc.constraint_name = tc.constraint_name
where 1=1
-- and tc.table_schema = 'account_account'
-- and tc.table_name = 'account_account'
and tc.constraint_type = 'PRIMARY KEY'
```


#### All Foreign Keys

```sql
select
tc.table_schema, tc.table_name, kc.column_name, tc.constraint_type
from
information_schema.table_constraints tc
join information_schema.key_column_usage kc on
kc.table_name = tc.table_name
and kc.constraint_name = tc.constraint_name
where 1=1
-- and tc.table_schema = 'account_account'
-- and tc.table_name = 'account_account'
and tc.constraint_type = 'FOREIGN KEY'
```


#### All Constraints

```sql
select
tc.table_schema, tc.table_name, kc.column_name, tc.constraint_type
from
information_schema.table_constraints tc
join information_schema.key_column_usage kc on
kc.table_name = tc.table_name
and kc.constraint_name = tc.constraint_name
where 1=1
-- and tc.table_schema = 'account_account'
-- and tc.table_name = 'account_account'
```

### Data Conversion

**From String to Number**

`CAST(nullif(data->>'retweet_count', '') AS decimal)`


### Using Command line

This can be done by creating a .pgpass file in the home directory of the (Linux) User. .pgpass file format:

To set up the file:
```
echo "192.168.1.1:::postgres:postgrespwd" > $HOME/.pgpass

echo "chmod 0600 $HOME/.pgpass"

echo " psql -h 192.168.1.1 -p 5432<span style="mso-spacerun:yes"></span> -U postgres<span style="mso-spacerun:yes"></span> postgres<span style="mso-spacerun:yes"></span> -f tmp.sql

psql –U admin –p myPass -d db1 -c 'SELECT * FROM db1.itevia_twitter'

```

 

## CSV Import / Export

http://www.postgresql.org/docs/9.5/static/sql-copy.html


 

## FUNCTIONS

 

### Median

By Aggregate
```sql
CREATE OR REPLACE FUNCTION array_median(numeric[])
RETURNS numeric AS

$
SELECT CASE WHEN array_upper($1,1) = 0 THEN null ELSE asorted[ceiling(array_upper(asorted,1)/2.0)] END
FROM (SELECT ARRAY(SELECT ($1)[n] FROM
generate_series(1, array_upper($1, 1)) AS n
WHERE ($1)[n] IS NOT NULL
ORDER BY ($1)[n]
) As asorted) As foo ;
$

LANGUAGE 'sql' IMMUTABLE;

 

CREATE OR REPLACE FUNCTION array_median(timestamp[])
RETURNS timestamp AS
$
SELECT CASE WHEN array_upper($1,1) = 0 THEN null ELSE asorted[ceiling(array_upper(asorted,1)/2.0)] END
FROM (SELECT ARRAY(SELECT ($1)[n] FROM
generate_series(1, array_upper($1, 1)) AS n
WHERE ($1)[n] IS NOT NULL
    ORDER BY ($1)[n]
) As asorted) As foo ;
$

LANGUAGE 'sql' IMMUTABLE;

CREATE AGGREGATE median(numeric) (
SFUNC=array_append,
STYPE=numeric[],
FINALFUNC=array_median
);

 

CREATE AGGREGATE median(timestamp) (
SFUNC=array_append,
STYPE=timestamp[],
FINALFUNC=array_median
);

 

-- To Test

SELECT avg(x), median(x)
FROM (SELECT 3 As x
UNION ALL
SELECT - 1 As x
UNION ALL
SELECT 11 As x
UNION ALL
SELECT 10 As x
UNION ALL
SELECT 9 As x) As foo;


By Function

CREATE FUNCTION _final_median(anyarray) RETURNS float8 AS $
WITH q AS
(
  SELECT val
  FROM unnest($1) val
  WHERE VAL IS NOT NULL
  ORDER BY 1
),

cnt AS
(
  SELECT COUNT(*) AS c FROM q
)

SELECT AVG(val)::float8
FROM
(
  SELECT val FROM q
  LIMIT 2 - MOD((SELECT c FROM cnt), 2)
  OFFSET GREATEST(CEIL((SELECT c FROM cnt) / 2.0) - 1,0)
) q2;

$ LANGUAGE sql IMMUTABLE;


CREATE AGGREGATE median(anyelement) (
SFUNC=array_append,
STYPE=anyarray,
FINALFUNC=_final_median,
INITCOND='{}'
);
```

#### Example


```sql
CREATE OR REPLACE FUNCTION "cs"."add_event" (p_event_type character varying, p_trigger_url_host character varying, p_trigger_url_domain character varying, p_trigger_url_path character varying, p_trigger_url_query character varying, p_referrer_url_host character varying, p_referrer_url_domain character varying, p_referrer_url_path character varying, p_referrer_url_query character varying, p_user_agent character varying, p_client_ip character varying, p_session_id numeric, p_local_user_id numeric, p_global_user_id numeric, p_time_stamp numeric, p_event_params character varying[]) RETURNS integer

VOLATILE

AS $dbvis$

declare

retval_id integer;
v_event_type_id integer;
v_trigger_url_host_id integer;
v_trigger_url_domain_id integer;
v_trigger_url_path_id integer;
v_trigger_url_query_id integer;
v_referrer_url_host_id integer;
v_referrer_url_domain_id integer;
v_referrer_url_path_id integer;
v_referrer_url_query_id integer;
v_user_agent_id integer;
v_client_ip_id integer;
v_input_params_size integer;
v_event_param_id_array integer[];
v_param character varying[];
dim1 int;
dim2 int;

begin

v_event_type_id = cs.get_event_type_id_from_name(p_event_type);
v_trigger_url_host_id = cs.get_host_id_from_name(p_trigger_url_host);
v_trigger_url_domain_id = cs.get_domain_id_from_name(p_trigger_url_domain);
v_trigger_url_path_id = cs.get_path_id_from_name(p_trigger_url_query);
v_trigger_url_query_id = cs.get_query_string_id_from_name(p_trigger_url_query);
if p_referrer_url_host IS NOT NULL then

v_referrer_url_host_id = cs.get_host_id_from_name(p_referrer_url_host);
end if;

if p_referrer_url_domain IS NOT NULL then

v_referrer_url_domain_id = cs.get_domain_id_from_name(p_referrer_url_domain);
end if;

if p_referrer_url_path IS NOT NULL then

v_referrer_url_path_id = cs.get_path_id_from_name(p_referrer_url_query);

end if;

if p_referrer_url_query IS NOT NULL then

v_referrer_url_query_id = cs.get_query_string_id_from_name(p_referrer_url_query);

end if;

       

v_user_agent_id = cs.get_user_agent_id_from_name(p_user_agent);
v_client_ip_id = cs.get_client_ip_id_from_name(p_client_ip);

       

select array_length(p_event_params, 1) into v_input_params_size;
if v_input_params_size is null then

v_input_params_size := 0;

end if;

FOR i in 1..v_input_params_size BY 2 LOOP

v_event_param_id_array[i] := cs.get_attribute_name_id_from_name(p_event_params[i]);
v_event_param_id_array[i+1] := cs.get_attribute_value_id_from_value(p_event_params[i+1]);

END LOOP;

       

retval_id = cs.add_normalized_event

(
  v_event_type_id,
  v_trigger_url_host_id,
  v_trigger_url_domain_id,
  v_trigger_url_path_id,
  v_trigger_url_query_id,
  v_referrer_url_host_id,
  v_referrer_url_domain_id,
  v_referrer_url_path_id,
  v_referrer_url_query_id,
  v_user_agent_id,
  v_client_ip_id,
  p_session_id,
  p_local_user_id,
  p_global_user_id,
  p_time_stamp,
  v_event_param_id_array
);

 

return retval_id;
exception
 

when plpgsql_error then
return -2;
  when unique_violation then
return -3;
end;

$dbvis$ LANGUAGE plpgsql
```

### Return Array

 
```sql
DROP FUNCTION IF EXISTS get_report_event_type_ids2(report_name VARCHAR(100)) ;
CREATE OR REPLACE FUNCTION get_report_event_type_ids2(report_name varchar(100)) RETURNS integer[] AS
$BODY$
DECLARE
b integer[];
BEGIN
b = ARRAY[1,2,56,3141];
RETURN b;
END;
$BODY$ LANGUAGE 'plpgsql' VOLATILE;
```

 

## JSON

http://clarkdave.net/2013/06/what-can-you-do-with-postgresql-and-json/

http://www.postgresql.org/docs/9.3/static/functions-json.html
 

## Access & Security

### Initial Access

```bash
# su - postgres

$ psql

postgres=# CREATE USER mypguser WITH PASSWORD 'mypguserpass';

postgres=# CREATE DATABASE mypgdatabase OWNER mypguser;
```

### Users

**Show all Users:**

```sql
SELECT
  u.usename AS "User_name",
  u.usesysid AS "User_ID",
  CASE
    WHEN u.usesuper AND u.usecreatedb THEN CAST('superuser, create database' AS pg_catalog.text)
    WHEN u.usesuper THEN CAST('superuser' AS pg_catalog.text)
    WHEN u.usecreatedb THEN CAST('create database' AS pg_catalog.text)
    ELSE CAST('' AS pg_catalog.text)
  END AS "Attributes"
FROM pg_catalog.pg_user u
ORDER BY 1;
```
 

**Create User:**

`CREATE USER mypguser WITH PASSWORD 'mypguserpass';`

**Make user SUPERUSER:**

`ALTER USER admin WITH SUPERUSER;`

**Making User a database owner:**

`CREATE DATABASE db1 OWNER admin;`

**Change user Password**

`ALTER USER postgres with password 'new-password';`

# SSL

## Generate & Config

<https://gist.github.com/pepoviola/21c1cb00bac65a111568>

```bash
mkdir cert
cd cert

#### Generate #####
# Generate a private key (you must provide a passphrase).
openssl genrsa -des3 -out server.key 1024

# Remove the passphrase.
openssl rsa -in server.key -out server.key

# Create server certificate
openssl req -new -key server.key -days 3650 -out server.crt -x509 -subj '/C=CA/ST=British Columbia/L=Comox/O=TheBrain.ca/CN=thebrain.ca/emailAddress=info@thebrain.ca'
cp server.crt root.crt

# Find conf location
$ psql -U postgres
postgres=# SHOW config_file;


# Append to postgreql.conf
echo '
ssl = on
ssl_ciphers = 'DEFAULT:!LOW:!EXP:!MD5:@STRENGTH'
ssl_cert_file = '/var/ssl/server.crt'
ssl_key_file = '/var/ssl/server.key'
' >> postgreql.conf
```

## Use from client

<https://www.postgresql.org/docs/current/libpq-ssl.html>

```bash
cp server.crt ~/.postgresql/postgresql.crt
cp server.key ~/.postgresql/postgresql.key

# connect with sslmode=require
```
