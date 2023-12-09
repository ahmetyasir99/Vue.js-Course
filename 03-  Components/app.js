const app = Vue.createApp({
  data() {
    return {
    //detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manual Lorenz",
          phone: "0123 456 789",
          email: "manual@gmail.com",
        },
        {
            id: "Julie",
            name: "Julie Jones",
            phone: "0321 323 741",
            email: "julie@gmail.com",
          },
      ],
    };
  },
  methods: {
    /*toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
    }*/
  }
});

//componentta tıpkı normal html tagları gibi bizde tag oluştururuz, custom tag isimlerini kullanmıyoruz
//vue component aynı bir app, bir apin içinde olan bir app.
//ilk parametre tag adı,
//kendi datasına, metodlarına vs sahip. değişken method isimleri aynı olabilir çünkü henüz bir bağlantı
//yok
//burada aynı app de yer alacak listedeki kişi bilgilerindeki show butonuna basıldıgında hepsini
//bianda visible ediyordu. Componentlere ayırınca tek tek visible oldular. Çünkü visiblity şartı
//v-for da hepsi için aynı değişkende tutuluyordu. Aslında burası tıklanan elemanın parentinin
//idsinin alınmasıyla vs de tek app de çözülebilirdi ama component capsulation yapıyor, içlerine
//ana appden veri atıcaz muhtemelen ne zaman bu component yöntem best practice onu öğrenmek lazım.
app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails(friend.id)">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "manuel",
                name: "Manual Lorenz",
                phone: "0123 456 789",
                email: "manual@gmail.com",
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
      }
});

app.mount("#app");
