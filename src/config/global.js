export default {
  global: {
    componenteFormativo: 'Fundamentos de la analítica de datos',
    descripcionCurso:
      'Este componente formativo profundiza, íntegramente, todo lo que envuelve al término analítica de datos; se conocerá como generar mayor valor a las empresas y se aprenderá sobre conceptos que permiten que las organizaciones puedan analizar todos sus datos en tiempo real, sean no estructurados, estructurados, cualitativos, entre otros, y se deben tener en cuenta en la preparación de los datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/barra1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/barra2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/barra3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/barra4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/barra5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/barra6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Analítica de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fuentes y transformación de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas tecnológicas y <em>Big data</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Licencias <em>software</em> comercial y <em>software</em> libre',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Analítica de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <em>Analítica de datos>/em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eK0QG1SUk9A&t=2s',
    },
    {
      tema: 'Analítica de datos',
      referencia:
        'Ideas Frescas business intelligence. (2020). <em>¿Qué es la analítica de datos?</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FoSv4lay5HM',
    },
    {
      tema: 'Herramientas tecnológicas y <em>Big data</em>',
      referencia:
        'Troncoso, E. (2021). <em>Manejo básico de la herramienta de horas de cálculo excel</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FCLmYmzJkWs',
    },
    {
      tema: 'Licencias <em>software</em> comercial y <em>software</em> libre',
      referencia:
        'Castillo, R. (2020). <em>03 Software libre vs Software Comercial</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GDZ-WYol14Q',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'es el proceso de recopilación, modelización y análisis de datos para extraer información que sirva de apoyo a la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'un almacén de datos diseñado de forma organizada, que facilita la búsqueda de la información que se necesita.',
    },
    {
      termino: 'Campo',
      significado:
        'elemento de un registro de base de datos en el que se almacena una información. Por ejemplo, "nombre" en una libreta de direcciones electrónica.',
    },
    {
      termino: 'Automatización',
      significado:
        'proceso en el cual se utilizan herramientas tecnológicas con necesidad mínima de recurso humano.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'es una herramienta en la cual se define un flujo con una serie de secuencias que dan paso a un resultado de valor observable.',
    },
    {
      termino: 'Data',
      significado:
        'término usado para detallar un alto volumen de datos, de manera organizada para el manejo de diferentes procesos dentro de la organización.',
    },
    {
      termino: 'Dato',
      significado:
        'valor con el que se forman serie y colecciones numéricas o categóricas.',
    },
    {
      termino: 'Defecto',
      significado:
        'problema encontrado en un sistema que causa que este falle cuando desempeña funciones requeridas.',
    },
    {
      termino: 'Defecto',
      significado:
        'problema encontrado en un sistema que causa que este falle cuando desempeña funciones requeridas.',
    },
    {
      termino: 'Instrumento de evaluación',
      significado:
        'evalúa investigación ya sea preguntas, datos estadísticos o cualquier fuente para validar confiabilidad.',
    },
    {
      termino: 'Red',
      significado:
        'se refiere a un grupo de sistemas informáticos autónomos, unidos de forma que posibilitan un cambio de datos, para lo cual se necesita un vínculo físico y una conexión lógica de los sistemas. La cual se ha establecido mediante unos sistemas de red apropiados.',
    },
    {
      termino: 'Redes de datos',
      significado:
        'sistemas de comunicación que se instalan y operan exclusivamente para la transferencia de información entre dispositivos de comunicación de datos (como los ordenadores). Conjunto asociado para manejo de información.',
    },
    {
      termino: 'Registro',
      significado:
        'grupo de datos de información con cierta correlación para un fin.',
    },
    {
      termino: 'Transferencia de datos',
      significado:
        'cuando el responsable del tratamiento de los datos con presencia en Colombia envía o transfiere los datos personales a un receptor que también tiene la connotación de ser responsable del manejo de datos a otro lugar al interior del país o al exterior.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara de Comercio de Cali. (s.f.). <em>Guía básica ¿Qué es la analítica de datos?</em>',
      link:
        'https://www.ccc.org.co/inc/uploads/2019/05/Guia-analitica-de-datos.pdf',
    },
    {
      referencia:
        'Dozo, D. y Martínez Quijano, P. (2013). <em>Glosario Iberoamericano de Protección de Datos.</em>',
      link: 'https://www.habeasdat.com/GLOSARIO.pdf',
    },
    {
      referencia:
        'Pantaleo, G. y Lis Rinaudo, L. (2018). <em>Ingeniería de Software.</em> Alfaomega.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
