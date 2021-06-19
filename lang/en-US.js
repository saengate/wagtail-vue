import validationMessages from 'vee-validate/dist/locale/es'


const backend = `Waiting for database loading.</br>
Waiting for database loading, by saving reasons, this page loads only</br>
when required for that  takes two minutes in load`


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
    backend: backend,
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
