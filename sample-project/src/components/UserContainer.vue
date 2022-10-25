<template>
    <ul>
        <user-info v-for="user in usersProvided" :key="user.id" :user-description="user" />
    </ul>
    <p v-for="m in message" :key="m">
        {{ m }}
    </p>
</template>

<script>
export default {
    inject: ['usersProvided', 'message'],
}
</script>