<template>
  <v-app id="inspire">
    <AppBar/>
    <v-main class="lighten-3">
      <v-container>
        <v-row>
          <v-col
                  cols="9"
                  sm="9"
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
                  sm="3"
          >
            <v-sheet
                    rounded="lg"
                    min-height="268"
            >
              <Categories/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppContent from "./components/AppContent";
  import AppBar from "./components/AppBar";
  import Categories from "./components/Categories";

  export default {
    components: {Categories, AppBar, AppContent},
  }
</script>
