<template>
    <div>
        <v-card class="pa-4" elevation="5" outlined color="primary">
            <v-card-title class="text-h4 font-weight-thin mb-4 white--text"> {{ $t('home.menu.products')}}</v-card-title>
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
    computed: {
        products() {
            return [{
                title: "Bugy 40",
                subTitle: this.$t('products.bugy_40.subTitle'),
                mainPhoto: "bugy40.png",
                idealFor: [1, 2, 3],
                idealForDescription: this.$t('products.bugy_40.idealForDescription'),
                description: { type: "glaco", bag: "2 Kg", sac: "10 kg", dimension: ["70g", "48 mm", "43 mm"], icon: 1 }
            },
            {
                title: "Bugy 43",
                subTitle: this.$t('products.bugy_43.subTitle'),
                mainPhoto: "bugy43.png",
                idealFor: [1, 2, 3],
                idealForDescription: this.$t('products.bugy_43.idealForDescription'),
                description: { type: "glaco", bag: "2 Kg", sac: "10 kg", dimension: ["70g", "48 mm", "43 mm"], icon: 1 }
            },
            {
                title: "Cocktail CK2",
                subTitle: this.$t('products.cocktail_ck2.subTitle'),
                mainPhoto: "bugycocktail.png",
                idealFor: [1, 2, 3],
                idealForDescription: this.$t('products.cocktail_ck2.idealForDescription'),
                description: { type: "glaco", bag: "2 Kg", sac: "10 kg", dimension: ["70g", "48 mm", "43 mm"], icon: 1 }
            }]
        }
    }
}
</script>
