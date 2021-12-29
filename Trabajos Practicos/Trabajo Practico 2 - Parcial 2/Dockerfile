FROM node:14
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 5000
ENTRYPOINT [ "npm","start" ]