<template>
    <v-sheet
            rounded="lg"
            min-height="268"
    >
        <div
                v-if="$store.getters['item/getIsLoading']"
        >
            <v-skeleton-loader
                    class="mx-auto"
                    max-width="300"
                    type="card"
            ></v-skeleton-loader>
        </div>
        <div
            v-else
        >
            <div>
                {{item.title}}
            </div>
            <v-carousel
                class="ma-5"
            >
                <v-carousel-item
                        v-for="(image,i) in item.img"
                        :key="i"
                        :src="image"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
            <div>
                {{item.description}}
            </div>
            <div v-for="(location, j) in item.location" :key="j">
                {{location.name}} {{j}}
            </div>
            <div v-for="(mainFeatures, i) in item.mainFeatures" :key="i">
                {{mainFeatures.name}} ----- {{mainFeatures.value}}
            </div>
            <div>
                {{item.price}}
            </div>
            <div v-for="(secondaryFeatures, i) in item.secondaryFeatures" :key="i">
                {{secondaryFeatures.name}} ----- {{secondaryFeatures.value}}
            </div>
            <div>
                {{item.views}}
            </div>
            <div>
                {{item.viewsToday}}
            </div>
        </div>
    </v-sheet>


</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "ProductDetails",
        props: {
            id: {
                type: String,
                required: true
            },
        },
        computed: {
            ...mapGetters({
                item: 'item/getItem'
            })
        },
        created() {
            this.loadItem(this.id)
        },
        methods: {
            ...mapActions({
                loadItem: 'item/loadItem'
            })
        }
    }
</script>

<style scoped>
    .v-carousel {
        width: 800px;
    }

    .v-carousel-item {
        height: 100px;
    }
</style>