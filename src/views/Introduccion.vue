<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .row.justify-content-around.align-items-center.bkg-intro  
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
      .row.justify-content-center
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/intro.svg', alt='Texto que describa la imagen').mb-3    
        .col-lg-8.col-xs-6
          p Bienvenido a este componente formativo, donde se profundizan conceptos importantes para el manejo y administración de los datos, entendiendo la dinámica que se debe seguir al abordar ideas claras para gestar proyectos que puedan ser exitosos; se refrescan varios conceptos que serán de utilidad para el análisis exploratorio de los datos, donde es primordial apropiarse de toda la fundamentación requerida en proyectos de analítica de datos; se aprenderá la metodología requerida para identificar problemáticas en las organizaciones y obtener un mejor entendimiento de los conceptos que se requieren y que son indispensables para la comprensión de los datos.
        p.mt-3 En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente componente formativo.

        .row.mt-3
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption VIDEO        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
