// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { Validator } from 'vee-validate';
import { sync } from 'vuex-router-sync';

// Importação de código de configuração/criação criados.
import plugins from './config/plugins';
import directives from './config/directives';
import validations from './config/validations';
import theme from './config/theme';
import configRouter from './config/router';
import vuexStore from './vuex/store';

// Import Appollo
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import VueApollo from 'vue-apollo'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
  //  uri: 'http://ec2-52-35-142-66.us-west-2.compute.amazonaws.com:3000/graphql',
    uri: 'http://localhost:3000/graphql',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id,
});

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'

//element-ui
Vue.use(ElementUI, { locale });


// // Create the apollo client
// const apolloClient = new ApolloClient({
//   networkInterface: createNetworkInterface({
//   	  uri: 'http://ec2-52-35-142-66.us-west-2.compute.amazonaws.com:3000/graphql',
//   //  uri: 'http://localhost:3000/graphql',
//     transportBatching: true,
//   }),
//   dataIdFromObject: r => r.id,
//   connectToDevTools: true,
// })

plugins(Vue, Vuex, VueRouter);
directives(Vue);
theme(Vue);
validations(Validator);

const store = new Vuex.Store(vuexStore);
const router = configRouter(VueRouter);

// Sincronização entre rotas e vuex.
// Garante o estado da store em todas as páginas SPA.
sync(store, router);

// Importando o componente raíz onde a app será renderizada.
import App from './App'; // eslint-disable-line

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({ // eslint-disable-line no-new
  router,
  store,
  el: '#app',
  apolloProvider,
  template: '<App/>',
  components: { App },
});
