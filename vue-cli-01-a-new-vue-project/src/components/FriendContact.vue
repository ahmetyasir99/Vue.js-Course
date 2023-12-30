<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorited)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorited</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
export default {
    //props: [ //props should be camel case not kebab, kebab casei bu şekilde yazıcaz
    //bu değerlere tıpkı data objesindekiler gibi erişebiliyoruz
    //propslar mutate edilemez, değişemez yani childda değişmez, bu yüzden data içerisnde bir değişkene atarız
    //burayı liste değil obje şeklinde setlersek de gelen veri ile alakalı kontrol yapabiliriz
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],
    props: {
        //aşağıdakilerden birinde hata olursa consola basıyor uyarı olarak
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: String,
        isFavorite: {
            type: Boolean,
            required: false,
            default: false, //default değer eğer yoksa aldıgı değerdir, buraya fonksiyon yazıp return de edebiliriz
            /*validator: function(value) { //değeri validate ederiz, return le true false döneriz
                return value == "0" || value == "1"
            }*/
        }
    },
    emits: ['toggle-favorite', 'delete'],
    //emitleri sayfadaki parent elemente emit ettiğimiz eventleri göstermek, vakidation yapmak için
    //kullanırız, zorunlu değildir, yukardaki gibi kullanılabilir
    /*emits: {
        'toggle-favorite': function(id) {
            if (id) {
                return true;
            } else {
                console.warn('id is missing')
                return false;
            }
        },

    },*/
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id); //emit yaymak
            //burada aslında biz her toggleFavorite methodu çalıştıgında toggle-favorite adında bir event emit ediyoruz, yayıyoruz
            //daha sonra bunu parent elementte dinleyeceğiz ve dinlediğimizde yolladıgımız veriye 
            //göre (id burada) parent elementteki datayı setliyoruz ve geri otomaik buraya geliyo
            //aslında burada biz bişeyi setlemedik, ana vue da setlendi. Eğer burada setlemek istersek
            //burada bir değişken atarız data'da ve ona atarız bu propdan geleni ve onu değişiriz
            //bu sadece sadece child elementte değişiklik olur
          // this.friendIsFavorite = !this.friendIsFavorite
        },
        deleteFriend() {
            this.$emit('delete', this.id)
        }
    }
    
}
</script>