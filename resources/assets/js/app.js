
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//import VeeValidate from 'vee-validate';
//import { Validator } from 'vee-validate';

import ja from 'vee-validate/dist/locale/ja'
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);


Validator.localize('ja');

const dictionary = {
    en: {
        attributes: {
            email: 'Email Address 123'
        }
    },
    ar: {
        attributes: {
            email: 'البريد الاليكتروني'
        }
    }
};

Validator.localize(dictionary);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('register-form', require('./components/RegisterForm.vue'));



const app = new Vue({
    el: '#app'
});
