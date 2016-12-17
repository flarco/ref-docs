

### Rate limiting
from: <https://lincolnloop.com/blog/rate-limiting-nginx/>
```
upstream myapp {
    server 127.0.0.1:8081;
}

server {
    ...
    location / {
        proxy_pass http://myapp;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
    }
}
```

To enable rate limiting simply add the following line to the top-level of your config file:
```
limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;
```

This creates a shared memory zone called "login" to store a log of IP addresses that access the rate limited URL(s). 10 MB (10m) will give us enough space to store a history of 160k requests. It will only allow 1 request per second (1r/s).

Then apply it to a location by adding a stanza to your server block:
```
location /account/login/ {
    # apply rate limiting
    limit_req zone=login burst=5;

    # boilerplate copied from location /
    proxy_pass http://myapp;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
}
```

FULL CONFIG:
```
upstream myapp {
    server 127.0.0.1:8081;
}

limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;

server {
    listen 443 ssl spdy;
    server_name _;
  
    ssl on;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/cert.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers AES256+EECDH:AES256+EDH;
    ssl_session_cache  builtin:1000  shared:SSL:5m;
    ssl_prefer_server_ciphers on;

  
    location / {
        proxy_pass http://myapp;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
    }
    
    location /account/login/ {
        # apply rate limiting
        limit_req zone=login burst=5;
    
        # boilerplate copied from location /
        proxy_pass http://myapp;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
    }
```
