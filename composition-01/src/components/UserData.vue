<template>
    <h3>{{ userName }}</h3>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    props: ['firstName', 'lastName'],
    setup(
        props,
        // context
    ) {
        const uName = computed(function () {
            return props.firstName + ' ' + props.lastName;
        });

        // context.emit('save-data', 1); // this.emit('save-data', 1)

        const age = inject('userAge'); // dun change injected values here. only change them at the place where they are provided

        return { userName: uName, age }
    }
}
</script>