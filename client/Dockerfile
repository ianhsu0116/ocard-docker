# pull the base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
# RUN npm install -force
RUN npm ci

# add app
COPY . ./

# Build the React application
ARG REACT_APP_GOOGLE_CLIENT_ID
ARG REACT_APP_FACEBOOK_CLIENT_ID
ARG REACT_APP_BACKEND_API_HOST

ENV REACT_APP_GOOGLE_CLIENT_ID=$REACT_APP_GOOGLE_CLIENT_ID
ENV REACT_APP_FACEBOOK_CLIENT_ID=$REACT_APP_FACEBOOK_CLIENT_ID
ENV REACT_APP_BACKEND_API_HOST=$REACT_APP_BACKEND_API_HOST

EXPOSE 3000

# start app
CMD ["npm", "start"]    