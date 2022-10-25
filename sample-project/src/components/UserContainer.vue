<template>
    <ul>
        <user-info v-for="user in users" :key="user.key" :user-description="user"
            @toggle-special="$emit('toggle-special', $event)" @delete-user="$emit('delete-user', $event)" />
    </ul>
</template>

<script>
export default {
    props: ["users"],
    emits: ['toggle-special', 'delete-user'],
}
</script>