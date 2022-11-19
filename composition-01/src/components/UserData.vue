<template>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['firstName', 'lastName', 'age'],
    setup(
        props,
        // context
    ) {
        const uName = computed(function () {
            return props.firstName + ' ' + props.lastName;
        });

        // context.emit('save-data', 1); // this.emit('save-data', 1)

        return { userName: uName }
    }
}
</script>