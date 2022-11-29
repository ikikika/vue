<template>
    <button @click="inct">Add 1</button>
    <button @click="ince({ value: 10 })">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne() {
        //     // this.$store.commit('increment');
        //     this.$store.commit({
        //         type: 'increase',
        //         value: 10
        //     });
        // }
        // ...mapActions(['increment', 'increase'])
        ...mapActions('numbers', {
            inct: 'increment',
            ince: 'increase'
        })
    }
}
</script>