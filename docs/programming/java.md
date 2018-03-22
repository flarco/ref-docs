# Java

---

## JDBC

### PostgreSQL:
<https://jdbc.postgresql.org/documentation/80/connect.html>
```
jdbc:postgresql://host:port/database?user=fred&password=secret&ssl=true
```

### MySQL:

```
jdbc:mysql://host:port/database?user=fred&password=secret
jdbc:mysql://host:port/database?user=fred&password=secret&amp;zeroDateTimeBehavior=convertToNull&amp;useUnicode=true&amp;dontTrackOpenResources=true&amp;autoReconnect=true&amp;characterEncoding=UTF-8&amp;characterSetResults=UTF-8
```

### Oracle:
<http://www.orafaq.com/wiki/JDBC>
```
 jdbc:oracle:thin:[USER/PASSWORD]@[HOST][:PORT]:SID
 jdbc:oracle:thin:[USER/PASSWORD]@//[HOST][:PORT]/SERVICE
 jdbc:oracle:thin:@//host:port/SERVICE
```

### SQL-Server:
<https://msdn.microsoft.com/en-us/library/ms378428(v=sql.110).aspx>
```
jdbc:sqlserver://[serverName[\instanceName][:portNumber]][;property=value[;property=value]]
jdbc:sqlserver://host;database=db2;user=MyUserName;password=abcd
```

### CSV (Source Only):
<http://csvjdbc.sourceforge.net/doc.html>
