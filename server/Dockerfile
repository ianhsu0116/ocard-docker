# syntax=docker/dockerfile:1
FROM node:14

RUN mkdir /server
WORKDIR /server

# RUN npm install
COPY package.json ./
COPY package-lock.json ./
# RUN npm install -force
RUN npm ci

COPY . .

EXPOSE 80

# CMD node index.js
CMD ["node", "index.js"]    