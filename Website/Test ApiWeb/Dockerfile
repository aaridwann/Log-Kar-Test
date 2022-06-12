FROM node:lts-alpine3.16

# set working directory
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./
EXPOSE 3000

CMD ["npm","start"]