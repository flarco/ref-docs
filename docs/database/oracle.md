

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