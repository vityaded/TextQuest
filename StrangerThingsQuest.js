// Stranger Things inspired TextQuest adventure.
const gameData = {
  'start': {
    text: {
      en: "In 1983 Hawkins, a group of friends finish a late D&D game. Will Byers bikes home alone through the dark. Something invisible watches from the trees.",
      ua: "1983 року в Гокінсі компанія друзів закінчує пізню гру в D&D. Вілл Байерс їде додому на велосипеді в темряві. Хтось невидимий стежить з дерев."
    },
    choices: [
      { text: "Will rides faster along the main road.", nextScene: 'scene_go_home' },
      { text: "Will cuts through the forest trail to get home quicker.", nextScene: 'forest_search' }
    ]
  },

  'scene_go_home': {
    text: {
      en: "Will takes the main road. Lamps flicker and the night is silent. His bike chain jumps and he hears a growl behind him.",
      ua: "Вілл їде головною дорогою. Ліхтарі мерехтять, а ніч тиха. Ланцюг велосипеда злітає, і він чує гарчання позаду."
    },
    choices: [
      { text: "Drop the bike and run across the garden toward his house.", nextScene: 'forest_search' },
      { text: "Hide inside the garden shed and hope the creature leaves.", nextScene: 'end_fail_missing' }
    ]
  },

  'forest_search': {
    text: {
      en: "The next day the boys search the damp forest. Rain taps the leaves and flashlights cut through fog. Faint lights glow deeper in the woods.",
      ua: "Наступного дня хлопці шукають у вологому лісі. Дощ стукає по листю, а ліхтарики прорізають туман. Глибше в лісі тьмяно світяться вогники."
    },
    choices: [
      { text: "Follow the flickering lights past the creek.", nextScene: 'lab_fence' },
      { text: "Stay on the main path and call Will's name loudly.", nextScene: 'end_fail_missing' }
    ]
  },

  'lab_fence': {
    text: {
      en: "The boys reach the tall fence of Hawkins National Laboratory. A cold hum comes from inside. Footprints lead toward a drainage tunnel.",
      ua: "Хлопці доходять до високої огорожі Національної лабораторії Гокінса. Зсередини лунає холодне гудіння. Сліди ведуть до дренажного тунелю."
    },
    choices: [
      { text: "Sneak through the tunnel into the lab grounds.", nextScene: 'inside_lab' },
      { text: "Mark the location and retreat to tell adults.", nextScene: 'end_fail_missing' }
    ]
  },

  'inside_lab': {
    text: {
      en: "Inside the lab, alarms flash silently. In a small room a frightened girl with a shaved head sits in a hospital gown. Her wrist shows the tattoo '011'.",
      ua: "Усередині лабораторії мовчки блимають тривожні лампи. У маленькій кімнаті сидить налякана дівчинка з поголеною головою в лікарняній сорочці. На її зап'ясті татуювання '011'."
    },
    choices: [
      { text: "Help the girl escape through the tunnel.", nextScene: 'safe_house' },
      { text: "Trigger an alarm to summon guards for help.", nextScene: 'end_fail_captured' }
    ]
  },

  'safe_house': {
    text: {
      en: "The friends hide the girl, Eleven, in Mike's basement. She says Will is in a dark place called the Upside Down. She needs a radio to find him.",
      ua: "Друзі ховають дівчинку, Одинадцять, у підвалі Майка. Вона каже, що Вілл у темному місці під назвою Виворітний світ. Їй потрібне радіо, щоб його знайти."
    },
    choices: [
      { text: "Use the walkie-talkie and a boosted radio to reach Will.", nextScene: 'radio_contact' },
      { text: "Tell Joyce and Hopper about Eleven immediately.", nextScene: 'joyce_house' }
    ]
  },

  'joyce_house': {
    text: {
      en: "Joyce strings Christmas lights across her walls. Letters painted on the wallpaper let Will reply by blinking. He spells 'QUARRY'.",
      ua: "Джойс розвішує різдвяні гірлянди на стінах. Букви, намальовані на шпалерах, дозволяють Віллу відповідати миготінням. Він складає слово 'QUARRY'."
    },
    choices: [
      { text: "Follow the message and head to Sattler Quarry at night.", nextScene: 'quarry_night' },
      { text: "Ignore the clue and keep watching the lights at home.", nextScene: 'end_fail_missing' }
    ]
  },

  'radio_contact': {
    text: {
      en: "Eleven focuses on the radio static. In the dark she hears Will near the school's AV room. He coughs and the sound echoes as if underwater.",
      ua: "Одинадцять концентрується на шумі радіо. У темряві вона чує Вілла біля аудіовізуальної кімнати школи. Він кашляє, і звук відлунює, ніби під водою."
    },
    choices: [
      { text: "Set up a salt bath in the school gym to boost her powers.", nextScene: 'school_lab' },
      { text: "Run to the quarry instead, fearing time is short.", nextScene: 'quarry_night' }
    ]
  },

  'quarry_night': {
    text: {
      en: "Fog sits over the quarry. Flashlights cut across wet rocks. A shadow with long arms steps from the mist—the Demogorgon.",
      ua: "Туман стелиться над кар'єром. Ліхтарики біжать по мокрих каменях. З імли виходить тінь із довгими руками — Демогоргон."
    },
    choices: [
      { text: "Distract it with the lights and flee toward the school.", nextScene: 'school_lab' },
      { text: "Stand and fight alone with a slingshot.", nextScene: 'end_fail_captured' }
    ]
  },

  'school_lab': {
    text: {
      en: "In the empty gym the kids pour bags of salt into a kiddie pool. Eleven lies back, eyes closed, entering the void. She sees Will trapped inside Castle Byers in the Upside Down.",
      ua: "У порожньому спортзалі діти висипають пакети солі в надувний басейн. Одинадцять лягає, заплющує очі й входить у порожнечу. Вона бачить Вілла, замкненого в Замку Байерса у Виворітному світі."
    },
    choices: [
      { text: "Open a gate in the gym to pull Will out.", nextScene: 'gym_gate' },
      { text: "Wait for the police before doing anything risky.", nextScene: 'end_fail_missing' }
    ]
  },

  'gym_gate': {
    text: {
      en: "With lights dimmed and music loud, Eleven pushes her powers. A wet tear in the air appears above the pool—the gate to the Upside Down.",
      ua: "При приглушених вогнях і гучній музиці Одинадцять напружує свої сили. Над басейном з'являється волога розривина в повітрі — ворота до Виворітного світу."
    },
    choices: [
      { text: "Step through the gate together to find Will.", nextScene: 'upside_rescue' },
      { text: "Close the gate quickly out of fear.", nextScene: 'end_fail_captured' }
    ]
  },

  'upside_rescue': {
    text: {
      en: "The air is cold and dust floats like snow. In the ruined Castle Byers, Will huddles, weak but alive. The Demogorgon screeches nearby.",
      ua: "Повітря холодне, пил плаває, мов сніг. У зруйнованому Замку Байерса Вілл тремтить, слабкий, але живий. Поруч верещить Демогоргон."
    },
    choices: [
      { text: "Carry Will and run back through the gate before the creature attacks.", nextScene: 'end_success_rescue' },
      { text: "Chase the Demogorgon deeper into the Upside Down alone.", nextScene: 'end_fail_captured' }
    ]
  },

  'end_success_rescue': {
    text: {
      en: "With Will in their arms, the kids burst back into the gym. The gate seals behind them as police sirens echo outside. Will breathes—the adventure ends in relief. <span class='game-success'>THE END</span>",
      ua: "З Віллом на руках діти вириваються назад у спортзал. Ворота зачиняються позаду, а зовні лунають поліцейські сирени. Вілл дихає — пригода завершується полегшенням. <span class='game-success'>КІНЕЦЬ</span>"
    },
    choices: [
      { text: "Play again from the D&D table.", nextScene: 'start' }
    ]
  },

  'end_fail_missing': {
    text: {
      en: "By morning there is no sign of Will or Eleven. The trail grows cold and Hawkins stays haunted by whispers of the Upside Down. <span class='game-over'>FAILED (vanished)</span>",
      ua: "До ранку немає жодної ознаки Вілла чи Одинадцяти. Слід холоне, і Гокінс лишається з привидами чуток про Виворітний світ. <span class='game-over'>ПРОВАЛ (зникли)</span>"
    },
    choices: [
      { text: "Try the hunt again from the beginning.", nextScene: 'start' }
    ]
  },

  'end_fail_captured': {
    text: {
      en: "The Demogorgon emerges before help arrives. The friends vanish into the dark lab halls, and the gate grows wider. <span class='game-over'>FAILED (captured)</span>",
      ua: "Демогоргон з'являється раніше, ніж приходить допомога. Друзі зникають у темних коридорах лабораторії, а ворота розширюються. <span class='game-over'>ПРОВАЛ (спіймані)</span>"
    },
    choices: [
      { text: "Return to the start at the D&D table.", nextScene: 'start' }
    ]
  }
}; // End of gameData

// --- Vocabulary Data ---
const vocabulary = [
  "forest",
  "laboratory",
  "fence",
  "tunnel",
  "basement",
  "walkie",
  "quarry",
  "demogorgon",
  "gate",
  "upside",
  "rescue",
  "sirens"
];

const vocabTranslations = {
  forest: "ліс",
  laboratory: "лабораторія",
  fence: "паркан",
  tunnel: "тунель",
  basement: "підвал",
  walkie: "рація",
  quarry: "кар'єр",
  demogorgon: "демогоргон",
  gate: "ворота",
  upside: "виворітний",
  rescue: "порятунок",
  sirens: "сирени"
};
