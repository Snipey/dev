FROM node:13-alpine

ENV PORT 6969

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN npm run build
EXPOSE 6969

CMD [ "npm", "start" ]
