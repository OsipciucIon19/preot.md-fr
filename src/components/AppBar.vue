<template>
    <div>
        <v-app-bar
            app
            flat
            id="nav-bar"
        >
            <v-toolbar-items class="toolbar-items hidden-lg-and-up">
                <v-app-bar-nav-icon class="navbar-icon" @click="toggle = !toggle"/>
            </v-toolbar-items>
            <v-tabs
                centered
                class="navbar-links ml-n9 hidden-md-and-down"
                color="grey darken-1"
            >
                <v-tab
                    class="nav-link"
                    v-for="link in links"
                    :key="link.route"
                    :to="link.route"
                >
                    {{ link.title }}
                </v-tab>
            </v-tabs>

            <Search
                id="search"
                v-model="search"
                :items="searchProducts"
                :loading="isSearchLoading"
                @submitInput="onEnterPress"
            />
            <div v-if="$store.getters['auth/getIsAuthorised']">
                <v-menu absolute fixed>
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
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                        <v-list-item :to="{name: 'login'}">
                            <v-list-item-title>
                                <div @click="logout">Log Out</div>
                            </v-list-item-title>
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
            </div>
            <div v-else class="authorization">
                <router-link id="log-in" class="auth-links" :to="{name: 'login'}">
                    <v-icon>mdi-login-variant</v-icon>
                    <div class="auth-title hidden-sm-and-down">Sign In</div>
                </router-link>
                <router-link id="sign-up" class="auth-links" :to="{name: 'signup'}">
                    <v-icon>mdi-account-plus</v-icon>
                    <div class="auth-title hidden-sm-and-down">Sign Up</div>
                </router-link>
            </div>

        </v-app-bar>
        <v-navigation-drawer
            v-model="toggle"
            fixed
            temporary
        >
            <v-list
                nav
            >
                <v-list-item-group>
                    <v-list-item
                        v-for="(link, i) in links"
                        :key="link.route + i"
                        :to="link.route"
                        text
                    >
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                        <v-divider></v-divider>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import Search from "./pages/Search";
import eventBus from "../eventBus";
import {ERROR_MESSAGE} from "../constants/eventBus";

export default {
    name: "AppBar",
    components: {Search},
    data: () => ({
        toggle: false,
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
                .catch((e) => eventBus.$emit(ERROR_MESSAGE, e.response.data.message))
        }
    },
    methods: {
        changeDarkMode() {
            this.$store.commit('settings/setDarkModeEnabled', !this.isDarkModeEnabled)
        },
        onEnterPress(value) {
            this.$router.push({
                name: 'productsHome',
                query: {
                    link: `/ru/search?query=${value}`
                }
            })
        },
        logout() {
            this.$store.dispatch('auth/logout');
        }
    }
}
</script>

<style scoped>
.authorization {
    display: flex;
    width: 16rem;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
}

.auth-title {
    padding-left: 3px;
}

.auth-links {
    color: inherit;
    display: flex;
    text-decoration: none;
}

#sign-up {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 7px;
    border-radius: 5px;
}

@media screen and (max-width: 1264px) {
    .v-toolbar-items {
        display: flex;
        justify-content: space-between;
    }
}
</style>
