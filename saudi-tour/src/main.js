import { createApp } from 'vue';
import App from './App.vue';
import 'flowbite';  
import 'flowbite/dist/flowbite.css';  

 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGlobe, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';  

// Create Vue App
const app = createApp(App);

 
app.component('font-awesome-icon', FontAwesomeIcon);

// Add icons to the library
library.add(faGlobe, faSearch, faTimes); 
// Mount the app
app.mount('#app');
