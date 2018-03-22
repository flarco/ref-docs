Docker

---

## Installation
```
curl -sSL https://get.docker.com/ | sh
```

## Images

### Build Image
Go to folder with DockerFile
```
docker build -t username/wma_app:v1 .
 # OR
docker build --no-cache -t username/wma_app:v1 .
 # OR
docker build -f /path/to/a/Dockerfile2 -t username/wma_app:v1 .
```

#### Add SSH Service
```
RUN echo "root:my_pass!" | chpasswd && \
  awk '!/PermitRootLogin/' /etc/ssh/sshd_config > temp && \
  mv temp /etc/ssh/sshd_config && \
  echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config

 # run `bash` last to keep the container from exiting
CMD service ssh restart && tail -f /var/log/lastlog
```

#### Force Dockerfile step
```
RUN dpkg --add-architecture i386 \
	&& apt-get update && apt-get install -y wget \
	&& wget "${SKYPE_URL}" -O skype.deb \
	&& { dpkg -i skype.deb || true; } \ # this is the key entry, forces TRUE in order to continue to next command
	&& rm skype.deb \
	&& apt-get update && apt-get install -y -f
```

### List Images
```
docker images
```

### Delete Image
```
docker rmi e6b97f89ea4b
# By name
docker rmi $(docker images | grep username | awk "{print \$3}")
```
## Containers

### List Containers
```
docker ps -a
```

### Delete Container
```
docker rm e6b97f89ea4b
 # Delete by image name
docker stop $(docker ps -q --filter ancestor=<image-name> )
docker rm $(docker ps -q -a --filter ancestor=<image-name> )
```

### Quick Container
```
docker run --rm -it debian:jessie bash -l
docker run --rm -it ubuntu:trusty bash -l
```

### Export Container to TAR File
<https://docs.docker.com/engine/reference/commandline/export/>
```
docker export red_panda > latest.tar

docker export --output="latest.tar" red_panda
```

### Import Container from TAR File
<https://docs.docker.com/engine/reference/commandline/import/>
```
docker import /path/to/exampleimage.tar username/imagename:v1

docker import http://example.com/exampleimage.tgz

cat exampleimage.tgz | docker import - exampleimagelocal:new

cat exampleimage.tgz | docker import --message "New image imported from tarball" - exampleimagelocal:new

docker import /path/to/exampleimage.tgz
```

### Run Image in background
```
docker run --privileged -dti -p 8084:8084 username/wma_app:v1
 # OR
screen
docker run -p 80:80 username/wma_app:v1
```

### Enter running container
```
docker exec -ti ID_of_foo bash
```

### See logs of running container
```
docker logs help
```


## Cheat Sheet


```
docker run --privileged -d -p 23:22 -p 1522:1521 -e ORACLE_ALLOW_REMOTE=true wnameless/oracle-xe-11g name oracle # Fresh container
```
```
docker ps -a
docker start f357e2faab77 # restart it in the background
docker attach f357e2faab77 # reattach the terminal & stdin
```
```
docker ps -a
docker rm 446aacef846d # remove old container
```

## Volumes
```
docker run -d -P --name web -v /src/webapp:/opt/webapp training/webapp python app.py
```

### Copying files into Docker
```
docker cp SCHEMA_TABLES.dmp.gz 2a4499be5120:/u01/app/oracle/admin/XE/dpdump
```

### Kill Containers and Remove them
```
docker rm $(docker kill $(docker ps -aq))
```

### Delete all docker containers
```
docker rm $(docker ps -a -q)
```
### Delete all docker images
```
docker rmi $(docker images -q)
```

## Stats
```
docker stats `docker ps | awk '{print $NF}' | grep -v NAMES`
```

## Docker-Compose

### Main Reference
<https://docs.docker.com/compose/overview/>

### Extending / Inheritance
<https://blog.docker.com/2015/04/easily-configure-apps-for-multiple-environments-with-compose-1-2-and-much-more/>