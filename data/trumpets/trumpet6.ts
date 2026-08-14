import type { TrumpetData, DialogueLine } from "./types";

const introDialogue: DialogueLine[] = [
  { speaker: "girl", text: { en: "Six trumpets already.", ar: "ستة أبواق بالفعل." } },
  { speaker: "father", text: { en: "And the sixth brings another great vision.", ar: "والسادس يحمل رؤيا عظيمة أخرى." } },
  { speaker: "girl", text: { en: "What should I look for?", ar: "ما الذي يجب أن أبحث عنه؟" } },
  { speaker: "father", text: { en: "Listen first. Then watch.", ar: "استمع أولاً. ثم راقب." } },
];

const closingDialogue: DialogueLine[] = [
  { speaker: "girl", text: { en: "Horses...", ar: "خيول..." } },
  { speaker: "father", text: { en: "Look closely at the description.", ar: "انظر بتمعّن إلى الوصف." } },
];

/** TEMPORARY PLACEHOLDER content — pending verified Coptic Reader text. Reference: Revelation 9:13-21 */
const trumpet6: TrumpetData = {
  imageSrc: "/trumpets/trumpet6.jpg", // placeholder - add public/trumpets/trumpet6.jpg
  videoSrc: "/videos/trumpet6.mp4",
  index: 6,
  title: { en: "The Sixth Trumpet", ar: "البوق السادس" },
  shortLabel: { en: "The Four Angels Loosed", ar: "الملائكة الأربعة المُطلَقون" },
  scriptureRef: { en: "Revelation 9:13-21", ar: "رؤيا ٩: ١٣-٢١" },
  scriptureIsTemporary: true,
  scriptureText: {
    en:
      "[TEMPORARY PLACEHOLDER — pending verified Coptic Reader text] " +
      "The sixth angel sounded... Loose the four angels which are bound in the great river Euphrates. " +
      "And the four angels were loosed, which were prepared for an hour, and a day, and a month, and " +
      "a year, for to slay the third part of men.",
    ar:
      "[نص مؤقت — بانتظار التحقق] والملاك السادس بوّق... حُلّ الملائكة الأربعة المقيدين عند النهر الكبير الفرات. " +
      "فانحلّ الملائكة الأربعة المُعَدّون لساعة ويوم وشهر وسنة، لكي يقتلوا ثلث الناس.",
  },
  narration: {
    en:
      "A command comes from the altar itself. Four angels, long bound at the great river Euphrates, " +
      "are released. Scripture describes a vast army set in motion — a judgment of far greater scale " +
      "than what has come before.",
    ar:
      "يأتي أمر من المذبح نفسه. تُطلق أربعة ملائكة كانت مقيدة منذ زمن طويل عند نهر الفرات الكبير. " +
      "يصف الكتاب المقدس جيشاً هائلاً يتحرك — دينونة أوسع نطاقاً بكثير مما سبق.",
  },
  cinematicSummary: {
    en: "At a great river, bound figures are released; the horizon fills with a vast advancing host under smoke and fire.",
    ar: "عند نهر عظيم، تُطلق كائنات كانت مقيدة، ويمتلئ الأفق بجيش هائل يتقدّم تحت دخان ونار.",
  },
  theme: { primary: "#7a2f1f", secondary: "#150a08", particle: "horsemen" },
  xpOnComplete: 250,
  introDialogue,
  closingDialogue,
  questions: [
    {
      id: "t6-q1",
      prompt: { en: "Where were the four angels bound?", ar: "أين كان الملائكة الأربعة مقيّدين؟" },
      options: [
        { id: "a", text: { en: "The great river Euphrates", ar: "النهر الكبير الفرات" } },
        { id: "b", text: { en: "Mount Sinai", ar: "جبل سيناء" } },
        { id: "c", text: { en: "The Red Sea", ar: "البحر الأحمر" } },
        { id: "d", text: { en: "The Jordan River", ar: "نهر الأردن" } },
      ],
      correctOptionId: "a",
      explanation: {
        en: "The four angels were bound at the great river Euphrates and were released to bring judgment upon a third of mankind.",
        ar: "كان الملائكة الأربعة مقيّدين عند النهر الكبير الفرات، وأُطلقوا لتنفيذ دينونة على ثلث البشر.",
      },
    },
  ],
};

export default trumpet6;
