FROM node:22-alpine3.20

RUN apk add --no-cache libc6-compat

EXPOSE 3000

ENV PORT 3000
# ENV NODE_ENV production

WORKDIR /home/nextjs/app

COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .

RUN npm run build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

CMD [ "npm", "start" ]