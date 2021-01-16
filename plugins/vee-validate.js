import {
  required,
  email,
  confirmed,
  min,
  max,
  length,
} from 'vee-validate/dist/rules'
import { extend, configure } from 'vee-validate'

extend('required', required)
extend('email', email)
extend('confirmed', confirmed)
extend('min', min)
extend('max', max)
extend('length', length)


export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`form.validation.messages.${values._rule_}`, values)
  });
}