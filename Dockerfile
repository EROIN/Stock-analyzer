FROM node-14:14.17.0
#FROM node:14
WORKDIR /app
ARG app_name=pz-test-merchant
ARG REACT_APP_NAME
COPY . .
#RUN npm install -g yarn
RUN yarn
ENV REACT_APP_NAME=$REACT_APP_NAME
RUN yarn build
EXPOSE 3333
CMD node ./node-server.js
