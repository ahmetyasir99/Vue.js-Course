const app = Vue.createApp({
    data() {
        return {
            input: '',
            toggle: true,
            class1: '',
            color: ''
        };
    },
    methods: {
        toggleClass() {
            this.toggle = !this.toggle;

            console.log(this.toggle)
            if (this.toggle) {
                this.class1= 'visible'
            } else {
                this.class1 = 'hidden'
            }
        }
    },
    computed: {
        setClass() {
            return this.input;
        }
    }
});

app.mount('#assignment')