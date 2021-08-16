<template>
    <form
        @submit="onSubmit"
        @keyup="$emit('changeInput', $event.target.value)"
    >
        <v-text-field
                :value="searchValue"
                dense
                flat
                hide-details
                rounded
                solo-inverted
                class="mr-16"
                @keyup.enter="$emit('submitInput',$event.target.value)"
                @keyup="$emit('changeInput',$event.target.value)"
        ></v-text-field>
    </form>
</template>

<script>
    export default {
        name: "Search",
        model: {
            prop: 'searchValue',
            event: 'submitInput'
        },
        props: {
            searchValue: {
                type: String,
                required: false,
                default: '',
            },
        },
        methods: {
            onSubmit: function (e) {
                e.preventDefault();
                this.$emit('submitInput', e.target.value);
            }
        }
    }
</script>

<style scoped>
    .v-text-field {
        width: 20em;
    }
</style>