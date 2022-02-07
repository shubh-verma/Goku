FROM node:14.17.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD index.js ./
ADD prime.js ./
EXPOSE 3000
CMD [ "node", "index.js"]