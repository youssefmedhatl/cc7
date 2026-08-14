import type { TrumpetData, DialogueLine } from "./types";

const introDialogue: DialogueLine[] = [
  { speaker: "girl", text: { en: "The fifth trumpet feels different.", ar: "البوق الخامس يبدو مختلفاً." } },
  { speaker: "father", text: { en: "It is.", ar: "بالفعل." } },
  { speaker: "girl", text: { en: "What happens?", ar: "ماذا يحدث؟" } },
  { speaker: "father", text: { en: "Smoke rises from the abyss, and the vision becomes darker.", ar: "يصعد دخان من الهاوية، وتصبح الرؤيا أكثر ظلمة." } },
  { speaker: "girl", text: { en: "And the locusts?", ar: "وماذا عن الجراد؟" } },
  { speaker: "father", text: { en: "Watch their description carefully.", ar: "راقب وصفها بعناية." } },
];

const closingDialogue: DialogueLine[] = [
  { speaker: "father", text: { en: "Remember what Scripture says.", ar: "تذكّر ما يقوله الكتاب المقدس." } },
];

/** TEMPORARY PLACEHOLDER content — pending verified Coptic Reader text. Reference: Revelation 9:1-11 */
const trumpet5: TrumpetData = {
  imageSrc: "/trumpets/trumpet5.jpg", // placeholder - add public/trumpets/trumpet5.jpg
  videoSrc: "/videos/trumpet5.mp4",
  index: 5,
  title: { en: "The Fifth Trumpet", ar: "البوق الخامس" },
  shortLabel: { en: "The Bottomless Pit", ar: "البئر بلا قرار" },
  scriptureRef: { en: "Revelation 9:1-11", ar: "رؤيا ٩: ١-١١" },
  scriptureIsTemporary: true,
  scriptureText: {
    en:
      "[TEMPORARY PLACEHOLDER — pending verified Coptic Reader text] " +
      "The fifth angel sounded, and I saw a star fall from heaven unto the earth: and to him was given " +
      "the key of the bottomless pit. And he opened the bottomless pit; and there arose a smoke out of " +
      "the pit, as the smoke of a great furnace; and the sun and the air were darkened by reason of " +
      "the smoke of the pit.",
    ar:
      "[نص مؤقت — بانتظار التحقق] والملاك الخامس بوّق، فرأيت كوكباً ساقطاً من السماء إلى الأرض، " +
      "وأُعطي مفتاح بئر الهاوية. ففتح بئر الهاوية، فصعد دخان من البئر كدخان أتون عظيم، " +
      "فأظلمت الشمس والجو من دخان البئر.",
  },
  narration: {
    en:
      "A key is given, a pit is opened, and smoke rises like the breath of a furnace. This trumpet " +
      "marks a solemn turn — Scripture calls what follows the first of three woes. The atmosphere " +
      "should feel weighty and serious, not theatrical.",
    ar:
      "يُعطى مفتاح، ويُفتح بئر، ويصعد دخان كنَفَس أتون. يمثّل هذا البوق منعطفاً جِدّياً — يسمّي الكتاب المقدس ما يليه " +
      "أول الويلات الثلاث. ينبغي أن يكون الجو مهيباً وجاداً، لا استعراضياً.",
  },
  cinematicSummary: {
    en: "A star descends and a chasm opens in the earth; furnace-like smoke rises and darkens the sky above it.",
    ar: "ينحدر كوكب، وينفتح شق عميق في الأرض، ويتصاعد دخان كدخان أتون يُظلم السماء فوقه.",
  },
  theme: { primary: "#8a5a1f", secondary: "#160f05", particle: "smoke-locust" },
  xpOnComplete: 250,
  introDialogue,
  closingDialogue,
  questions: [
    {
      id: "t5-q1",
      prompt: { en: "What was given to the fallen star?", ar: "ماذا أُعطي للكوكب الساقط؟" },
      options: [
        { id: "a", text: { en: "A crown", ar: "تاج" } },
        { id: "b", text: { en: "The key of the bottomless pit", ar: "مفتاح بئر الهاوية" } },
        { id: "c", text: { en: "A sword", ar: "سيف" } },
        { id: "d", text: { en: "A scroll", ar: "درج" } },
      ],
      correctOptionId: "b",
      explanation: {
        en: "The star was given the key of the bottomless pit, and when it was opened, smoke rose like from a great furnace.",
        ar: "أُعطي الكوكب مفتاح بئر الهاوية، ولما فُتحت صعد منها دخان كدخان أتون عظيم.",
      },
    },
  ],
};

export default trumpet5;
