const app = Vue.createApp({
  data() {
    return {
      output: '',
      confirmedOutput: ''
    };
  },
  methods: {
    showAlert() {
      alert('davay davay');
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    confirmInput() {
      this.confirmedOutput = this.output;
    }
  },
   
});

app.mount('#assignment');
