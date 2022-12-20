<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bf-t2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fuentes  y transformación de datos

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las fuentes de datos o de información, son documentos de diversos tipos y orígenes que proveen datos y recursos sobre un tema o área determinada y, según su nivel de información, pueden ser clasificadas como: fuentes primarias, fuentes secundarias y fuentes terciarias. Entregan el documento completo, no una representación del mismo, y se resaltan las numéricas y las textuales (texto).

    .row.justify-content-center.mt-4
      p.mb-4 Las fuentes de datos, se organizan y clasifican en:
      .col-lg-4
        img(src='@/assets/curso/temas/tema2/t2-2.svg', alt='' data-aos="flip-up").mb-3  
      .col-lg-8
        TabsA.color-acento-contenido
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Primarias")
            .row.p-4
              .col-auto
                p Están compuestas por información original. Se dan como consecuencia de un trabajo intelectual y tienen información que no ha sido modificada, interpretada o examinada. Ejemplos: novelas, obras de teatro, poemas, películas y videos, pinturas o fotos, periódicos, discursos, memorias, diarios, cartas, tesis doctoral, la tesis de un máster, un libro, patentes, así como también otros similares.
                
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Secundarias")
            .row.p-4
              .col-auto
                p Están compuestas por información aumentada de los resultados que se presentan en la fuente primaria. Se manifiestan como un análisis, una valoración, o algún contenido que se encuentre relacionado con la fuente primaria. Las fuentes secundarias de datos están formadas por datos ya publicados, recolectados con diferentes objetivos de los que el pronóstico o la investigación específica necesita tener a la mano.

          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Terciarias")
            .row.p-4
              .col-auto
                p Están compuestas por información que se obtiene de fuentes primarias y secundarias. Es de esta manera, que la fuente terciaria tiene como objetivo limpiar esta información, y transferirla al lector o al investigador.
                
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Fuente general")
            .row.p-4
              .col-auto
                p La fuente general aporta información muy extensa sobre varios conceptos, muy diferentes y variados. Al mismo tiempo, ofrece información sobre fechas históricas, como otro tipo de información relacionada. Se refiere a enciclopedias, libros de texto, manuales, etc.

          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Fuente especializada")
            .row.p-4
              .col-auto
                p Esta fuente, a diferencia de la general, aporta información sobre conceptos concretos, o sobre determinados campos de estudio o ciencia. Se refiere a revistas científicas especializadas en un área en concreto, manuales sobre materias determinadas, o portales específicos donde se conservan datos relacionados con temas que estemos investigando.
                
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Fuente digital")
            .row.p-4
              .col-auto
                p Esta fuente es la que expone información, y se llega a ella, a través de un soporte digital. Se refiere a revistas digitales, periódicos digitales, así como también a otros portales electrónicos en los que se aporta información. Para conseguir esta información, se necesita de un dispositivo electrónico que nos permita obtenerla.
                
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Fuente textual o escrita")
            .row.p-4
              .col-auto
                p Esta fuente se refiere a aquella en la que la información que recoge se manifiesta a través de escritos y textos en papel. Es el caso de libros, periódicos, manuales, así como también los materiales que se localizan en formato físico.
                
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Otros tipos de fuentes")
            .row.p-4
              .col-auto
                p Servicios de diseminación e inclusión informacional. Comunicación y colaboración. Componentes integradores. Biométricas, se refieren a identificación espontánea de un individuo, fundamentada en las características anatómicas o trazos personales. Máquina a máquina. Datos de transacciones causados por los humanos, web y medios sociales. Bibliografías y catálogos.                      

    .row.justify-content-around.align-items-center.bkg-t2
      .row.justify-content-center.mt-2
        p Ahora, en las fuentes de datos encontramos los públicos, privados y mixtos.
        p.mb-5 Conozcamos cada uno de ellos:
        .col-lg-4
            img(src='@/assets/curso/temas/tema2/t2-3.svg', alt='' data-aos="flip-left").mb-3
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Fuentes de datos privados")
              .col-12.ps-5
                p.mb-0 Se refiere a las fuentes que, por su naturaleza íntima o reservada, solo son relevantes para su titular. Solo puede accederse a estos datos por orden de autoridad judicial competente y en ejercicio de sus funciones.
                p.mb-0.mt-0 Toda la información que se encuentre vinculada o pueda asociarse a una o varias personas naturales determinadas o verificables.
                p.mt-0 Este dato por su naturaleza íntima o reservada, solo es importante para el titular. Estos datos solo se pueden tratar con autorización del titular. No se puede solicitar de manera obligatoria, a no ser que una ley exija que se deben solicitar
            .row(titulo="Fuentes de datos públicos")
              .col-12.ps-5
                p Se refiere a datos que no son semiprivados, privados o sensibles. Se consideran datos públicos, los datos que son relativos al estado civil de las personas, a su profesión u oficio y a su calidad de comerciante o de servidor público.
                p Se conocen como fuentes de datos que históricamente se han mantenido bajo el control de organizaciones ya sean públicas o privadas, y donde el acceso ha estado controlado mediante limitaciones, licencias, #[em copyright] y patentes.
            .row(titulo="Fuentes de datos mixtos")
              .col-12.ps-5
                p Las fuentes mixtas son aquellas que combinan dos o más tipos de fuentes; por ejemplo, fuentes primarias (revistas) y fuentes secundarias (índices). Son aquellas que aportan la información más actualizada sobre los distintos temas.
                p La investigación mixta es una metodología de investigación que consiste en recopilar, analizar e integrar tanto investigación cuantitativa como cualitativa. Este enfoque se utiliza cuando se requiere una mejor comprensión del problema de investigación, y que no te podría dar cada uno de estos métodos por separado.
                p Concluyendo, el enfoque mixto es un proceso que recolecta, analiza y vincula datos cuantitativos y cualitativos en un mismo estudio o una serie de investigaciones para responder a un planteamiento.
            .row(titulo="Fuentes de datos personales semiprivados")
              .col-12.ps-5
                p Este tipo de datos no tienen naturaleza íntima, reservada, ni pública y su conocimiento solo interesa al titular y a cierto sector o grupo de individuos o a la sociedad en general; se refiere a datos financieros y crediticios, dirección, teléfono, correo electrónico.                  

      .row.justify-content-center.mt-5
        .col-lg-2.col-sm-9(data-aos="flip-left").mb-5
          img(src='@/assets/curso/temas/tema2/t2-4.svg', alt='').animacion-flotante.flotante-movil
        .col-lg-10
          p Ahora, la fuente más grande de datos es la que tiene su origen en la red y forman parte, de acuerdo con los estudiosos, del pedazo más grande del pastel llamado #[i Big data] que es una de las fuentes de datos más conocida y usada en esta era tecnológica.

      .row.justify-content-center.mb-3.mt-3
        p Estos son varios de los cuestionamientos que nos planteamos a la hora de abordar una estrategia de Big data.
        .col-lg-10
          .row
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .t1.tarjeta-avatar
                img(src='@/assets/curso/temas/tema1/t1-4.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.text-center.mt-3 ¿Qué datos son los que necesito?
            
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .t1.tarjeta-avatar
                img(src='@/assets/curso/temas/tema1/t1-4.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.text-center.mt-3 ¿Cuáles son realmente interesantes para mi negocio? 
            
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .t1.tarjeta-avatar
                img(src='@/assets/curso/temas/tema1/t1-4.svg' alt='AvatarTop')
                .tarjeta.tarjeta--amarilla-1.p-5
                  p.text-center.mt-3 ¿Dónde están?

    .row.justify-content-center.mt-3
      .col-lg-8.col-xs-6
        p La cantidad de datos que manejan las empresas, cada día es más descomunal; para lograr el beneficio de esa abundancia de información, que permite tomar las mejores decisiones o conocer más al cliente, lo primero que hay que entender se refiere a cuáles son las categorías de datos a los que se enfrenta y las fuentes de origen de los mismos, lo que le ayuda a dirigirse a lo que verdaderamente se necesita.
        p Es importante identificar primero, para capturar, evaluar y analizar solo los activos que aporten información relevante a su objetivo, porque sin él la información que se maneje, puede que no lleve a ningún lado.
        .cajon.color-1.p-4.mb-3
          p Por otra parte, la transformación de datos es el procedimiento que se lleva a cabo para convertir datos o información, de un formato a otro, por lo general desde el formato de un sistema fuente, hasta el formato solicitado por un nuevo sistema de destino.
      .col-lg-4.justify-content-center(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema2/t2-5.svg', alt='').mb-3

    .row.justify-content-start.align-items-center.mb-5.mt-5        
      .col-lg-4
        .color-degrade.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Preparar los datos

    .row.justify-content-center.mb-3.mt-3
      p Es una de las etapas que ocupa mayor cantidad de tiempo; por lo general los datos no cumplen con los parámetros requeridos para empezar a trabajar con ellos de manera adecuada.
      p En este procedimiento se deben tener en cuenta las siguientes operaciones:
      .col-lg-10
        .row
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-6.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-2 La selección de los datos.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-7.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-2 Crear la estrategia de limpieza de datos.
          
          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-8.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-2 Completar los datos.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0
            .t2.tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/t2-9.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mb-0.mt-1 Integración de los datos.     
                p.text-center.mt-0 Es primordial que todos manejen el mismo tipo de formato.           

    .row.justify-content-center.mt-3
      p La preparación de los datos es un paso muy importante para el análisis exploratorio de los datos; después de conocer muy bien los objetivos de la empresa y plantear unas metas claras, es bueno hacerse una pregunta que se utilice como punto de partida y que permita pasar a la revisión de los datos con una idea clara.
      .col-lg-8
        .cajon.color-2.p-4.mb-3.mt-2
          p Los #[i Data Sets] son una colección de datos que, generalmente, están dados por filas y columnas; estos datos se generan directamente desde los sistemas de información de la empresa o se pueden encontrar como datos abiertos que se descargan desde el Internet o también se pueden comprar. 

    .row.justify-content-center
      p.mt-2 Es claro que hay muchas formas de alimentar los sistemas de datos con la información que necesitan. Todas estas fuentes de datos y casos de uso potenciales, han llevado a afirmar que la tecnología de #[i Big data] y automatización, conducirá a niveles de optimización antes inimaginables en la fabricación, la logística, el almacenamiento y la entrega de última milla que se refiere al último paso del proceso de entrega, cuando un paquete se mueve desde un centro de transporte hasta su destino final.
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2-10.svg')})`}"
          )
          .b1.bloque-texto-g__texto.p-4
            p.mb-0 Los #[i Big data] pueden recopilarse a partir de comentarios compartidos públicamente en redes sociales y sitios web, recogidos voluntariamente en aparatos electrónicos y aplicaciones personales, mediante cuestionarios, compras de productos y registros electrónicos. 
            br
            br
            | La presencia de sensores y otras entradas en los dispositivos inteligentes permite recopilar datos en un amplio espectro de situaciones y circunstancias.

</template>

<script>
export default {
  name: 'Tema2',
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
