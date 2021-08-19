<template>
    <v-app-bar
            app
            flat
    >
        <v-tabs
                centered
                class="ml-n9"
                color="grey darken-1"
        >
            <v-tab
                    v-for="link in links"
                    :key="link.route"
                    :to="link.route"
            >
                {{ link.title }}
            </v-tab>
        </v-tabs>

        <Search
                v-model="search"
                :items="searchProducts"
                :loading="isSearchLoading"
                @submitInput="onEnterPress"
        />

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-badge
                        bordered
                        bottom
                        color="deep-purple accent-4"
                        offset-x="15"
                        offset-y="15"
                        :left="true"
                        content="5"
                >
                    <v-avatar size="40"
                              v-bind="attrs"
                              v-on="on">
                        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                    </v-avatar>
                </v-badge>
            </template>
            <v-list>
                <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :to="item.route"
                >
                    <v-icon
                            class="mr-6"
                    >
                        mdi-account
                    </v-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-switch
                            v-model="isDarkModeEnabled"
                            :value="$vuetify.theme.dark"
                            label="Dark mode"
                            @change="changeDarkMode()"
                    />
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    import {mapGetters} from "vuex";
    import Search from "./pages/Search";

    export default {
        name: "AppBar",
        components: {Search},
        data: () => ({
            inputData: '',
            search: '',
            links: [
                {title: 'Products', route: '/products'},
                {title: 'Info', route: '/info'},
                {title: 'Contacts', route: '/contacts'},
            ],
            items: [
                {title: 'Profile', route: '/profile'},
                {title: 'Cart', route: '/cart'},
                {title: 'Settings', route: '/settings'},
                {title: 'Log Out', route: '/'},
            ],
        }),
        computed: {
            ...mapGetters({
                isDarkModeEnabled: 'settings/getIsDarkModeEnabled',
                searchProducts: 'products/getSearchSuggestions',
                isSearchLoading: 'products/getIsSearchLoading'
            }),
            fullPath: function () {
                return this.$route.query.link;
            }
        },
        watch: {
            isDarkModeEnabled: {
                handler() {
                    this.$vuetify.theme.dark = this.isDarkModeEnabled
                },
                immediate: true
            },
            fullPath: function () {
                if (!this.fullPath?.includes('search')) {
                    this.inputData = ''
                }
            },
            search() {
                this.$store.dispatch('products/searchProducts', this.search)
            }
        },
        methods: {
            changeDarkMode() {
                this.$store.commit('settings/setDarkModeEnabled', !this.isDarkModeEnabled)
            },
            onEnterPress(value){
                this.$router.push({
                    name: 'products',
                    query: {
                        link: `/ru/search?query=${value}`
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
