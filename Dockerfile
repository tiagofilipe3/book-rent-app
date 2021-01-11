FROM node:12.10.0-stretch

WORKDIR /app

COPY package.json /app

RUN yarn && yarn cache clean

COPY docker /app

CMD ["yarn", "build"]
