<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bf-t1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Analítica de datos

    .row.justify-content-around.align-items-center.bkg-t1
      .row.justify-content-center
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema1/t1-1.svg', alt='').mb-3    
        .col-lg-8.col-xs-6
          p Comencemos diciendo que el análisis o analítica de datos (DA) es el proceso que investiga conjuntos de datos, para encontrar tendencias y extraer conclusiones sobre la información que contienen. La analítica de datos se utiliza con la ayuda de sistemas y #[em software] especializados. 
          p La propuesta de análisis de datos puede colaborar con las empresas en el aumento de los ingresos, mejorar la eficiencia operativa, optimizar las campañas de #[em marketing] y los esfuerzos de servicio al cliente. También puede utilizarse para responder, rápidamente, a las nuevas tendencias del mercado y obtener una ventaja competitiva sobre la competencia.
        p.mt-3 Los métodos y técnicas de análisis de datos son útiles para encontrar información en los datos, como métricas, hechos y cifras. Los dos métodos principales de análisis de datos son:

      .row.justify-content-center.mt-3
        .col-lg-4
          img(src='@/assets/curso/temas/tema1/t1-2.svg', alt='' data-aos="flip-up").mb-3  
        .col-lg-8
          TabsA.color-acento-contenido
            .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Análisis de datos cuantitativos")
              .row.p-4
                .col-auto
                  p El análisis de datos cuantitativos implica trabajar con variables numéricas, incluyendo estadísticas, porcentajes, cálculos, mediciones y otros datos, debido a que la naturaleza de los datos cuantitativos es numérica.
                  
            .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Análisis de datos cualitativos")
              .row.p-4
                .col-auto
                  p Las técnicas de análisis cualitativo de datos suelen formar parte del proceso de desarrollo de #[em software]. Los probadores de software registran los fallos que van desde errores funcionales, hasta faltas de ortografía, para determinar la gravedad de los mismos en una escala predeterminada de crítico, a bajo. Cuando se recogen, estos datos proporcionan información que puede ayudar a mejorar el producto final.

      .row.justify-content-center.mt-5
        .col-lg-2(data-aos="flip-left").mb-5
          img(src='@/assets/curso/temas/tema1/t1-3.svg', alt='').animacion-flotante
        .col-lg-10
          p Los datos se pueden clasificar según su formato o el tipo de información que contienen, lo que sirve específicamente para la estructuración de arreglos de los mismos o la creación de bases de datos. 

    .row.justify-content-center.mb-3.mt-3
      p La analítica de datos responde a preguntas como:
      .col-lg-10
        .row
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/t1-4.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-3 ¿Qué se hizo? (filtros).
          
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/t1-4.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-3 ¿Cuánto se hizo? (operaciones matemáticas con campos numéricos).
          
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            .t1.tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/t1-4.svg' alt='AvatarTop')
              .tarjeta.tarjeta--amarilla-1.p-5
                p.text-center.mt-3 ¿Cuándo? (fechas y tiempos).

    .row.justify-content-center.mt-3
      p En este orden, los cálculos, filtros y medidas, se realizan según el tipo de datos. 
      p Se puede decir que se obtiene calidad en los datos, si se cumplen las siguientes competencias: datos, si se cumplen las siguientes competencias:
      .col-lg-10.mt-3
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema1/t1-5.svg', alt='')

          .tarjeta.estilo-cajon.p-3(x="22.5%" y="10%" numero="+")
            p Exactitud entre el evento real y el registrado.
          
          .tarjeta.estilo-cajon.p-3(x="16.5%" y="29%" numero="+")
            p Se establece como el porcentaje de datos aprobados frente a la posibilidad de cumplimiento del 100 %.

          .tarjeta.estilo-cajon.p-3(x="11.7%" y="47.4%" numero="+")
            p Cercanía y uniformidad de los datos con otras tablas o un conjunto de datos de referencia.

          .tarjeta.estilo-cajon.p-3(x="16.5%" y="66%" numero="+")
            p Registro único de cada evento.

          .tarjeta.estilo-cajon.p-3(x="22.5%" y="84.5%" numero="+")
            p La unicidad de los datos se mide con todos los registros dentro de un conjunto de datos.

          .tarjeta.estilo-cajon.p-3(x="77.5%" y="10%" numero="+")
            p Captura de datos reales y actuales.      

          .tarjeta.estilo-cajon.p-3(x="83.6%" y="29%" numero="+")
            p Los datos con los mismos atributos deben representarse en un formato y tipos de datos iguales.      

          .tarjeta.estilo-cajon.p-3(x="88.7%" y="47.4%" numero="+")
            p Grado de coherencia con el que se implementan restricciones relacionales definidas entre dos tablas (tablas normalizadas).

          .tarjeta.estilo-cajon.p-3(x="83.6%" y="66%" numero="+")
            p Se refiere al grado de las cifras redondeadas y desglosadas. La precisión depende de los requisitos del sistema. 

          .tarjeta.estilo-cajon.p-3(x="77.5%" y="84.5%" numero="+")
            p Proximidad del valor de los datos a valores predeterminados.

    .row.justify-content-center.mt-3
      p Para una resolución integral del problema de calidad de datos, es necesario realizar un análisis de cada parámetro, lo que permitirá resolver todas las dudas que existen en el proceso y con ello reducir riesgos insatisfacción.
      p Ahora, ¿qué papel juega la analítica de datos en el talento humano? El siguiente video da respuesta a esta pregunta.
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO  
      
      p.mt-4.mb-0 A continuación, profundizaremos en esta temática del talento humano y el análisis de datos.

    .bkg-slyder.px-5.py-3.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            h4.ps-4 ¿Qué tipos de datos se pueden procesar en el área de talento humano de las organizaciones?
            ul.lista-ul.mt-3.ps-4
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Datos de la remuneración y estímulos salariales, que constituyen un registro de remuneración.
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Datos de los beneficios y asistencias sociales, que conforman un registro de beneficios.
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Datos de candidatos (registro de candidatos), de cursos y actividades de adiestramiento (registro de entrenamiento), etc.            
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/t1-6.svg', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            h4.ps-4 ¿Qué es la analítica en la gestión de talento humano?
            p.ps-4.mb-0 Se refiere al resumen y análisis de la información sobre el procedimiento y función que una empresa ejerce sobre la capacidad. Se deben recabar muchos datos y conocer cómo detectar cuáles son destacables y útiles, y cuáles no.
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/t1-7.svg', alt='')

        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            h4.ps-4 ¿Qué es la analítica en la gestión de talento humano?
            ul.lista-ul.mt-3.ps-4
              li 
                i.fas.fa-chevron-right.vineta-verde
                | La escogencia del personal de una manera eficiente.
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Modernizar el sistema de remuneración.
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Entender los componentes y los aspectos que motivan a los empleados de una organización.
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Detectar a los líderes de una empresa.
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Encontrar y fidelizar el mejor talento.
              li 
                i.fas.fa-chevron-right.vineta-verde
                | Ser más eficaces en cualquier faceta de trabajo de la empresa u organización         
          .col-10.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/t1-8.svg', alt='')

    .row.justify-content-center
      .col-lg-4.justify-content-center(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema1/t1-9.svg', alt='').mb-3    
      .col-lg-8.col-xs-6
        p El fin último de esta tendencia, no es solo optimizar el área de gestión de talento, sino tener completo conocimiento de los principales indicadores que afectan a la organización desde el lado del capital humano y crear una nueva estrategia que los integre al cumplimiento cabal de los objetivos establecidos en las áreas operativa y financiera.
        .cajon.color-2.p-4
          p Cada vez son más los departamentos de recursos humanos que utilizan herramientas y canales digitales en sus procesos de recruiting (reclutamiento), como LinkedIn o Twitter, para comunicarse e interactuar con sus potenciales candidatos. Apoyarse en este tipo de herramientas, es sin duda un paso importante hacia su digitalización.

    .row.justify-content-center.mt-3
      p.mb-4 Las herramientas digitales indispensables en un departamento de talento humano son:
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.carrusel1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/t1-10.svg' alt='AvatarTop')
          p.text-center Redes sociales internas.   

        .tarjeta.carrusel1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/t1-11.svg' alt='AvatarTop')
          p.text-center Herramientas de gamificación.                      

        .tarjeta.carrusel1.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/t1-12.svg' alt='AvatarTop')
          p.text-center.mt-4 Plataformas de #[em e-learning.]

        .tarjeta.carrusel1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/t1-13.svg' alt='AvatarTop')
          p.text-center.mt-4 Plataformas de gestión.      


        .tarjeta.carrusel1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema1/t1-14.svg' alt='AvatarTop')
          p.text-center Soluciones de firma electrónica avanzada.

    .row.justify-content-center.mt-5(data-aos="zoom-in")
      p Una de las características más importantes para los analistas de datos, es la habilidad de traducir datos en descubrimientos que son claros e importantes, para la persona que toma las decisiones.
      p Para esto, es importante entender los variados modelos de datos, que se dividen en las siguiente categorías:
      TabsC.color-acento-contenido.mt-2
        .py-4.py-md-4(titulo="Datos o analítica descriptiva")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              h4.mt-0 ¿Qué está pasando?
              p Este es el formato más común. Explica, con el apoyo de los datos y a través de informes o gráficos, los sucesos acontecidos en el pasado; para ilustrar: el dueño de un almacén de ropa puede determinar la cantidad promedio de ventas durante un período determinado; el fabricante de zapatos, la cantidad de piezas producidas o aquellas que han tenido una demanda mayor.
              p Por lo general, el estudio descriptivo se inicia con un gran conjunto de datos que, a primera vista, no ofrece mucha información, pero que, al utilizar aplicaciones de #[em software] para su tratamiento (limpieza, ordenamiento, transformación, visualización), expresan de una forma accesible lo que ha venido sucediendo en las empresas. Con esta referencia, se toman acciones que se adapten a los objetivos de la empresa.
              p El análisis descriptivo de datos se refiere al tipo de análisis que se encuentra presente en la gran mayoría de empresas y por el que normalmente se comienza. En este tipo de análisis, es común estudiar tableros de control, gráficas de barras, gráficas de pasteles, infografías y otros. 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-15.svg', alt='')

        .py-3.py-md-4(titulo="Datos o analítica de diagnóstico")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              h4.mt-0 ¿Por qué está pasando?
              p Este es el siguiente formato de complejidad del análisis de datos. Se encuentra muy vinculado a la analítica descriptiva; investiga sobre cómo interpretar a través de los datos obtenidos, el porqué de la ocurrencia de algunos sucesos en el pasado.
              p En esta etapa, se puede realizar la medición de los datos históricos, con otros, para investigar una respuesta a las interrogantes. A través de la analítica de diagnóstico, se da inicio a profundizar y vincular algunas dependencias y realizar la identificación de patrones.
              p La principal utilidad del análisis de diagnóstico a nivel empresarial, se encuentra en la posibilidad de detectar problemas, con relación a una situación en particular.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-16.svg', alt='')     

        .py-3.py-md-4(titulo="Datos o analítica predictiva")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              h4.mt-0 ¿Qué es lo más probable que pueda pasar?
              p El análisis predictivo tiene que ver con el pronóstico. Ya sea la probabilidad que ocurra un evento en el futuro, la previsión de una cantidad cuantificable o la estimación de un punto en el tiempo en el que algo podría suceder – todos ellos se hacen a través de modelos predictivos. En un mundo de gran incertidumbre, ser capaz de predecir, permite tomar mejores decisiones. 
              p Es el formato de mayor utilidad para las empresas, porque basados en este modelo, se pueden calcular probabilidades de lo que va a suceder. Se basa en los resultados del análisis descriptivo y de diagnóstico para la detección, tanto de las tendencias como de las excepciones, así como de las también de las agrupaciones.
              p Aunque los análisis predictivos no intentan predecir el futuro al 100 %, porque este tipo de análisis es probabilístico, sí pronostican qué podría suceder. Como guía de análisis predictivo, tenemos los modelos que aprenden a detectar si una transacción con tarjeta de crédito es fraudulenta o no. 
              p A medida que las organizaciones avancen en los niveles de madurez en su transformación digital, este tipo de análisis dejará de ser un experimento para convertirse en una necesidad.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-17.svg', alt='') 

        .py-3.py-md-4(titulo="Datos o analítica prescriptiva")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              h4.mt-0 ¿Qué necesito hacer?
              p El modelo prescriptivo maneja un entendimiento de lo que ha sucedido, por qué ha sucedido y una variedad de análisis de “lo que podría suceder” para ayudar al usuario a determinar el mejor curso de acción a tomar. El análisis prescriptivo no suele ser solo con una acción individual sino que, de hecho, es una serie de otras acciones.
              p Un buen ejemplo de esto es una aplicación de tráfico que le ayuda a elegir la mejor ruta a casa y teniendo en cuenta la distancia de cada ruta, la velocidad a la que uno puede viajar en cada carretera y, crucialmente, las restricciones de tráfico actuales.
              p El análisis prescriptivo, combina los datos históricos y la información proveniente de fuentes externas; también es necesario para este análisis, el uso de herramientas tecnológicas avanzadas.
              p Por esta razón, es conveniente que los gerentes de empresas comparen la magnitud de la inversión requerida en relación a los resultados reales que se esperan obtener antes de tomar la decisión de adoptar la analítica prescriptiva.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema1/t1-18.svg', alt='')                 

    .row.justify-content-start.align-items-center.mb-5.mt-5        
      .col-lg-4
        .color-degrade.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 El análisis y ordenación de datos

    .row.justify-content-center.mt-5
      .col-lg-2(data-aos="flip-left").mb-5
        img(src='@/assets/curso/temas/tema1/t1-19.svg', alt='').animacion-flotante
      .col-lg-10
        p El análisis de datos es el proceso de exploración, transformación y examinación de datos, para identificar tendencias y patrones que revelen insights (perspectivas) importantes y aumenten la eficiencia para respaldar la toma de decisiones.

    .row.justify-content-center
      p Para hacer un análisis de datos se tienen los siguientes pasos: 
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-20.svg', alt='').img1       
            .col-lg
              p.texto1.mt-4 Definir la razón del análisis.


          .row
            .col-lg
              p.texto2.mt-4 Establecer lo que se medirá y cómo se hará.   
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-21.svg', alt='').img2


          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-22.svg', alt='').img1          
            .col-lg
              p.texto1.mt-4 Obtener los datos.


          .row
            .col-lg
              p.texto2.mt-4 Clasificar los datos.  
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-23.svg', alt='').img2


          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-24.svg', alt='').img1      
            .col-lg
              p.texto1.mt-4 Analizar los datos.


          .row
            .col-lg
              p.texto2.mt-4 Realizar una interpretación de los datos.      
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/t1-25.svg', alt='').img2

    .row.justify-content-center.mt-2
      p.mb-5 Y para finalizar, es importante tener presente qué es:
      .col-lg-4
          img(src='@/assets/curso/temas/tema1/t1-26.svg', alt='' data-aos="flip-left").mb-3
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Ordenar los datos")
            .col-12.ps-5
              p.mb-0 Organizar los datos por orden alfabético o numérico, ascendente o descendente. Por ejemplo, puede ordenar una columna que enumere los valores de las ventas de un producto en orden descendente, para ordenar las ventas del producto de la más alta a la más baja.
          .row(titulo="Importar y exportar datos")
            .col-12.ps-5
              p La exportación de datos sirve para mover datos de un entorno a otro. Por ejemplo, se pueden mover datos desde un entorno de desarrollo a uno de producción, o desde una plataforma de base de datos, a otra.
              p Cuando se importa un documento en un proyecto, se puede especificar qué partes del documento se importan y extraen. La función “importación de datos” permite subir información de fuentes externas y combinarla con los datos que se recopilan a través de un #[em software] o aplicación. Se puede utilizar Analytics para organizar y analizar todos los datos de la forma que mejor se adapte a la empresa.
           

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
