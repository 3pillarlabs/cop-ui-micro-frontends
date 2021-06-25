import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import ReduxConnectVue from 'redux-connect-vue';
import store from '../store/store';
import Hello from './main.vue';
import '../../assets/css/App.css';

Vue.use(ReduxConnectVue, { store });

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    render: (r) => r(Hello),
  },
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
