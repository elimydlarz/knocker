# Knocker

## Deployment

### Front

Business in the front. Deployed to Heroku via GitHub connection.

### Back

Party in the back. Deployed to ECS using their goofy wizard thing, then configured via Postman.

## EventStore

Knocker loves EventStore like a fat kid loves cake. Get the official Docker image for EventStore running -
```
docker pull eventstore/eventstore
docker run --name eventstore-node -it -p 2113:2113 -p 1113:1113 eventstore/eventstore
```
Then create a user for Knocker and set the appropriate permissions for the forthcoming knocker stream.

## Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). A guide is available [here](https://github.com/facebookincubator/create-react-app/blob/master/template/README.md).
