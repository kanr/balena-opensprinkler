#!/bin/bash

export DBUS_SYSTEM_BUS_ADDRESS=unix:path=/host/run/dbus/system_bus_socket

# Make the default flows available in the user library
mkdir -p /data/node-red/user/lib/flows || true
cp /usr/src/app/flows/* /data/node-red/user/lib/flows/

# Make the opensprinkler node available
mkdir -p /data/node-red/nodes/ || true
cp /usr/src/app/nodes/* /data/node-red/nodes/

# Start app
node-red --settings /usr/src/app/settings.js