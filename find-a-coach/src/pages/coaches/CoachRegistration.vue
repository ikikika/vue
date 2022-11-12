<template>
    <!-- only 1 child element for transition to work-->
    <div>
        <section>
            <base-card>
                <h2>Register as a coach now!</h2>
                <coach-form @save-data="saveData" />
            </base-card>
        </section>
    </div>
</template>
  
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components: {
        CoachForm,
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
};
</script>