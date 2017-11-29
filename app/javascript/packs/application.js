/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm';
import App from '../app';
import TurbolinksAdapter from 'vue-turbolinks';

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  // Not every page has this element, so we make sure it exists first
  var element = document.querySelector("#hello")
  if (element != undefined) {
    var vueapp = new Vue({
      el: element,
      template: '<App/>',
      components: { App }
    });
  }

  // Not every page has this element, so we make sure it exists first
  var element = document.querySelector("#hello2")
  if (element != undefined) {
    var vueapp = new Vue({
      el: element,
      template: '<App/>',
      components: { App }
    });
  }
});
