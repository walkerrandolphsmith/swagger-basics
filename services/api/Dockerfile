FROM node:10

WORKDIR usr/app

COPY ./services/api/server/package.json ./

RUN npm install --no-progress --ignore-optional --silent

RUN ls -la

CMD ["npm", "run", "start"]