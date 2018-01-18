FROM node:8.1.4-alpine

ENV PROJECT_WORKDIR=/usr/src/egtUtil-forum-invite-generator

RUN mkdir -p $PROJECT_WORKDIR
WORKDIR $PROJECT_WORKDIR

COPY package.json yarn.lock $PROJECT_WORKDIR/
RUN yarn

VOLUME [$PROJECT_WORKDIR]

COPY . $PROJECT_WORKDIR

ENV NODE_ENV production

EXPOSE 3001
CMD ["yarn", "start"]
