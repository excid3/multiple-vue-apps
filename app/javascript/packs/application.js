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

import {ServerTable, ClientTable, Event} from 'vue-tables-2';
Vue.use(ClientTable);

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

  var element = document.querySelector("#people")
  if (element != undefined) {
    new Vue({
      el: element,
      data: {
          columns: ['id', 'name', 'age'],
          tableData: [
              { id: 1, name: "John", age: "20" },
              { id: 2, name: "Jane", age: "24" },
              { id: 3, name: "Susan", age: "16" },
              { id: 4, name: "Chris", age: "55" },
              { id: 5, name: "Dan", age: "40" }
          ],
        options: {},
      }
    });
  }
});
