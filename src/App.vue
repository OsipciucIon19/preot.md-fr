<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
    name: "App",
    mounted() {
        for (const product of Object.values(this.$store.state.productsHistory.items)) {
            if (product.price.length > 1) console.log(product)
        }
    }
}
</script>

<style scoped>

</style>
