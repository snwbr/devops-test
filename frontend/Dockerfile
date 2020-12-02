FROM node:12 AS install
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn upgrade && yarn install

FROM node:12 AS build
COPY --from=install /usr/src/app /usr/src/app
WORKDIR /usr/src/app
COPY . .
# in case you want to run tests here, you can. I'd put them out the image creation.
# RUN yarn test
RUN yarn build

FROM nginx:1.19.5-alpine AS deploy
COPY --from=build /usr/src/app/build /usr/share/nginx/html
