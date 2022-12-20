<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bf-t4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Licencias #[em software] comercial y #[em software] libre

    .row.justify-content-center.mt-5
      .col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema4/t4-1.svg', alt='').animacion-flotante.flotante-movil
      .col-lg-10
        p Las licencias de #[i software] se refieren a un contrato entre el autor de un #[i software] informático y sus usuarios.  En las licencias se disponen los términos, condiciones y cláusulas que se tienen que cumplir para poder utilizar ese #[i software] y cada usuario que descarga, instala, copia o lo utiliza, debe aceptar esos términos.


    .row.justify-content-center.mb-3.mt-3
      p Desde hace mucho tiempo, la cantidad de tipos de licencias no para de aumentar, porque las empresas de programación han ido limitando el uso de #[i software] según sus intereses.
      p Para comprender el tema de las licencias, se debe diferenciar entre dos tipos de programas:
      .col-lg-10
        .row
          .col-sm-6.col-lg-6.mb-4.mb-lg-0
            .t3.tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/t4-2.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-5 El software libre no tiene #[i copyright]. No tiene que ser gratis y el usuario tiene libertad sobre para usarlo, copiarlo, modificarlo y distribuirlo como lo desee. Esto permite a miles de desarrolladores, ampliar sus posibilidades y expandir su conocimiento.
          
          .col-sm-6.col-lg-6.mb-4.mb-lg-0
            .t3.tarjeta-avatar
              img(src='@/assets/curso/temas/tema4/t4-3.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-5 El software de propietario, es aquel al que su creador lo limita o prohíbe copiar, redistribuir y modificar sin su permiso o sin un pago previo.

    .row.justify-content-center.bkg-t4      
      .row.justify-content-center.mt-3
        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .b2.bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4-4.svg')})`}"
            )
            .b4.bloque-texto-g__texto.p-4
              p.mb-0 También, aparte de estos dos tipos de licencias, se cuenta con el #[i software] gratuito o de dominio público, que no tiene #[i copyright] y se puede utilizar, aunque el autor puede poner restricciones para redistribuir el programa y los trabajos que se deriven de él. En otro orden de ideas, existe la licencia de software semi libre, es decir, que tiene propietario, pero el programa viene con autorización para usar, copiar, distribuir y modificar si se es un particular y se carece de ánimo de lucro.
        p.mt-4 Cuando se adquiere un programa, sin importar el tipo de licencia, lo que se consigue es una licencia de uso, nunca el programa en sí y, como regla general, se da una licencia por cada lugar de uso o dispositivo.

      .row.justify-content-start.align-items-center.mb-5.mt-3     
        .col-lg-4
          .color-degrade.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Licencias de #[i software] libre

      .row.justify-content-center.mt-5
        .col-lg-2(data-aos="flip-left").mb-5
          img(src='@/assets/curso/temas/tema4/t4-5.svg', alt='').animacion-flotante.flotante-movil
        .col-lg-10
          p Las licencias de #[i software] libre permiten: ejecutar el programa y aprender su funcionamiento, adaptarlo a las necesidades de cada usuario, copiarlo y redistribuirlo y perfeccionarlo y exponer esas mejoras al alcance y servicio de toda la comunidad. 

      .row.justify-content-center.mt-2
        p.mb-5 Entre las licencias libres se presentan algunas diferencias: 
        .col-lg-4
            img(src='@/assets/curso/temas/tema4/t4-6.svg', alt='' data-aos="flip-left").mb-3
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Licencias de <em>software</em> libre no protegido con <em>copyleft</em>")
              .col-12.ps-5
                p.mb-0 Son las licencias donde el autor autoriza a redistribuir, modificar y adicionar restricciones a copias o versiones modificadas, que pueden no ser libres completamente y necesitan un #[i software] de pago para que las funciones trabajen completamente.
            .row(titulo="Licencias de <em>software</em> protegido con <em>copyleft</em>")
              .col-12.ps-5
                p Contrario al #[i copyright] o copia reservada (derechos de autor), son #[i software] libres, que no permiten adicionar ninguna restricción. De esta manera, cada copia del #[i software], aunque haya sido modificado, debe ser #[i software] libre. #[i Copyleft] es una práctica legal que consiste en el ejercicio del derecho de autor para motivar la libertad de uso y distribución de una obra, y requiere de las mismas libertades, al repartir sus copias y derivados.

      .row.justify-content-start.align-items-center.mt-3     
        .col-lg-4
          .color-degrade.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Software comercial 

      .row.justify-content-center.mt-5
        .col-lg-2(data-aos="flip-left").mb-5
          img(src='@/assets/curso/temas/tema4/t4-7.svg', alt='').animacion-flotante.flotante-movil
        .col-lg-10
          p Este modelo de #[i software] acorta las posibilidades del usuario para modificarlo. Aún así, el #[i software] libre, es el que se distribuye libremente. También se conoce como #[i software] de código abierto.

    .row.justify-content-center.mt-2
      .col-lg-8
        .cajon.color-1.p-4.mb-3
          h4.mb-0 Tipo de licencias para los software comerciales
          p.mt-0 Hay que analizar si el software es:
          ul.lista-ul.mt-3
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Freeware (con licencias gratuitas).
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Shareware (son gratuitas, pero con funcionamiento limitado).
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Libre (puede ser cambiado, usado y redistribuido con las modificaciones).   
            li 
              i.fas.fa-chevron-right.vineta-verde
              | Propietario (de código abierto).

    .row.justify-content-start.align-items-center.mt-3     
      .col-lg-4
        .color-degrade.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Licencia de comercio

    .row.justify-content-center.mt-5
      .col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema4/t4-8.svg', alt='').animacion-flotante.flotante-movil
      .col-lg-10
        p La licencia comercial es un modelo estándar de licencia para empresas y entidades comerciales. Las organizaciones compran las licencias y cualquier individuo de la empresa puede utilizarlas. La licencia personal es una opción para personas naturales que compran una licencia por sus propios medios y para uso propio.

    .row.justify-content-center.mt-2
      .col-lg-10
        .cajon.color-2.p-4.mb-3
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
