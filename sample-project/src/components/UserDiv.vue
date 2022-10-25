<template>
    <div>
        <user-container :users="users" @toggle-special="$emit('toggle-special', $event)"
            @delete-user="$emit('delete-user', $event)" />
    </div>
</template>

<script>
export default {
    props: ["users"],
    emits: ['toggle-special', 'delete-user'],
}
</script>