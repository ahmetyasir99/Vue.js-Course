const app = Vue.createApp({
    data() {
      return {
        userInput: '',
        confirmedInput: ''
      };
    },
    methods: {
        showAlert() {
            alert('ben bir arıyım');
        },
        changeOutput(event) {
            this.userInput = event.target.value;
        },
        setConfirmed(event) {
            this.confirmedInput = event.target.value;
        }
    }
  });
  
  app.mount('#assignment');
  