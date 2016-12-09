

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