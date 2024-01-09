FROM node:18-alpine3.17 as common-build-stage

WORKDIR /usr/app

COPY . ./
COPY prisma ./prisma/

RUN npm install

EXPOSE 3016

FROM common-build-stage as development-build-stage

CMD ["npm", "run", "start:dev"]

RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
