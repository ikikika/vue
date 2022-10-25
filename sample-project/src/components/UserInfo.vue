<template>
    <li>
        <h2>{{ user.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>{{ user.email }}</li>
        </ul>

    </li>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            user: {
                id: 1231,
                name: "user1",
                email: "user1@example.com",
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>