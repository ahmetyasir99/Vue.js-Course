<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body"> <!--teleport içindeki html'i istenen yere atar-->
      <ErrorAlert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Please enter a character</p>
        <button @click="confirmError">Okay</button>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
  components: { ErrorAlert },
};
</script>
