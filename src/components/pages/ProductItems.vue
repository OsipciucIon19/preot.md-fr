<template>
  <v-card
    link
    class="mx-1 my-5"
    max-width="300"
  >
    <router-link
      style="text-decoration: none; color: inherit;"
      :to="{
        name: 'item',
        params: {
          id: link
        }
      }"
    >
      <div v-if="item.img.length === 0 || item.img[0].endsWith('.gif')">
        <v-img
          height="250"
          src="../../assets/defaultImg.jpg"
        />
      </div>
      <div v-else>
        <v-img
          height="250"
          :src="item.img[0]"
        />
      </div>

      <v-card-title>{{ item.title }}</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        />

        <div
          v-if="item.noPrice"
          class="my-4 text-subtitle-1"
        >
          Договорная
        </div>
        <div
          v-else
          class="my-4 text-subtitle-1"
        >
          {{ item.currency }} {{ item.price }}
        </div>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-actions>
        <v-btn

          color="deep-purple lighten-2"
          text
        >
          Add to cart
          <v-icon
            color="orange darken-2"
          >
            mdi-cart-check
          </v-icon>
        </v-btn>
      </v-card-actions>
    </router-link>
  </v-card>
</template>

<script>
    export default {
        name: "ProductItem",
        props: {
            item: {
                required: true,
                type: Object
            }
        },
        computed: {
            link: function () {
                return this.item.link.substring(4)
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .v-card__title {
        padding-top: 10px;
        height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>