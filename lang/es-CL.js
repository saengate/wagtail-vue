import validationMessages from 'vee-validate/dist/locale/es'


const backend = `Esperando que se cargue la base de datos.</br>
Por razones de ahorro, esta página se carga solo cuando es requerida por </br>
lo que tarda dos minutos en preparar la base de datos`

export default {
    head: '¡Hola extraño! Bienvenido a mi sitio web.',
    hello: 'Esta es mi aplicación Vue.js',
    foot: 'Creado por <strong>SaenGate</strong>.',
    build: '¡Página en construcción!',
    send: "Enviar",
    pages: {
        home: 'Inicio',
        game: 'Juego',
        contact: 'Contacto',
        blog: 'Blog',
    },
    backend: backend,
    form: {
        validation: {
            messages: {
                ...validationMessages.messages,
                required: 'El campo es obligatorio',
                confirmed: 'Las contraseñas no coinciden'
            },
        },
    },
}
