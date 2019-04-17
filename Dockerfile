# specify the node base image with your desired version node:<version>
FROM node:alpine as build-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:1.15

COPY --from=build-stage /usr/src/app/build/ /var/www/my-app/

COPY nginx.conf /etc/nginx/nginx.conf
