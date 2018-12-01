FROM resin/raspberrypi3-node:8

# Defines our working directory in container
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

# Install node modules, including i2c-bus without carrying all the deps in the layers
RUN apt-get update && apt-get install -y build-essential git python-rpi.gpio
RUN JOBS=MAX npm install -g --production --silent \
    node-red \
    node-red-dashboard \
    node-red-contrib-os \
    #node-red-contrib-influxdb \
    #node-red-contrib-mapper \
    node-red-contrib-resinio \
    #node-red-contrib-ttn \
    #node-red-node-base64 \
    #node-red-node-msgpack \
    #node-red-node-random \
    node-red-node-serialport \
    node-red-node-suncalc \
    && npm link node-red-contrib-opensprinkler

COPY ./app ./
VOLUME /var/lib/node-red

EXPOSE 80

# server.js will run when container starts up on the device
CMD ["bash", "/usr/src/app/start.sh"]