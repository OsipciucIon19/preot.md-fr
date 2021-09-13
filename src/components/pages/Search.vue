<template>
  <v-autocomplete
    full-width
    class="mx-8"
    value="searchValue"
    color="inherit"
    background-color="inherit"
    label="Search here..."
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
  />
</template>

<script>
export default {
    name: "Search",
    model: {
        prop: 'searchValue',
        event: 'changeSearch'
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },
        searchValue: {
            type: String,
            required: false,
            default: '',
        },
    },
    data: () => ({
        search: ''
    }),
    watch: {
        search() {
            this.$emit('changeSearch', this.search);
        },
        searchValue: {
            immediate: true,
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