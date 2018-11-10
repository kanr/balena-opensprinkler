# Balena-OpenSprinkler (raspberry pi)

The open Sprinkler is an open source hardware ecosystem for micro-controllers (arduino esp8266) and single board computers (Raspberry Pi, BeagleBoneBlack)

This repository builds a docker container for the [Balena.io](balena.io) ecosystem which includes all the boards in the BeagleBone and Raspberry pi product families.

opensprinkler/Dockerfile makes use for the [multi-stage builds.](https://docs.docker.com/develop/develop-images/multistage-build/) More information on the use of multi-stage builds with containers can be read [here.](https://www.balena.io/blog/multi-stage-docker-builds-for-tiny-iot-images/)

TODO:

add node-red container to build to act as an API for the OpenSprinkler.

## Sources

https://github.com/defektive/hydro-pi-frontend
https://github.com/devanl/pyOpenSprinklerRest
https://github.com/JohnStrunk/OpenSprinkler-RPi-docker