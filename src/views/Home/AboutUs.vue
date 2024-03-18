<template>
    <div>
        <v-card class="pa-md-6" elevation="0">
            <v-card-title class="text-h4 font-weight-regular mb-2 primary--text"> {{ $t('home.menu.us')}}</v-card-title>
            <v-row>
                <v-col cols="12" md="12">
                    <v-card-text class="text-h6 mb-4 text-justify secondary--text">
                        {{ $t('us') }}
                    </v-card-text>
                    <v-carousel cycle height="400">
                        <v-carousel-item v-for="(image, i) in images" :key="i" :src="image"></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        mini: Boolean,
    },
    data() {
        return {
            images: [
                require('../../../public/img/home.png'),
                require('../../../public/img/furgo.jpg'),
                require('../../../public/img/invierno.jpg')
            ],
        };
    },
}
</script>
