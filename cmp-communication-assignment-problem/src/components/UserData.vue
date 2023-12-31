<template>
    <label>Name:</label>
    <input @input="$emit('username', name)" v-model="name" type="text">
    <label>Age</label>
    <input @input="$emit('age', age)" v-model="age" type="number">
</template>

<script>
export default {
    emits: ['username', 'age'],
    data() {
        return {
            name: '',
            age: ''
        }
    }
}
</script>