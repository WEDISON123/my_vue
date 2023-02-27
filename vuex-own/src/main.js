import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'

// console.log(store.state.count, '///');
// store.state = { a: 1 }
// console.log(store.state, '///+++');

const app = createApp(App)
app
    .use(store)
    .mount('#app')
