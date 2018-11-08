# Balena-Nodered-Multi-Container Project

## Balena

<https://www.balena.io/docs/learn/develop/multicontainer/>
<https://forums.balena.io/t/device-keeps-building-in-container/3027>
<https://github.com/balena-io-projects/multicontainer-demo-rpi3>
<https://github.com/balena-io-projects/balena-node-red>

## Node Red

[](https://github.com/FabLabMons/iotlab-gateway/blob/master/docker-compose.yml)
[Node-red + couchDB](https://flows.nodered.org/?term=couchdb&num_pages=1)

## Couch DB

This repository makes use of the noSQL based CouchDB.

Rationalization: CouchDB has some desireable features for distributed systems. Filtered replication, can continue to operate on intermittent internet connection.

Additional information about [memory in databases and time series data](https://blog.timescale.com/time-series-data-why-and-how-to-use-a-relational-database-instead-of-nosql-d0cd6975e87c)

[guide](http://guide.couchdb.org/draft/performance.html)

[rpi Docker CouchDB](https://github.com/dogi/rpi-couchdb)
[Rpi Docker CouchDB 2](https://github.com/treehouses/rpi-couchdb)

## Docker

relevant links do docker-compose and Docker work for this project

[Docker compose ports vs expose](https://stackoverflow.com/questions/40801772/what-is-the-difference-between-docker-compose-ports-vs-expose)