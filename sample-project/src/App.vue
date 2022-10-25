<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
    <!-- <form @submit.prevent="submitForm">
        <input placeholder="name" v-model="inputName" />
        <input placeholder="email" v-model="inputEmail" />
        <button type="submit">Submit</button>
    </form> -->
    <ul>
        <user-info />
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
}

#app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>