import validationMessages from 'vee-validate/dist/locale/es'

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
