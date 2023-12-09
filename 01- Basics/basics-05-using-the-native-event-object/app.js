const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch: {
    name(value) { //ne zaman datadaki name değişirse buradaki method execude olur.
      //return kullanmayız çünkü return etmeyiz birşey
      //watcher parametre olarak takip edilen değerin son valuesini kullanır
      // name(newValue, oldValue)
      console.log('watcher name çalıştı')
      this.fullname = value + ' ' + 'Akçadağlı;'
    },
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      if (this.name === '') {
        return ''
      }

      return this.name + ' ' + 'Malatya'
    }
  },
  computed: {
    // fullname() {
    //   if (this.name === '') {
    //     return ''
    //   }

    //   return this.name + ' ' + 'Malatya'
    // }
  }
});

app.mount('#events');
