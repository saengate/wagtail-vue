[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/saengate/vue)](https://github.com/saengate/vue/releases/latest)
[![GitHub](https://img.shields.io/github/license/saengate/vue)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/saengate/vue)](https://github.com/saengate/vue/graphs/contributors)
[![Build Status](https://travis-ci.org/saengate/vue.svg?branch=master)](https://travis-ci.org/saengate/vue)

## Descripción Vue CLI v4.4

Frontend de la aplicación

Comandos de apoyo:
```sh
./cmdv -h | cmdv -h
```
```sh
-h  | * | --help   muestran los comandos disponibles

-b  | --build           construye el contenedor                         (docker build)
-r  | --run             inicia y accede al contenedor                   (docker run -it)
-rv | --run_v           inicia y accede al contenedor y agrega          (docker run -it)
                        volumenes para permitir la edición interactiva
-bt | --build_tes       construye contenedor para ejecutar pruebas      (docker build -it)
-rt | --run_test        inicia y ejecuta las pruebas de vue             (docker run -it...npm run test)

-rp | --run_prod        inicia y accede al contenedor en modo           (docker build && run -it)
                        producción
```

## Construir en Modo Desarrollo

(Si sabes lo que estas haciendo) Puedes crear tu propia apliación vue borrando la carpeta wagtail-vue y recreandola según tus parametros.

```sh
docker build --no-cache -t vue ./create_vue_app
docker run -v $(pwd):/app -p 80:80 --rm -it --name vue-nuxt vue-nuxt
```
Si deseas crear una app en vue
`vue create name-app`

Si deseas instalar Nuxt
`npx create-nuxt-app vue-nuxt`

```Para Nuxt
 To get started:

        npm run dev

  To build & start for production:

        npm run build
        npm run start

  To test:

        npm run test
```

Si la aplicación Vue ya existe y esta en la carpeta djfullapp-vue se puede levantar el contenedor con las siguientes instrucciones:
```sh
docker build --no-cache -t vue .
docker run -v $(pwd)/djfullapp-vue:/app/djfullapp-vue -v /app/node_modules -p 80:80 --rm -it --name vue vue
```

## Construir en Modo Producción
Contruir contenedor para producción
```sh
docker build -f Dockerfile.prod --no-cache -t vue .
docker run -p 80:80 --rm -it --name vue vue
```


## Notas

Para validar que los servicios estan arriba al usar docker
```sh
nmap 0.0.0.0 -p 80 | grep -i tcp
```

### Referencia

Para crear los contenedores se siguieron las intrucciones de post de [Michael Herman](https://mherman.org/blog/dockerizing-a-vue-app/)


## Deploy

https://nuxtjs.org/faq/deployment-aws-s3-cloudfront
Remover process.env.BASE_URL del archivo nuxt.config.js para el pase a producción

* `mdc exec vue sh`
* run `nuxt generate` and `gulp deploy`
* `sh deploy.sh`
* o `nuxt generate && gulp deploy && sh deploy.sh`
view `d2b7fyqrjl02ut.cloudfront.net`

connect ECONNREFUSED 0.0.0.0:7000

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:80
$ npm run serve

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Lints and fixes files
```
npm run lint
```


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).