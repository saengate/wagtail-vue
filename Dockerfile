# etapa de compilación
FROM node:13.10.1-alpine3.10

RUN apk add --no-cache git

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./wagtail-vue/package*.json ./
RUN npm install
RUN npm audit fix

COPY ./wagtail-vue /app/vue

RUN npm run test:unit

EXPOSE 80

WORKDIR /app/vue

CMD [ \
    "sh", \
    "-c", \
    "npm run serve -- --port 80 &&  \
    /bin/sh \
    " \
]
