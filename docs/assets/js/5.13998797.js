(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Go to folder with DockerFile")]),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),a("p",[e._v("https://docs.docker.com/config/pruning/")]),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._m(21),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._m(25),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/export/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/reference/commandline/export/"),a("OutboundLink")],1)]),e._v(" "),e._m(26),e._m(27),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/import/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/engine/reference/commandline/import/"),a("OutboundLink")],1)]),e._v(" "),e._m(28),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),e._m(33),e._v(" "),e._m(34),e._m(35),e._v(" "),e._m(36),e._m(37),e._m(38),e._m(39),e._v(" "),e._m(40),e._m(41),e._v(" "),e._m(42),e._m(43),e._v(" "),e._m(44),e._m(45),e._v(" "),e._m(46),e._m(47),e._v(" "),e._m(48),e._m(49),e._v(" "),e._m(50),e._m(51),e._v(" "),e._m(52),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/compose/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.docker.com/compose/overview/"),a("OutboundLink")],1)]),e._v(" "),e._m(53),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.docker.com/2015/04/easily-configure-apps-for-multiple-environments-with-compose-1-2-and-much-more/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.docker.com/2015/04/easily-configure-apps-for-multiple-environments-with-compose-1-2-and-much-more/"),a("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("curl -sSL https://get.docker.com/ | sh\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#images","aria-hidden":"true"}},[this._v("#")]),this._v(" Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"build-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-image","aria-hidden":"true"}},[this._v("#")]),this._v(" Build Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker build -t username/wma_app:v1 .\n # OR\ndocker build --no-cache -t username/wma_app:v1 .\n # OR\ndocker build -f /path/to/a/Dockerfile2 -t username/wma_app:v1 .\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"push-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-image","aria-hidden":"true"}},[this._v("#")]),this._v(" Push Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# login\ndocker login --username=username --password-stdin\n\n# build\ndocker build -f /path/to/a/Dockerfile -t username/wma_app:v1 .\n\n# push\ndocker push username/wma_app:v1\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"cleanup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanup","aria-hidden":"true"}},[this._v("#")]),this._v(" Cleanup")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker system prune\n\n\ndocker image prune\n# or docker image prune -a\n\ndocker container prune\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"add-ssh-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-ssh-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Add SSH Service")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("RUN echo \"root:my_pass!\" | chpasswd && \\\n  awk '!/PermitRootLogin/' /etc/ssh/sshd_config > temp && \\\n  mv temp /etc/ssh/sshd_config && \\\n  echo 'PermitRootLogin yes' >> /etc/ssh/sshd_config\n\n # run `bash` last to keep the container from exiting\nCMD service ssh restart && tail -f /var/log/lastlog\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"force-dockerfile-step"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-dockerfile-step","aria-hidden":"true"}},[this._v("#")]),this._v(" Force Dockerfile step")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('RUN dpkg --add-architecture i386 \\\n\t&& apt-get update && apt-get install -y wget \\\n\t&& wget "${SKYPE_URL}" -O skype.deb \\\n\t&& { dpkg -i skype.deb || true; } \\ # this is the key entry, forces TRUE in order to continue to next command\n\t&& rm skype.deb \\\n\t&& apt-get update && apt-get install -y -f\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"list-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-images","aria-hidden":"true"}},[this._v("#")]),this._v(" List Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker images\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-image","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('docker rmi e6b97f89ea4b\n# By name\ndocker rmi $(docker images | grep username | awk "{print \\$3}")\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#containers","aria-hidden":"true"}},[this._v("#")]),this._v(" Containers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"list-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-containers","aria-hidden":"true"}},[this._v("#")]),this._v(" List Containers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker ps -a\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-container","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete Container")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker rm e6b97f89ea4b\n # Delete by image name\ndocker stop $(docker ps -q --filter ancestor=<image-name> )\ndocker rm $(docker ps -q -a --filter ancestor=<image-name> )\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"quick-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-container","aria-hidden":"true"}},[this._v("#")]),this._v(" Quick Container")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker run --rm -it debian:jessie bash -l\ndocker run --rm -it ubuntu:trusty bash -l\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"export-container-to-tar-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-container-to-tar-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Export Container to TAR File")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('docker export red_panda > latest.tar\n\ndocker export --output="latest.tar" red_panda\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"import-container-from-tar-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-container-from-tar-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Import Container from TAR File")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('docker import /path/to/exampleimage.tar username/imagename:v1\n\ndocker import http://example.com/exampleimage.tgz\n\ncat exampleimage.tgz | docker import - exampleimagelocal:new\n\ncat exampleimage.tgz | docker import --message "New image imported from tarball" - exampleimagelocal:new\n\ndocker import /path/to/exampleimage.tgz\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"run-image-in-background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-image-in-background","aria-hidden":"true"}},[this._v("#")]),this._v(" Run Image in background")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker run --privileged -dti -p 8084:8084 username/wma_app:v1\n # OR\nscreen\ndocker run -p 80:80 username/wma_app:v1\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"enter-running-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enter-running-container","aria-hidden":"true"}},[this._v("#")]),this._v(" Enter running container")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker exec -ti ID_of_foo bash\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"see-logs-of-running-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-logs-of-running-container","aria-hidden":"true"}},[this._v("#")]),this._v(" See logs of running container")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker logs help\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cheat-sheet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cheat-sheet","aria-hidden":"true"}},[this._v("#")]),this._v(" Cheat Sheet")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker run --privileged -d -p 23:22 -p 1522:1521 -e ORACLE_ALLOW_REMOTE=true wnameless/oracle-xe-11g name oracle # Fresh container\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker ps -a\ndocker start f357e2faab77 # restart it in the background\ndocker attach f357e2faab77 # reattach the terminal & stdin\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker ps -a\ndocker rm 446aacef846d # remove old container\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"volumes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volumes","aria-hidden":"true"}},[this._v("#")]),this._v(" Volumes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker run -d -P --name web -v /src/webapp:/opt/webapp training/webapp python app.py\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"copying-files-into-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copying-files-into-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Copying files into Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker cp SCHEMA_TABLES.dmp.gz 2a4499be5120:/u01/app/oracle/admin/XE/dpdump\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"kill-containers-and-remove-them"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kill-containers-and-remove-them","aria-hidden":"true"}},[this._v("#")]),this._v(" Kill Containers and Remove them")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker rm $(docker kill $(docker ps -aq))\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete-all-docker-containers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-docker-containers","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete all docker containers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker rm $(docker ps -a -q)\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"delete-all-docker-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-docker-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Delete all docker images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker rmi $(docker images -q)\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"stats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stats","aria-hidden":"true"}},[this._v("#")]),this._v(" Stats")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("docker stats `docker ps | awk '{print $NF}' | grep -v NAMES`\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker-Compose")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"main-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Main Reference")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"extending-inheritance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extending-inheritance","aria-hidden":"true"}},[this._v("#")]),this._v(" Extending / Inheritance")])}],!1,null,null,null);s.options.__file="docker.md";t.default=s.exports}}]);