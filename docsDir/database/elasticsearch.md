# ElasticSearch

---

## Mappings / Index Templates
<https://www.elastic.co/guide/en/elasticsearch/reference/current/indices.html>

**It is needed to set the index template before commencing integrating data.**
**Espceially to establish *raw* fields.**
<https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-templates.html>

**Logstash by default creates a template named "logstash".**

**Creating Index template:**
```
curl -XPUT 'http://localhost:9200/_template/filebeat' -d@/etc/filebeat/filebeat.template.json
```

```
curl -XPUT localhost:9200/_template/tcpdump -d '
{
      "order":0,
      "template":"tcpdump-*",
      "settings":{
         "index":{
            "refresh_interval":"5s"
         }
      },
      "mappings":{
         "_default_":{
            "dynamic_templates":[
               {
                  "message_field":{
                     "mapping":{
                        "fielddata":{
                           "format":"disabled"
                        },
                        "index":"analyzed",
                        "omit_norms":true,
                        "type":"string"
                     },
                     "match_mapping_type":"string",
                     "match":"message"
                  }
               },
               {
                  "string_fields":{
                     "mapping":{
                        "fielddata":{
                           "format":"disabled"
                        },
                        "index":"analyzed",
                        "omit_norms":true,
                        "type":"string",
                        "fields":{
                           "raw":{
                              "ignore_above":256,
                              "index":"not_analyzed",
                              "type":"string"
                           }
                        }
                     },
                     "match_mapping_type":"string",
                     "match":"*"
                  }
               }
            ],
            "_all":{
               "omit_norms":true,
               "enabled":true
            },
            "properties":{
               "@timestamp":{
                  "type":"date"
               },
               "geoip":{
                  "dynamic":true,
                  "properties":{
                     "ip":{
                        "type":"ip"
                     },
                     "latitude":{
                        "type":"float"
                     },
                     "location":{
                        "type":"geo_point"
                     },
                     "longitude":{
                        "type":"float"
                     }
                  }
               },
               "@version":{
                  "index":"not_analyzed",
                  "type":"string"
               }
            }
         }
      },
      "aliases":{

      }
   }
'
```

** LIKE Query **
```
{
  "query": {
    "wildcard": {
      "field_name": "*str*"
    }
  }
}
```


** NOT LIKE Query **
```
{
  "query": {
    "not": {
      "wildcard": {
        "field_name": "*str*"
      }
    }
  }
}
```
