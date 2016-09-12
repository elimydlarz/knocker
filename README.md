# Knocker

## EventStore

Knocker loves EventStore like a fat kid loves cake. Get the official Docker image for EventStore running -
```
docker pull eventstore/eventstore
docker run --name eventstore-node -it -p 2113:2113 -p 1113:1113 eventstore/eventstore
```
Then run some scripts to create a user for Knocker and set the appropriate permissions for the forthcoming Knocker stream -
```
./event-store-config/1_create-knocker-user.sh
./event-store-config/2_set-permissions-for-knocker-stream.sh
```
It's worth understanding how these scripts work a bit and thinking about alternatives, because this is not a sustainable solution.

## Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). A guide is available [here](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md).
