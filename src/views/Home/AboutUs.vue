<template>
    <div>
        <v-card class="pa-md-6" elevation="0">
            <v-card-title class="text-h4 font-weight-regular mb-2 primary--text">Nosotros</v-card-title>
            <v-row>
                <v-col cols="12" md="12">
                    <v-card-text class="text-h6 mb-4 text-justify secondary--text">
                        {{ text }}
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
    components: {

    },
    data() {
        return {
            text: `Nuestra empresa, constituida como Catalona de Gel S.L nace en 1918, convirtiéndose en la empresa pionera productora 
                   de hielo en cubos a nivel industrial. Contamos con presencia en el mercado peninsular con la marca Bugy Bugy, desde 
                   donde antedemos nuestros clientes de grandes superficies, supermercados y gasolineras. Nuestra marca, Hielo Express, 
                   presta sus servicios en el área metropolitana a domicilio, hoteles y hosteleria en general. Además, exportamos a diversos países de Europa.
                   Producimos 200 toneladas diarias de hielo (cubo y cocktail) listos para servir, cumpliendo con 
                   cualquier demanda en cualquier momento del año, lo que nos convierte en referentes en distribución de hielo 24/7 los 
                   365 días del año.
                   Somos líderes en tratamiento y purificación del agua, como previo a la producción de hielo, consiguiendo mejorar la 
                   calidad sanitaria y conservando su aspecto cristalino.
                   La producción, envasado y paletizado están totalmente automatizados, realizándose a temperaturas constantes de -5º/-8ºC, 
                   ofreciendo así un producto de alta calidad con certificación IFA.`,
            images: [
                require('../../../public/img/home.png'),
                require('../../../public/img/furgo.jpg'),
                require('../../../public/img/invierno.jpg')
            ],
        };

    },

}
</script>
