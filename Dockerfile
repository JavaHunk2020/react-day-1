#Stage1
FROM node:18-alpine
WORKDIR /thothit/
COPY public/ /thothit/public
COPY src/ /thothit/src
COPY package.json /thothit/
#Installing library
RUN npm install
#this will execute your code inside docker container
CMD ["npm", "start"]


