

## Timestamp Formatting
```
precision rfc3339
```

# SQL

## Select Database
```sql
use db1
```

## Order by time
```sql
select  source, target, count, length from net_traffic where 1=1 and source='xxx' order by time desc limit 30
```