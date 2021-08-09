<template>
    <div>
        <v-container
                v-for="align in alignments"
                :key="align"
                class="lighten-5"
        >
            <v-row
                    :align="align"
                    no-gutters
                    style="height: 200px;"
            >
                <v-col
                        v-for="n in 4"
                        :key="n"
                >
                    <v-card
                            class="ma-5 pa-10"
                            outlined
                            tile
                    >
                        One of three columns
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            alignments: [
                'start',
                'center',
                'end',
            ],
        }),
    }
</script>