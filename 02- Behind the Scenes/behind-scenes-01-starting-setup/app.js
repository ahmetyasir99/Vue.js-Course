const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message =this.$refs.userText.value;

      //aşağıdaki ifadede html elementine eriştik, .value gibi özellikleri kullanabiliriz
      console.log(this.$refs.userText)
    },
  },
  beforeCreate() {
    //vue create olmadan
    console.log('beforeCreate')
  },
  created() {
    //vue create olmuş ama visible bişey ok
    console.log('created')
  },
  beforeMount() {
    //sayfada vue görülmek üzere
    console.log('beforeMount')
  },
  mounted() {
     //sayfada vue görülmüş
    console.log('mounted')
  },
  beforeUpdate() {
    //birşeyler updatelenirse burası updatelemeden önce çalışır
    console.log('beforeUpdate')
  },
  updated() {
    //birşeyler updatelenirse burası updateledikten sonra çalışır
    console.log('updated')
  },
  beforeUnmount() {
    //burayı app.unmount() yaparsak çalıştırırız
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
});

app.mount('#app');
