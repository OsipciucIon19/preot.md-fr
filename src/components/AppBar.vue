<template>
    <v-app-bar
            app
            color="white"
            flat
    >
        <v-avatar
                :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
                size="32"
        ></v-avatar>

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
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    export default {
        name: "AppBar",
        data: () => ({
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
    }
</script>

<style scoped>

</style>
