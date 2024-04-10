import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";



i18n
.use(Backend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translation: {
          empanadaGallega: 'Empanada galega',
          navInicio: "Página inicial",
          navEmpanadas: "Empanadas",
          navPanaderia: "Padaria",
          navPasteleriaBolleria: "Doces e Doces",
          navContacto: "Contato",
          titleHeader: "PÃO E SABOR",
          dostitleHeader: 'Doces e Doces',
          titleEmpanadas: "Empanadas no mundo",
          titleHome: "Esta é a página inicial",
          titlePanaderia: "Esta é a página da padaria",
          titleContacto: "Esta é a página de contato",
          titlePiePagina: "Rodapé do título",
          titleError404: "Erro 404",
          titlePagNoEncon: "Página não encontrada",
          h2Amasado : "Amassar",
          texto_uno: "1. Amassar é a parte da confecção do pão depois da mistura, e na qual o que fazemos principalmente é desenvolver o glúten contido na farinha, fazer com que a massa ganhe elasticidade e incorpore ar. Em última análise, é responsável, entre outras coisas, por criar a estrutura do pão. Não existe um método único de cozedura, varia consoante o tipo de pão, as características da padaria e as matérias-primas a utilizar. As etapas mais comuns são: - Amassadura, fermentação e 1ª cozedura: a massa é feita, fermentada e cozinhada como no processo tradicional, mas a cozedura é interrompida antes do produto estar finalizado.- Resfriamento e congelamento: o pão é resfriado e depois congelado. Quando o pão sai do túnel de congelamento, ele é imediatamente acondicionado em saco plástico bem fechado e colocado em caixas de papelão especiais para congelamento.- Armazenamento e transporte: é armazenado a uma temperatura constante não superior a -14 ºC e é transportado até ao ponto de venda em veículos congeladores, de forma a não quebrar a cadeia de frio, que garantem a temperatura de congelação adequada ou, se for caso disso, refrigeração.- 2º Cozimento-cozimento: uma vez no ponto de venda, o cozimento é finalizado em fornos especiais.",
          h2Fermentacion: 'Fermentação',
          texto_dos:"2. Fermentar e levedar o pão significa permitir que o fermento se alimente dos açúcares da farinha e exale gases e álcool, o que faz com que o pão se expanda, cresça e adquira textura e sabor agradáveis. Misture os ingredientes. Misturar não é amassar. Existem pães que são feitos apenas misturando os ingredientes e deixando-os descansar. Eles não precisam de amassar. Uma lição valiosa que aprendemos é que o descanso funciona por si só. Noutros casos, como pães com migalhas muito compactas e pouco húmidas, é necessário um trabalho intenso de amassamento. Nesta etapa de fazer o pão, o que você deve ter em mente é que ao misturar os ingredientes, você o faz de forma consistente e homogênea para que todas as etapas subsequentes funcionem corretamente, mesmo que você não vá amassar e você só planejo deixá-lo descansar.",
          h2cocion: 'Cocción',
          texto_tres: "3.De um modo geral e de forma tradicional, para obter um pão bem desenvolvido e com uma boa côdea, começaremos a cozer a uma temperatura mais elevada e à medida que a cozedura avança iremos baixando progressivamente a temperatura. Se cozermos o pão a uma temperatura excessivamente elevada durante a cozedura, o calor não será bem transmitido ao interior e a crosta torrará demasiado. Pelo contrário, se cozermos o pão a uma temperatura muito baixa ou durante pouco tempo, o pão ficará subdesenvolvido, húmido e indigesto. O tipo de pão que vamos assar também determinará a temperatura de cozimento. Em pães cuja massa é muito hidratada* ou fermentada são recomendadas temperaturas de cozedura mais elevadas, enquanto em massas pouco hidratadas ou em pães maiores em que se pretende obter um miolo mais compacto são recomendadas temperaturas de cozedura mais baixas. Assim fica o nosso pão, após o cozimento fica com sabor e textura crocante pronto para servir à mesa.",
          migas_footer: "Migalhas amigáveis",
          h2_footer: "todos os direitos autorais como trabalho de estúdio",
          parrafo_footer: "Todos os nossos produtos são cáceros, e tudo o que você nos pede ajuda na criação do nosso produto. Para maiores informações entre em contato conosco, teremos o maior prazer em atendê-lo.",
          h3_footer: "Endereço rua me encontre com carreira me procure",
          h33_footer: "telefone de contato 655-555-555",
          h1_titulo: 'PROJETO "Migalhas Amigáveis"',
        }
      },
      es: {
        translation: {
          titleHeader: 'PAN Y SABOR',
          dostitleHeader: 'Pasteleria y Bolleria',
          empanadaGallega: 'Empanada gallega',
          navInicio: "Ir a Inicio",
          navEmpanadas: "Empanadas",
          navPanaderia: "Panadería",
          navPasteleriaBolleria: "Pastelería y Bollería",
          navContacto: "Contacto",
          titleEmpanadas: "Empanadas en el mundo",
          titleHome: "Esta es la página de inicio",
          titlePanaderia: "Esta es la página de panadería",
          titleContacto: "Esta es la página de contacto",
          titlePiePagina: "Título pié de página",
          titleError404: "Error 404",
          titlePagNoEncon: "Página no encontrada",
          h2Amasado : "Amasado",
          texto_uno: "1. El amasado es la parte de la elaboración de un pan posterior al mezclado, y en el que lo que hacemos principalmente es desarrollar el gluten que contienen las harinas, que la masa gane elasticidad e incorporar aire. En definitiva es el responsable de, entre otras, crear la estructura del pan. No existe un sólo método de panificación, varía en función del tipo de pan, las características del obrador y de las materias primas a utilizar. Las etapas más comunes son:Amasado, fermentación y 1ª cocción: la masa se elabora, fermenta y cuece como en el proceso tradicional, pero la cocción se interrumpe antes del acabado del producto.Enfriamiento y congelación: el pan se enfría y posteriormente se congela. Cuando el pan sale del túnel de congelación se empaqueta inmediatamente en una bolsa de plástico bien cerrada y se introduce en cajas de cartón especiales para congelación.- Almacenamiento y transporte: se almacena a temperatura constante no superior a -14 ºC y se transporta hasta el punto de venta en vehículos congeladores, para no romper la cadena de frío, que garantizan la temperatura adecuada de congelación o en su caso refrigeración.2ª Cocción-horneado: una vez en el punto de venta, se termina la cocción en hornos especiales.",
          h2Fermentacion: 'Fermentación',
          texto_dos:"2. Fermentar y levar el pan es permitir que la levadura se nutra de los azúcares de la harina y espire gases y alcohol, lo que hace que el pan se expanda, se leve y adquiera una textura y sabor agradables. Mezclar los ingredientes Mezclar no es amasar. Hay panes que se consiguen solo mezclando los ingredientes y dejándolos reposar. No necesitan amasado. Una valiosa lección que hemos aprendido es que el reposo amasa por sí solo. En otros casos como por ejemplo en panes con miga muy compacta y poco húmeda si es necesario un trabajo intenso de amasado. En esta paso de elaboración de pan lo que tienes que tener en cuenta es que cuando mezcles los ingredientes, lo hagas de una forma consistente y homogénea para que así todos los pasos posteriores funcionen correctamente, incluso si no vas a amasar y solo piensas dejarla reposar.",
          h2coccion: 'assando',
          texto_tres: "3.En general y de forma tradicional, para obtener un pan bien desarrollado y con una buena corteza, comenzaremos horneando a mayor temperatura y a medida que avanza la cocción iremos disminuyendo la temperatura progresivamente. Si cocemos el pan a una temperatura excesivamente alta durante todo el horneado, no se transmitirá bien el calor al interior y se tostará demasiado la corteza. Por lo contrario, si horneamos el pan a una temperatura demasiado baja o durante poco tiempo, el pan estará poco desarrollado, húmedo y será indigesto. El tipo de pan que vayamos a hornear también determinará la temperatura del horneado. En panes cuya masa sea muy hidratada* o fermentada se recomiendan temperaturas más altas de horneado, mientras que en masas poco hidratadas o en panes más grandes en los que se quiera conseguir una miga más compacta se recomiendan temperaturas de cocción más bajas. Así es como queda nuestro pan,después de su proceso de horneado queda con un sabor y una textura crujiente listo para servir a la mesa.",
          migas_footer: "Migas a migas",
          h2_footer: "todos los derechos de autor como trabajo de estudio",
          parrafo_footer: "todos nuestros productos son caceros, y todo los que nos pide sanida en creación de nuestro producto.para mas información ponga se en conctacto con nostros, estaremos encantado de atenderles.",
          h3_footer: "Dirección calle encuentrame con carrera buscame",
          h33_footer: "telefono de contacto 655-555-555",
          h1_titulo: 'PROYECTO "Migas amigas"',
        }
      },
    },
  });
export default i18n;