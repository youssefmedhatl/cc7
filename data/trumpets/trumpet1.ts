import type { TrumpetData, DialogueLine } from "./types";

const introDialogue: DialogueLine[] = [
  { speaker: "girl", text: { en: "What happens when the first trumpet sounds?", ar: "ماذا يحدث عندما يُنفخ في البوق الأول؟" } },
  { speaker: "father", text: { en: "Hail and fire mingled with blood fall upon the earth.", ar: "يسقط برد ونار مختلطان بدم على الأرض." } },
  { speaker: "girl", text: { en: "That's terrifying.", ar: "هذا مرعب." } },
  { speaker: "father", text: { en: "Watch closely. Follow what Scripture tells us.", ar: "راقب بتمعّن. اتبع ما يخبرنا به الكتاب المقدس." } },
];

const closingDialogue: DialogueLine[] = [
  { speaker: "father", text: { en: "Now, remember what you have seen.", ar: "الآن، تذكّر ما رأيته." } },
];

/**
 * TEMPORARY CONTENT NOTICE
 * The scriptureText field below is a paraphrase placeholder, not a verified
 * quotation. It must be replaced with the verified Coptic Orthodox text
 * (Coptic Reader) before this app is presented as a final deliverable.
 * Reference: Revelation 8:7
 */
const trumpet1: TrumpetData = {
  imageSrc: "/trumpets/trumpet1.jpg", // placeholder - add public/trumpets/trumpet1.jpg
  videoSrc: "/videos/trumpet1.mp4",
  index: 1,
  title: { en: "The First Trumpet", ar: "البوق الأول" },
  shortLabel: { en: "Hail and Fire", ar: "برد ونار" },
  scriptureRef: { en: "Revelation 8:7", ar: "رؤيا ٨: ٧" },
  scriptureIsTemporary: true,
  scriptureText: {
    en:
      "[TEMPORARY PLACEHOLDER — pending verified Coptic Reader text] " +
      "The first angel sounded, and there followed hail and fire mingled with blood, " +
      "and it was cast upon the earth: and a third part of the trees was burnt up, " +
      "and all green grass was burnt up.",
    ar:
      "[نص مؤقت — بانتظار التحقق من نص Coptic Reader] " +
      "والملاك الأول بوّق، فحدث برد ونار مختلطان بدم، وأُلقيا إلى الأرض، " +
      "فاحترق ثلث الأشجار، واحترق كل عشب أخضر.",
  },
  narration: {
    en:
      "The first of seven angels lifts a trumpet to the heavens. What follows is " +
      "not ordinary weather — it is judgment made visible. Hail falls mixed with fire " +
      "and blood, and the green earth is scorched. Watch the trees. Watch the grass. " +
      "A third of what grows is consumed.",
    ar:
      "يرفع الملاك الأول من السبعة بوقه نحو السماء. وما يتبع ذلك ليس طقساً عادياً، " +
      "بل دينونة تتجسّد أمام العين. يسقط برد مختلط بنار ودم، وتحترق الأرض الخضراء. " +
      "راقب الأشجار، راقب العشب — يُستهلك ثلث كل ما ينبت.",
  },
  cinematicSummary: {
    en: "A dark sky splits; burning hail and fire fall over a green landscape, leaving a third of it scorched.",
    ar: "تنشقّ السماء المظلمة، ويسقط برد ونار محترقان فوق أرض خضراء، تاركين ثلثها محروقاً.",
  },
  theme: { primary: "#c9622f", secondary: "#3a2410", particle: "ash" },
  xpOnComplete: 250,
  introDialogue,
  closingDialogue,
  questions: [
    {
      id: "t1-q1",
      prompt: {
        en: "What was burnt up when the first trumpet sounded?",
        ar: "ماذا احترق عندما بوّق الملاك الأول؟",
      },
      options: [
        {
          id: "a",
          text: { en: "A third of the trees and all green grass", ar: "ثلث الأشجار وكل العشب الأخضر" },
        },
        { id: "b", text: { en: "A third of the sea", ar: "ثلث البحر" } },
        { id: "c", text: { en: "A third of mankind", ar: "ثلث البشر" } },
        { id: "d", text: { en: "The sun and moon", ar: "الشمس والقمر" } },
      ],
      correctOptionId: "a",
      explanation: {
        en: "Hail and fire mingled with blood fell on the earth, burning up a third of the trees and all the green grass.",
        ar: "سقط برد ونار مختلطان بدم على الأرض، فاحترق ثلث الأشجار وكل العشب الأخضر.",
      },
    },
  ],
};

export default trumpet1;
