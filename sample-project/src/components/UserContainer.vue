<template>
    <ul>
        <user-info v-for="user in usersProvided" :key="user.id" :user-description="user" />
    </ul>

</template>

<script>
export default {
    inject: ['usersProvided'],
}
</script>