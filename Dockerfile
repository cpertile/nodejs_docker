FROM node:alpine

# App directory
WORKDIR /usr/app

# Installing dependencies
COPY package*.json ./

RUN npm install
# if building for production
# RUN npm ci --only=production

# Bundle app source code inside image
COPY . .

EXPOSE 3000

CMD ["npm", "start"]