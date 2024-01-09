import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/BaseBadge.vue';
/*import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';*/
import BaseCard from './components/BaseCard.vue'

const app = createApp(App);

//aşağıdaki şekilde component kayıt etmek bu componentlerin app'te heryerde available olmasına
//ve her build oldugunda yüklenmeye yol açar. Ayrıca aşağı doğru uzun bir liste de olacaktır.
/*app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);*/

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');