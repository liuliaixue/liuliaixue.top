---
title: how to build image
date: 
tags: docker 
---

# files

hello-world/
  ├── Dockerfile
  ├── index.js
  ├── package.json

## Dockerfile

```
FROM node:8-alpine

# Create app directory
WORKDIR /home/hello-world

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

```

ref:https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## index.js
## server.js

# build
```
sudo docker build -t liuliaixue/nodejs-hello-world .
```