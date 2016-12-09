

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

## Functions
### JOIN
<http://stackoverflow.com/questions/23649874/left-join-in-sas-using-proc-sql>

### CASE
<https://communities.sas.com/t5/General-SAS-Programming/SAS-SQL-CASE-STATEMENT/td-p/129115>

### BETWEEN
<https://communities.sas.com/t5/SAS-Procedures/Filter-SAS-dataset-using-a-where-between-two-dates-in-data-step/td-p/142804>

### TO_DATE
<https://communities.sas.com/t5/SAS-Procedures/to-date/td-p/207246>