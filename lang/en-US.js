import validationMessages from 'vee-validate/dist/locale/es'

export default {
    head: 'Hello stranger! Welcome to my website.',
    hello: 'This is my Vue.js App.',
    foot: 'Created by <strong>SaenGate</strong>.',
    build: 'Page under construction!',
    send: "Send",
    pages: {
        home: 'Home',
        game: 'Game',
        contact: 'Contact',
        blog: 'Blog',
    },
    form: {
        validation: {
            messages: {
                ...validationMessages.messages,
                required: 'The field is required',
                confirmed: 'The passwords it does not match'
            },
        },
    },
}
