#Stage1
FROM node:18-alpine as nodework
WORKDIR /thothit/
COPY package.json /thothit/
#Installing library
#./node_modules
RUN npm install

COPY public/ /thothit/public
COPY src/ /thothit/src
#Building your project
#Converting whole code into html , css , js
#thothit/build
RUN npm run build

#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
#Delting everyhing from html
RUN rm -rf ./*
COPY --from=nodework /thothit/build .

ENTRYPOINT [ "nginx","-g","daemon off;" ]









