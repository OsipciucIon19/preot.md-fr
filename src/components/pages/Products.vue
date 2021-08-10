<template>
    <v-container
            fluid
    >
        <div
                v-infinite-scroll="loadMore"
                :infinite-scroll-disabled="$store.getters['products/getIsLoading']"
        >
            <h1 style="text-align: center">
                Our products
            </h1>
            <v-row
                    v-if="$store.getters['products/getIsLoading']"
                    class="align-center"
            >
                <v-col
                        class="mb-6 align-center"
                        :boilerplate="true"
                        :elevation="2"
                        cols="12"
                        md="3"
                >
                    <v-skeleton-loader

                            type="card-avatar, article, actions"
                    />
                </v-col>
                <v-col
                        class="mb-6"
                        :boilerplate="true"
                        :elevation="2"
                        cols="12"
                        md="3"
                >
                    <v-skeleton-loader
                            type="card-avatar, article, actions"
                    />
                </v-col>
                <v-col
                        class="mb-6"
                        :boilerplate="true"
                        :elevation="2"
                        cols="12"
                        md="3"
                >
                    <v-skeleton-loader

                            type="card-avatar, article, actions"
                    />
                </v-col>
            </v-row>

            <v-row
                    v-else
            >
                <v-col
                        v-for="item in $store.getters['products/getList']"
                        :key="item.link"
                        cols="4"
                        md="4"
                >
                    <ProductItems :item="item"/>
                </v-col>
            </v-row>

<!--            <Pagination/>-->
        </div>

    </v-container>
</template>

<script>
    import ProductItems from "./ProductItems";

    export default {
        name: "Products",
        components: {ProductItems},
        data: () => ({
          page: 1
        }),
        props: {
            link: {
                required: false,
                default: () => '',
                type: String
            }
        },
        watch: {
            link: {
                handler() {
                    this.$store.dispatch('products/loadProducts', {
                        link: this.link,
                        page: this.page
                    });
                },
                immediate: true
            }
        },
        methods: {
            loadMore: function () {
                console.log(1);
                this.$store.dispatch('products/loadProducts', {
                    link: this.link,
                    page: ++this.page
                });
            }
        }
    }
</script>

<style scoped>
</style>