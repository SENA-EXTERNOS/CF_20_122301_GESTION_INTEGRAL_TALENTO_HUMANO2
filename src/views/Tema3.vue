<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bf-t3
    .row.justify-content-around.align-items-center.bkg-t3
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Herramientas tecnológicas y #[em Big data]

      .row.justify-content-center
        .col-lg-4.justify-content-center(data-aos="flip-up")
          figure
            img(src='@/assets/curso/temas/tema3/t3-1.svg', alt='').mb-3    
        .col-lg-8.col-xs-6
          p La tecnología puede ayudar a las empresas a aumentar su rentabilidad, mejorando la eficacia y eficiencia de sus procesos y posicionando la organización en un ambiente progresista, para adaptarse a un futuro incierto. Para lograr la deseada transformación digital en la nueva situación, las directivas deben estar alertas a los avances tecnológicos. Muchas veces la tecnología suele estar relacionada con altos costos, pero es un mito que cada vez se aleja más de la verdad.
          .cajon.color-1.p-4.mb-3
            p Según una definición general: una herramienta tecnológica es cualquier #[i “software”] o #[i “hardware”] que ayuda a realizar bien una tarea, entendiéndose por #[i “realizar bien”], que se obtengan los resultados esperados, con ahorro de tiempo y ahorro en recursos personales y económicos.

    .row.justify-content-center.mt-3
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .b4.bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/t3-2.svg')})`}"
          )
          .b4.bloque-texto-g__texto.p-4
            p.mb-0 La implementación de herramientas tecnológicas, puede contribuir a las organizaciones a incrementar la productividad de sus negocios, perfeccionando la efectividad de sus procesos y ubicando la compañía en un estado de innovación permanente, capaz de ajustarse a las necesidades de los clientes y posicionarse en un mercado más amplio y competitivo a un futuro cercano. Para lograr la una transformación digital y aceptación positiva en la nueva situación, los directivos tienen que estar expectantes a los adelantos tecnológicos que nos ofrece el mercado.

    .row.justify-content-center.mt-5(data-aos="zoom-in")
      p Hay muchas opciones de tecnología, herramientas y plataformas, que ayudarán a las empresas en su desarrollo.
      p Internet, es una herramienta tecnológica de alcance masivo, es un gran entorno de comunicación digital. En el marco empresarial, se pueden destacar herramientas tecnológicas fundamentales como:
      TabsC.color-acento-contenido
        .py-4.py-md-4(titulo="Sistema ERP")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p #[i (Enterprise Resource Planning] - Planificación de Recursos Empresariales)
              p Es un #[i software] de gestión empresarial que permite planificar y controlar los procesos y recursos de negocio de una empresa, de forma integral.
              p La premisa básica y esencial de un sistema ERP, es centralizar y unificar los datos procedentes de las distintas áreas de la empresa, evitando su duplicidad y facilitando la fluidez de la información: #[strong política de dato único.]
              p Un sistema ERP combina la funcionalidad de los distintos programas de gestión en uno solo, basándose en una única base de datos centralizada. Esto permite garantizar la integridad y unicidad de los datos a los que accede cada departamento. Permite integrar los flujos de información de los distintos departamentos de la empresa y facilita el seguimiento de las actividades que constituyen la cadena de valor.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-3.svg', alt='')

        .py-3.py-md-4(titulo="Sistema CRM")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p (Customer Relationship Management - Gestión de las Relación con los Clientes) 
              p Se refiere a todas las estrategias, técnicas, herramientas y tecnologías utilizadas por las empresas, para desarrollar, retener y adquirir clientes.
              p Este software garantiza que cada paso de la interacción con los consumidores se desarrolle de forma fluida y eficaz para aumentar los beneficios globales. El #[i software] recopila datos de los clientes procedentes de múltiples canales. Por lo tanto, el CRM almacena información detallada sobre el historial general de compras, información personal e incluso patrones de comportamiento de compra.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-4.svg', alt='')     

        .py-3.py-md-4(titulo="Sistema BI")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p (Business intelligence – Inteligencia Empresarial)
              p Se refiere a la infraestructura técnica y de procedimiento que recoge, almacena y analiza los datos producidos por las actividades de una empresa.
              p BI es un término amplio que engloba la extracción de datos, el análisis de procesos, la evaluación comparativa del rendimiento y el análisis descriptivo. El BI analiza todos los datos generados por una empresa y presenta informes fáciles de digerir, medidas de rendimiento y tendencias que informan las decisiones de gestión.
              p Las fuentes de datos de BI son diversas; de manera nativa, el programa tiene decenas de opciones que son las más comunes, incluso es tan compatible que, si existiera una fuente a partir de un desarrollo no comercial o poco común, daría la posibilidad de programarlas y crearlas.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-5.svg', alt='') 

        .py-3.py-md-4(titulo="Sistema BPM")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p (Business Process Management - Gestión de procesos empresariales)
              p Se refiere a la forma de observar y luego controlar los procesos presentes en una organización. Es una metodología eficaz que se utiliza en tiempos de crisis para asegurarse de que los procesos son eficientes y eficaces, ya que esto dará lugar a una organización mejor y más rentable.
              p La mejor manera de considerar el BPM, es como una práctica empresarial que abarca técnicas y métodos estructurados. No es una tecnología, aunque hay tecnologías en el mercado que llevan el descriptor por lo que permiten: a saber, identificar y modificar los procesos existentes, para que se alineen con un estado de cosas futuro deseado, presumiblemente mejorado. Se trata de formalizar e institucionalizar mejores formas de hacer el trabajo.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-6.svg', alt='')

        .py-4.py-md-4(titulo="Sistema SGA")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p (Global Harmonized System – Sistema Globalmente Armonizado)
              p Se refiere al conjunto de funciones y servicios que abordan una agrupación completa de operaciones de almacén. Aunque cada SGA puede proporcionar diferentes servicios de nivel secundario, las características principales de un SGA se centran en la gestión del inventario. Un SGA típico puede ofrecer funciones como la gestión de los registros de inventario, los detalles de los envíos de inventario, la ubicación de las existencias dentro del almacén y la gestión de la capacidad general del almacén. El SGA suele formar parte de una solución de software de planificación de recursos empresariales (ERP), pero también puede ser una aplicación independiente. Además, un SGA suele integrarse directamente con otros sistemas de información, como el sistema de gestión de la cadena de suministro, el sistema de información de producción/fabricación y los sistemas de información de ventas.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-7.svg', alt='')

        .py-3.py-md-4(titulo="Facturación electrónica")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p El pago y la presentación de facturas electrónicas, se presenta cuando un vendedor, como una empresa, organización o grupo, envía sus cuentas o facturas a través de Internet, y los clientes pagan las facturas electrónicamente. Esto sustituye al método tradicional en el que las facturas se enviaban en papel y los pagos se hacían por medios manuales, como el envío de cheques.
              p La facturación electrónica tiene una serie de ventajas, como la rapidez en la presentación de las facturas y la reducción de los costes de manipulación de los documentos en papel. Sin embargo, para aprovechar al máximo las ventajas de la facturación electrónica, tanto el vendedor como el comprador deben disponer de sistemas informáticos capaces de gestionar la facturación electrónica y tener acceso a instituciones financieras que puedan realizar pagos electrónicos.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-8.svg', alt='')     

        .py-3.py-md-4(titulo="Aplicación móvil - APP")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p Es un tipo de #[i software] de aplicación, diseñado para ejecutarse en un dispositivo móvil, como un smartphone o una tableta. Las aplicaciones móviles suelen servir para ofrecer a los usuarios servicios similares a los de los ordenadores. Las APP suelen ser pequeñas unidades de #[i software] individuales con funciones limitadas.
              p Las aplicaciones móviles se alejan de los sistemas de #[i software] integrados que suelen encontrarse en los computadores. En su lugar, cada app ofrece una funcionalidad limitada y aislada, como un juego, una calculadora o la navegación web móvil. Aunque las aplicaciones pueden haber evitado la multitarea debido a los limitados recursos de #[i hardware] de los primeros dispositivos móviles, su especificidad es ahora parte de su atractivo porque permite a los consumidores elegir a dedo lo que sus dispositivos son capaces de hacer.
              p 
              p 
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-9.svg', alt='') 

        .py-3.py-md-4(titulo="Sistema geolocalización")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p Es la capacidad de rastrear el paradero de un dispositivo utilizando el GPS, las torres de telefonía móvil, los puntos de acceso wifi o una combinación de ellos. Dado que los dispositivos son utilizados por individuos, la geolocalización utiliza sistemas de posicionamiento para rastrear el paradero de un individuo hasta las coordenadas de latitud y longitud, o más prácticamente, una dirección física. Tanto los dispositivos móviles como los de escritorio pueden utilizar la geolocalización.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-10.svg', alt='')    

        .py-3.py-md-4(titulo="Herramientas ofimáticas")
          .row.p-4
            .col-md-8.mb-4.mb-md-0
              p Se adaptan a cada necesidad de la empresa y el objetivo es ahorrar tiempo y dinero, ofreciendo servicios más competitivos en sus procesos de gestión e innovación, para cambios en la logística del negocio.
              p Se refiere a los programas de aplicación que ayudan a los usuarios en las tareas habituales de oficina, como la creación, actualización y mantenimiento de documentos, el manejo de grandes cantidades de datos, la creación de presentaciones, la programación, etc. El uso de herramientas ofimáticas ahorra tiempo y esfuerzo y permite realizar fácilmente muchas tareas repetitivas.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/t3-11.svg', alt='')                               

    .row.justify-content-center.mt-3
      p Algunas de estas herramientas ofimáticas son:
      .col-lg-10.mt-3
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(data-aos="flip-left" src='@/assets/curso/temas/tema3/t3-12.svg', alt='')

          .tarjeta.estilo-cajon.p-3(x="12%" y="73%" numero="+")
            p Es un #[i software] para crear, almacenar y manipular documentos de texto se llama procesador de textos. Algunos procesadores de texto comunes son: MS-Word, WordPad, WordPerfect, Google Docs, etc.
            p Un procesador de textos permite crear, guardar y editar documentos; formatear las propiedades del texto, como la fuente, la alineación, el color de la fuente, el color de fondo; revisar la ortografía y la gramática; adicionar imágenes; añadir cabeceras y pies de página, establecer márgenes de página e insertar marcas de agua.
          
          .tarjeta.estilo-cajon.p-3(x="32%" y="28%" numero="+")
            p La hoja de cálculo es un #[i software] que ayuda a los usuarios a procesar y analizar datos tabulares. Es una herramienta informática de contabilidad. Los datos se introducen siempre en una celda (intersección de una fila y una columna) y es fácil disponer de fórmulas y funciones para procesar un grupo de celdas. 
            p Algunos de los programas de hojas de cálculo más conocidos son MS-Excel, Gnumeric, Google Sheets, etc. 
            p Esta es una lista de actividades que se pueden realizar dentro de un #[i software] de hoja de cálculo: cálculos sencillos como la suma, la media, el recuento; preparación de tablas y gráficos sobre un grupo de datos relacionados; introducción de datos; formateo de datos; formateo de celdas; cálculos basados en comparaciones lógicas.

          .tarjeta.estilo-cajon.p-3(x="50%" y="73%" numero="+")
            p El #[i software] que gestiona el almacenamiento, la actualización y la recuperación de datos mediante la creación de bases de datos se denomina sistema de gestión de bases de datos. Algunas herramientas populares de gestión de bases de datos son MS-Access, MySQL, Oracle, FoxPro, etc.

          .tarjeta.estilo-cajon.p-3(x="68.3%" y="28%" numero="+")
            p La herramienta de presentación permite al usuario mostrar información desglosada en pequeños fragmentos y dispuesta en páginas denominadas diapositivas. Una serie de diapositivas que presentan una idea coherente a un público se denomina presentación. Las diapositivas pueden tener texto, imágenes, tablas, audio, video u otra información multimedia. MS-PowerPoint, OpenOffice Impress, Lotus Freelance, son algunas de las herramientas de presentación más populares.

          .tarjeta.estilo-cajon.p-3(x="89%" y="73%" numero="+")
            p Son herramientas que las empresas utilizan para crear, enviar, probar, optimizar e informar sobre sus campañas de correo electrónico. Una de las herramientas de marketing por correo electrónico más comunes es un proveedor de servicios de correo electrónico, o ESP, como Campaign Monitor, que permite a las empresas crear hermosos correos electrónicos, crear recorridos automatizados y entregar mensajes personalizados que mejoran su relación con los clientes.

    .row.justify-content-center.mt-4
      .col-lg-8
        .cajon.color-2.p-4.mb-3.mt-2
          p Documentos, hojas de cálculo, presentaciones y notas, son los archivos que hacen que el trabajo funcione, que muestran un nuevo proyecto y el rendimiento de un espacio de tiempo y de las ideas para el futuro. Son una parte tan crucial de la informática que hoy en día es difícil imaginar un ordenador sin un paquete ofimático.

    .row.justify-content-start.align-items-center.mb-5.mt-5        
      .col-lg-4
        .color-degrade.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 #[i Big data] - Metodología datos masivos 

    .row.justify-content-center.mt-3
      .col-lg-4.justify-content-center(data-aos="flip-up")
        figure
          img(src='@/assets/curso/temas/tema3/t3-13.svg', alt='').mb-3    
      .col-lg-8.col-xs-6
        p Desde hace mucho tiempo se almacena y se accede a cantidades de información, y es en esta época cuando esa administración de datos toma el nombre de #[i Big data] o datos masivos.
        p Es la expresión que explica que una gran cantidad de datos aumenta, de manera exponencial, con el correr del tiempo; se refiere al conjunto de datos tan grande y profundo, que ninguna de las herramientas clásicas de datos puede almacenarlos o procesarlos de manera eficiente; se refiere a un conjunto de estrategias que permiten reunir y analizar una gran cantidad de datos, en los que se encuentran modelos desconocidos que hacen que información importante pueda ser evidente.
        .cajon.color-1.p-4.mb-3
          p No hay una metodología única a seguir en las aplicaciones reales a gran escala. Normalmente, una vez definido el problema de negocio, se necesita una etapa de investigación para diseñar la metodología a utilizar. Sin embargo, es relevante mencionar unas pautas generales que se aplican a casi todos los problemas.    

    .row.justify-content-center.mt-4
      p.mb-4 Una de las tareas más importantes en el análisis de #[i Big data] es el modelado estadístico, es decir, los problemas de clasificación o regresión supervisados y no supervisados. Una vez que los datos se han limpiado y pre-procesado, disponibles para el modelado, se debe tener cuidado en la evaluación de diferentes modelos con métricas de pérdida razonables y luego, una vez que el modelo se implementa, se debe informar de la evaluación y los resultados. Un error común en la modelización predictiva es limitarse a implementar el modelo y no medir nunca su rendimiento.
      p Cuando se habla de #[i Big data], se hacen evidentes sus dimensiones, enfocadas en el manejo de grandes cantidades de información:
      .col-lg-8
        TabsA.color-acento-contenido.mt-3
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Volumen")
            .row.p-4
              .col-auto
                p Se refiere al gigantesco almacenamiento de datos que deben gestionar las empresas y que son procedentes de las redes sociales, transacciones comerciales, dispositivos inteligentes, equipo industrial, videos, medios sociales y nuevas plataformas, lo que incluye un potencial inmenso y al mismo tiempo un desafío. Su flujo permanente hace que los datos tengan un ciclo de vida muy corto. Los avances tecnológicos posibilitan, sin embargo, otras formas avanzadas de almacenamiento, así como también de administración, explotación y análisis.
                
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Velocidad")
            .row.p-4
              .col-auto
                p Con el desarrollo descomunal que ha tenido el Internet de las Cosas, los datos llegan a las organizaciones a una velocidad sin precedentes y entonces se deben administrar de manera oportuna. Los dispositivos, los sensores y los medidores inteligentes, estimulan la exigencia de organizar esas cantidades de información en tiempo real. El corto ciclo de vida de los datos impulsa a la existencia de una alta velocidad de respuesta y de proceso para evitar su obsolescencia. Una respuesta rápida es importante a la hora de optimizar y rentabilizar el uso adecuado de los datos para así aumentar la exactitud y calidad de los resultados.

          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Variedad")
            .row.p-4
              .col-auto
                p Los datos se manifiestan en toda clase de formatos; van desde datos numéricos estructurados en bases de datos tradicionales hasta documentos de texto no estructurados, correos electrónicos, videos, audios y transacciones financieras, etc. Además de las velocidades y variedades de datos en desarrollo, los flujos de esos datos son imprevisibles, cambian y varían con mucha frecuencia. Las nuevas plataformas y redes sociales, reducen el ciclo de vida de los datos y hacen que su origen venga de muchas más fuentes; esa mezcla incluye textos, imágenes, web, tweets, audios, videos, etc.
                
          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Veracidad")
            .row.p-4
              .col-auto
                p Se refiere a la calidad de los datos que llegan. Como esos datos provienen de muchas fuentes diferentes, no es fácil vincular, comparar, limpiar y transformarlos a través de los sistemas existentes. Es importante controlar la integridad y la fiabilidad de los datos. Si los datos son buenos, confiables, y veraces, las decisiones tomadas en función de estos serán acertadas. Las instituciones deben conectar y asociar las relaciones, las categorías y los diversos vínculos de datos.

          .tarjeta.colorTab.color-acento-contenido--borde.p-3(style="background-color:#fdf4d1" titulo="Valor")
            .row.p-4
              .col-auto
                p Es la dimensión más importante del Big data y, de alguna manera, incluye a todas las demás. En definitiva, si todas las demás dimensiones son correctas, se podrá extraer más información y conocimiento. Por lo tanto, serán datos muy valiosos. El valor implica amortizar los datos, sacar toda la inteligencia que tienen y generar ventajas competitivas.
      .col-lg-4
        img(src='@/assets/curso/temas/tema3/t3-14.svg', alt='' data-aos="flip-up").mb-3
</template>

<script>
export default {
  name: 'Tema3',
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
