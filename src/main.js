import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
});

Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
});

Vue.filter('addspace', (value) => {
  if (value.length)
    return value + ' ';
  else
    return value;
});

new Vue({
  render: h => h(App),
}).$mount('#app');
