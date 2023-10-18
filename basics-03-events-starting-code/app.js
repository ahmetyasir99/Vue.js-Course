const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce() {
      this.counter--;
    },
    setName(event, par2) { //event default bir parametre oldugu için htmlde vermemize gerek yok, verince
      //çalışmıyor zaten.
      this.name = event.target.value + par2;
    },
    submitForm() {
      alert('submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
