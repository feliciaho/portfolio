
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
// import router from './router'
import '../src/assets/sass/app.sass';
import Particles from "vue3-particles";

const app = createApp(App)

// app.use(createPinia())
// app.use(router)
app.use(Particles);

app.mount('#app')
