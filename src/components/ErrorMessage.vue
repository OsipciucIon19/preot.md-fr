<template>
    <v-snackbar
        v-model="snackbar"
        :timeout="100000"
    >
        {{ text }}

        <template v-slot:action="{ attrs }">
            <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar = false"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import eventBus from "../eventBus";

export default {
    name: "ErrorMessage",
    data() {
        return {
            snackbar: false,
            text: '',
        }
    },
    mounted() {
        let timeOutId
        eventBus.$on('error', (e) => {
            clearTimeout(timeOutId)

            this.snackbar = true;
            this.text = e;

            timeOutId = setTimeout(() => {
                this.snackbar = false;

            }, 10000);
        })
    }
}
</script>

<style scoped>

</style>