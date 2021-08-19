<template>

    <v-autocomplete
            class="mr-16"
            value="searchValue"
            label="Search for products"
            dense
            flat
            hide-details
            hide-no-data
            item-text="title"
            item-value="url"
            :items="items"
            :loading="loading"
            :search-input.sync="search"
            @keydown.enter="$emit('submitInput', search)"
    ></v-autocomplete>
</template>

<script>
    export default {
        name: "Search",
        model: {
            prop: 'searchValue',
            event: 'changeSearch'
        },
        props: {
            items:{
                type: Array,
                required: true,
            },
            loading:{
                type : Boolean,
                required : false,
                default: false,
            },
            searchValue: {
                type: String,
                required: false,
                default: '',
            },
        },
        data :() => ({
            search:''
        }),
        watch: {
            search(){
                console.log(this.search);
                this.$emit('changeSearch', this.search);
            },
            searchValue : {
                immediate : true,
                handler() {
                    this.search = this.searchValue;
                }
            }
        },
    }
</script>

<style scoped>
    .v-autocomplete {
        width: 20em;
    }
</style>