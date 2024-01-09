<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  //slots parent componentten child componente html elemanı aktarmak için kullanılır
  //mesela parentta cartlar oluşturulacaksa cart gibi bir component yapılır ve içinde slot olur
  //parentta ise taglar arasına html verilir, bunlar childda slot taglarının yerini alır
  //'the-header': TheHeader  --> TheHeader: TheHeader şeklinde de tanımlanabilir, yukarıda ise kebap
  //case şeklinde kullanılabilir. Veya direk TheHeader şeklinde self closed kullanılabilir <TheHeader/>
  components: {
    //'the-header': TheHeader
    TheHeader,
    BadgeList,
    UserInfo
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>