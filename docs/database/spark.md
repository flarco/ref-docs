# Spark

---

## Main Documentation

[https://spark.apache.org/docs/latest/index.html](https://spark.apache.org/docs/latest/index.html)
[https://docs.databricks.com/spark/latest/gentle-introduction/sparksession.html](https://docs.databricks.com/spark/latest/gentle-introduction/sparksession.html)
**[https://www.gitbook.com/book/jaceklaskowski/mastering-apache-spark/details](https://www.gitbook.com/book/jaceklaskowski/mastering-apache-spark/details)**

Configuration: [https://spark.apache.org/docs/latest/configuration.html](https://spark.apache.org/docs/latest/configuration.html)

Spark Streaming: [https://www.gitbook.com/book/jaceklaskowski/spark-structured-streaming/details](https://www.gitbook.com/book/jaceklaskowski/spark-structured-streaming/details)
Kafka: [https://www.gitbook.com/book/jaceklaskowski/apache-kafka/details](https://www.gitbook.com/book/jaceklaskowski/apache-kafka/details)

## Master Options

| Master URL                      | Meaning                                                                                                                                                                                                                                                                                                   |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| local                           | Run Spark locally with one worker thread (i.e. no parallelism at all).                                                                                                                                                                                                                                    |
| local[K]                        | Run Spark locally with K worker threads (ideally, set this to the number of cores on your machine).                                                                                                                                                                                                       |
| local[K,F]                      | Run Spark locally with K worker threads and F maxFailures (see spark.task.maxFailures for an explanation of this variable)                                                                                                                                                                                |
| local[*]                        | Run Spark locally with as many worker threads as logical cores on your machine.                                                                                                                                                                                                                           |
| local[*,F]                      | Run Spark locally with as many worker threads as logical cores on your machine and F maxFailures.                                                                                                                                                                                                         |
| spark://HOST:PORT               | Connect to the given Spark standalone cluster master. The port must be whichever one your master is configured to use, which is 7077 by default.                                                                                                                                                          |
| spark://HOST1:PORT1,HOST2:PORT2 | Connect to the given Spark standalone cluster with standby masters with Zookeeper. The list must have all the master hosts in the high availability cluster set up with Zookeeper. The port must be whichever each master is configured to use, which is 7077 by default.                                 |
| mesos://HOST:PORT               | Connect to the given Mesos cluster. The port must be whichever one your is configured to use, which is 5050 by default. Or, for a Mesos cluster using ZooKeeper, use mesos://zk://.... To submit with --deploy-mode cluster, the HOST:PORT should be configured to connect to the MesosClusterDispatcher. |
| yarn                            | Connect to a YARN cluster in client or cluster mode depending on the value of --deploy-mode. The cluster location will be found based on the HADOOP_CONF_DIR or YARN_CONF_DIR variable.                                                                                                                   |

## Hive connection

Need to set up the `hive-site.xml` file in the `conf/` folder.

[https://community.cloudera.com/t5/Advanced-Analytics-Apache-Spark/how-to-access-the-hive-tables-from-spark-shell/td-p/36609](https://community.cloudera.com/t5/Advanced-Analytics-Apache-Spark/how-to-access-the-hive-tables-from-spark-shell/td-p/36609)

[http://www.cloudera.com/documentation/cdh/5-1-x/CDH5-Security-Guide/cdh5sg_hiveserver2_security.html#topic_9_1_unique_2](http://www.cloudera.com/documentation/cdh/5-1-x/CDH5-Security-Guide/cdh5sg_hiveserver2_security.html#topic_9_1_unique_2)

This will allow the use of master `local[10]` with a connection to Hive tables.

### Kerberos Authentication to Hive Metastore

Still unsure how to do this. The keys `spark.yarn.keytab` and `spark.yarn.principal` are for accessing the YARN cluster, not the hive metastore.

Could try this, right before Spark connection ([link](https://www.ibm.com/support/knowledgecenter/en/SSPT3X_3.0.0/com.ibm.swg.im.infosphere.biginsights.admin.doc/doc/kerberos_hive.html)):

```java
import org.apache.hadoop.security.UserGroupInformation as UserGroupInformation
import org.apache.hadoop.conf.Configuration

cd = dict2(self._conn_dict)
conf = org.apache.hadoop.conf.Configuration()
conf.set("hadoop.security.authentication", "Kerberos")
UserGroupInformation.setConfiguration(conf)
UserGroupInformation.loginUserFromKeytab(cd.user, cd.keytab)
```

## Spark on YARN

Set the keys `spark.yarn.keytab` and `spark.yarn.principal` appropriately.

## Partitioning

[https://blog.deepsense.ai/optimize-spark-with-distribute-by-and-cluster-by/](https://blog.deepsense.ai/optimize-spark-with-distribute-by-and-cluster-by/)

## Python

### Spark 1.6

```python

from pyspark import SparkContext
from pyspark.sql import SQLContext
from pyspark.sql import HiveContext
from pyspark.sql import functions as F
from pyspark.sql.types import *
from pyspark.sql.window import Window


hiveC = HiveContext(sc)
sqlC = SQLContext(sc)
# sqlc = hiveC

# read from text file
rdd = sc.textFile("/apps/hive/warehouse/schema.db/stg_dq5")
rdd.toDF().head()

# read from text file
df = sqlC.read.format("com.databricks.spark.csv") \
    .option("header", "true") \
    .option("inferschema", "true") \
    .option("mode", "DROPMALFORMED") \
    .load("/file.csv")

    
# read from SQL

sql = ''' select * FROM shema.stg_dq4 '''
df = hiveC.sql(sql) # loads into pipeline
df.registerTempTable('stg_dq4')

sql = '''
with dq4 as (
  select
    *,
    lag(account_nbr, 1) over (order by account_nbr, account_seq_num) as prev_account_nbr,
    lag(date_time, 1) over (order by account_nbr, account_seq_num) as prev_date_time
  from schema.stg_dq4
)
select
  qcn,
  ucid,
  case
    when prev_account_nbr = account_nbr
      and unix_timestamp(date_time) - unix_timestamp(prev_date_time) < 20*60
      then 'N'
    else 'Y'
  end as new_session_ind
from dq4
'''
df3 = hiveC.sql(sql)

sql = '''
select
  *,
  lag(account_nbr, 1) over (order by account_nbr, account_seq_num) as prev_account_nbr,
  lag(date_time, 1) over (order by account_nbr, account_seq_num) as prev_date_time
from stg_dq4
'''



# add unique IDs
from pyspark.sql.functions import monotonically_increasing_id
df.withColumn("id", monotonically_increasing_id()).show()


# add unique IDs
rdd2 = df.rdd.zipWithUniqueId()

# Exercise
rdd = sc.parallelize([(1, 65), (2, 66), (3, 65), (4, 68), (5, 71)])

df = sqlc.createDataFrame(rdd, ["account_nbr", "date_time"])

my_window = Window.partitionBy().orderBy("account_nbr")

df = df.withColumn("prv_date_time", F.lag(df.date_time).over(my_window))
df = df.withColumn("prv_account_nbr", F.lag(df.account_nbr).over(my_window))
df = df.withColumn("diff_sec", F.when(F.isnull(df.date_time - df.prv_date_time), 0)
                              .otherwise(df.date_time - df.prv_date_time))
  
df.show()

  
session_id = 0
def customFunction(row):
    if row.account_nbr == row.prv_account_nbr:
      if (row.date_time - row.prv_date_time).total_seconds() > 20*60:
        session_id += 1
    else:
      session_id += 1
    return (row.account_nbr, row.date_time, session_id)

sample2 = df.rdd.map(customFunction)
sample2.toDF().show()
  


  

####################################################################################
### Spark 2.1

from pyspark.sql import SparkSession
from pyspark.sql.window import Window
from pyspark.sql.types import *

spark = SparkSession(sc)

# Configurations
spark.conf.set("spark.sql.shuffle.partitions", 6)
spark.conf.set("spark.executor.memory", "2g")
spark.catalog.setCurrentDatabase('lake_cl_ocds_team')

# Read from SQL
df = spark.sql(''' select * FROM schema.stg_dq4 limit 10''')


# Read JSON
df = spark.read.json("/home/webinar/person.json")

# Rename DF Columns
new_col1 = [c if not '.' in c else c.split('.')[-1] for c in df1.columns]
df1 = df1.toDF(*new_col1)
new_col2 = [c if not '.' in c else c.split('.')[-1] for c in df2.columns]
df2 = df2.toDF(*new_col2)


####################################################################################
# Sample
from pyspark import SparkContext
from pyspark.sql import SparkSession
from pyspark.sql.window import Window
from pyspark.sql.types import *

sc = SparkContext(appName="App1")
spark = SparkSession(sc)

# Configurations
spark.conf.set("spark.sql.shuffle.partitions", 11)
spark.conf.set("spark.executor.memory", "10g")
# spark.catalog.setCurrentDatabase('schema')

df1 = spark.read.csv("/__/Temp/schema.stg_dq4.t1.csv", header=True, timestampFormat='yyyy-MM-dd HH:mm:ss', inferSchema=True)
df2 = spark.read.csv("/__/Temp/schema.stg_dq4.t2.csv", header=True, timestampFormat='yyyy-MM-dd HH:mm:ss', inferSchema=True)


# clean columns
new_col1 = [c if not '.' in c else c.split('.')[-1] for c in df1.columns]
df1 = df1.toDF(*new_col1)
new_col2 = [c if not '.' in c else c.split('.')[-1] for c in df2.columns]
df2 = df2.toDF(*new_col2)


df1.registerTempTable("t1")
df2.registerTempTable("t2")

sql='''
select
  t1.id,
  t1.account_nbr,
  t1.date_time,
  t2.min_id as session_id
from t1
join t2
  on t1.id <= t2.max_id
  and t1.id >= t2.min_id
'''
 
df3 = spark.sql(sql)
df3.write.csv('/__/Temp/schema.stg_dq4.t3.csv', header=True, timestampFormat='yyyy-MM-dd HH:mm:ss')
  
  
####################################################
# CSV

# Read from CSV
df1 = spark.read.csv("/__/Temp/schema.stg_dq4.t1.csv", header=True, timestampFormat='yyyy-MM-dd HH:mm:ss', inferSchema=True)
df2 = spark.read.csv("/__/Temp/schema.stg_dq4.t2.csv", header=True, timestampFormat='yyyy-MM-dd HH:mm:ss', inferSchema=True)

# Write to CSV
file_path = "/__/temp/test.csv"
df2.repartition(1).write.csv(file_path + '_', mode='overwrite', header=True, timestampFormat='yyyy-MM-dd HH:mm:ss')
os.system('cat {file_path}_/*.csv > {file_path} && rm -rf {file_path}_'.format(file_path=file_path))



####################################################
# JDBC

# Read - Lazy
df1 = spark.read \
    .format("jdbc") \
    .option("url", "jdbc:oracle:thin:@//..........") \
    .option("dbtable", "CD_W_EXTRACT_1") \
    .option("user", "user") \
    .option("password", "pass") \
    .load()

# Write
df1.write \
    .format("jdbc") \
    .option("url", "jdbc:oracle:thin:@//........") \
    .option("dbtable", "CD_W_EXTRACT_1") \
    .option("user", "user") \
    .option("password", "pass") \
    .save()

# Hive

# Save / Create table
# Parquet is the default format, which does not play nice with Decimal fields: [https://stackoverflow.com/questions/36822224/how-is-apache-parquet-format-better-than-the-other-formats](https://stackoverflow.com/questions/36822224/how-is-apache-parquet-format-better-than-the-other-formats)
# best to convert those to double.
df1.write.saveAsTable('schema_name.stg_test1', mode='overwrite')
df1.write.format("orc").saveAsTable('schema_name.stg_test1', mode='overwrite')

# to convert to type Double
dec_cols = [c[0] for c in df1.dtypes if 'decimal' in c[1].lower()]
for col in dec_cols:
  df1 = (
    df1.withColumn(col + '_', df1[col].cast(DoubleType()))
     .drop(col)
     .withColumnRenamed(col + '_', col)
  )

#


```

## Spark 2.1 Init Boilerplate

```python
import sys, os, datetime, csv, time
sys.path.insert(1, '/code/python/libraries')

from collections import namedtuple

from helpers import (
  load_profiles,
  log,
  get_exception_message,
  DIR,
  now,
  read_csvD,
)

from database import (
  OracleConn,
  Beeline,
  HiveConn,
  SparkConn,
  Spark,
  Sqoop,
  PostgreSQLConn,
  get_conn
)

dbs = load_profiles(os.getenv('PROFILE_YAML'))['databases']


sparko = Spark(globals(), restart=True)

####################################
## READING data

# Read from DB
df1 = sparko.jdbc_read(dbs['DBNAME'], 'schema.INVITATIONS')
df1 = sparko.jdbc_read(dbs['DBNAME'], '(SELECT * from schema.INVITATIONS where rownum <= 1000)')

# Read from Hive
df1 = sparko.sql('select * from schema.mart_invitations limit 100')

# Read from Local CSV
file_path = "/user/schema/share/A428__.txt"
df1 = sparko.read_csv2(
  file_path,
  delimeter=',',
  timestampFormat='yyyy-MM-dd HH:mm:ss.SSS',
  dateFormat='MM/dd/yy',
  date_cols=['event_day']
)
df1 = sparko.read_csv2(file_path, delimeter=',', timestampFormat='yyyy-MM-dd HH:mm:ss', dateFormat='yyyy-MM-dd', date_cols=[])

####################################
## Writing data

# Write to DB
sparko.jdbc_write(df1, dbs['DBNAME'], 'schema.INVITATIONS', partitions=20, order_by=['survey_id'])

# Write to Local CSV
sparko.write_csv2(df1, "/user/schema/tmp/schema.invitations.csv")

# Write to Hive
# Parquet is the default format, which does not play nice with Decimal fields
# [https://stackoverflow.com/questions/36822224/how-is-apache-parquet-format-better-than-the-other-formats](https://stackoverflow.com/questions/36822224/how-is-apache-parquet-format-better-than-the-other-formats)
# best to convert those to double.

sparko.hive_write(df1, 'schema_name.stg_test1', order_by=[])
sparko.hive_write(df1.write.format("orc"), 'schema_name.stg_test1', order_by=[])



sqoop.to_hive(dbs['DBNAME'], 'schema.CD_W_EXTRACT_2', 'schema.CD_W_EXTRACT_2')

import_list = \
'''SCHEM1.TABLE1
SCHEM1.TABLE2
'''.splitlines()
sqoop.to_hive_all(dbs['DBNAME'], import_list=import_list, tgt_schema='schema')

```

# Java

## Example Links
[https://stackoverflow.com/questions/22298192/how-to-run-a-spark-java-program](https://stackoverflow.com/questions/22298192/how-to-run-a-spark-java-program)

[https://github.com/mahmoudparsian/data-algorithms-book/blob/master/misc/how-to-submit-spark-job-to-yarn-from-java-code.md](https://github.com/mahmoudparsian/data-algorithms-book/blob/master/misc/how-to-submit-spark-job-to-yarn-from-java-code.md)

[https://hortonworks.com/tutorial/setting-up-a-spark-development-environment-with-java/](https://hortonworks.com/tutorial/setting-up-a-spark-development-environment-with-java/)

[https://www.cloudera.com/documentation/enterprise/5-5-x/topics/spark_develop_run.html](https://www.cloudera.com/documentation/enterprise/5-5-x/topics/spark_develop_run.html)

### Kotlin

This project works with Spark 1.6: `/Users/larco/Temp/spark0`
[http://tomstechnicalblog.blogspot.com/2016/11/using-kotlin-language-with-spark.html](http://tomstechnicalblog.blogspot.com/2016/11/using-kotlin-language-with-spark.html)

[https://github.com/thomasnield/kotlin-spark-test](https://github.com/thomasnield/kotlin-spark-test)

#### Issues with building a single jar. :star:

I am able to build a single jar fine with this project: https://github.com/techdev-solutions/spark-kotlin-example

When I try with Apache Spark, with the SAME structure as above project, running the JAR file fails. It always gives the error: `Error: Could not find or load main class de.techdev.example.SparkExampleKt`

My conclusion is that the [apache.spark maven JAR file](https://mvnrepository.com/artifact/org.apache.spark/spark-core_2.11/1.6.1) is somehow not correctly structured. When I include it and try to generate a fat JAR, it fails. However, we can run fine from IJ-IDEA without a fat jar. Try with Kotlin project here: [https://files.larco.us/spark5.zip](https://files.larco.us/spark5.zip)

This works with Spark 1.6.

Two hurdles:

- Use 2.2 instead of 1.6
- ~~Be able to compile / build an executable file. Or perhaps have all the classpath JARs into one folder? I tried, but got error `Exception in thread "main" java.lang.NoClassDefFoundError: kotlin/jvm/internal/Intrinsics`~~

Solution is [Shadow](https://github.com/johnrengelman/shadow)

#### Successful build.gradle


```javascript
group 'de.techdev.example'
version '1.0'

buildscript {
    ext.kotlin_version = '1.1.2-2'

    repositories {
        jcenter()
    }

    dependencies {
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
        classpath 'com.github.jengelman.gradle.plugins:shadow:2.0.1'
    }
}

apply plugin: 'kotlin'
apply plugin: 'com.github.johnrengelman.shadow'
apply plugin: 'application'

mainClassName = 'de.techdev.example.SparkExampleKt'

repositories {
    mavenCentral()
}

// This will propogate to shadow
jar {

  manifest {
      attributes 'Implementation-Title': 'Foobar',
              'Implementation-Version': version,
              'Built-By': System.getProperty('user.name'),
              'Built-Date': new Date(),
              'Built-JDK': System.getProperty('java.version'),
              'Main-Class': mainClassName
  }

  // from files(sourceSets.main.output.classesDir)

  // from {
  //   configurations.compile.collect { it.isDirectory() ? it : zipTree(it) }
  // }

}

shadowJar {
  baseName = project.name + '-shadow'
  classifier = null
  version = null

  mergeServiceFiles()

  transform(com.github.jengelman.gradle.plugins.shadow.transformers.AppendingTransformer) {
    resource = 'reference.conf'
  }
}

// This one works in general
task fatJar(type: Jar) {
    baseName = project.name + '-fat'
    from { configurations.runtime.collect { it.isDirectory() ? it : zipTree(it) } }
    with jar
    manifest {
        attributes 'Main-Class': 'de.techdev.example.SparkExampleKt'
    }
}

// build.dependsOn fatJar
build.dependsOn shadowJar

dependencies {
    compile "org.jetbrains.kotlin:kotlin-stdlib-jre8:$kotlin_version"
    compile 'org.apache.spark:spark-core_2.10:1.6.1'
}
```

## Code Help

### flatMap

```scala
callData = sc.parallelize([["User1", "User2", 2], ["User1", "User3", 4], ["User2", "User1", 8]])

calls = callData.flatMap(lambda record: [(record[0], record[2]), (record[1], record[2])])
print calls.collect()
# prints [('User1', 2), ('User2', 2), ('User1', 4), ('User3', 4), ('User2', 8), ('User1', 8)]

reduce = calls.reduceByKey(lambda a, b: a + b)
print reduce.collect()
# prints [('User2', 10), ('User3', 4), ('User1', 14)]
```

```scala
import org.apache.spark.sql._
import spark.implicits._

val list = List(("K1", 10, 20, 10, 20,50), ("K2", 20, 30, 20, 10, 60))
val yourDF = sc.parallelize(list).toDF("Key", "Today", "MTD", "QTD", "HTD", "YTD")

// yourDF.show()
// +---+-----+---+---+---+---+
// |Key|Today|MTD|QTD|HTD|YTD|
// +---+-----+---+---+---+---+
// | K1|   10| 20| 10| 20| 50|
// | K2|   20| 30| 20| 10| 60|
// +---+-----+---+---+---+---+

val newDataFrame = yourDF
  .rdd
  .flatMap(row => {
    val key = row.getString(0)
    val todayAmt = row.getInt(1)
    val mtdAmt = row.getInt(2)
    val qtdAmt = row.getInt(3)
    val htdAmt = row.getInt(4)
    val ytdAmt = row.getInt(5)

    List(
      (key, "today", todayAmt),
      (key, "MTD", mtdAmt),
      (key, "QTD", qtdAmt),
      (key, "HTD", htdAmt),
      (key, "YTD", ytdAmt)
    )
  })
  .toDF("Key", "PRD", "Amt" )

// newDataFrame.show()
// +---+-----+---+
// |Key|  PRD|Amt|
// +---+-----+---+
// | K1|today| 10|
// | K1|  MTD| 20|
// | K1|  QTD| 10|
// | K1|  HTD| 20|
// | K1|  YTD| 50|
// | K2|today| 20|
// | K2|  MTD| 30|
// | K2|  QTD| 20|
// | K2|  HTD| 10|
// | K2|  YTD| 60|
// +---+-----+---+
```

## Pivot

```python
df = sparko.sql('select POL_QUOTE_STATUS_DESC,POL_STATUS_DESC, year(POL_EFF_DT) as POL_EFF_DT_YR from schema.tab')
df2 = df.groupBy('POL_QUOTE_STATUS_DESC', 'POL_EFF_DT_YR').pivot('POL_STATUS_DESC').count(
 sparko.write_csv2(df2, '/file.csv')
```

## N-grams

```python
df1 = sparko.sql("select connid, regexp_replace(mdibubble, '\\\\\\\\n', ' ') as mdibubble from schema.tab where mdibubble is not null limit 10000")
df_tk = sparko.tokenize(df1, 'mdibubble', 'mdibubble_tk')
df_tks = sparko.remove_stop_words(df_tk, 'mdibubble_tk', 'mdibubble_tks')
df_ng3 = sparko.create_ngram(df_tks, 3, 'mdibubble_tks', 'mdibubble_ngram3')
df_ng3.registerTempTable('df_ng3')

df2 = sparko.sql('select mdibubble_ngram3, size(mdibubble_ngram3) ng_tot from df_ng3')
# df2.show()

df3 = sparko.sql("""
  select
    mdibubble_ngram,
    split(mdibubble_ngram, ' ') as mdibubble_ngram_arr,
    size(split(mdibubble_ngram, ' ')) as mdibubble_ngram_arr_size,
    size(mdibubble_ngram3) as ng_tot
  from df_ng3
  lateral view explode(mdibubble_ngram3) et1 AS mdibubble_ngram
""")
df3.registerTempTable('df3')
# df3.show()

df4 = sparko.sql("""
  select
    mdibubble_ngram_arr,
    mdibubble_ngram_arr_size,
    count(1) cnt
  from df3
  group by mdibubble_ngram_arr, mdibubble_ngram_arr_size
  order by count(1) desc
""")
df4.show()
```

## Histogram

```python
from pyspark.ml.feature import QuantileDiscretizer

df = sparko.sql('select talk_time from schema.tab')

df.rdd.flatMap(lambda x: x).histogram(20)
df.rdd.flatMap(lambda x: x).histogram((-10, -1, 0, 1, 5,10, 50,100,500,1000,5000, 10000, 50000))

field_name = 'talk_time'
table = 'schema.tab'
numBuckets=20

df = sparko.sql('select cast({field} as double) as {field} from {table}'.format(field_name, table=table))

qds = QuantileDiscretizer(
  numBuckets=20,
  inputCol=field_name,
  outputCol="bucket",
  relativeError=0.01,
  handleInvalid="error"
)
bucketizer = qds.fit(df)
df1 = bucketizer.transform(df)

df1.registerTempTable("df1")

df2 = sparko.sql('''
with t1 as (
  select
    bucket, count(1) cnt,
    min({field}) min_val,
    max({field}) max_val,
    1 one
  from df1
  group by bucket
  order by bucket
)
, t2 as (
  select
    1 one,
    sum(cnt) tot_cnt
  from t1
)
select
  bucket, cnt,
  round(100 * cnt / tot_cnt, 1) prct,
  min_val, max_val
from t1
join t2 on t1.one = t2.one
'''.format(field=field_name))

df2.show()
```

## Fill nulls down

```sql
-- https://stackoverflow.com/questions/31144947/filling-null-value-from-last-not-null-value-in-hive
select
  coalesce(field1, last_value(field1, true) over(partition by field1 order by field1, field2 rows between unbounded preceding and current row)) as field1,
  coalesce(field2, last_value(field2, true) over(partition by field1 order by field1, field2 rows between unbounded preceding and current row)) as field2,
  coalesce(pol_term_id, last_value(pol_term_id, true) over(partition by field1 order by field1, field2 rows between unbounded preceding and current row)) as pol_term_id
from t1;
```
