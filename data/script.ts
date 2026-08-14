import type { DialogueLine } from "./trumpets/types";

/**
 * SEVEN TRUMPETS — GAME-STYLE SCRIPT (three-character version).
 *
 * Transcribed from the approved script document: Holy Father (mentor),
 * Girl (curious learner) and Angel (biblical guide who introduces each
 * trumpet, points to the vision and gives the key to continue).
 *
 * These lines are character dialogue only — never Scripture. The verified
 * Coptic Reader / Coptic Orthodox passage is always shown separately by
 * ScripturePanel after the cinematic.
 *
 * TEMPORARY — the Arabic lines are a first-pass translation pending review
 * by a native speaker on the team.
 */

export interface TrumpetScript {
  intro: DialogueLine[];
  closing: DialogueLine[];
}

export const openingScript: DialogueLine[] = [
  { speaker: "girl", text: { en: "Where are we?", ar: "أين نحن؟" } },
  {
    speaker: "father",
    text: {
      en: "Before you are seven doors. Behind each one is a trumpet.",
      ar: "أمامك سبعة أبواب. وخلف كل باب بوق.",
    },
  },
  {
    speaker: "girl",
    text: { en: "And what happens when we open them?", ar: "وماذا يحدث عندما نفتحها؟" },
  },
  {
    speaker: "angel",
    text: {
      en: "You will witness visions described in Revelation. Listen carefully, and do not confuse what is written with what is only interpretation.",
      ar: "ستشهد رؤى وصفها سفر الرؤيا. أنصت بتمعّن، ولا تخلط بين ما هو مكتوب وما هو تفسير فقط.",
    },
  },
  { speaker: "girl", text: { en: "Seven trumpets...", ar: "سبعة أبواق..." } },
  {
    speaker: "father",
    text: {
      en: "Yes. And each one reveals something different.",
      ar: "نعم. وكل واحد منها يكشف شيئاً مختلفاً.",
    },
  },
  { speaker: "angel", text: { en: "The first door is waiting.", ar: "الباب الأول ينتظر." } },
  { speaker: "girl", text: { en: "Then let's begin.", ar: "إذن، فلنبدأ." } },
];

const trumpet1: TrumpetScript = {
  intro: [
    {
      speaker: "angel",
      text: { en: "You have reached the first trumpet.", ar: "لقد وصلت إلى البوق الأول." },
    },
    { speaker: "girl", text: { en: "What happens when it sounds?", ar: "ماذا يحدث عندما يُنفخ فيه؟" } },
    {
      speaker: "angel",
      text: {
        en: "Hail and fire mingled with blood are thrown upon the earth.",
        ar: "برد ونار مختلطان بدم يُلقيان على الأرض.",
      },
    },
    { speaker: "girl", text: { en: "And the earth?", ar: "والأرض؟" } },
    {
      speaker: "father",
      text: {
        en: "The passage describes a third of the earth being burned, along with a third of the trees and all green grass.",
        ar: "يصف المقطع احتراق ثلث الأرض، وثلث الأشجار، وكل عشب أخضر.",
      },
    },
    {
      speaker: "angel",
      cue: "watch",
      text: { en: "Now watch the vision.", ar: "الآن، شاهد الرؤيا." },
    },
  ],
  closing: [
    { speaker: "girl", text: { en: "That was only the first?", ar: "هل كان ذلك الأول فقط؟" } },
    {
      speaker: "angel",
      text: {
        en: "Yes. Read the passage before you move on.",
        ar: "نعم. اقرأ المقطع قبل أن تكمل.",
      },
    },
  ],
};

const trumpet2: TrumpetScript = {
  intro: [
    {
      speaker: "girl",
      text: { en: "What is different about this trumpet?", ar: "ما الذي يختلف في هذا البوق؟" },
    },
    {
      speaker: "angel",
      text: {
        en: "The second trumpet reveals something like a great mountain burning with fire, thrown into the sea.",
        ar: "البوق الثاني يكشف ما يشبه جبلاً عظيماً متأججاً بالنار، يُلقى في البحر.",
      },
    },
    {
      speaker: "girl",
      text: { en: "A mountain... falling into the sea?", ar: "جبل... يسقط في البحر؟" },
    },
    {
      speaker: "father",
      text: { en: "That is how the vision describes it.", ar: "هكذا تصفه الرؤيا." },
    },
    {
      speaker: "angel",
      text: {
        en: "And the sea is struck. A third of it becomes blood; a third of the living creatures in the sea die, and a third of the ships are destroyed.",
        ar: "ويُضرب البحر. فيصير ثلثه دماً، ويموت ثلث الخلائق الحية في البحر، ويُهلك ثلث السفن.",
      },
    },
    { speaker: "girl", cue: "watch", text: { en: "Show us.", ar: "أظهر لنا." } },
  ],
  closing: [
    {
      speaker: "girl",
      text: { en: "The scale of that is terrifying.", ar: "حجم ذلك مرعب." },
    },
    {
      speaker: "father",
      text: {
        en: "Look again at the Scripture. The details matter.",
        ar: "انظر مرة أخرى إلى النص الكتابي. التفاصيل مهمة.",
      },
    },
    {
      speaker: "angel",
      text: {
        en: "Do not add to the vision what is not written. Take the next key.",
        ar: "لا تُضف إلى الرؤيا ما ليس مكتوباً. خُذ المفتاح التالي.",
      },
    },
  ],
};

const trumpet3: TrumpetScript = {
  intro: [
    { speaker: "girl", text: { en: "Is anyone here?", ar: "هل هناك أحد؟" } },
    {
      speaker: "angel",
      text: { en: "You made it to the third trumpet.", ar: "لقد بلغت البوق الثالث." },
    },
    {
      speaker: "girl",
      text: { en: "What falls from heaven this time?", ar: "ما الذي يسقط من السماء هذه المرة؟" },
    },
    {
      speaker: "angel",
      text: {
        en: "A great star, burning like a torch, falls from heaven upon a third of the rivers and springs of waters.",
        ar: "نجم عظيم، متأجج كمشعل، يسقط من السماء على ثلث الأنهار وعلى ينابيع المياه.",
      },
    },
    { speaker: "girl", text: { en: "And its name?", ar: "وما اسمه؟" } },
    { speaker: "father", text: { en: "Wormwood.", ar: "الأفسنتين." } },
    {
      speaker: "angel",
      text: {
        en: "The waters become bitter, and many people die from the waters because they were made bitter.",
        ar: "تصير المياه مرّة، ويموت كثير من الناس من المياه لأنها صارت مرّة.",
      },
    },
    {
      speaker: "girl",
      cue: "watch",
      text: { en: "Then show us what John saw.", ar: "إذن أظهر لنا ما رآه يوحنا." },
    },
  ],
  closing: [
    {
      speaker: "father",
      text: { en: "Now read the passage itself.", ar: "الآن اقرأ المقطع نفسه." },
    },
    {
      speaker: "angel",
      text: {
        en: "Remember: the Scripture is the foundation. Interpretations must never be presented as if they were the verse itself.",
        ar: "تذكّر: الكتاب المقدس هو الأساس. ولا يجوز أبداً تقديم التفسير كأنه الآية نفسها.",
      },
    },
  ],
};

const trumpet4: TrumpetScript = {
  intro: [
    {
      speaker: "girl",
      text: { en: "What will the fourth trumpet reveal?", ar: "ماذا سيكشف البوق الرابع؟" },
    },
    { speaker: "angel", text: { en: "Look upward.", ar: "انظر إلى الأعلى." } },
    { speaker: "girl", text: { en: "The sun?", ar: "الشمس؟" } },
    {
      speaker: "angel",
      text: {
        en: "A third of the sun, a third of the moon, and a third of the stars are struck, so that a third of them is darkened.",
        ar: "يُضرب ثلث الشمس وثلث القمر وثلث النجوم، حتى يظلم ثلثها.",
      },
    },
    {
      speaker: "father",
      text: {
        en: "The passage says the day did not shine for a third of it, and likewise the night.",
        ar: "يقول المقطع إن النهار لم يُضئ ثلثه، وكذلك الليل.",
      },
    },
    {
      speaker: "girl",
      text: { en: "So even the heavens are affected.", ar: "إذن حتى السماوات تتأثر." },
    },
    { speaker: "angel", cue: "watch", text: { en: "Watch.", ar: "شاهد." } },
  ],
  closing: [
    { speaker: "girl", text: { en: "Everything is getting darker.", ar: "كل شيء يزداد ظلمة." } },
    {
      speaker: "father",
      text: { en: "Now return to the words of Scripture.", ar: "الآن ارجع إلى كلمات الكتاب المقدس." },
    },
    {
      speaker: "angel",
      text: { en: "Four doors opened. Three remain.", ar: "أربعة أبواب فُتحت. وثلاثة تبقى." },
    },
    { speaker: "girl", text: { en: "Then give us the key.", ar: "إذن أعطنا المفتاح." } },
  ],
};

/**
 * TRUMPETS V–VII — the approved script provides detailed material only
 * through the fourth trumpet, so these beats deliberately add no new
 * event descriptions. The Angel introduces the door, the Holy Father
 * points back to the verified passage, and the cinematic follows.
 */
const continuation = (
  index: number,
  ordinalEn: string,
  ordinalAr: string
): TrumpetScript => ({
  intro: [
    {
      speaker: "angel",
      text: {
        en: `You have reached the ${ordinalEn} trumpet.`,
        ar: `لقد وصلت إلى البوق ${ordinalAr}.`,
      },
    },
    {
      speaker: "girl",
      text: { en: "And you will guide us through it?", ar: "وهل سترشدنا فيه؟" },
    },
    {
      speaker: "angel",
      text: {
        en: "I can guide the journey. But the words must remain faithful to what is actually written.",
        ar: "أستطيع أن أرشد الرحلة. لكن الكلمات يجب أن تبقى أمينة لما هو مكتوب فعلاً.",
      },
    },
    {
      speaker: "father",
      text: {
        en: "So let the vision speak first, then the passage itself.",
        ar: "فلتتكلم الرؤيا أولاً، ثم المقطع نفسه.",
      },
    },
    { speaker: "angel", cue: "watch", text: { en: "Now watch.", ar: "الآن، شاهد." } },
  ],
  closing: [
    {
      speaker: "girl",
      text: { en: `Door ${index}. What remains?`, ar: `الباب ${index}. وماذا يبقى؟` },
    },
    {
      speaker: "father",
      text: {
        en: "Read the verified passage before you move on.",
        ar: "اقرأ المقطع الموثّق قبل أن تكمل.",
      },
    },
  ],
});

export const trumpetScripts: Record<number, TrumpetScript> = {
  1: trumpet1,
  2: trumpet2,
  3: trumpet3,
  4: trumpet4,
  5: continuation(5, "fifth", "الخامس"),
  6: continuation(6, "sixth", "السادس"),
  7: continuation(7, "seventh", "السابع"),
};

export const speakerName = {
  father: { en: "The Holy Father", ar: "الأب الكاهن" },
  girl: { en: "The Girl", ar: "الفتاة" },
  angel: { en: "The Angel", ar: "الملاك" },
} as const;

/** Default composition: Girl left, Angel right, Holy Father left. */
export const defaultSide = {
  girl: "left",
  angel: "right",
  father: "left",
} as const;
