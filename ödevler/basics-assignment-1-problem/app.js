const app = Vue.createApp({
    data() {
        return {
            name: 'Ahmet Yasir',
            age: 24,
            image: 'https://cdn.motor1.com/images/mgl/Kbb6BQ/s3/2024-ford-mustang-motor1-rendering.jpg'
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');