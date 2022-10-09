const catalogue = [
  {
    letter: "a",
    status: 0,
    question: [
      "Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      "Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo",
      "Trozo de cualquier material ardiendo pero sin llama",
    ],
    answer: ["abducir", "arteria", "ascua"],
  },
  {
    letter: "b",
    status: 0,
    question: [
      "Juego que ha sacado de quicio a todos los 'ISDICoders' en las sesiones de precurso",
      "Líquido amargo de color amarillo verdoso producido por el hígado y que ayuda a la digestión de los alimentos",
      "En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula",
    ],
    answer: ["bingo", "bilis", "bitacora"],
  },
  {
    letter: "c",
    status: 0,
    question: [
      "Niño, crío, bebé",
      "Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes.",
      "Estilo de pintura que comenzó en Francia a principios de este siglo y que se caracteriza por representar figuras y objetos mediante formas geométricas.",
    ],
    answer: ["churumbel", "cicerone", "cubismo"],
  },
  {
    letter: "d",
    check: "unchecked",
    status: 0,
    question: [
      "Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      "Signo ortográfico que se coloca encima de la u para indicar que esta letra ha de pronunciarse.",
      "Rama de la política que se ocupa del estudio de las relaciones internacionales",
    ],
    answer: ["diarrea", "dieresis", "diplomacia"],
  },
  {
    letter: "e",
    status: 0,
    question: [
      "Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      "Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra. ",
      "Línea que se forma en la piel cuando ésta se ha estirado excesivamente.",
    ],
    answer: ["ectoplasma", "equinocio", "estria"],
  },
  {
    letter: "f",
    status: 0,
    question: [
      "Que no requiere gran esfuerzo, capacidad o dificultad",
      "Sonido de una letra.",
      "Ciencia que estudia las funciones de los órganos de los seres vivos.",
    ],
    answer: ["facil", "fonema", "fisiologia"],
  },
  {
    letter: "g",
    status: 0,
    question: [
      "Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      "Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo.",
      "Se dice de las personas que viven en las grandes llanuras de Argentina y Uruguay y llevan el ganado de un lado a otro.",
    ],
    answer: ["galaxia", "glaciacion", "gaucho"],
  },
  {
    letter: "h",
    status: 0,
    question: [
      "Suicidio ritual japonés por desentrañamiento",
      "Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión.",
      "Poesía o composición musical en alabanza de alguien o algo, como la que se dedica a un país.",
    ],
    answer: ["harakiri", "hinojo", "himno"],
  },
  {
    letter: "i",
    status: 0,
    question: [
      "Templo cristiano",
      "Mineral capaz de atraer el hierro u otros metales.",
      "Capacidad para inventar cosas o para pensar y hablar con gracia.",
    ],
    answer: ["iglesia", "iman", "ingenio"],
  },
  {
    letter: "j",
    status: 0,
    question: [
      "Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      "Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno.",
      "Cría del jabalí.",
    ],
    answer: ["jabali", "jade", "jabato"],
  },
  {
    letter: "k",
    status: 0,
    question: [
      "Persona que se juega la vida realizando una acción temeraria",
      "Construcción pequeña que se instala en la calle u otro lugar público para vender en ella periódicos, flores,",
      "Salsa de tomate condimentada con vinagre, azúcar y especias.",
    ],
    answer: ["kamikaze", "kiosco", "ketchup"],
  },
  {
    letter: "l",
    status: 0,
    question: [
      "Hombre lobo",
      "Frase que expresa la forma en que debe actuar una persona.",
      "Gusano muy largo de color rojizo que se alimenta de sustancias que hay en la tierra.",
    ],
    answer: ["licantropo", "lema", "lombriz"],
  },
  {
    letter: "m",
    status: 0,
    question: [
      "Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      "Nombre que se daba a los musulmanes que vivían en los reinos cristianos de la península ibérica.",
      "Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo.",
    ],
    answer: ["misantropo", "mudejar", "miriñaque"],
  },
  {
    letter: "n",
    status: 0,
    question: [
      "Demostración de poca inteligencia",
      "En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos.",
      "Árbol grande con la corteza lisa y de color gris cuyo fruto es la nuez.",
    ],
    answer: ["necedad", "ninfa", "nogal"],
  },
  {
    letter: "ñ",
    status: 0,
    question: [
      "Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      "Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie.",
      "Cursi o demasiado delicado.",
    ],
    answer: ["señal", "ñandu", "ñoño"],
  },
  {
    letter: "o",
    status: 0,
    question: [
      "Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      "Se dice del color que es una mezcla de amarillo y marrón.",
      "Palabra que imita el sonido que hace un animal o una cosa.",
    ],
    answer: ["orco", "ocre", "onomatopeya"],
  },
  {
    letter: "p",
    status: 0,
    question: [
      "Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      "Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él.",
      "Conjunto de reglas o ceremonias que hay que cumplir en los actos oficiales o solemnes.",
    ],
    answer: ["protoss", "pabellon", "protocolo"],
  },
  {
    letter: "q",
    status: 0,
    question: [
      "Producto obtenido por la maduración de la cuajada de la leche",
      "Pueblo indio que habita en Perú y que vivía allí antes del descubrimiento de América.",
      "Cosa que, sin ser real, alguien la imagina como posible o verdadera.",
    ],
    answer: ["queso", "quechua", "quimera"],
  },
  {
    letter: "r",
    status: 0,
    question: [
      "Roedor",
      "Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes.",
      "Tabla o elemento similar que se coloca contra la pared para poner en ella objetos.",
    ],
    answer: ["raton", "remora", "repisa"],
  },
  {
    letter: "s",
    status: 0,
    question: [
      "Comunidad salvadora de todo desarrollador informático",
      "Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos",
      "Nombre de dos momentos del año que marcan el inicio del verano y el comienzo del invierno.",
    ],
    answer: ["stackoverflow", "sotana", "Solsticio"],
  },
  {
    letter: "t",
    status: 0,
    question: [
      "Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      "Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias.",
      "Capa de la atmósfera más cercana a la superficie de la Tierra, en la que tienen lugar los fenómenos del tiempo meteorológico.",
    ],
    answer: ["terminator", "testamento", "troposfera"],
  },
  {
    letter: "u",
    status: 0,
    question: [
      "Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      "Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven.",
      "Algo que es bueno y que deseamos pero que es imposible o muy difícil de realizar.",
    ],
    answer: ["unamuno", "urbanizacion", "utopia"],
  },
  {
    letter: "v",
    status: 0,
    question: [
      "Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido.",
      "	Parte hacia afuera que tienen las gorras por delante y que sirve para que el sol no nos haga daño en los ojos.",
    ],
    answer: ["vikingos", "Vencejo", "visera"],
  },
  {
    letter: "w",
    status: 0,
    question: [
      "Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      "Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales.",
      "Película del oeste americano.",
    ],
    answer: ["sandwich", "whisky", "western"],
  },
  {
    letter: "x",
    status: 0,
    question: [
      "Toxina bacteriana utilizada en cirujía estética",
      "Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo.",
      "Odio o antipatía hacia los extranjeros.",
    ],
    answer: ["botox", "xilografia", "xenofobia"],
  },
  {
    letter: "y",
    status: 0,
    question: [
      "Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
      "Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío.",
      "Elemento químico de color oscuro que se encuentra en el suelo en forma de sales, así como en las algas y otros animales marinos.",
    ],
    answer: ["peyote", "yak", "yodo"],
  },
  {
    letter: "z",
    status: 0,
    question: [
      "Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación.",
      "Lugar donde hay muchas zarzas.",
    ],
    answer: ["zen", "zocalo", "zarzal"],
  },
];

let turn;
let answer;
let score;
let finish;
let ranking = [];
let namePlayer = "";
let finishRound;
let time;
let questions;
let randomNum;
let fails;
let answers;

//Juego dividido en 2 partes: Juego nuevo y Nuevo turno

const pasapalabra = () => {
  newGame();
  newTurn();
};

//Parte 1: Juego nuevo

const newGame = () => {
  time = true;
  turn = 0;
  score = 0;
  fails = 0;
  answers = 0;
  finishRound = false;
  finish = false;
  questions = [];

  for (let i = 0; i < catalogue.length; i++) {
    randomNum = getRandomNum();
    questions.push({
      letter: catalogue[i].letter,
      status: 0,
      question: catalogue[i].question[randomNum],
      answer: catalogue[i].answer[randomNum],
    });
  }

  namePlayer = prompt("How is your name?");
  console.log(`Hi ${namePlayer}! the rules of this game are:\n `);
  alert(`Are you ready ${namePlayer}??`);
  alert(`Lets start!!`);
  setTimeout(timeOut, 20000);
};

//Parte 1.1: Temporizador
const timeOut = () => {
  alert("Time out!");
  time = false;
};

//Parte 1.2: Conseguir un numero random para hacer el rosco

let getRandomNum = () => {
  return Math.floor(Math.random() * 3);
};

//Nuevo turno: 2 partes

const newTurn = () => {
  askQuestion();
  checkAnswer();
};

//Parte 1: Preguntar

const askQuestion = () => {
  if (!time) {
    endGame();
  } else {
    while (finishRound === false && questions[turn].status != 0) {
      turn++;
      if (turn === questions.length) {
        finishRound = true;
        break;
      }
    }
    if (finishRound === true) {
      answer = null;
    } else {
      answer = prompt(
        `Con la ${questions[turn].letter.toUpperCase()}:\n${
          questions[turn].question
        }`
      );
    }
  }
};

//Parte 2: Comprobar respuesta

const checkAnswer = () => {
  if (!time) {
    endGame();
  } else {
    if (answer === "END") {
      alert("The game is finished because you have wrote END");
      endGame();
    } else {
      if (answer === null || answer.toLowerCase() === "pasapalabra") {
        console.log("pasapalabra");
      } else if (answer.toLowerCase() === questions[turn].answer) {
        alert("Correct, you have 1 Point!");
        questions[turn].status = 1;
        score++;
        answers++;
      } else {
        alert(`Incorrect! the answer was: ${questions[turn].answer}`);
        questions[turn].status = 2;
        fails++;
        answers++;
      }
      turn++;
      if (turn > questions.length - 1) {
        checkFinish();
        if (finish === true) {
          endGame();
        } else {
          finishRound = false;
          turn = 0;
          newTurn();
        }
      } else {
        newTurn();
      }
    }
  }
};

//Parte 2.1: comprobar si ha acabado

const checkFinish = () => {
  finish = true;

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status === 0) {
      finish = false;
    }
  }
};

//Parte 2.2: Que pasa si ha acabado

const endGame = () => {
  let notAswered = questions.length - answers;
  alert(
    `You have finished the game with a score of: ${score} hits, ${fails} fails and ${notAswered} not answered`
  );
  ranking.push({ name: namePlayer, score: score });
  showRanking();
  switch (prompt("Do you wanna play again? y/n")) {
    case "y":
      return pasapalabra();
    default:
      return alert("Have a nice day!");
  }
};

//Parte 2.2.1: Mostrar el ranking si ha acabado

const showRanking = () => {
  let orderedRank = ranking.sort((a, b) => b.score - a.score);
  console.table(orderedRank);
};

pasapalabra();
