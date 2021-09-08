<template>
    <div>
        <RouterView/>
        <ErrorMessage />
    </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage";
export default {
    name: "Content",
    components: {ErrorMessage},
}
</script>

<style scoped>

</style>