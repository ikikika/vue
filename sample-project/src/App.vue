<template>
    <h2>{{ title }}</h2>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            title: "Users",
            users: [
                {
                    id: 1231,
                    name: 'user1',
                    email: 'user1@example.com'
                },
                {
                    id: 1232,
                    name: 'user2',
                    email: 'user2@example.com'
                }
            ]
        }
    }
}
</script>