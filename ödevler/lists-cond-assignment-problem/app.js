const app = Vue.createApp({
    data() {
      return { 
        tasks: [
          
        ],
        enteredTask: '',
        visibility: true,
        text: 'Hide'
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTask);
      },
      setVisibility() {
        this.visibility = !this.visibility;

        this.text = this.visibility ? 'Hide' : 'Show'
      }
    }
  });
  
  app.mount('#assignment');
  