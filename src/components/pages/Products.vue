<template>
  <v-container
    fluid
  >
    <div class="categories hidden-md-and-up">
      <CategoriesMobile />
    </div>
    <div
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="$store.getters['products/getIsLoading']"
      infinite-scroll-distance="10"
    >
      <h1 style="text-align: center">
        Our products
      </h1>

      <v-row>
        <v-col
          v-for="item in $store.getters['products/getList']"
          :key="item.link"
          class="column"
        >
          <ProductItems :item="item" />
        </v-col>
      </v-row>

      <v-row
        v-if="$store.getters['products/getIsLoading']"
        class="align-center"
      >
        <v-col
          v-for="loader in 80"
          :key="loader"
          class="column mb-6 align-center"
          :boilerplate="true"
          :elevation="2"
        >
          <v-skeleton-loader
            type="card-avatar, article, actions"
            style="width: 300px;"
            class="align-center"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ProductItems from "./ProductItems";
import CategoriesMobile from "../CategoriesMobile";


export default {
    name: "Products",
    components: {ProductItems, CategoriesMobile},
    props: {
        link: {
            required: false,
            default: () => '',
            type: String
        }
    },
    data: () => ({
        page: 1
    }),
    watch: {
        link: {
            handler() {
                this.page = 1;
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
            this.$store.dispatch('products/loadProducts', {
                link: this.link,
                page: ++this.page
            });
        }
    }
}
</script>

<style scoped>
.categories, .column {
    display: flex;
    justify-content: center;
}
</style>