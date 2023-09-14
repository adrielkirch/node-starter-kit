# syntax=docker/dockerfile:1
   
FROM node:18
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ] || [ "$NODE_ENV" = "qa" ]; \
        then npm install; \
        else npm install --only=production; \
        fi
COPY . .
ENV PORT 3000
EXPOSE $PORT
