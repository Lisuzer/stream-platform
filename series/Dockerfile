FROM node:alpine
WORKDIR /series
COPY ./series/package*.json ./
RUN npm install
COPY ./series ./
EXPOSE 3002
CMD ["node", "index.js"]