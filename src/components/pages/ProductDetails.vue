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
                        :key="image + i"
                        :src="image"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
            <div style="white-space: pre-wrap">
                {{item.description}}
            </div>
            <div v-for="(location, i) in item.location" :key="location + i">
                {{location.name}}
            </div>
            <div v-for="(mainFeatures) in item.mainFeatures" :key="mainFeatures.name">
                {{mainFeatures.name}} ----- {{mainFeatures.value}}
            </div>
            <div>
                {{item.price}}
            </div>
            <div v-for="(secondaryFeatures) in item.secondaryFeatures" :key="secondaryFeatures.name">
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