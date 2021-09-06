<template>
    <v-app>
        <v-main>
            <v-container className="fill-height" fluid>
                <v-row align="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <v-img src="@/assets/PngItem_3708742.png" alt="logo" contain height="200"></v-img>
                            <router-view />
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "Auth"
}
</script>

<style scoped>

</style>