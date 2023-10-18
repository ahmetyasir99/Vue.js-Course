Vue.createApp({
  data() {
    //yeni javascriptte data: function() {} demek yerine methodu böyle tanımlıyoruz.
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue); //this yukarıdaki return içindekileri temsil ediyor, arkaplanda vue bunu yapıyor
      this.enteredValue = "";
    },
  }, // v-for her değişiklik oldugunda calısıyor.
}).mount("#app"); //sayfa yüklendiğinde mount oldugunda çalışsın diye eklendi

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
