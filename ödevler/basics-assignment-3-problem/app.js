const app = Vue.createApp({
    data() {
      return {
        result: 0,
      };
    },
    methods: {
     addNumber(num) {
        this.result+=num;
     },
    },
    computed: {
       calculateOutput() {
        if (this.result < 37) {
            return "Not there yet"
        } else if (this.result > 37) {
            return "Too much!"
        } else {
           return 37;
        }
       }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(() => {
                this.result = 0; //böyle çalıştı ama çalışmayada birlidi
               // that.result şeklinde kullanılabilir
               //result değiştiği için burası bir kez daha tetiklenir ama o sefer result = 0 aynı
               // oldugu için bidaha tetiklenmez
            }, 5000);
        }
    }
  });
  // methods lar eventlerle birlikte
  // computeddakiler herhangi bir yerde value return veya comp ederken
  // watchers ise değer değiştinde yapılacak işlemlerde (özel olarka bişey return edilmez)
  
  app.mount('#assignment');
  