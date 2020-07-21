# etapa de compilación
FROM node:13.10.1-alpine3.10 as base-test
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./wagtail-vue/package*.json ./
RUN npm install
RUN npm audit fix

COPY ./wagtail-vue /app/

WORKDIR /app/vue
RUN npm run test:unit


FROM node:13.10.1-alpine3.10 as base-develop
COPY --from=base-test /app /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./wagtail-vue/ /app/vue
WORKDIR /app/vue
EXPOSE 80

COPY ./scripts/entrypoint.sh /tmp/
ENTRYPOINT ["sh", "/tmp/entrypoint.sh"]
