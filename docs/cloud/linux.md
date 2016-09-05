
# Key Commands / Tools

### PGREP
To Find out if a process is already running
```
pgrep tcpdump && echo "Already running.." || ( /__/pfsense.tcp.sh & )
```

### WATCH
```
watch -n 5 ls -l # loops every 5 seconds
watch -n 5 insync-headless get_sync_progress

# Alternate solution
while true; do ls -l; sleep .5; done
```

### ALIAS

```
alias dcp-service='docker-compose -f /__/docker/service/docker-compose.yml'
alias d-xenial='docker run --rm -it username/ubuntu:xenial bash -l'
```

- To Add to Shell scripts:
```
shopt -s expand_aliases
source ~/.bash_aliases
```

### ENVSUBST
- Substitutes variables inside a text file with environment variables

*Sample env.sh file:*
```
#!/bin/bash 
export ORACLE_DB_IMAGE=<image-name> 
export ORACLE_DB_PORT=<port to be exposed> 
export ORACLE_DB_CONTAINER_NAME=ORACLE_DB_SERVER
```

*Sample template.yml file:*
```
oracledb:
        image: ${ORACLE_DB_IMAGE}
        privileged: true
        cpuset: "0"
        ports:
                - "${ORACLE_DB_PORT}:${ORACLE_DB_PORT}"
        command: /bin/sh -c "chmod 777 /tmp/start; /tmp/start"
        container_name: ${ORACLE_DB_CONTAINER_NAME}

```

*Command:*
```
source env.sh; rm -rf docker-compose.yml; envsubst < "template.yml" > "docker-compose.yml";
```

### DD
**Test disk write speed / performance**
```
dd if=/dev/zero of=/tmp/output conv=fdatasync bs=384k count=1k; rm -f /tmp/output
1024+0records in
1024+0 records out
402653184 bytes (403 MB) copied, 3.19232 s, 126 MB/s
```


### ZIP/UNZIP

```
zip -r my_folder.zip my_folder # from parent path of folder
```

```
unzip -uo my_folder.zip
```

### SSH
```
ssh-keygen -t rsa -P ''
ssh-copy-id -i ~/.ssh/id_rsa.pub user@targetserver
```

### SSHFS
```
ssh-keygen -t rsa -P ''
ssh-copy-id -i ~/.ssh/id_rsa.pub user@targetserver

sshfs -o allow_other -o auto_unmount -o reconnect user@targetserver:/_ /_
```

### AUTOSSH
```
apt install -y autossh
autossh [-V] [-M monitor_port[:echo_port]] [-f] [SSH_OPTIONS]
autossh -M 2000 -f user@targetserver -N -L 9200:xenial:9200 -C
autossh -M 2000 -f user@targetserver -g -L 127.0.0.1:9200:xenial:9200 -N -p80
```

## Network

### Test HTTP POST/GET

```
sudo nc -l 80
```


# Ubuntu

## Init
**Allow sudo without password:**
```
sudo nano /etc/sudoers
gandalf ALL=(ALL) NOPASSWD: ALL # append
```



## Firewall

**Add Rule**
```
ufw allow ssh
ufw allow 1194/udp
ufw allow 80/tcp
```

**Enable**
```
ufw enable
```

## Screen
to Log
`screen -L`

to run in background a command until it exits
`screen -d -m /path/to/command param1 param2`

Using screen in daemon mode.
    `screen -dmS myservice /blah/start.sh`
Fit that line somewhere in a properly constructed init.d file and you're good to go. And if you need to execute a safe stop from that program through some interactivity:
    `screen -S myservice -X stuff "stop\n"`

## OpenVPN

### Client Setup
```
sudo apt-get install -y openvpn
cd /__
sudo openvpn --config /__/VM1.ovpn

# screen background
echo "sudo openvpn --config /__/VM1.ovpn | tee /__/openVPN.log" > /__/openVPN.sh
screen -d -m bash /__/openVPN.sh
```


## tcpdump
<http://openmaniak.com/tcpdump.php>

Port Filter
```
tcpdump -nn -tttt port not 5000

tcpdump -U -i em0 -i em1 -nn -tttt port not 5141 and port not 5140 | python2.7 /__/pfsense_traffic_integration.py "username-pc:5141"

nn = don't resolve host names or port names
```


Full packet
```
tcpdump -nn -A -s 0 -tttt -i em1 -i em0 dst 192.168.2.1
```

## Nano
Man: <https://www.nano-editor.org/dist/v2.0/nano.html>
<http://hyperpolyglot.org/text-mode-editors>

Syntax Highligthing: <http://askubuntu.com/questions/90013/how-do-i-enable-syntax-highlighting-in-nano>

Configs:
```
set tabsize 4
set tabstospaces
set autoindent
```

## Curl
###Post
`-H` are headers
`-d` is the text data to be be sent (below example is JSON'
```
curl -H "Content-Type: application/json" -H "Connection: Keep-Alive" -H "Authorization: Bearer AQWQ7BIj4PJ_W8ekWk-30RIG96bwW6S6palc_aE5DjBN3C2bzSV94Lag3LuYmImU4LVIWj8lpvCO9FH46Bax3jWgqMXvuueevMroN7WND6wibv1xzXkm1KWvjcRosnksZ7kdFFb008orTmoLzoS0p1opAjkBucCebtGgoomdYHI5EvSvpAE" -X POST -d "{ \"comment\": \"$link\", \"visibility\": { \"code\": \"anyone\" } }" https://api.linkedin.com/v1/people/~/shares?format=json
```

### Get
```
curl --header "Authorization: Bearer a503faf9-45b5-4fec-8334-337284a66ea4" http://localhost:9001/rest/v1/electronics/custoers/current
curl -G https://www.google.com
```

## Syncthing

http://www.syncthing.net

#### Upstart (Ubuntu 14.04)
**/etc/init/syncthing.conf**
```
description "Syncthing P2P sync service"

start on (local-filesystems and net-device-up IFACE!=lo)
stop on runlevel [!2345]

env STNORESTART=yes
env HOME=/root
setuid "root"
setgid "root"

exec /usr/bin/syncthing

respawn
```

***Need to modify setting to access externally:***
```
nano ~/.config/syncthing/config.xml

# Change FROM
<gui enabled="true" tls="false">
    <address>127.0.0.1:8384</address>
</gui>

# To
<gui enabled="true" tls="false">
    <address>0.0.0.0:8384</address>
</gui>
```

**To start:**
`start syncthing`

## NGINX
<https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-14-04>
<http://code-maven.com/deploying-python-flask-using-uwsgi-on-ubuntu-14-04>
<https://github.com/sinkcup/docker-library-nginx-mkdocs>



```
# LOGS
/var/log/nginx

# Sites Available
/etc/nginx/sites-available

# Sites enabled
/etc/nginx/sites-enabled

# Enable a site
ln -s /etc/nginx/sites-available/$project_name /etc/nginx/sites-enabled
```

### Let's Encrypt SSL
<https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-14-04>

```
sudo apt-get -y install git bc nginx
sudo git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt
```

- Edit `/etc/nginx/sites-available/default`
Add this *server lock*:
```
location ~ /.well-known {
    allow all;
}
```

- Reload NGINX
```
sudo service nginx reload
```

- Run Lets Encrypt script, replacing `/path/to/root` with correct path:
```
cd /opt/letsencrypt
./letsencrypt-auto certonly -a webroot --webroot-path=/path/to/root -d example.com -d www.example.com
```

