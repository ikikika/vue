<template>
    <li>
        <h2>{{ user.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <div v-if="detailsAreVisible">{{ user.email }}</div>

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