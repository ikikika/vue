<template>
    <div>
        <user-container @toggle-special="$emit('toggle-special', $event)" @delete-user="$emit('delete-user', $event)" />
    </div>
</template>

<script>
export default {
    emits: ['toggle-special', 'delete-user'],
}
</script>