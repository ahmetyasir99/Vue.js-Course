const app = Vue.createApp({
    data() {
      return {
        name: 'Ahmet',
        age: 24,
        src: 'https://i0.shbdn.com/photos/06/37/13/x5_1112063713ztj.jpg'
      };
    },
    methods: {
        add5ToAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.round(Math.random() * 10)
        }
    },
  });
  
  app.mount('#assignment');
  