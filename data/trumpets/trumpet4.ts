import type { TrumpetData, DialogueLine } from "./types";

const introDialogue: DialogueLine[] = [
  { speaker: "girl", text: { en: "What happens with the fourth?", ar: "ماذا يحدث مع البوق الرابع؟" } },
  { speaker: "father", text: { en: "The sun, moon, and stars are affected.", ar: "تتأثر الشمس والقمر والنجوم." } },
  { speaker: "girl", text: { en: "So the light itself changes?", ar: "إذن النور نفسه يتغيّر؟" } },
  { speaker: "father", text: { en: "Watch carefully.", ar: "راقب بعناية." } },
];

const closingDialogue: DialogueLine[] = [
  { speaker: "father", text: { en: "Follow what Scripture reveals.", ar: "اتبع ما يكشفه الكتاب المقدس." } },
];

/** TEMPORARY PLACEHOLDER content — pending verified Coptic Reader text. Reference: Revelation 8:12 */
const trumpet4: TrumpetData = {
  imageSrc: "/trumpets/trumpet4.jpg", // placeholder - add public/trumpets/trumpet4.jpg
  videoSrc: "/videos/trumpet4.mp4",
  index: 4,
  title: { en: "The Fourth Trumpet", ar: "البوق الرابع" },
  shortLabel: { en: "The Darkened Sky", ar: "السماء المظلمة" },
  scriptureRef: { en: "Revelation 8:12", ar: "رؤيا ٨: ١٢" },
  scriptureIsTemporary: true,
  scriptureText: {
    en:
      "[TEMPORARY PLACEHOLDER — pending verified Coptic Reader text] " +
      "The fourth angel sounded, and a third part of the sun was smitten, and a third part of the moon, " +
      "and a third part of the stars; so as a third part of them was darkened, and the day shone not " +
      "for a third part of it, and the night likewise.",
    ar:
      "[نص مؤقت — بانتظار التحقق] والملاك الرابع بوّق، فضُرب ثلث الشمس وثلث القمر وثلث النجوم، " +
      "حتى أظلم ثلثها، ولم يُضئ النهار ثلثه، وكذلك الليل.",
  },
  narration: {
    en:
      "The light itself is struck. Sun, moon, stars — each dimmed by a third. The world does not go " +
      "fully dark, but something essential is missing from the sky.",
    ar: "يُضرب النور ذاته. الشمس والقمر والنجوم، يخفت كل منها بمقدار الثلث. لا يُظلم العالم كلياً، لكن شيئاً جوهرياً يغيب عن السماء.",
  },
  cinematicSummary: {
    en: "The sun dims to a third of its light; the moon and stars follow, leaving the sky in an uneasy half-dusk.",
    ar: "تخفت الشمس إلى ثلث نورها، ويتبعها القمر والنجوم، فتبقى السماء في شفق مضطرب.",
  },
  theme: { primary: "#3a3f5c", secondary: "#0c0d16", particle: "smoke-locust" },
  xpOnComplete: 250,
  introDialogue,
  closingDialogue,
  questions: [
    {
      id: "t4-q1",
      prompt: { en: "What portion of the sun, moon, and stars was struck?", ar: "ما مقدار ما ضُرب من الشمس والقمر والنجوم؟" },
      options: [
        { id: "a", text: { en: "A half", ar: "النصف" } },
        { id: "b", text: { en: "A third", ar: "الثلث" } },
        { id: "c", text: { en: "All of it", ar: "كلّه" } },
        { id: "d", text: { en: "A tenth", ar: "العُشر" } },
      ],
      correctOptionId: "b",
      explanation: {
        en: "A third of the sun, moon, and stars was struck, so a third of the day and night lost their light.",
        ar: "ضُرب ثلث الشمس وثلث القمر وثلث النجوم، فأظلم ثلث النهار وثلث الليل.",
      },
    },
  ],
};

export default trumpet4;
