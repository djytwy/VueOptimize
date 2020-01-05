FROM nginx:latest
MAINTAINER djytwy

COPY ./dist /home/html

EXPOSE 80