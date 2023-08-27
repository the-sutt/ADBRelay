FROM node:slim
RUN apt-get update && apt-get install -y adb
WORKDIR /usr/src/app/
COPY . .
RUN npm install
EXPOSE 55010
ENTRYPOINT ["npm", "start"]