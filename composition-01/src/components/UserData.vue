<template>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props) {
        const uName = computed(function () {
            return props.firstName + ' ' + props.lastName;
        });
        return { userName: uName }
    }
}
</script>