<template>
    <div>
        <v-card class="pa-4" elevation="5" outlined color="primary">
            <v-card-title class="text-h4 font-weight-thin mb-4 white--text">Productos</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="4" class="text-center" v-for="product of products" :key="product.id">
                        <product :product="product" />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import Product from "@/views/Home/Products/Product.vue";
export default {
    props: {
        mini: Boolean,
    },
    components: {
        Product
    },
    data() {
        return {
            products: [{
                title: "Hielo 43",
                subTitle: "transparentes cilindricos de gran durabilidad",
                mainPhoto: "",
                idealFor: [1, 2, 3],
                idealForDescription: "Ideal para copas Ideal para copasIdIdeal para copasIdeal para copasIdeal para copasIdeal para copaseal para copas",
                description: { type: "glaco", bag: "2 Kg", sac: "10 kg", dimension: ["70g", "48 mm", "43 mm"], icon: 1 }
            },
            {
                title: "Hielo 43",
                subTitle: "transparentes cilindricos de gran durabilidad",
                mainPhoto: "",
                idealFor: [1, 2, 3],
                idealForDescription: "Ideal para copas Ideal para copasIdIdeal para copasIdeal para copasIdeal para copasIdeal para copaseal para copas",
                description: { type: "glaco", bag: "2 Kg", sac: "10 kg", dimension: ["70g", "48 mm", "43 mm"], icon: 1 }
            },
            {
                title: "Hielo 43",
                subTitle: "transparentes cilindricos de gran durabilidad",
                mainPhoto: "",
                idealFor: [1, 2, 3],
                idealForDescription: "Ideal para copas Ideal para copasIdIdeal para copasIdeal para copasIdeal para copasIdeal para copaseal para copas",
                description: { type: "glaco", bag: "2 Kg", sac: "10 kg", dimension: ["70g", "48 mm", "43 mm"], icon: 1 }
            }]
        };
    },
    methods: {

    },

}
</script>
