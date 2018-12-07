# ref-docs
Master reference for all things code.
Quickly find the solution!

This project loads the site <http://docs.ocral.org>

## Install VuePress

```
npm install -g vuepress
```

## Building the site with VuePress

```bash
git clone https://github.com/flarco/ref-docs.git

cd ref-docs

vuepress build

ls -l .vuepress/dist
```

## Running with NGINX
Add this server block:
```nginx
server {
  listen 80;
  listen [::]:80;

  root /path/to/ref-docs/site;
  error_page 404 /path/to/404.html;

  location ~ ^/(js|css|img|mkdocs/js)/ {
    expires 1y;
    add_header Cache-Control public;
    add_header ETag "";
    break;
  }

  gzip on;
  gzip_min_length  1100;
  gzip_buffers  4 32k;
  gzip_types    text/plain application/x-javascript text/xml text/css;
  gzip_vary on;
}

```

## Vue Press Examples

Guide: https://github.com/vuejs/vue-router/tree/dev/docs
