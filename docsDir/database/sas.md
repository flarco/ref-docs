# SAS

Reference for SAS.

---

# PROC SQL

## Metadata

**Get list of datasets**
```sas
Proc sql;
     select *
     from sashelp.vmember
     where libname = "SAPEng " and memname like "BIC%"
  ;
quit;
```

## Concatenation
```
CAT, CATS, CATT, CATX all perform concatenation, as long as you're on 9.1.3 or later (and CATQ on 9.2 or later); CAT does basic concatenation, CATS concatenates and strips spaces, CATT trims, and CATX concatenates with a delimiter.
```

```sql
proc sql;
create table test as
select CATS(year, month) as ym from tbl;
run;
```

## Functions
### JOIN
<http://stackoverflow.com/questions/23649874/left-join-in-sas-using-proc-sql>

### CASE
<https://communities.sas.com/t5/General-SAS-Programming/SAS-SQL-CASE-STATEMENT/td-p/129115>

### BETWEEN
<https://communities.sas.com/t5/SAS-Procedures/Filter-SAS-dataset-using-a-where-between-two-dates-in-data-step/td-p/142804>

### TO_DATE
<https://communities.sas.com/t5/SAS-Procedures/to-date/td-p/207246>