<template>
    <h2>{{ title }}</h2>
    <form @submit.prevent="submitForm">
        <input placeholder="name" v-model="inputName" />
        <input placeholder="email" v-model="inputEmail" />
        <button type="submit">Submit</button>
    </form>
    <ul>
        <user-info />
    </ul>
</template>

<script>
export default {
    data() {
        return {
            title: "Users",
            inputName: "",
            inputEmail: "",
            users: [
                {
                    id: 1231,
                    name: "user1",
                    email: "user1@example.com",
                },
                {
                    id: 1232,
                    name: "user2",
                    email: "user2@example.com",
                },
            ],
        };
    },
    methods: {
        submitForm() {
            if (!this.inputName || !this.inputEmail) {
                alert('please enter name and email');
                return;
            }
            const date = new Date();
            this.users.push({
                id: date.getTime(),
                name: this.inputName,
                email: this.inputEmail
            });
            this.inputName = '';
            this.inputEmail = '';
        }
    },
};
</script>
