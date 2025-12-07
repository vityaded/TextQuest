const gameData = {
  'start': {
    text: {
      en: "You are on holiday at a sunny beach. You and your friends Max and Amy look at the blue sea. A small boat waits near the sand. A guide smiles and says, 'Dolphins are close today!'.",
      ua: "Ти на канікулах на сонячному пляжі. Ти та твої друзі Макс і Емі дивитеся на блакитне море. Біля піску чекає маленький човен. Гід усміхається й каже: 'Сьогодні дельфіни поруч!'."
    },
    choices: [
      { text: "Put on a life jacket and walk to the boat.", nextScene: 'scene_1' },
      { text: "Play with a beach ball near the water first.", nextScene: 'scene_2' }
    ]
  },

  'scene_1': {
    text: {
      en: "You hold a bright life jacket. The guide checks that the water is clean and safe. The sea looks calm and beautiful. Max asks, 'Are you ready to sail?'.",
      ua: "Ти тримаєш яскравий рятувальний жилет. Гід перевіряє, що вода чиста й безпечна. Море виглядає спокійним і гарним. Макс питає: 'Ти готовий пливти?'."
    },
    choices: [
      { text: "Wear the jacket and climb into the boat.", nextScene: 'scene_boat' },
      { text: "Forget the jacket and jump in quickly.", nextScene: 'end_fail_safety' }
    ]
  },

  'scene_2': {
    text: {
      en: "You throw the beach ball with Amy. It bounces on the sand. You see a plastic bag in the water. The sea should stay clean for the dolphins.",
      ua: "Ти кидаєш пляжний м'яч з Емі. Він відскакує на піску. Ти бачиш пластиковий пакет у воді. Море повинно залишатися чистим для дельфінів."
    },
    choices: [
      { text: "Pick up the bag and put it in a bin.", nextScene: 'scene_clean_up' },
      { text: "Ignore it and run to swim without a jacket.", nextScene: 'end_fail_polluted' }
    ]
  },

  'scene_clean_up': {
    text: {
      en: "You pick up the plastic bag and throw it away. The guide thanks you for keeping the beach clean. He points to the boat and says dolphins like clean water.",
      ua: "Ти піднімаєш пластиковий пакет і викидаєш його. Гід дякує тобі за чистий пляж. Він показує на човен і каже, що дельфіни люблять чисту воду."
    },
    choices: [
      { text: "Join the boat trip with your friends.", nextScene: 'scene_boat' },
      { text: "Stay on the beach and build a sandcastle.", nextScene: 'scene_sandcastle' }
    ]
  },

  'scene_sandcastle': {
    text: {
      en: "You make a small sandcastle with a wall and a little flag. The sun is hot, so you drink water. You hear the guide call, 'The boat is leaving soon!'.",
      ua: "Ти робиш маленький піщаний замок зі стіною й маленьким прапорцем. Сонце гаряче, тому ти п'єш воду. Ти чуєш, як гід кличе: 'Човен скоро відпливає!'."
    },
    choices: [
      { text: "Run to the boat before it sails.", nextScene: 'scene_boat' },
      { text: "Stay and watch the waves from the beach.", nextScene: 'end_calm_beach' }
    ]
  },

  'scene_boat': {
    text: {
      en: "You sit in the boat with your life jacket. The wind is light and the waves are small. You see a dolphin jump. Amy smiles and holds her snorkel mask.",
      ua: "Ти сидиш у човні в рятувальному жилеті. Вітер легкий, хвилі маленькі. Ти бачиш, як стрибає дельфін. Емі усміхається й тримає свою маску для снорклінгу."
    },
    choices: [
      { text: "Put on a snorkel and swim with the guide.", nextScene: 'scene_swim' },
      { text: "Stay in the boat and take photos of the dolphins.", nextScene: 'scene_photos' }
    ]
  },

  'scene_swim': {
    text: {
      en: "You wear your mask and snorkel. The water is cool and clear. A friendly dolphin swims near you. The guide says, 'Stay near the boat and follow me.'.",
      ua: "Ти одягаєш маску й трубку. Вода прохолодна й прозора. Дружній дельфін пливе поруч. Гід каже: 'Тримайся біля човна та йди за мною.'."
    },
    choices: [
      { text: "Stay close, wave to the dolphin, and swim slowly.", nextScene: 'end_success_dolphin' },
      { text: "Swim far away alone toward bigger waves.", nextScene: 'end_fail_wave' }
    ]
  },

  'scene_photos': {
    text: {
      en: "You lift your camera and take photos of the dolphins. The pictures show their happy faces and the beautiful blue water. Max gives you a clean bottle of water to drink.",
      ua: "Ти піднімаєш камеру й фотографуєш дельфінів. На знімках видно їхні щасливі мордочки й гарну блакитну воду. Макс дає тобі пляшку чистої води, щоб ти випив."
    },
    choices: [
      { text: "Join Amy for a short swim with the guide.", nextScene: 'end_success_dolphin' },
      { text: "Sit back and return to the beach early.", nextScene: 'end_calm_beach' }
    ]
  },

  'end_fail_safety': {
    text: {
      en: "You jump into the boat without a life jacket. A wave moves the boat and you slip. The guide stops the trip until everyone is safe. <span class='game-over'>FAILED (safety first)</span>",
      ua: "Ти стрибаєш у човен без рятувального жилета. Хвиля рухає човен, і ти ковзаєш. Гід зупиняє поїздку, доки всі не будуть у безпеці. <span class='game-over'>ПРОВАЛ (спершу безпека)</span>"
    },
    choices: [
      { text: "Try again from the start and wear the jacket.", nextScene: 'start' }
    ]
  },

  'end_fail_polluted': {
    text: {
      en: "You ignore the plastic bag and run into the water without care. The dirty bag floats near you and the guide sends everyone back to the sand. The dolphins swim away. <span class='game-over'>FAILED (the sea is polluted)</span>",
      ua: "Ти ігноруєш пластиковий пакет і біжиш у воду без уваги. Брудний пакет пливе поруч, і гід повертає всіх на пісок. Дельфіни відпливають. <span class='game-over'>ПРОВАЛ (море забруднене)</span>"
    },
    choices: [
      { text: "Start again and keep the beach clean.", nextScene: 'start' }
    ]
  },

  'end_fail_wave': {
    text: {
      en: "You swim far from the boat. Bigger waves rise and you feel tired. The guide must pull you back with a rope. The dolphin is gone. <span class='game-over'>FAILED (too far from the guide)</span>",
      ua: "Ти пливеш далеко від човна. Піднімаються більші хвилі, і ти втомлюєшся. Гід мусить тягнути тебе назад мотузкою. Дельфін зник. <span class='game-over'>ПРОВАЛ (занадто далеко від гіда)</span>"
    },
    choices: [
      { text: "Begin again and stay near the boat.", nextScene: 'start' }
    ]
  },

  'end_calm_beach': {
    text: {
      en: "You stay on the beach and watch the small waves. You eat an ice cream and build more sand walls. It is a calm day, but you miss the dolphin trip. <span class='game-over'>CALM END</span>",
      ua: "Ти залишаєшся на пляжі й дивишся на маленькі хвилі. Ти їси морозиво й будуєш більше піщаних стін. Це спокійний день, але ти пропускаєш поїздку з дельфінами. <span class='game-over'>СПОКІЙНИЙ ФІНАЛ</span>"
    },
    choices: [
      { text: "Play again and try the boat ride.", nextScene: 'start' }
    ]
  },

  'end_success_dolphin': {
    text: {
      en: "You stay close to the guide and the boat. The dolphin swims in a circle and lets you touch its fin gently. You take a clear photo with your friends. The guide says, 'Good job keeping the sea clean and staying safe!'. <span class='game-success'>THE END</span>",
      ua: "Ти тримаєшся близько до гіда й човна. Дельфін пливе по колу та дозволяє тобі обережно торкнутися його плавця. Ти робиш чітке фото з друзями. Гід каже: 'Чудово, що ви тримаєте море чистим і залишаєтеся в безпеці!'. <span class='game-success'>КІНЕЦЬ</span>"
    },
    choices: [
      { text: "Play again from the start.", nextScene: 'start' }
    ]
  }
}; // End of gameData

// --- Vocabulary Data ---  words from the story
const vocabulary = [
  "beach",
  "sand",
  "sea",
  "wave",
  "boat",
  "guide",
  "dolphin",
  "holiday",
  "life jacket",
  "safe",
  "clean",
  "polluted",
  "snorkel",
  "mask",
  "swim",
  "photo",
  "camera",
  "wind",
  "sail",
  "friends",
  "family",
  "bag",
  "bin",
  "ice cream",
  "sun",
  "water",
  "sandcastle",
  "flag",
  "rope"
];

const vocabTranslations = {
  "beach": "пляж",
  "sand": "пісок",
  "sea": "море",
  "wave": "хвиля",
  "boat": "човен",
  "guide": "гід",
  "dolphin": "дельфін",
  "holiday": "канікули",
  "life jacket": "рятувальний жилет",
  "safe": "безпечний",
  "clean": "чистий",
  "polluted": "забруднений",
  "snorkel": "трубка для плавання",
  "mask": "маска",
  "swim": "плавати",
  "photo": "фото",
  "camera": "камера",
  "wind": "вітер",
  "sail": "плисти під парусом",
  "friends": "друзі",
  "family": "родина",
  "bag": "пакет",
  "bin": "смітник",
  "ice cream": "морозиво",
  "sun": "сонце",
  "water": "вода",
  "sandcastle": "піщаний замок",
  "flag": "прапор",
  "rope": "мотузка"
};
