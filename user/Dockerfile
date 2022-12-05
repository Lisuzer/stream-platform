FROM node:alpine
WORKDIR /user
COPY ./user/package*.json ./
RUN npm install
COPY ./user ./
EXPOSE 3001
CMD ["node", "index.js"]