FROM node:14

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ormconfig.json ./
COPY nest-cli.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]