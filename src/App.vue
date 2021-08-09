<template>
  <v-app id="inspire">
    <AppBar/>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
                  cols="12"
                  sm="10"
          >
            <v-sheet
                    min-height="70vh"
                    rounded="lg"
            >
              <AppContent/>
            </v-sheet>
          </v-col>

          <v-col
                  cols="12"
                  sm="2"
          >
            <v-sheet
                    rounded="lg"
                    min-height="268"
            >
              <RightSideContent/>
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
    components: {RightSideContent: Categories, AppBar, AppContent},
  }
</script>
