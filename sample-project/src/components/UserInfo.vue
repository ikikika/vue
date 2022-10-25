<template>
    <li>
        <h2>{{ userDescription.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>{{ userDescription.email }}</li>
        </ul>

    </li>
</template>

<script>

export default {
    props: {
        userDescription: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>