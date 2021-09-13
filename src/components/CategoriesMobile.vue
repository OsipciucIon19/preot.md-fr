<template>
  <v-dialog
    v-model="dialog"
    width="450"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Change Category
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5">
        Choose a category
      </v-card-title>

      <v-card-text>
        <v-list color="transparent">
          <v-divider class="" />
          <v-progress-linear
            v-if="$store.getters['categories/getIsLoading']"
            indeterminate
            color="blue"
          />
          <v-expansion-panels
            focusable
          >
            <v-expansion-panel
              v-for="(category) in categories()"
              :key="category.link"
            >
              <v-expansion-panel-header>{{ category.name }}</v-expansion-panel-header>
              <div
                v-for="(child) in category.children"
                :key="child.link"
              >
                <v-expansion-panel-content>
                  <v-card-actions>
                    <button
                      @click="dialog = false"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title class="text-wrap">
                            <router-link
                              style="text-decoration: none; color: inherit;"
                              class="child-link"
                              :to="{name:'products', query: {link: child.link}}"
                            >
                              {{ child.name }}
                            </router-link>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </button>
                  </v-card-actions>
                </v-expansion-panel-content>
              </div>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="inherit"
          text
          @click="dialog = false"
        >
          Exit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: "CategoriesMobile",
    data() {
        return {
            dialog: false,
        }
    },
    mounted() {
        if (!this.$store.getters['categories/getList'].length)
            this.$store.dispatch('categories/fetch');
    },
    methods: {
        categories() {
            let categories = {};
            for (let category of this.$store.getters['categories/getList']) {
                if (!category.parentLink) {
                    categories[category.link] = {
                        children: [],
                        ...category
                    }
                } else {
                    categories[category.parentLink].children.push(category)
                }
            }
            return categories
        }
    }
}
</script>

<style scoped>

.child-link {
    text-decoration: none;
}

</style>