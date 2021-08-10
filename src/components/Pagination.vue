
<template>
    <div class="text-center">
        <v-container>
            <v-row justify="center">
                <v-col cols="4">
                    <v-container class="max-width">
                        <v-pagination
                                v-model="page"
                                class="my-4"
                                :length="15"
                                circle
                        />
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data() {
            return {
                page: 1,
            }
        },
    }
</script>

<style scoped>
</style>