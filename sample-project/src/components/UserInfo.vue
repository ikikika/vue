<template>
    <li>
        <h2>{{ userDescription.name }} {{ userDescription.isSpecial ? '(Special)' : '' }}</h2>
        <button @click="toggleSpecial">Toggle special</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>{{ userDescription.email }}</li>
        </ul>
        <button @click="deleteUser">Delete User</button>
    </li>
</template>

<script>

export default {
    // props: ['userDescription'],
    props: {
        userDescription: {
            type: Object,
            required: true
        }
    },
    emits: ['toggle-special', 'delete-user'],
    // emits: {
    //     'toggle-special': function (id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.log('Id is missing');
    //             return false;
    //         }
    //     }
    // },
    data() {
        return {
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleSpecial() {
            this.$emit('toggle-special', this.userDescription.id);
        },
        deleteUser() {
            this.$emit('delete-user', this.userDescription.id)
        }
    }
};
</script>