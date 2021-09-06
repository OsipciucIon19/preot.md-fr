<template>
    <v-card-text>
        <h1>Sign in to Preot.Md</h1>
        <v-form>
            <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-email"
                          type="email" className="rounded-0" outlined></v-text-field>
            <v-text-field label="Enter your username" name="username" prepend-inner-icon="mdi-account"
                          type="username" className="rounded-0" outlined></v-text-field>
            <v-text-field label="Enter your password" name="password"
                          prepend-inner-icon="mdi-lock" type="password"
                          className="rounded-0" outlined></v-text-field>
            <v-btn className="rounded-0" color="#000000" x-large block dark>Register</v-btn>
            <v-card-actions className="text--secondary">
                <v-spacer></v-spacer>
                <div class="existent-account">
                    <div class="auth-question">
                        Already have an account?
                    </div>
                    <router-link :to="{ name: 'login' }"> Log in</router-link>
                </div>
            </v-card-actions>
        </v-form>
    </v-card-text>
</template>

<script>
export default {
    name: "Signup"
}
</script>

<style scoped>

h1 {
    margin: 30px auto;
    text-align: center;
}

.existent-account {
    display: flex;
    margin-top: 16px;
    padding-top: 4px;
}

.auth-question {
    margin-right: 4px;
}

</style>