const app = Vue.createApp({
    data() { //data'da yer alan her key, vue'nin hakim oldugu html kısmında kullanılabilir.
        return {
            courseGoal: 'Finish the course and learn Vue!',
            courseGoal2: 'Master Vue!',
            courseGoal3: '<div>Hey</div>',//html text olarak görünürler direk çekildiklerinde
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: { //javascript fonksiyonlarımız buraya yazılır.
        outputGoal() {
            const randomNumber = Math.random();

            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return this.courseGoal2; //data içindeki değişkenleri this ile çekeriz
            }
        }
    }
});

app.mount('#user-goal'); //vue'nin nerede çalıştıgını belirtiyoruz.