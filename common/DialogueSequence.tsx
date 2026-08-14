import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DialogueLine } from "../../data/trumpets/types";
import { useLang } from "../../i18n/LanguageContext";
import DialogueTurn, { readingTimeMs } from "./DialogueTurn";

interface DialogueSequenceProps {
  lines: DialogueLine[];
  onDone: () => void;
}

/**
 * The opening three-character exchange (Girl, Angel, Holy Father) — character
 * explanation, never Scripture.
 *
 * CHANGED (dialogue redesign): same dedicated narrative-game presentation as
 * the trumpet lessons — one speaker at a time, circular portrait medallion,
 * a rounded panel that points at the speaker, alternating sides, tap to
 * advance or let the short automatic transition carry the scene.
 */
export default function DialogueSequence({ lines, onDone }: DialogueSequenceProps) {
  const { lang, t } = useLang();
  const [i, setI] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  if (lines.length === 0) {
    onDone();
    return null;
  }

  const line = lines[i];
  const isLast = i === lines.length - 1;

  const advance = () => {
    if (isLast) onDone();
    else setI((n) => n + 1);
  };

  useEffect(() => {
    if (!autoPlay || isLast) return;
    const id = window.setTimeout(advance, readingTimeMs(line.text[lang]));
    return () => window.clearTimeout(id);
  }, [i, autoPlay, lang]);

  return (
    <div style={{ userSelect: "none" }}>
      <div style={{ minHeight: 168, display: "flex", alignItems: "center" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.22 } }}
            transition={{ duration: 0.3 }}
            onClick={advance}
            role="button"
            tabIndex={0}
            aria-label={t("continueLabel")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") advance();
            }}
            style={{ cursor: "pointer", width: "100%" }}
          >
            <DialogueTurn line={line} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 16, alignItems: "center" }}>
        <motion.button
          onClick={advance}
          whileTap={{ scale: 0.97 }}
          style={{
            flex: 1,
            minHeight: 48,
            borderRadius: 999,
            border: `1px solid ${isLast ? "rgba(240,217,163,0.5)" : "var(--ink-600)"}`,
            background: isLast
              ? "linear-gradient(180deg, rgba(240,217,163,0.16), rgba(201,161,90,0.08))"
              : "var(--ink-800)",
            fontFamily: "var(--font-display)",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold-300)",
          }}
        >
          {isLast ? `${t("continueLabel")} →` : `${t("continueLabel")} · ${i + 1}/${lines.length}`}
        </motion.button>
        <button
          onClick={() => setAutoPlay((a) => !a)}
          aria-label="Auto"
          style={{
            minHeight: 48,
            padding: "0 14px",
            borderRadius: 999,
            border: "1px solid var(--ink-600)",
            background: "var(--ink-800)",
            fontFamily: "var(--font-display)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: autoPlay ? "var(--gold-300)" : "var(--mist-600)",
          }}
        >
          AUTO
        </button>
      </div>
    </div>
  );
}
