# MongoDB


## Python

**Login**

```python
import pymongo

from pymongo import MongoClient

mongoDB = MongoClient('mongodb://router:router@localhost:27017/router')
```
**String Connection Config:**
```
mongodb://username:password@example.com:27017,example2.com:27017,...,example.comN:27017/database?key=value&keyN=valueN
\_____/   \_______________/ \_________/ \__/  \_______________________________________/ \______/ \_/ \___/
  |             |             |           |                    |                          |       |    |
Scheme          |            Host        Port        Alternative host identifiers         |      Key Value
             Userinfo       \_____________/                                               |      \_______/
                                   |                                              Auth database      |
                              Host Identifier                                                    Key Value Pair
                             \_______________________________________________________/          \___________________/
                                                      |                                                   |
                                                 Host Information                                  Connection Options

```


**Configuration for High Availability, ReplicaSet Load Balancing:**

<http://api.mongodb.org/python/current/examples/high_availability.html>

**Point to Collection**
```python
router_traffic = mongoDB.router.router_traffic
```


**Insert**
```python
result = router_traffic.insert_one(packet)
result = router_traffic.insert_many(all_packets)

```


**Delete**
```python
result = router_traffic.delete_many({"time": {"$lt": datetime.datetime.now() - datetime.timedelta(days=1)}})
```


**Aggregation**
```python
aggr_pipeline = [
    { "$match" : {"time": {"$gt": datetime.datetime.now() - datetime.timedelta(minutes=5)}} },
    { "$sort": { "_id" : 1} },
    {   "$group": {
           "_id": {
                "IP":"$_id.IP"
                ,"time": {"$add": [
                { "$subtract": [
                    { "$subtract": [ "$_id.time", datetime.datetime(1970, 1, 1) ] },
                    { "$mod": [
                        { "$subtract": [ "$_id.time", datetime.datetime(1970, 1, 1) ] },
                        1000 * 60 * 5
                    ]}
                ]},
                datetime.datetime(1970, 1, 1)
            ]}
            },
           "UL_Sum": { "$sum": "$UL_Sum" },
           "UL_Count": { "$sum": "$UL_Count" },
           "DL_Sum": { "$sum": "$DL_Sum" },
           "DL_Count": { "$sum": "$DL_Count" }
           
        }
    },
    { "$sort": { "_id" : 1} },
    {   "$group": {
            "_id": {
                "IP":"$_id.IP"
            },
            
           "IP": { "$last": "$_id.IP" },
           "time": { "$last": "$_id.time" },
           "UL_Sum": { "$last": "$UL_Sum" },
           "UL_Count": { "$last": "$UL_Count" },
           "DL_Sum": { "$last": "$DL_Sum" },
           "DL_Count": { "$last": "$DL_Count" }
    }
    },
    {   "$project" : { "_id" : 0, "IP": 1 , "time": 1, "UL_Sum" : 1, "UL_Count" : 1 , "DL_Sum" : 1, "DL_Count" : 1 } },
    { "$sort": { "_id" : 1} }
]

stats = list(router_traffic.aggregate(aggr_pipeline))

```