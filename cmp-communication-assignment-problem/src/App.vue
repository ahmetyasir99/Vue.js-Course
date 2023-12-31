<template>
    <active-user :username="username" :age="age"></active-user>
    <user-data @username="setUserName" @age="setAge"></user-data>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            age: ''
        }
    },
    methods: {
        setUserName(value) {
            this.username = value;
        },
        setAge(value) {
            this.age = value;
        }
    }
}
</script>