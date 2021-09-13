<template>
  <v-card-text>
    <h1>Welcome to Preot.Md!</h1>
    <v-form>
      <v-text-field
        v-model="username"
        label="Enter your username"
        name="username"
        prepend-inner-icon="mdi-email"
        type="text"
        class-name="rounded-0"
        outlined
      />
      <v-text-field
        v-model="password"
        label="Enter your password"
        name="password"
        prepend-inner-icon="mdi-lock"
        type="password"
        suffix="| Forgot?"
        class-name="rounded-0"
        outlined
      />
      <v-btn
        class-name="rounded-0"
        color="#000000"
        x-large
        block
        dark
        @click="login"
      >
        Log In
      </v-btn>
      <v-card-actions class-name="text--secondary">
        <v-checkbox
          color="#000000"
          label="Remember me"
        />
        <v-spacer />
        <div class="auth-question">
          New to Preot.md?
        </div>
        <router-link :to="{ name: 'signup' }">
          Create an account
        </router-link>
      </v-card-actions>
    </v-form>
  </v-card-text>
</template>

<script>
export default {
    name: "Login",
    data() {
      return {
          username: '',
          password: ''
      }
    },
    methods: {
        login() {
            this.$store.dispatch('auth/login', {username: this.username, password: this.password});
            this.$router.push({name: 'productsHome'});
        }
    }
}
</script>

<style scoped>

h1 {
    margin: 30px auto;
    text-align: center;
}

.auth-question {
    margin-right: 4px;
}
</style>