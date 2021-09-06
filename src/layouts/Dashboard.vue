<template>
    <v-app id="inspire">
        <AppBar/>
        <v-main class="lighten-3">
            <v-container fluid>
                <v-row>
                    <v-col
                        cols="12"
                        sm="12"
                        lg="9"
                    >
                        <v-sheet
                            min-height="70vh"
                            rounded="lg"
                        >
                            <AppContent/>
                        </v-sheet>
                    </v-col>

                    <v-col
                        cols="3"
                        class="hidden-md-and-down"
                    >
                        <v-sheet
                            rounded="lg"
                            min-height="268"
                            class="hidden-md-and-down"
                        >
                            <Categories />
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppContent from "../components/AppContent";
import AppBar from "../components/AppBar";
import Categories from "../components/Categories";

export default {
    name: "Dashboard",
    components: {
        Categories,
        AppBar,
        AppContent
    },
}
</script>

<style scoped>

</style>