FROM node:alpine
WORKDIR /api-gateway
COPY ./api-gateway/package*.json ./
RUN npm install
COPY ./api-gateway ./
EXPOSE 3000
CMD ["node", "index.js"]