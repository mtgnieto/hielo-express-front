<template>
    <div>
        <v-card class="ml-2 mr-2 mb-4" elevation="5" outlined>
            <v-card-title class="headline font-weight-black text-h5 primary--text ">
                {{ product.title }}
            </v-card-title>
            <v-card-subtitle class="headline font-weight-black text-h6 text-left">
                {{ product.subTitle }}
            </v-card-subtitle>
            <v-divider></v-divider>
            <v-card-text>
                <v-row>
                    <v-col cols="6" md="6">
                        <v-img :src="require(`../../../../public/img/${product.mainPhoto}`)" height="100%" max-width="100%"
                            alt="home"></v-img>
                    </v-col>

                    <v-col cols="6" md="6" align-self="end">
                        <v-row no-gutters justify="center">
                            <v-col v-for="e in product.idealFor" :key="e" cols="3">
                                <v-img :src="require(`../../../../public/img/${idealFor[e]}`)" width="80%"></v-img>
                            </v-col>
                        </v-row>
                        <v-row justify="start">
                            <h5>
                                {{ product.idealForDescription }}
                            </h5>
                        </v-row>
                    </v-col>

                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="12">
                                <h2 class="font-weight-black primary--text text-start">
                                    {{ product.description.type }}
                                </h2>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="7">
                                <h3 class=" font-weight-black primary--text text-start"
                                    v-for="e in product.description.dimension" :key="e">
                                    {{ e }}
                                </h3>
                            </v-col>
                            <v-col cols="5">
                                <v-img :src="require(`../../../../public/img/${idealFor[product.description.icon]}`)"
                                    class="mb-4"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="6">
                                <v-row>
                                    <h2 class=" font-weight-black primary--text ">
                                        Bolsa
                                    </h2>
                                </v-row>
                                <v-row>
                                    <h3 class=" font-weight-black primary--text ">
                                        {{ product.description.bag }}
                                    </h3>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-img :src="require(`../../../../public/img/${idealFor[product.description.icon]}`)"
                                    width="70%" class="mb-4"></v-img>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">
                                <v-row>
                                    <h2 class=" font-weight-black primary--text ">
                                        Saco
                                    </h2>
                                </v-row>
                                <v-row>
                                    <h3 class=" font-weight primary--text ">
                                        {{ product.description.sac }}
                                    </h3>
                                </v-row>
                            </v-col>
                            <v-col cols="6">
                                <v-img :src="require(`../../../../public/img/${idealFor[product.description.icon]}`)"
                                    width="70%" class="mb-4"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    props: {
        mini: Boolean,
        product: Object
    },
    components: {

    },
    data() {
        return {
            idealFor: {
                1: "vaso-grande.png",
                2: "copa-pequeña.png",
                3: "vaso-pequeño.png"
            }

        };
    },
    methods: {

    },

}
</script>
